import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import TeamMemberProfile from '../components/TeamMemberProfile';
import founderImg from '../components/Founder.webp';
import { COMPANY_STATS } from '../data/clients';

export default function FounderPage() {
  const bioParagraphs = [
    <p key="1">
      Sujal Mehta is the Founder &amp; CEO of Juntoz, a digital marketing agency
      helping businesses grow through strategy, creativity, and performance-driven
      marketing.
    </p>,
    <p key="2">
      An EXTC Engineering graduate from Sardar Patel Institute of Technology (SPIT),
      Andheri, Sujal's passion for marketing began during his college days. He went
      on to build a strong corporate career, spending{' '}
      <span className="text-white font-bold">5 years at Tata Consultancy Services (TCS)</span>{' '}
      and <span className="text-white font-bold">4 years at Nokia</span>, where he
      gained valuable experience in leadership, operations, and business processes.
    </p>,
    <p key="3">
      In 2021, he founded Juntoz with a vision to help businesses grow through{' '}
      <span
        className="font-bold px-2 py-0.5 rounded"
        style={{ color: '#00F5D4', background: 'rgba(0,245,212,0.08)' }}
      >
        digital marketing, branding, content creation, websites, SEO, Meta Ads,
        Google Ads, and AI-powered solutions
      </span>
      .
    </p>,
    <p key="4">
      Today, Juntoz partners with startups, entrepreneurs, and established brands
      to create meaningful digital experiences and deliver measurable business growth.
    </p>,
  ];

  return (
    <div className="pt-16 sm:pt-20 md:pt-24 pb-12 bg-background min-h-screen">
      <PageMeta
        title="Sujal Mehta — Founder & CEO | Juntoz"
        description="Meet Sujal Mehta, Founder & CEO of Juntoz. EXTC Engineer with 9 years of corporate experience at TCS & Nokia building digital growth strategies for businesses."
        path="/founder"
      />
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl pt-4">
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-body font-semibold tracking-wider text-white/60 hover:text-[#00F5D4] transition-colors duration-200 group"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span> Back to About
        </Link>
      </div>

      <TeamMemberProfile
        name="Sujal Mehta"
        role="Founder & CEO, Juntoz"
        badgeLabel="Founder & Growth Strategist"
        photoSrc={founderImg}
        photoAlt="Sujal Mehta — Founder & Strategist, Juntoz"
        bioParagraphs={bioParagraphs}
        stats={[
          { value: COMPANY_STATS.clientsScaled, label: 'Clients Scaled' },
          { value: COMPANY_STATS.yearsActive, label: 'Years Experience' },
        ]}
        achievements={[
          { icon: 'zap', text: '3× Avg. Revenue Growth' },
          { icon: 'rocket', text: '90-Day Results' },
        ]}
        vision={{
          label: 'Vision',
          quote:
            'To build Juntoz into a globally recognized MNC that empowers businesses worldwide with innovative digital marketing and technology solutions.',
          highlight: "We don't just market brands — we build growth stories.",
        }}
        whatsappUrl="https://wa.me/919004001800?text=Hi%20Juntoz!%20I%27d%20like%20a%20custom%20growth%20plan%20for%20my%20business."
        sectionId="founder"
        sectionLabel="The Visionary Behind Juntoz"
        subheading="Meet the Founder"
        heading={
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tighter leading-[0.9]">
            An Agency That Actually{' '}
            <span
              style={{
                background: 'linear-gradient(120deg, #00F5D4, #7B2FFF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 24px rgba(0,245,212,0.35))',
              }}
            >
              Gets
            </span>{' '}
            Growth.
          </h2>
        }
        bioHeading="About Sujal Mehta"
        ctaText="Talk to Sujal Directly"
      />
    </div>
  );
}
