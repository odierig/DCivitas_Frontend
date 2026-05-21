"use client";

import Link from "next/link";
import { Settings, TrendingUp, Megaphone, BarChart2, GraduationCap, HeartHandshake, Lightbulb, Network } from "lucide-react";
import { type ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import RadialOrbitalTimeline, { type TimelineItem } from "@/components/ui/radial-orbital-timeline";

const servicesData: TimelineItem[] = [
  {
    id: 1,
    title: "Operations",
    subtitle: "Core Service",
    content:
      "We streamline processes and organizational systems to help nonprofits run more efficiently and serve more people. From workflow analysis to sustainable operational frameworks.",
    icon: Settings,
    relatedIds: [2, 4],
  },
  {
    id: 2,
    title: "Strategy",
    subtitle: "Core Service",
    content:
      "We build long-term roadmaps aligned to each organization's mission, from theory of change to tactical execution plans that account for resources, community, and growth.",
    icon: TrendingUp,
    relatedIds: [1, 3],
  },
  {
    id: 3,
    title: "Marketing",
    subtitle: "Core Service",
    content:
      "We amplify nonprofit voices through brand development, social media strategy, and targeted outreach campaigns that meaningfully expand community reach.",
    icon: Megaphone,
    relatedIds: [2, 4],
  },
  {
    id: 4,
    title: "Data & Analytics",
    subtitle: "Core Service",
    content:
      "We turn data into decisions by building measurement frameworks, impact reporting dashboards, and actionable insights tailored to your mission and stakeholders.",
    icon: BarChart2,
    relatedIds: [1, 3],
  },
];

/* ─── Hero ───────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section
      className="pt-32 pb-0 md:pt-44"
      style={{ backgroundColor: "var(--purple-deep)" }}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center pb-12">
        <FadeIn>
          <p className="eyebrow mb-6" style={{ color: "var(--purple-light)" }}>
            What We Do
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
            We bring rigorous thinking to organizations that change lives.
          </h1>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p
            style={{
              fontSize: "var(--text-md)",
              lineHeight: 1.7,
              color: "rgba(233,234,244,0.75)",
              maxWidth: "56ch",
              margin: "0 auto",
              fontFamily: "var(--font-public-sans)",
            }}
          >
            Click any node to explore each service area. Our four practice areas
            work together to address the full spectrum of nonprofit challenges.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Orbital Section ────────────────────────────────────────────── */

function OrbitalSection() {
  return (
    <section
      style={{ backgroundColor: "var(--purple-deep)" }}
      className="relative"
    >
      <div style={{ height: "640px" }}>
        <RadialOrbitalTimeline timelineData={servicesData} />
      </div>
      <p
        className="text-center pb-10"
        style={{
          fontSize: "var(--text-xs)",
          color: "rgba(233,234,244,0.35)",
          fontFamily: "var(--font-public-sans)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Click a node to preview · Click background to reset
      </p>
    </section>
  );
}

/* ─── Service Grid ───────────────────────────────────────────────── */

const serviceDetails = [
  {
    icon: Settings,
    name: "Operations",
    description:
      "We audit workflows, identify friction points, and implement scalable systems that let your staff do more without burning out. From HR to program delivery, we address root causes.",
  },
  {
    icon: TrendingUp,
    name: "Strategy",
    description:
      "Whether it's a three-year strategic plan or a pivot in response to funding changes, we help nonprofits think clearly about where they're going and how to get there sustainably.",
  },
  {
    icon: Megaphone,
    name: "Marketing & Outreach",
    description:
      "We develop brand identities, content strategies, and community engagement plans that help nonprofits reach more donors, volunteers, and beneficiaries with limited resources.",
  },
  {
    icon: BarChart2,
    name: "Data & Analytics",
    description:
      "We help organizations collect the right data, tell compelling impact stories, and build dashboards that give leadership real visibility into program performance.",
  },
];

function ServiceGrid() {
  return (
    <section style={{ backgroundColor: "var(--purple-pale)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <FadeIn>
          <p className="eyebrow mb-4" style={{ color: "var(--purple-mid)" }}>
            Our Practice Areas
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
              maxWidth: "40ch",
            }}
          >
            Four areas. One mission.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceDetails.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <FadeIn key={svc.name} delay={0.08 + i * 0.08}>
                <div
                  className="p-8 flex gap-6"
                  style={{ border: "1px solid rgba(102,96,161,0.15)" }}
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--purple-pale)", color: "var(--purple-dark)" }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <p
                      className="mb-3"
                      style={{
                        fontSize: "var(--text-md)",
                        fontWeight: 500,
                        color: "var(--ink)",
                        fontFamily: "var(--font-public-sans)",
                      }}
                    >
                      {svc.name}
                    </p>
                    <p
                      style={{
                        fontSize: "var(--text-sm)",
                        lineHeight: 1.75,
                        color: "rgba(44,47,61,0.75)",
                        fontFamily: "var(--font-public-sans)",
                      }}
                    >
                      {svc.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Commitment ─────────────────────────────────────────────────── */

const commitments = [
  {
    icon: GraduationCap,
    title: "Dedicated Teams",
    body: "DCivitas selects motivated Georgetown undergraduates committed to making a local impact. Our teams invest over 150 hours per engagement to deliver thorough analysis, thoughtful strategy, and lasting results.",
  },
  {
    icon: HeartHandshake,
    title: "Pro Bono, Always",
    body: "Our services are entirely free to nonprofit partners. Every team commits fully from kickoff through final delivery, bringing the same rigor and dedication you'd expect from a professional firm, at no cost.",
  },
  {
    icon: Lightbulb,
    title: "Built for Your Mission",
    body: "We tailor every engagement to your organization's specific mission, resources, and community context. Solutions built from the ground up that fit how you operate and persist long after our partnership ends.",
  },
  {
    icon: Network,
    title: "Georgetown Connections",
    body: "Our place within Georgetown gives us access to distinguished faculty across policy, business, and public service, alongside a network of alumni and professionals embedded in the D.C. community.",
  },
];

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div
    aria-hidden
    className="relative mx-auto size-36"
    style={{ maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)" }}
  >
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: "linear-gradient(to right, var(--purple-mid) 1px, transparent 1px), linear-gradient(to bottom, var(--purple-mid) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />
    <div
      className="absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l"
      style={{
        backgroundColor: "var(--paper)",
        borderColor: "rgba(102,96,161,0.35)",
        color: "var(--purple-mid)",
      }}
    >
      {children}
    </div>
  </div>
);

function Commitment() {
  return (
    <section style={{ backgroundColor: "var(--paper)" }}>
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-32">
        <FadeIn>
          <div className="text-center mb-12 md:mb-16">
            <h2
              style={{
                fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
                fontWeight: 400,
                fontSize: "var(--text-2xl)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
              }}
            >
              Our Commitment
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Card
            className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x overflow-hidden text-center"
            style={{
              border: "1px solid rgba(102,96,161,0.2)",
              boxShadow: "0 2px 16px rgba(44,47,61,0.06)",
              backgroundColor: "var(--paper)",
              borderRadius: "0.75rem",
              "--tw-divide-opacity": 1,
            } as React.CSSProperties}
          >
            {commitments.map(({ icon: Icon, title, body }) => (
              <div key={title} className="group" style={{ borderColor: "rgba(102,96,161,0.2)" }}>
                <CardHeader className="pb-3">
                  <CardDecorator>
                    <Icon size={20} aria-hidden />
                  </CardDecorator>
                  <h3
                    className="mt-4"
                    style={{
                      fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
                      fontWeight: 400,
                      fontSize: "var(--text-md)",
                      lineHeight: 1.3,
                      color: "var(--ink)",
                    }}
                  >
                    {title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      lineHeight: 1.75,
                      color: "rgba(44,47,61,0.7)",
                      fontFamily: "var(--font-public-sans)",
                    }}
                  >
                    {body}
                  </p>
                </CardContent>
              </div>
            ))}
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── CTA ────────────────────────────────────────────────────────── */

function ServiceCTA() {
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
            Ready to work with us?
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
            We partner with DMV-area nonprofits every semester at no cost. Tell
            us about your organization and what you&rsquo;re trying to solve.
          </p>
        </FadeIn>
        <FadeIn delay={0.16}>
          <Button href="/work-with-us" variant="outline">
            Partner with DCivitas
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function Services() {
  return (
    <>
      <Hero />
      <OrbitalSection />
      <Commitment />
      <ServiceGrid />
      <ServiceCTA />
    </>
  );
}
