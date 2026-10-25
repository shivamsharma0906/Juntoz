import PageMeta from '../components/PageMeta';
import { OnboardingShell } from '../features/onboarding';

export default function OnboardingPage() {
  return (
    <>
      <PageMeta
        title="Client Onboarding Concierge — Juntoz Digital Growth Agency"
        description="Complete your tailored onboarding intake for Google Ads, Meta Ads, or Google Merchant Center. Bespoke digital growth systems for beauty clinics, salons, and bridal makeup artists."
        path="/onboarding"
      />
      <OnboardingShell />
    </>
  );
}
