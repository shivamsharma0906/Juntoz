import About from '../components/About';
import AboutUs from '../components/AboutUs';
import Founder from '../components/Founder';
import BusinessCard from '../components/BusinessCard';
import PageMeta from '../components/PageMeta';

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24 pb-12 bg-background min-h-screen">
      <PageMeta
        title="About Juntoz — Your Integrated Digital Growth Team"
        description="Learn about Juntoz, our mission, leadership, and how we help businesses scale with data-driven marketing systems."
        path="/about"
      />

      <AboutUs />
      <About />
      <Founder />
      <BusinessCard />
    </div>
  );
}
