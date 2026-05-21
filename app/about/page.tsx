import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

/* ─── Hero ───────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <Image
        src="/images/peoplephotos/groupphoto_abouthero.jpg"
        alt="DCivitas team group photo"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(24,30,72,0.62)" }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center w-full py-32 md:py-44">
        <FadeIn>
          <p className="eyebrow mb-6" style={{ color: "var(--purple-light)" }}>
            About DCivitas
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
            Students who show up for their city.
          </h1>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Mission & Vision ───────────────────────────────────────────── */

function MissionVision() {
  return (
    <section id="mission" style={{ backgroundColor: "var(--purple-dark)", scrollMarginTop: "80px" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <FadeIn delay={0}>
            <div>
              <p className="eyebrow mb-4" style={{ color: "var(--purple-light)" }}>
                Our Mission
              </p>
              <p
                style={{
                  fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
                  fontWeight: 400,
                  fontSize: "var(--text-lg)",
                  lineHeight: 1.6,
                  color: "var(--paper)",
                }}
              >
                To strengthen the Washington D.C. community by providing
                innovative, socially minded business solutions to local
                nonprofit partners.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <p className="eyebrow mb-4" style={{ color: "var(--purple-light)" }}>
                Our Vision
              </p>
              <p
                style={{
                  fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
                  fontWeight: 400,
                  fontSize: "var(--text-lg)",
                  lineHeight: 1.6,
                  color: "var(--paper)",
                }}
              >
                A more equitable, inclusive, and just capital.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── Who We Are ─────────────────────────────────────────────────── */

function WhoWeAre() {
  return (
    <section style={{ backgroundColor: "var(--paper)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <FadeIn delay={0}>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/peoplephotos/groupphotomain.jpg"
                alt="DCivitas full team"
                fill
                className="object-cover object-center"
              />
            </div>
          </FadeIn>
          <div>
            <FadeIn delay={0.08}>
              <p className="eyebrow mb-4" style={{ color: "var(--purple-mid)" }}>
                Who We Are
              </p>
            </FadeIn>
            <FadeIn delay={0.16}>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
                  fontWeight: 400,
                  fontSize: "var(--text-xl)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  color: "var(--ink)",
                }}
              >
                A consulting club for the DMV area.
              </h2>
            </FadeIn>
            <FadeIn delay={0.24}>
              <p
                className="mb-4"
                style={{
                  fontSize: "var(--text-base)",
                  lineHeight: 1.75,
                  color: "rgba(44,47,61,0.8)",
                  fontFamily: "var(--font-public-sans)",
                }}
              >
                DCivitas Consulting is a pro bono nonprofit consulting
                organization established in 2014 by members of Georgetown
                University&rsquo;s Walsh School of Foreign Service.
              </p>
              <p
                className="mb-4"
                style={{
                  fontSize: "var(--text-base)",
                  lineHeight: 1.75,
                  color: "rgba(44,47,61,0.8)",
                  fontFamily: "var(--font-public-sans)",
                }}
              >
                DCivitas is dedicated to making an impact in our local community
                and thus works exclusively with nonprofits in the greater DC
                area. We partner with nonprofits that demonstrate potential for
                growth, unique missions, and service to marginalized groups.
              </p>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  lineHeight: 1.75,
                  color: "rgba(44,47,61,0.8)",
                  fontFamily: "var(--font-public-sans)",
                }}
              >
                DCivitas consultants come from all four undergraduate schools
                within Georgetown University. The diverse perspectives within
                our community are essential to producing unique,
                multi-dimensional solutions. We seek out socially-minded
                individuals eager to leverage their education and talents for
                the greater good.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Team section shared layout ────────────────────────────────── */

function TeamSection({
  id,
  role,
  name,
  photo,
  photoAlt,
  description,
  points,
  reversed = false,
}: {
  id: string;
  role: string;
  name: string;
  photo: string;
  photoAlt: string;
  description: string;
  points: string[];
  reversed?: boolean;
}) {
  return (
    <section
      id={id}
      style={{
        backgroundColor: reversed ? "var(--purple-pale)" : "var(--paper)",
        scrollMarginTop: "80px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${
            reversed ? "md:[direction:rtl]" : ""
          }`}
        >
          <FadeIn delay={0} className={reversed ? "md:[direction:ltr]" : ""}>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src={photo}
                alt={photoAlt}
                fill
                className="object-cover object-top"
              />
            </div>
          </FadeIn>
          <div className={reversed ? "md:[direction:ltr]" : ""}>
            <FadeIn delay={0.08}>
              <p className="eyebrow mb-3" style={{ color: "var(--purple-mid)" }}>
                {role}
              </p>
            </FadeIn>
            <FadeIn delay={0.14}>
              <h2
                className="mb-5"
                style={{
                  fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
                  fontWeight: 400,
                  fontSize: "var(--text-xl)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  color: "var(--ink)",
                }}
              >
                {name}
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p
                className="mb-6"
                style={{
                  fontSize: "var(--text-base)",
                  lineHeight: 1.75,
                  color: "rgba(44,47,61,0.8)",
                  fontFamily: "var(--font-public-sans)",
                }}
              >
                {description}
              </p>
              <ul className="space-y-3">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3"
                    style={{
                      fontSize: "var(--text-sm)",
                      lineHeight: 1.65,
                      color: "rgba(44,47,61,0.72)",
                      fontFamily: "var(--font-public-sans)",
                    }}
                  >
                    <span
                      className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "var(--purple-mid)" }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Join CTA ───────────────────────────────────────────────────── */

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
            Want to be part of the team?
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
            Applications open each semester. Georgetown undergraduates from all
            schools and all fields of study are welcome to apply.
          </p>
        </FadeIn>
        <FadeIn delay={0.16}>
          <Button href="/join-us" variant="outline">
            Learn how to join
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function About() {
  return (
    <>
      <Hero />
      <MissionVision />
      <WhoWeAre />

      <TeamSection
        id="executive-board"
        role="Leadership"
        name="Executive Board"
        photo="/images/peoplephotos/execboard.jpg"
        photoAlt="DCivitas Executive Board"
        description="The Executive Board sets DCivitas's strategic direction, manages partnerships with nonprofit clients, and ensures the organization runs smoothly semester to semester. They represent the club to Georgetown administration and the broader D.C. community."
        points={[
          "Oversees all consulting projects and client relationships",
          "Sets recruitment strategy and manages applications",
          "Maintains Georgetown University partnerships and official recognition",
          "Drives long-term organizational growth and sustainability",
        ]}
      />

      <TeamSection
        id="marketing"
        role="Brand & Outreach"
        name="Marketing Team"
        photo="/images/peoplephotos/marketing.jpg"
        photoAlt="DCivitas Marketing Team"
        description="The Marketing Team is responsible for crafting DCivitas's identity and amplifying its story. From social media to impact storytelling, they ensure the world knows about the work being done in the DMV."
        points={[
          "Manages social media presence and brand identity",
          "Produces professional video and written impact stories",
          "Designs recruitment materials and event collateral",
          "Communicates DCivitas's work to the broader community",
        ]}
        reversed
      />

      <TeamSection
        id="research-development"
        role="Innovation & Community"
        name="Research & Development"
        photo="/images/peoplephotos/randd.jpg"
        photoAlt="DCivitas Research and Development Team"
        description="The R&D team is the engine behind DCivitas's growth. They cultivate relationships with potential nonprofit partners, organize professional development events, and build the pipeline of organizations DCivitas will serve."
        points={[
          "Identifies and vets potential nonprofit partners for future semesters",
          "Plans professional development and community service events",
          "Open membership — all Georgetown undergrads welcome",
          "Serves as the entry point for students new to consulting",
        ]}
      />

      <TeamSection
        id="project-teams"
        role="Consulting"
        name="Project Teams"
        photo="/images/peoplephotos/projectteam1.jpg"
        photoAlt="DCivitas Project Team"
        description="Project Teams are the core of DCivitas — small groups of consultants embedded with a single nonprofit partner for an entire semester. Each team works through real challenges from kickoff to final deliverable, developing genuine consulting skills along the way."
        points={[
          "Teams of 4–6 consultants led by 1–2 Project Managers",
          "Deep focus on a single nonprofit client per semester",
          "Covers operations, strategy, marketing, and data work",
          "Consultants may request placement with a specific nonprofit",
        ]}
        reversed
      />

      <JoinCTA />
    </>
  );
}
