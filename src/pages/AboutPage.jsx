import About from '../components/About';
import SimpleAbout from '../components/SimpleAbout';
import TeamTeaser from '../components/TeamTeaser';
import BusinessCard from '../components/BusinessCard';
import PageMeta from '../components/PageMeta';

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-[#F7F6F2] min-h-screen text-[#111111]">
      <PageMeta
        title="About Juntoz — Growth-Focused Digital Marketing Agency"
        description="Meet the strategists, performance marketers, and engineers behind Juntoz. We help ambitious businesses scale through integrated digital growth systems."
        path="/about"
      />
      <SimpleAbout />
      <TeamTeaser />
      <About />
      <BusinessCard />
    </div>
  );
}
