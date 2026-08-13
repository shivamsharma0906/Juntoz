import About from '../components/About';
import SimpleAbout from '../components/SimpleAbout';
import TeamTeaser from '../components/TeamTeaser';
import BusinessCard from '../components/BusinessCard';
import PageMeta from '../components/PageMeta';

export default function AboutPage() {
  return (
    <div className="pt-16 sm:pt-20 md:pt-24 pb-12 bg-background min-h-screen">
      <PageMeta
        title="About Juntoz — The Beauty Growth Marketing Agency"
        description="Meet the team behind India's premier marketing agency for makeup artists and salons. We build high-conversion booking engines that command premium pricing."
        path="/about"
      />
      <SimpleAbout />
      <TeamTeaser />
      <About />
      <BusinessCard />
    </div>
  );
}
