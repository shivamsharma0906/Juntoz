import { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import BusinessCard from './components/BusinessCard';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  // Smooth scroll
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <TrustStrip />
      <ProblemSolution />
      <Services />
      <Portfolio />
      <Results />
      <Testimonials />
      <BusinessCard />
      <About />
      <Footer />
    </div>
  );
}

export default App;
