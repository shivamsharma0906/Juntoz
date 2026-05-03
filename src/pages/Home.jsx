import Hero from '../components/Hero';

import ProblemSolution from '../components/ProblemSolution';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />        {/* 🔥 Move this UP */}
      <ProblemSolution />
      <HowItWorks />
    </>
  );
}
