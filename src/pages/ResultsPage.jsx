import Results from '../components/Results';
import PageMeta from '../components/PageMeta';

export default function ResultsPage() {
  return (
    <div className="pt-20 md:pt-36 bg-background min-h-screen">
      <PageMeta
        title="Proven Growth Results & Client Reviews | Juntoz"
        description="Real numbers, real growth. See how we help salons and makeup academies double bookings, lower customer acquisition costs, and dominate local search."
        path="/results"
      />
      <Results />
    </div>
  );
}
