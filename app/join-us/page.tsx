import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import { MemberTestimonials } from "@/components/ui/unique-testimonial";

/* ─── Hero ───────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section
      className="pt-32 pb-20 md:pt-44 md:pb-28"
      style={{ backgroundColor: "var(--purple-deep)" }}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <FadeIn>
          <p className="eyebrow mb-6" style={{ color: "var(--purple-light)" }}>
            Join Our Team
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h1
            className="mb-6"
            style={{
              fontWeight: 400,
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--paper)",
            }}
          >
            Grow as a professional. Spark change in D.C.
          </h1>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p
            style={{
              fontSize: "var(--text-md)",
              lineHeight: 1.7,
              color: "rgba(233,234,244,0.78)",
              maxWidth: "58ch",
              margin: "0 auto 2.5rem",
              fontFamily: "var(--font-public-sans)",
            }}
          >
            DCivitas seeks out creative, motivated, socially-minded Georgetown
            undergraduates of all interests and from all fields of study.
            Regardless of your background, we&rsquo;re confident you&rsquo;ll
            find a community within DCivitas. We encourage you to attend our
            recruiting events. We&rsquo;re excited to meet you.
          </p>
        </FadeIn>
        <FadeIn delay={0.24}>
          <p
            style={{
              fontSize: "var(--text-sm)",
              color: "rgba(233,234,244,0.5)",
              fontStyle: "italic",
              fontFamily: "var(--font-public-sans)",
            }}
          >
            Applications open at the beginning of each semester. Check back in Fall 2026.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Teams ──────────────────────────────────────────────────────── */

const teams = [
  {
    name: "Consulting",
    badge: "Written Application & Interview",
    points: [
      "Teams of 4-6 Consultants under a Project Manager and a Senior Consultant",
      "Focus on one nonprofit from strategy through implementation and feedback",
      "Consultants may request placement with a specific nonprofit partner",
    ],
  },
  {
    name: "Marketing",
    badge: "Written Application",
    points: [
      "Small team in charge of crafting DCivitas's message and identity",
      "Projects include social media strategy, website design, and professional video storyboarding",
      "Craft impact stories that communicate our work to the broader community",
    ],
  },
  {
    name: "Research & Development",
    badge: "Open Membership",
    points: [
      "Plan and execute organization-wide events including professional development and community service",
      "Identify, reach out, and form relationships with potential nonprofit partners for the coming academic year",
    ],
  },
];

function Teams() {
  return (
    <section style={{ backgroundColor: "var(--paper)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <FadeIn>
          <p className="eyebrow mb-4" style={{ color: "var(--purple-mid)" }}>
            Our Teams
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2
            className="mb-14"
            style={{
              fontWeight: 400,
              fontSize: "var(--text-xl)",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              color: "var(--ink)",
              maxWidth: "40ch",
            }}
          >
            Three ways to make an impact at DCivitas.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teams.map((team, i) => (
            <FadeIn key={team.name} delay={0.08 + i * 0.1}>
              <TeamCard {...team} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  name,
  badge,
  points,
}: {
  name: string;
  badge: string;
  points: string[];
}) {
  return (
    <div
      className="p-8 h-full flex flex-col"
      style={{
        backgroundColor: "var(--paper)",
        border: "1px solid rgba(102,96,161,0.18)",
      }}
    >
      <div
        className="inline-block mb-5 px-3 py-1 rounded-full"
        style={{
          backgroundColor: "var(--purple-pale)",
          color: "var(--purple-dark)",
          fontSize: "var(--text-xs)",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          fontFamily: "var(--font-public-sans)",
          width: "fit-content",
        }}
      >
        {badge}
      </div>
      <h3
        className="mb-5"
        style={{
          fontWeight: 400,
          fontSize: "var(--text-lg)",
          lineHeight: 1.25,
          color: "var(--ink)",
        }}
      >
        {name}
      </h3>
      <ul className="space-y-3 flex-1">
        {points.map((point) => (
          <li
            key={point}
            className="flex gap-3"
            style={{
              fontSize: "var(--text-sm)",
              lineHeight: 1.65,
              color: "rgba(44,47,61,0.75)",
              fontFamily: "var(--font-public-sans)",
            }}
          >
            <span
              className="shrink-0 mt-[0.4rem] w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "var(--purple-mid)" }}
            />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Where We Go ────────────────────────────────────────────────── */

const row1Logos = [
  { src: "/logos/wherewego/mckinsey.png",    alt: "McKinsey & Company" },
  { src: "/logos/wherewego/bcg-new.png",     alt: "BCG" },
  { src: "/logos/wherewego/bain.png",        alt: "Bain & Company" },
  { src: "/logos/wherewego/deloitte.png",    alt: "Deloitte" },
  { src: "/logos/wherewego/accenture.png",   alt: "Accenture" },
  { src: "/logos/wherewego/ey.png",          alt: "EY" },
  { src: "/logos/wherewego/pwc.png",         alt: "PwC" },
  { src: "/logos/wherewego/kpmg.png",        alt: "KPMG" },
  { src: "/logos/wherewego/kearney.png",     alt: "Kearney" },
  { src: "/logos/wherewego/altman-solon.png", alt: "Altman Solon" },
  { src: "/logos/wherewego/jefferies.png",   alt: "Jefferies" },
  { src: "/logos/wherewego/veritas.png",     alt: "Veritas" },
  { src: "/logos/wherewego/pfm.png",         alt: "PFM" },
];

const row2Logos = [
  { src: "/logos/wherewego/gs.png",          alt: "Goldman Sachs" },
  { src: "/logos/wherewego/jpm.png",         alt: "JPMorgan" },
  { src: "/logos/wherewego/bofa.png",        alt: "Bank of America" },
  { src: "/logos/wherewego/blackrock.png",   alt: "BlackRock" },
  { src: "/logos/wherewego/mastercard.png",  alt: "Mastercard" },
  { src: "/logos/wherewego/bmo.png",         alt: "BMO" },
  { src: "/logos/wherewego/fidelity.png",    alt: "Fidelity" },
  { src: "/logos/wherewego/fed.png",         alt: "Federal Reserve" },
  { src: "/logos/wherewego/fbi.png",         alt: "FBI" },
  { src: "/logos/wherewego/worldbank.png",   alt: "World Bank" },
  { src: "/logos/wherewego/fulbright.png",   alt: "Fulbright" },
  { src: "/logos/wherewego/aspen.webp",      alt: "Aspen Institute" },
  { src: "/logos/wherewego/tiktok.png",      alt: "TikTok" },
  { src: "/logos/wherewego/disney.png",      alt: "Disney+" },
  { src: "/logos/wherewego/nyp.webp",        alt: "New York-Presbyterian" },
];

const largeLogos = new Set(["Altman Solon", "Veritas", "BMO"]);

function LogoTile({ src, alt }: { src: string; alt: string }) {
  const large = largeLogos.has(alt);
  return (
    <div
      className="flex items-center justify-center shrink-0"
      style={{
        width: "140px",
        height: "64px",
        backgroundColor: "rgba(255,255,255,0.07)",
        borderRadius: "4px",
        padding: "12px 16px",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={100}
        height={40}
        className={`object-contain w-auto ${large ? "max-h-full" : "max-h-9"}`}
        style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
      />
    </div>
  );
}

function WhereWeGo() {
  const doubled1 = [...row1Logos, ...row1Logos];
  const doubled2 = [...row2Logos, ...row2Logos];

  return (
    <section
      id="where-we-go"
      style={{ backgroundColor: "var(--purple-dark)" }}
      className="overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-6">
        <FadeIn>
          <p className="eyebrow mb-3" style={{ color: "var(--purple-light)" }}>
            Where Our Members Go
          </p>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h2
            className="mb-10"
            style={{
              fontWeight: 400,
              fontSize: "var(--text-xl)",
              lineHeight: 1.25,
              color: "var(--paper)",
              maxWidth: "40ch",
            }}
          >
            DCivitas alumni go on to lead at the world&rsquo;s top firms.
          </h2>
        </FadeIn>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative pb-4">
        <div
          className="flex gap-6 animate-[marquee_35s_linear_infinite]"
          style={{ width: "max-content" }}
        >
          {doubled1.map((logo, i) => (
            <LogoTile key={i} {...logo} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative pb-16 md:pb-24 pt-4">
        <div
          className="flex gap-6 animate-[marquee-reverse_40s_linear_infinite]"
          style={{ width: "max-content" }}
        >
          {doubled2.map((logo, i) => (
            <LogoTile key={i} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ───────────────────────────────────────────────── */

function Testimonials() {
  return (
    <section style={{ backgroundColor: "var(--paper)" }}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <FadeIn>
          <p className="eyebrow mb-4 text-center" style={{ color: "var(--purple-mid)" }}>
            From Our Members
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2
            className="mb-14 text-center"
            style={{
              fontWeight: 400,
              fontSize: "var(--text-xl)",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              color: "var(--ink)",
            }}
          >
            In their own words.
          </h2>
        </FadeIn>

        <FadeIn delay={0.16}>
          <MemberTestimonials />
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── CTA ────────────────────────────────────────────────────────── */

function JoinCTA() {
  return (
    <section style={{ backgroundColor: "var(--purple-deep)" }}>
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-28 text-center">
        <FadeIn>
          <h2
            className="mb-5"
            style={{
              fontWeight: 400,
              fontSize: "var(--text-xl)",
              lineHeight: 1.25,
              color: "var(--paper)",
            }}
          >
            Ready to make an impact?
          </h2>
        </FadeIn>
        <FadeIn delay={0.08}>
          <p
            className="mb-10"
            style={{
              fontSize: "var(--text-base)",
              lineHeight: 1.7,
              color: "rgba(233,234,244,0.7)",
              fontFamily: "var(--font-public-sans)",
            }}
          >
            Applications open each semester. Follow us on social media or check
            back here for updates on when the next cycle opens.
          </p>
        </FadeIn>
        <FadeIn delay={0.16}>
          <Button href="https://www.instagram.com/dcivitas" variant="outline">
            Follow us on Instagram
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function JoinUs() {
  return (
    <>
      <Hero />
      <Teams />
      <WhereWeGo />
      <Testimonials />
      <JoinCTA />
    </>
  );
}
