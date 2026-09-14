import Results from '../components/Results';
import BusinessCard from '../components/BusinessCard';
import PageMeta from '../components/PageMeta';

export default function ResultsPage() {
  return (
    <div className="pt-24 md:pt-32 bg-[#F7F6F2] min-h-screen">
      <PageMeta
        title="Proven Growth Results & Client Reviews | Juntoz"
        description="Real numbers, real growth. See how we help salons and makeup academies double bookings, lower customer acquisition costs, and dominate local search."
        path="/results"
      />
      <Results />
      <BusinessCard />
    </div>
  );
}
