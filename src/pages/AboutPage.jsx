import About from '../components/About';
import AboutUs from '../components/AboutUs';
import Founder from '../components/Founder';
import TeamSection from '../components/TeamSection';
import BusinessCard from '../components/BusinessCard';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutUs />
      <About />
      <Founder />
      <TeamSection />
      <BusinessCard />
    </div>
  );
}
