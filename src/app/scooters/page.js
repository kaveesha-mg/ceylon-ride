import Navbar from '../../components/Navbar';
import VehiclesSection from '../../components/VehiclesSection';
import styles from './scooters.module.css';

export default function ScootersPage() {
  return (
    <main className={styles.pageContainer}>
      <Navbar />
      <VehiclesSection />
    </main>
  );
}
