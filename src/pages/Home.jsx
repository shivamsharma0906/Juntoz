import Hero from '../components/Hero';

import BenefitsSection from '../components/BenefitsSection';
import AboutUs from '../components/AboutUs';
import AboutImpact from '../components/AboutImpact';
import InnovationSection from '../components/InnovationSection';
import Testimonials from '../components/Testimonials';
import ProblemSolution from '../components/ProblemSolution';
import NumbersSection from '../components/NumbersSection';
import HowItWorks from '../components/HowItWorks';
import FAQSection from '../components/FAQSection';
import GoogleMap from '../components/GoogleMap';

export default function Home() {
  return (
    <>
      <Hero />
      <BenefitsSection />
      <AboutUs />
      <AboutImpact />
      <InnovationSection />
      <Testimonials />
      <ProblemSolution />
      <NumbersSection />
      <HowItWorks />
      <FAQSection />
      <GoogleMap />
    </>
  );
}
