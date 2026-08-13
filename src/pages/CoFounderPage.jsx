import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import TeamMemberProfile from '../components/TeamMemberProfile';
// {/* TODO: photo not yet provided, use a neutral placeholder avatar/blank state until real photo is added */}
import coFounderImg from '../components/CoFounder.webp';
import { COMPANY_STATS } from '../data/clients';

export default function CoFounderPage() {
  const bioParagraphs = [
    <p key="1">
      Saloni Mehta is a key part of Juntoz, a digital marketing agency focused on helping businesses build stronger brands, connect with the right audiences, and achieve measurable growth through digital marketing.
    </p>,
    <p key="2">
      With a B.Com degree and several years of corporate experience, Saloni brings a strong combination of business understanding, operational expertise, leadership, and client management to her role at Juntoz.
    </p>,
    <p key="3">
      Before becoming part of the entrepreneurial journey at Juntoz, Saloni spent 4 years with Showell Home Appliances and 3 years with Allied Safety India Pvt. Ltd. — experience that shaped her foundation in business operations, team coordination, client relationships, and structured business processes.
    </p>,
    <p key="4">
      At Juntoz, Saloni manages the business ecosystem and ensures clients receive a smooth, professional experience — combining practical business thinking with a clear understanding of what businesses need to grow in today's digital-first environment.
    </p>,
  ];

  const extraSections = [
    {
      title: 'From Corporate Experience to Entrepreneurship',
      content:
        'Moving from a structured corporate environment to an entrepreneurial setup required people management, process-building, communication, and constant adaptation; her corporate background brought structure and professionalism to how Juntoz works with clients and internal teams.',
    },
    {
      title: 'Looking Ahead',
      content:
        'For Saloni, the journey is about helping businesses understand the digital landscape, build a strong identity, and create marketing systems for long-term growth.',
    },
  ];

  return (
    <div className="pt-16 sm:pt-20 md:pt-24 pb-12 bg-background min-h-screen">
      <PageMeta
        title="Saloni Mehta — Co-Founder | Juntoz"
        description="Meet Saloni Mehta, Co-Founder & Head of Operations & Client Success at Juntoz. Bringing operational expertise, leadership, and client management experience."
        path="/co-founder"
      />
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl pt-4">
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-body font-semibold tracking-wider text-white/60 hover:text-[#00F5D4] transition-colors duration-200 group"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span> Back to About
        </Link>
      </div>

      {/* TODO: photo not yet provided, use a neutral placeholder avatar/blank state until real photo is added */}
      <TeamMemberProfile
        name="Saloni Mehta"
        role="Co-Founder, Juntoz"
        badgeLabel="Co-Founder & Head of Operations & Client Success"
        photoSrc={coFounderImg}
        photoAlt="Saloni Mehta — Co-Founder, Juntoz"
        bioParagraphs={bioParagraphs}
        stats={[
          // TODO: confirm exact figure (4 years Showell + 3 years Allied Safety)
          { value: 7, label: 'Years Experience' },
          { value: COMPANY_STATS.clientsScaled, label: 'Clients Scaled' },
        ]}
        achievements={[
          { icon: 'zap', text: 'Operations & Client Success' },
          { icon: 'rocket', text: 'People-First Leadership' },
        ]}
        vision={{
          label: 'Vision',
          quote:
            'Strong businesses are built when strategy, people, creativity, and execution work together.',
        }}
        whatsappUrl="https://wa.me/918767957561?text=Hi%20Saloni!%20I%27d%20like%20to%20connect%20about%20working%20with%20Juntoz."
        sectionId="co-founder"
        sectionLabel="Leadership & Operations"
        subheading="Meet the Co-Founder"
        heading={
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tighter leading-[0.9]">
            Operational Excellence{' '}
            <span
              style={{
                background: 'linear-gradient(120deg, #00F5D4, #7B2FFF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 24px rgba(0,245,212,0.35))',
              }}
            >
              Drives
            </span>{' '}
            Growth.
          </h2>
        }
        bioHeading="About Saloni Mehta"
        extraSections={extraSections}
        ctaText="Talk to Saloni Directly"
      />
    </div>
  );
}
