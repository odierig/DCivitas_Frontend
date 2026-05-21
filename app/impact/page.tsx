"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

/* ─── Story Data ─────────────────────────────────────────────────── */

const stories = [
  {
    slug: "wanda-alston",
    partner: "Wanda Alston Foundation",
    services: ["Operations", "Marketing & Outreach", "Strategy"],
    title: "A Virtual Fundraiser, a 200% Engagement Lift, and a New Chapter for LGBTQ Youth Housing",
    image: "/images/20190608_DCNeighborhoods-0014.jpg",
    stats: [
      { value: "$70K", label: "Raised at their most successful fundraiser to date" },
      { value: "300+", label: "Attendees at the virtual event" },
      { value: "200%", label: "Increase in Instagram engagement" },
    ],
    intro: `The Wanda Alston Foundation has spent two decades providing housing, counseling, and job training to LGBTQ youth ages 18 to 24 in Washington, D.C. Founded in 2004, the organization depends on volunteers, donations, and fundraising events to keep its doors open. When COVID-19 arrived in 2020, those doors temporarily closed. The Foundation had no virtual infrastructure in place; their events had always been in-person. They needed to pivot fast.`,
    sections: [
      {
        heading: "The Challenge",
        body: `The Foundation needed to organize its first-ever virtual fundraiser, timed to celebrate the opening of their second housing facility. They also wanted to launch a social media campaign and update their organizational policies with a new employee handbook. None of these had been done before. All three needed to happen at once.`,
      },
      {
        heading: "What DCivitas Did",
        body: `A team of nine consultants worked in close partnership with the Foundation's executive director and HR manager throughout the semester. One workstream connected with a virtual event planner and recruited guest speakers, including Riley Knoxx, a prominent LGBTQ activist in DC. Another developed a Transgender Awareness Week social media campaign in Canva and ran graphic design workshops for Foundation staff so the momentum could continue after the engagement ended. A third researched DC labor laws and surveyed staff and residents to inform an updated employee handbook with inclusive, gender-neutral policies.`,
      },
      {
        heading: "Outcomes",
        body: `The virtual fundraiser drew more than 300 attendees and three corporate sponsors, raising $70,000, the Foundation's most successful fundraiser to date, a record that still stands. The Foundation's Instagram engagement grew 200% following the campaign. The organization was subsequently featured in two articles by The Washington Post.`,
      },
    ],
  },
  {
    slug: "best-kids",
    partner: "Best Kids",
    services: ["Marketing & Outreach", "Strategy"],
    title: "Grant Strategy, Social Media, and a 5K Fundraiser for DC's Foster Care Mentorship Program",
    image: "/images/20190822_FOCI_NeighborhoodTours-2907.jpg",
    stats: [
      { value: "2001", label: "Year Best Kids was founded as DC's first foster care mentorship program" },
      { value: "1", label: "5K Fundraiser organized with DCivitas support" },
      { value: "25+", label: "Grant applications submitted on behalf of Best Kids" },
    ],
    intro: `Best Kids has been connecting children in DC's foster care system with dedicated mentors since 2001, the first program of its kind in the District. Founded by Todd Leibbrand, the organization operates on core values of consistency, equity, and connection. Their mentorships are long-term by design: lasting relationships take time and commitment. But running a mentorship program requires sustained funding, and Best Kids had work to do on that front.`,
    sections: [
      {
        heading: "The Challenge",
        body: `Like many nonprofits, Best Kids faced a gap between their program ambitions and their operational capacity. They needed more sponsors and fundraising events, a stronger marketing presence, and a clearer long-term plan. The engagement also required DCivitas consultants to quickly build fluency in grant writing, a skill set they developed throughout the semester with guidance from returning project managers.`,
      },
      {
        heading: "What DCivitas Did",
        body: `DCivitas took on three areas of work: creating a marketing plan, building out social media promotion, and supporting preparation for Best Kids's annual 5K Fundraiser. The team researched and applied for grants on the organization's behalf, expanding their funding pipeline. They executed a social media strategy to raise visibility around the 5K event, bringing in additional donors and participants. On the day of the race, DCivitas consultants showed up to volunteer, running activities alongside the children the organization serves.`,
      },
      {
        heading: "Outcomes",
        body: `The 5K Fundraiser in May 2023 came together with support from the DCivitas team and Georgetown's GAFAS organization, reflecting what community-level coalition can look like in practice. Through the event and broader fundraising work, Best Kids raised funds to support their tutoring programs and ongoing operations. The social media campaign expanded their donor base and drove meaningful engagement around their fundraising events.`,
      },
    ],
  },
  {
    slug: "feed-it-forward",
    partner: "Feed It Forward DC",
    services: ["Marketing & Outreach", "Strategy", "Operations"],
    title: "Building a Foundation: Branding, Strategy, and Digital Infrastructure for a Food Nonprofit",
    image: "/images/yeon-choi-7jWQJ-tUUmI-unsplash.jpg",
    stats: [
      { value: "8,000+", label: "Bagged lunches distributed" },
      { value: "3", label: "Consecutive semesters of DCivitas engagement" },
      { value: "1", label: "New brand identity, website, and grant toolkit delivered" },
    ],
    intro: `Feed It Forward DC started as something simple: a group of friends who wanted to give back. Over the years, their monthly events grew into a meaningful presence in the Southeast DC community: 8,000 bagged lunches, 1,000 toiletry kits, 200 backpacks full of school supplies, Thanksgiving dinners for 400 neighbors. But they functioned more as an events network than a sustained organization. When COVID hit in 2020, operations narrowed to the two co-founders. Feed It Forward DC wanted to become something permanent. To do that, they needed the infrastructure to match.`,
    sections: [
      {
        heading: "The Challenge",
        body: `The organization had been operating on a Tumblr site and a mix of informal social media accounts. They had no stable funding model, no formal board of directors, and no brand identity that could carry them forward. They needed a professional website, a fundraising and grant strategy, and a visual identity that could grow with them.`,
      },
      {
        heading: "What DCivitas Did",
        body: `Three teams worked with Feed It Forward DC across consecutive semesters. One built a professional website from scratch and helped the organization learn how to maintain it independently. A second developed a comprehensive visual identity including logo, color system, and social media guidelines, and overhauled their Instagram presence. A third focused on strategy: researching potential corporate sponsors, creating a grant research guidebook, and developing a board recruitment pitch with outlined responsibilities for incoming directors.`,
      },
      {
        heading: "Outcomes",
        body: `Feed It Forward DC emerged from the partnership with a new brand, a functioning website, and a toolkit for long-term growth. Their rebranded Instagram account became one of the primary channels through which they raise awareness and funding. The organization was equipped with deliverables and the knowledge to sustain them well after the engagement ended.`,
      },
    ],
  },
  {
    slug: "grassroots-project",
    partner: "The Grassroots Project",
    services: ["Strategy", "Data & Analytics"],
    title: "Research, Strategy, and a Pitch Deck for a Health Education Organization's Next Chapter",
    image: "/images/20190612_HStreetneighborhood-0405.jpg",
    stats: [
      { value: "1,000+", label: "NCAA athletes trained by the Grassroots Project" },
      { value: "1", label: "Philadelphia expansion pitch delivered end-to-end" },
      { value: "Curated", label: "Corporate sponsor pipeline aligned to their mission" },
    ],
    intro: `The Grassroots Project was founded in 2009 by a group of Georgetown student athletes who wanted to bring health education into DC schools. What started with a focus on HIV prevention has grown into a program of more than 1,000 NCAA varsity athletes, trained to deliver comprehensive health education and mentorship to underserved DC teens through sports and games. By the time DCivitas began working with them, the organization was at an inflection point: pandemic-era funding uncertainty on one side, and an ambitious expansion to Philadelphia on the other.`,
    sections: [
      {
        heading: "The Challenge",
        body: `The Grassroots Project depended almost entirely on government grants, leaving them exposed when COVID disrupted public funding flows. They needed a broader corporate sponsor base. They were also planning their first expansion beyond DC, a significant step that required research, messaging, and a polished pitch deck tailored for multiple audiences.`,
      },
      {
        heading: "What DCivitas Did",
        body: `The team researched corporate sponsors aligned with TGP's mission, focusing on companies working in youth development, health, and education, and compiled a curated list the organization could work from directly. In parallel, consultants dove deep into Philadelphia's health landscape, including school health statistics, mental and nutritional health data, and the intersection of health and equity in the city, to build the evidence base for the expansion pitch. The final deliverable was a comprehensive pitch deck with audience-specific versions tailored for athlete recruits, institutional donors, and partner schools.`,
      },
      {
        heading: "Outcomes",
        body: `DCivitas delivered the research foundation and storytelling framework the Grassroots Project needed to begin their Philadelphia expansion conversations. The pitch deck gave them a ready-to-deploy asset that would have taken their small team months to develop independently, advancing a meaningful milestone for the organization.`,
      },
    ],
  },
];

/* ─── Hero ───────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section
      className="pt-32 pb-20 md:pt-44 md:pb-28"
      style={{ backgroundColor: "var(--purple-deep)" }}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="eyebrow mb-6" style={{ color: "var(--purple-light)" }}>
            Impact Stories
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--paper)",
              maxWidth: "20ch",
            }}
          >
            The work doesn&rsquo;t end when we do.
          </h1>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p
            style={{
              fontSize: "var(--text-md)",
              lineHeight: 1.7,
              color: "rgba(233,234,244,0.72)",
              maxWidth: "54ch",
              fontFamily: "var(--font-public-sans)",
            }}
          >
            Every semester, DCivitas consulting teams deliver strategies, systems, and tools that
            nonprofits carry forward long after our partnership ends. These are some of those stories.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Story Article ──────────────────────────────────────────────── */

function StatCallout({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center sm:text-left">
      <p
        style={{
          fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
          fontWeight: 400,
          fontSize: "var(--text-2xl)",
          lineHeight: 1,
          color: "var(--purple-mid)",
          letterSpacing: "-0.02em",
        }}
      >
        {value}
      </p>
      <p
        className="mt-2"
        style={{
          fontSize: "var(--text-xs)",
          lineHeight: 1.5,
          color: "rgba(44,47,61,0.6)",
          fontFamily: "var(--font-public-sans)",
          maxWidth: "18ch",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        {label}
      </p>
    </div>
  );
}

function StoryArticle({
  story,
  index,
}: {
  story: (typeof stories)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;
  return (
    <article
      id={story.slug}
      className="border-b"
      style={{
        backgroundColor: isEven ? "var(--paper)" : "var(--purple-pale)",
        borderColor: "rgba(102,96,161,0.12)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        {/* Article header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16 items-start">
          <div>
            <FadeIn>
              <p className="eyebrow mb-3" style={{ color: "var(--purple-mid)" }}>
                {story.partner}
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
                {story.title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.14}>
              <div className="flex flex-wrap gap-2 mb-8">
                {story.services.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(102,96,161,0.1)",
                      color: "var(--purple-dark)",
                      fontSize: "var(--text-xs)",
                      fontFamily: "var(--font-public-sans)",
                      fontWeight: 500,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Stats row */}
            <FadeIn delay={0.2}>
              <div
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t"
                style={{ borderColor: "rgba(102,96,161,0.15)" }}
              >
                {story.stats.map((stat) => (
                  <StatCallout key={stat.label} {...stat} />
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Image */}
          <FadeIn delay={0.1}>
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={story.image}
                alt={story.partner}
                fill
                className="object-cover object-center"
              />
            </div>
          </FadeIn>
        </div>

        {/* Article body */}
        <div className="max-w-3xl">
          <FadeIn delay={0.06}>
            <p
              className="mb-10"
              style={{
                fontSize: "var(--text-md)",
                lineHeight: 1.75,
                color: "rgba(44,47,61,0.85)",
                fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
                fontWeight: 400,
              }}
            >
              {story.intro}
            </p>
          </FadeIn>

          <div className="space-y-8">
            {story.sections.map((section, i) => (
              <FadeIn key={section.heading} delay={0.1 + i * 0.06}>
                <div>
                  <h3
                    className="mb-3"
                    style={{
                      fontSize: "var(--text-sm)",
                      fontWeight: 600,
                      color: "var(--purple-dark)",
                      fontFamily: "var(--font-public-sans)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {section.heading}
                  </h3>
                  <p
                    style={{
                      fontSize: "var(--text-base)",
                      lineHeight: 1.8,
                      color: "rgba(44,47,61,0.78)",
                      fontFamily: "var(--font-public-sans)",
                    }}
                  >
                    {section.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─── CTA ────────────────────────────────────────────────────────── */

function ImpactCTA() {
  return (
    <section style={{ backgroundColor: "var(--purple-deep)" }}>
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-28 text-center">
        <FadeIn>
          <h2
            className="mb-5"
            style={{
              fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "var(--text-xl)",
              lineHeight: 1.25,
              color: "var(--paper)",
            }}
          >
            Ready to write your story?
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
            DCivitas partners with DMV-area nonprofits every semester, pro bono.
            If your organization is facing a challenge we can help with, we&rsquo;d like to hear from you.
          </p>
        </FadeIn>
        <FadeIn delay={0.16}>
          <Button href="/work-with-us" variant="outline">
            Work with DCivitas
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function ImpactPage() {
  return (
    <>
      <Hero />
      {stories.map((story, i) => (
        <StoryArticle key={story.slug} story={story} index={i} />
      ))}
      <ImpactCTA />
    </>
  );
}
