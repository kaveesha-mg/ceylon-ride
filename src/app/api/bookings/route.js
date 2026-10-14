import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    // Handle File Upload
    const file = formData.get('document');
    let documentUrl = null;
    let localFilePath = null;
    
    if (file && file !== 'null') {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      // Save file locally in public/uploads
      const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '_')}`;
      const uploadDir = path.join(process.cwd(), 'public/uploads');
      
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      
      localFilePath = path.join(uploadDir, fileName);
      fs.writeFileSync(localFilePath, buffer);
      
      documentUrl = `/uploads/${fileName}`;
    }

    const firstName = formData.get('firstName') || '';
    const lastName = formData.get('lastName') || '';
    const fullName = `${firstName} ${lastName}`.trim() || formData.get('name') || 'Guest';
    const phone = formData.get('phone') || null;
    const gender = formData.get('gender') || null;
    const bikeModel = formData.get('bikeModel') || 'Honda Dio 110';
    const rideType = formData.get('rideType') || null;
    const dropoffLocation = formData.get('dropoffLocation') || null;
    const deliveryLocation = formData.get('deliveryLocation') || formData.get('hotel') || null;
    const notes = formData.get('notes') || null;

    // Create the booking in SQLite database
    const booking = await prisma.booking.create({
      data: {
        name: fullName,
        email: formData.get('email'),
        phone: phone,
        gender: gender,
        whatsapp: formData.get('whatsapp'),
        country: formData.get('country'),
        pickupDate: formData.get('pickupDate'),
        dropoffDate: formData.get('dropoffDate'),
        deliveryMethod: formData.get('deliveryMethod'),
        deliveryLocation: deliveryLocation,
        hotel: deliveryLocation,
        dropoffLocation: dropoffLocation,
        bikeModel: bikeModel,
        rideType: rideType,
        notes: notes,
        days: parseInt(formData.get('days'), 10),
        totalPrice: parseFloat(formData.get('totalPrice')),
        totalLKR: parseFloat(formData.get('totalLKR')),
        bikeId: formData.get('bikeId') || 'dio-110',
        documentUrl: documentUrl
      }
    });

    // Setup Email Transporter (Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email Content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'Gaveengunasekar95@gmail.com',
      subject: `🏍️ New Scooter Reservation from ${booking.name}`,
      html: `
        <h2>New Scooter Reservation Received!</h2>
        <p><strong>Customer Name:</strong> ${booking.name}</p>
        <p><strong>First Name:</strong> ${firstName || '-'}</p>
        <p><strong>Last Name:</strong> ${lastName || '-'}</p>
        <p><strong>Gender:</strong> ${gender || '-'}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Phone Number:</strong> ${phone || '-'}</p>
        <p><strong>WhatsApp:</strong> ${booking.whatsapp}</p>
        <p><strong>Country:</strong> ${booking.country}</p>
        <hr/>
        <p><strong>Bike Model:</strong> ${bikeModel}</p>
        <p><strong>Ride Type:</strong> ${rideType || '-'}</p>
        <p><strong>Pick-up Date:</strong> ${booking.pickupDate}</p>
        <p><strong>Drop-off Date:</strong> ${booking.dropoffDate}</p>
        <p><strong>Drop-off Location:</strong> ${dropoffLocation || '-'}</p>
        <p><strong>Duration:</strong> ${booking.days} Days</p>
        <p><strong>Delivery Method:</strong> ${booking.deliveryMethod === 'hotel' ? 'Deliver to my Location' : 'Branch Pickup'}</p>
        ${deliveryLocation ? `<p><strong>Delivery Location / Address:</strong> ${deliveryLocation}</p>` : ''}
        ${notes ? `<p><strong>Additional Notes:</strong> ${notes}</p>` : ''}
        <hr/>
        <p><strong>Total Amount:</strong> $${booking.totalPrice} (approx ${booking.totalLKR} LKR)</p>
        <p><strong>Document Uploaded:</strong> ${documentUrl ? 'Yes (See attachments)' : 'No'}</p>
      `,
      attachments: localFilePath ? [
        {
          filename: file.name,
          path: localFilePath
        }
      ] : []
    };

    // Send Email
    transporter.sendMail(mailOptions).catch(err => console.error("Email failed:", err));

    return NextResponse.json({ success: true, booking }, { status: 201 });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}
