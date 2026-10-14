"use client";
import { useState } from 'react';
import styles from './FaqSection.module.css';

const faqs = [
  {
    question: "Do I need to leave a security deposit?",
    answer: "Yes. A refundable security deposit of LKR 10,000 or USD 50 is required. The deposit will be 100% refunded once you return the bike in acceptable condition."
  },
  {
    question: "Do I need to book or reserve in advance?",
    answer: "Yes, we recommend booking in advance to ensure availability, especially during peak seasons."
  },
  {
    question: "What are the driving licence requirements?",
    answer: "You must have a valid driving license from your home country and an International Driving Permit (IDP) or a Sri Lankan temporary driving permit."
  },
  {
    question: "How do we contact you when we arrive in Sri Lanka? What about mobile internet?",
    answer: "You can contact us via WhatsApp or phone. We also recommend getting a local SIM card (Dialog or Mobitel) at the airport for mobile internet."
  },
  {
    question: "Where is the pick-up and drop-off location?",
    answer: "We offer free hotel delivery and pick-up in Galle, Unawatuna, Thalpe, Habaraduwa, and Ahangama areas."
  },
  {
    question: "Can pick-up and drop-off be arranged at locations other than your office?",
    answer: "Yes, we can arrange pick-up and drop-off at your hotel or another convenient location along the South Coast."
  },
  {
    question: "How can we get to your office?",
    answer: "We offer free delivery to your hotel, so you don't necessarily need to come to our office. However, if you prefer, we are located in the Galle/Unawatuna area and can share our exact location via WhatsApp."
  },
  {
    question: "Can pick-up and drop-off be arranged outside working hours?",
    answer: "Yes, we can accommodate out-of-hours pick-up or drop-off with prior notice."
  },
  {
    question: "Can you help transfer the bike while we take a train journey?",
    answer: "We can help coordinate transfers or pick up the bike at a train station for an additional fee depending on the distance."
  },
  {
    question: "Are your motorbikes and scooters reliable for long-distance travel?",
    answer: "Absolutely! Our fleet is well-maintained and regularly serviced to ensure reliability for long-distance travel across Sri Lanka."
  },
  {
    question: "What happens if my motorbike or scooter gets stolen?",
    answer: "In the unlikely event of theft, please contact us and the local police immediately. You will be responsible for the cost as per the rental agreement unless covered by specific insurance."
  },
  {
    question: "What does your insurance cover?",
    answer: "Basic third-party insurance is included with all rentals. Comprehensive insurance options might be available upon request."
  },
  {
    question: "What happens if my accessories or personal belongings are stolen?",
    answer: "We do not cover the loss of personal belongings or accessories like helmets. Please ensure you secure your belongings when leaving the bike."
  },
  {
    question: "Do I get a refund if I cancel my reservation?",
    answer: "Cancellations made well in advance may be eligible for a full or partial refund. Please refer to our terms and conditions for the exact cancellation policy."
  },
  {
    question: "Do I get a refund for unused fuel when returning the bike?",
    answer: "No, we do not provide refunds for unused fuel. We recommend returning the bike with roughly the same amount of fuel as when you received it."
  },
  {
    question: "Do you accept credit or debit card payments?",
    answer: "Yes, we accept major credit and debit cards, as well as cash payments in LKR or USD."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <>
      <section id="faqs" className={styles.faqSection}>
        <div className="container">
          <div className={styles.header}>
            <span className={styles.subtitle}>— FREQUENTLY ASKED QUESTIONS —</span>
            <h2 className={styles.title}>Everything You Need to Know</h2>
            <p className={styles.description}>
              Find clear answers to the most common questions about renting a motorbike or scooter in Sri Lanka. From licences and insurance to pickup locations and payments, everything you need to plan your ride is right here.
            </p>
          </div>
          
          <div className={styles.faqList}>
            {displayedFaqs.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}
              >
                <div 
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                >
                  <h3>{faq.question}</h3>
                  <span className={styles.icon}>
                    {openIndex === index ? (
                      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    )}
                  </span>
                </div>
                <div 
                  className={styles.faqAnswer}
                  style={{ maxHeight: openIndex === index ? '200px' : '0' }}
                >
                  <div className={styles.answerContent}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.buttonContainer}>
            <button 
              className={styles.showMoreBtn}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
