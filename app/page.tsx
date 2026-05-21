"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import AnimatedNumber from "@/components/AnimatedNumber";
import Button from "@/components/Button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { TextParallaxHero } from "@/components/ui/text-parallax-hero";

/* ─── Hero ────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <TextParallaxHero
      imgUrl="/images/andy-feliciotti-isg8AL7-6uk-unsplash.jpg"
      subheading={
        <Image
          src="/logos/NewDCivitasLogo_white.png"
          alt="DCivitas"
          width={160}
          height={50}
          className="h-10 w-auto object-contain"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      }
      heading="Consulting in service of the communities we live in."
    />
  );
}

/* ─── Who We Are ─────────────────────────────────────────────────── */

function WhoWeAre() {
  return (
    <section style={{ backgroundColor: "var(--paper)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <FadeIn delay={0}>
              <p className="eyebrow mb-4" style={{ color: "var(--purple-mid)" }}>
                Who We Are
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
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
            <FadeIn delay={0.16}>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  lineHeight: 1.75,
                  color: "rgba(44,47,61,0.8)",
                  maxWidth: "52ch",
                  fontFamily: "var(--font-public-sans)",
                }}
              >
                DCivitas is a pro bono consulting club with consultants from all
                5 undergraduate schools within Georgetown University. We seek
                out forward-thinking, innovative, and socially-minded
                individuals who are dedicated to making a local impact. We
                endorse a &ldquo;learn-by-doing&rdquo; mentality and do not
                require our members to have any prior consulting experience.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.24}>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/peoplephotos/groupphotomain.jpg"
                alt="DCivitas team group photo"
                fill
                className="object-cover object-center"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats ──────────────────────────────────────────────────────── */

const stats = [
  { end: 25, suffix: "+", label: "Nonprofit Partners" },
  { end: 50, suffix: "+", label: "Student Consultants" },
  { end: 150, suffix: "+", label: "Hours of Work per Team" },
  { end: 9, suffix: "", label: "Years Serving the DMV" },
];

function Stats() {
  return (
    <section style={{ backgroundColor: "var(--purple-pale)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1} className="text-center sm:text-left">
              <div
                className="mb-2"
                style={{
                  fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
                  fontWeight: 400,
                  fontSize: "var(--text-3xl)",
                  lineHeight: 1,
                  color: "var(--purple-mid)",
                }}
              >
                <AnimatedNumber end={stat.end} suffix={stat.suffix} />
              </div>
              <p
                className="eyebrow"
                style={{ color: "rgba(44,47,61,0.6)", letterSpacing: "0.1em" }}
              >
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── What We Do ─────────────────────────────────────────────────── */

function OperationsViz() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % 5), 750);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex flex-col gap-2.5 w-full max-w-[130px]">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-2">
          <motion.div
            className="shrink-0 w-4 h-4 rounded-sm border-2 flex items-center justify-center"
            animate={{
              borderColor: i < step ? "rgba(158,134,205,0.9)" : "rgba(158,134,205,0.3)",
              backgroundColor: i < step ? "rgba(158,134,205,0.8)" : "transparent",
            }}
            transition={{ duration: 0.25 }}
          >
            {i < step && (
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ fontSize: "8px", lineHeight: 1, color: "#fff", fontWeight: 700 }}
              >
                ✓
              </motion.span>
            )}
          </motion.div>
          <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(158,134,205,0.12)" }}>
            <motion.div
              className="h-full rounded-full"
              animate={{ width: i < step ? "100%" : "0%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ backgroundColor: "rgba(158,134,205,0.65)" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function StrategyViz() {
  return (
    <svg viewBox="0 0 120 64" className="w-full max-w-[130px] h-16" fill="none">
      <motion.path
        d="M 0 56 L 24 44 L 48 50 L 72 30 L 96 16 L 120 6"
        stroke="rgba(158,134,205,0.8)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.8, ease: "easeInOut" }}
      />
      <motion.circle
        cx="120" cy="6" r="4"
        fill="rgba(158,134,205,0.9)"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 2, repeat: Infinity, repeatDelay: 2.5 }}
      />
    </svg>
  );
}

function MarketingViz() {
  return (
    <div className="relative flex items-center justify-center w-24 h-24">
      {[0, 0.5, 1.0].map((delay, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{ borderColor: "rgba(158,134,205,0.6)" }}
          initial={{ width: 16, height: 16, opacity: 0.9 }}
          animate={{ width: 88, height: 88, opacity: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, delay, ease: "easeOut" }}
        />
      ))}
      <div className="w-5 h-5 rounded-full" style={{ backgroundColor: "rgba(158,134,205,0.85)" }} />
    </div>
  );
}

function DataViz() {
  const bars = [
    { h: 50, d: 0 },
    { h: 80, d: 0.1 },
    { h: 35, d: 0.2 },
    { h: 95, d: 0.3 },
    { h: 60, d: 0.4 },
  ];
  return (
    <div className="flex items-end gap-2 h-16 w-full max-w-[110px]">
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-sm"
          style={{
            height: `${bar.h}%`,
            backgroundColor: "rgba(158,134,205,0.65)",
            transformOrigin: "bottom",
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: 0.7,
            delay: bar.d,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1.2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

const serviceCards = [
  {
    name: "Operations",
    description: "Streamlining processes to help nonprofits run more efficiently and serve more people.",
    Viz: OperationsViz,
  },
  {
    name: "Strategy",
    description: "Building long-term roadmaps that align with each organization's mission and community.",
    Viz: StrategyViz,
  },
  {
    name: "Marketing & Outreach",
    description: "Amplifying nonprofit voices and expanding community reach through targeted campaigns.",
    Viz: MarketingViz,
  },
  {
    name: "Data & Analytics",
    description: "Turning data into decisions: measurement frameworks, impact reporting, and insights.",
    Viz: DataViz,
  },
];

function WhatWeDo() {
  return (
    <section style={{ backgroundColor: "var(--purple-deep)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <FadeIn>
          <p className="eyebrow mb-4" style={{ color: "var(--purple-light)" }}>
            What We Do
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2
            className="mb-14"
            style={{
              fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "var(--text-xl)",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              color: "var(--paper)",
              maxWidth: "44ch",
            }}
          >
            We bring rigorous thinking to organizations that change lives.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {serviceCards.map((svc, i) => {
            const { Viz } = svc;
            return (
              <FadeIn key={svc.name} delay={0.08 + i * 0.08} className="h-full">
                <motion.div
                  className="rounded-xl p-7 flex flex-col"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(158,134,205,0.18)",
                    height: "100%",
                    minHeight: "280px",
                  }}
                  whileHover={{ scale: 0.98 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-1 flex items-center justify-center py-4">
                    <Viz />
                  </div>
                  <div className="mt-2">
                    <p
                      className="mb-1.5"
                      style={{
                        fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
                        fontWeight: 400,
                        fontSize: "var(--text-md)",
                        color: "var(--paper)",
                        lineHeight: 1.3,
                      }}
                    >
                      {svc.name}
                    </p>
                    <p
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "rgba(233,234,244,0.65)",
                        lineHeight: 1.65,
                        fontFamily: "var(--font-public-sans)",
                      }}
                    >
                      {svc.description}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.42}>
          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 font-medium transition-colors duration-150 hover:opacity-80"
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--purple-light)",
                fontFamily: "var(--font-public-sans)",
              }}
            >
              Explore our services &rarr;
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Who We Serve ───────────────────────────────────────────────── */

function WhoWeServe() {
  return (
    <section style={{ backgroundColor: "var(--paper)", minHeight: "100vh" }}>
      <div className="grid grid-cols-1 md:grid-cols-5" style={{ minHeight: "100vh" }}>
        {/* Full-bleed image — no padding, fills entire column height */}
        <div className="relative md:col-span-2" style={{ minHeight: "50vh" }}>
          <Image
            src="/images/sitevisit.jpg"
            alt="DCivitas team on a client site visit"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Content column */}
        <div className="md:col-span-3 px-8 md:px-16 py-20 md:py-32 flex flex-col justify-center">
          <FadeIn delay={0.08}>
            <p className="eyebrow mb-4" style={{ color: "var(--purple-mid)" }}>
              Who We Serve
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
              Nonprofits that serve the underresourced communities of the DMV.
            </h2>
          </FadeIn>
          <FadeIn delay={0.24}>
            <p
              style={{
                fontSize: "var(--text-base)",
                lineHeight: 1.75,
                color: "rgba(44,47,61,0.8)",
                maxWidth: "52ch",
                fontFamily: "var(--font-public-sans)",
              }}
            >
              DCivitas partners with local nonprofits in the
              D.C.-Maryland-Virginia area who serve marginalized and
              underresourced communities. We recognize our clients&rsquo;
              unique missions and potential for growth and help tackle their
              operational barriers by providing creative long-lasting
              solutions that will persist beyond our partnership.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── Our Partners Slider ────────────────────────────────────────── */

const partnerLogos = [
  { src: "/logos/partners/b2p.webp",              alt: "DC Books to Prisons" },
  { src: "/logos/partners/foodforall.webp",        alt: "Food For All DC" },
  { src: "/logos/partners/bfc.webp",               alt: "Bread for the City" },
  { src: "/logos/partners/aalead.png",             alt: "AALEAD" },
  { src: "/logos/partners/bright-beginnings.webp", alt: "Bright Beginnings" },
  { src: "/logos/partners/miriam.webp",            alt: "Miriam's Kitchen" },
  { src: "/logos/partners/wanda-alston.webp",      alt: "Wanda Alston Foundation" },
  { src: "/logos/partners/roots-for-life.webp",    alt: "Roots for Life" },
  { src: "/logos/partners/best-kids.png",          alt: "Best Kids" },
  { src: "/logos/partners/eco.webp",               alt: "Eco Action" },
  { src: "/logos/partners/stamp.webp",             alt: "STAMP" },
  { src: "/logos/partners/cf.webp",                alt: "Community Foundation" },
  { src: "/logos/partners/past-asset18.png",       alt: "Partner Organization" },
  { src: "/logos/partners/past-asset19.png",       alt: "Partner Organization" },
];

function OurPartners() {
  return (
    <section style={{ backgroundColor: "var(--purple-deep)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12 md:pb-16">
        <FadeIn>
          <p className="eyebrow mb-3" style={{ color: "var(--purple-light)" }}>
            Our Partners
          </p>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h2
            className="mb-10"
            style={{
              fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "var(--text-xl)",
              lineHeight: 1.25,
              color: "var(--paper)",
              maxWidth: "36ch",
            }}
          >
            Nonprofits we&rsquo;ve been proud to serve.
          </h2>
        </FadeIn>
      </div>

      {/* Infinite scrolling logo strip */}
      <div className="relative h-28 w-full overflow-hidden">
        <InfiniteSlider
          className="flex h-full w-full items-center"
          duration={40}
          gap={20}
        >
          {partnerLogos.map((logo) => (
            <div
              key={logo.src}
              className="flex items-center justify-center shrink-0 rounded"
              style={{
                width: "160px",
                height: "88px",
                backgroundColor: "rgba(255,255,255,0.1)",
                padding: "16px",
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={56}
                className="object-contain max-h-12 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          ))}
        </InfiniteSlider>
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 left-0 h-full w-40"
          direction="left"
          blurIntensity={1}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 right-0 h-full w-40"
          direction="right"
          blurIntensity={1}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <FadeIn delay={0.16}>
          <div className="mt-8">
            <Link
              href="/partners"
              className="inline-flex items-center gap-1 font-medium transition-colors duration-150 hover:opacity-80"
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--purple-light)",
                fontFamily: "var(--font-public-sans)",
              }}
            >
              Meet our partners &rarr;
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Meet Our Team ──────────────────────────────────────────────── */

const teamPhotos = [
  { src: "/images/peoplephotos/execboard.jpg",    label: "Executive Board",        role: "Leadership",       href: "/about#executive-board" },
  { src: "/images/peoplephotos/marketing.jpg",    label: "Marketing Team",         role: "Brand & Outreach", href: "/about#marketing" },
  { src: "/images/peoplephotos/randd.jpg",        label: "Research & Development", role: "Innovation",       href: "/about#research-development" },
  { src: "/images/peoplephotos/projectteam1.jpg", label: "Project Teams",          role: "Consulting",       href: "/about#project-teams" },
];

function MeetOurTeam() {
  return (
    <section style={{ backgroundColor: "var(--purple-pale)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <FadeIn>
              <p className="eyebrow mb-4" style={{ color: "var(--purple-mid)" }}>
                Meet Our Team
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2
                style={{
                  fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
                  fontWeight: 400,
                  fontSize: "var(--text-xl)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  color: "var(--ink)",
                  maxWidth: "36ch",
                }}
              >
                Students who show up for their city.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.14}>
            <Link
              href="/about"
              className="inline-flex items-center gap-1 font-medium transition-colors duration-150 hover:opacity-80 shrink-0"
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--purple-dark)",
                fontFamily: "var(--font-public-sans)",
              }}
            >
              See full team &rarr;
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {teamPhotos.map((photo, i) => (
            <FadeIn key={photo.src} delay={0.08 + i * 0.08}>
              <Link href={photo.href} className="group block relative overflow-hidden" style={{ aspectRatio: "3/4", display: "block" }}>
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-4"
                  style={{
                    background: "linear-gradient(to top, rgba(46,57,116,0.85) 0%, transparent 60%)",
                  }}
                >
                  <p
                    className="eyebrow mb-0.5"
                    style={{ color: "rgba(233,234,244,0.6)", fontSize: "9px" }}
                  >
                    {photo.role}
                  </p>
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      fontWeight: 500,
                      color: "var(--paper)",
                      fontFamily: "var(--font-public-sans)",
                      lineHeight: 1.3,
                    }}
                  >
                    {photo.label}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonial ────────────────────────────────────────────────── */

function Testimonial() {
  return (
    <section style={{ backgroundColor: "#E9EAF4" }}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-28 text-center">
        <FadeIn>
          <p
            aria-hidden
            style={{
              fontSize: "6rem",
              lineHeight: 0.6,
              color: "var(--purple-mid)",
              fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
              marginBottom: "1.5rem",
              display: "block",
            }}
          >
            &ldquo;
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <blockquote
            style={{
              fontSize: "var(--text-lg)",
              lineHeight: 1.7,
              color: "var(--ink)",
              fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
              fontWeight: 400,
              marginBottom: "1.5rem",
            }}
          >
            The team was very friendly and resourceful. They took our ideas and
            executed them beautifully. We are beyond ecstatic of our new
            branding and website as a way to create a new footprint in our
            community. We are very appreciative and thankful for this program!
          </blockquote>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p
            className="eyebrow"
            style={{ color: "var(--purple-mid)", letterSpacing: "0.12em" }}
          >
            Feed It Forward DC
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Impact Teaser ──────────────────────────────────────────────── */

const impactCards = [
  {
    image: "/images/yeon-choi-7jWQJ-tUUmI-unsplash.jpg",
    partner: "Feed It Forward DC",
    headline: "Visual identity, website, and fundraising strategy for a growing food nonprofit.",
    teaser: "Feed It Forward DC came to DCivitas as an event. We helped them become a permanent community institution through rebranding and organizational development.",
    href: "/impact#feed-it-forward",
  },
  {
    image: "/images/20190608_DCNeighborhoods-0014.jpg",
    partner: "Best Buddies",
    headline: "Expanding inclusive residential living to new locations across the region.",
    teaser: "DCivitas supported Best Buddies with grant research, Georgetown partnerships, and a growth strategy to expand their Best Buddies Living program.",
    href: "/impact",
  },
];

function ImpactTeaser() {
  return (
    <section style={{ backgroundColor: "var(--paper)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <FadeIn>
          <p className="eyebrow mb-4" style={{ color: "var(--purple-mid)" }}>
            Impact
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2
            className="mb-14"
            style={{
              fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "var(--text-xl)",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              color: "var(--ink)",
              maxWidth: "36ch",
            }}
          >
            The work doesn&rsquo;t end when we do.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impactCards.map((card, i) => (
            <FadeIn key={i} delay={0.08 + i * 0.1}>
              <ImpactCard {...card} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.28}>
          <div className="mt-10">
            <Link
              href="/impact"
              className="inline-flex items-center gap-1 font-medium transition-colors duration-150 hover:opacity-80"
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--purple-mid)",
                fontFamily: "var(--font-public-sans)",
              }}
            >
              See all impact stories &rarr;
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ImpactCard({
  image,
  partner,
  headline,
  teaser,
  href,
}: {
  image: string;
  partner: string;
  headline: string;
  teaser: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block transition-transform duration-150 ease-out hover:-translate-y-0.5"
    >
      <div className="relative overflow-hidden mb-5" style={{ aspectRatio: "3/2" }}>
        <Image
          src={image}
          alt={headline}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <p className="eyebrow mb-2" style={{ color: "var(--purple-mid)" }}>
        {partner}
      </p>
      <h3
        className="mb-2"
        style={{
          fontWeight: 400,
          fontSize: "var(--text-md)",
          lineHeight: 1.45,
          color: "var(--ink)",
          fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
        }}
      >
        {headline}
      </h3>
      <p
        style={{
          fontSize: "var(--text-sm)",
          lineHeight: 1.65,
          color: "rgba(44,47,61,0.7)",
          fontFamily: "var(--font-public-sans)",
        }}
      >
        {teaser}
      </p>
      <p
        className="mt-3 font-medium"
        style={{
          fontSize: "var(--text-sm)",
          color: "var(--purple-mid)",
          fontFamily: "var(--font-public-sans)",
        }}
      >
        Read the story &rarr;
      </p>
    </Link>
  );
}

/* ─── Dual CTA ───────────────────────────────────────────────────── */

function DualCTA() {
  return (
    <section style={{ backgroundColor: "var(--purple-deep)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
          {/* Student panel */}
          <FadeIn delay={0}>
            <div className="md:pr-16 md:border-r" style={{ borderColor: "rgba(158,134,205,0.3)" }}>
              <p className="eyebrow mb-4" style={{ color: "var(--purple-light)" }}>
                For Students
              </p>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
                  fontWeight: 400,
                  fontSize: "var(--text-xl)",
                  lineHeight: 1.2,
                  color: "var(--paper)",
                }}
              >
                Are you a student?
              </h2>
              <p
                className="mb-8"
                style={{
                  fontSize: "var(--text-base)",
                  lineHeight: 1.7,
                  color: "rgba(233,234,244,0.75)",
                  maxWidth: "42ch",
                  fontFamily: "var(--font-public-sans)",
                }}
              >
                Join a team of Georgetown undergraduates doing nonprofit consulting
                work for organizations that need it most. Open to all students
                with curiosity and a commitment to social good.
              </p>
              <Button href="/join-us" variant="outline">
                Apply to DCivitas
              </Button>
            </div>
          </FadeIn>

          {/* Nonprofit panel */}
          <FadeIn delay={0.12}>
            <div className="md:pl-16">
              <p className="eyebrow mb-4" style={{ color: "var(--purple-light)" }}>
                For Nonprofits
              </p>
              <h2
                className="mb-4"
                style={{
                  fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
                  fontWeight: 400,
                  fontSize: "var(--text-xl)",
                  lineHeight: 1.2,
                  color: "var(--paper)",
                }}
              >
                Are you a nonprofit?
              </h2>
              <p
                className="mb-8"
                style={{
                  fontSize: "var(--text-base)",
                  lineHeight: 1.7,
                  color: "rgba(233,234,244,0.75)",
                  maxWidth: "42ch",
                  fontFamily: "var(--font-public-sans)",
                }}
              >
                Partner with DCivitas to tackle your toughest operational
                challenges at no cost. We bring fresh thinking, structured
                frameworks, and deep dedication to your mission.
              </p>
              <Button href="/work-with-us" variant="outline">
                Partner with us
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Stats />
      <WhatWeDo />
      <WhoWeServe />
      <OurPartners />
      <Testimonial />
      <MeetOurTeam />
      <DualCTA />
      <ImpactTeaser />
    </>
  );
}
