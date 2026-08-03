import Portfolio from '../components/Portfolio';
import CaseStudies from '../components/CaseStudies';

export default function PortfolioPage() {
  return (
    <div className="pt-28 md:pt-36 bg-background min-h-screen">
      <CaseStudies />
      <Portfolio />
    </div>
  );
}
