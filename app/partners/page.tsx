import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

/* ─── Data ───────────────────────────────────────────────────────── */

const currentPartners = [
  {
    name: "DC Books to Prisons",
    logo: "/logos/partners/b2p.webp",
    description:
      "Founded in 1999, DC Books to Prisons provides free books to people in prison. They support prison libraries and book clubs, work done entirely by unpaid volunteers using donated time and resources. Each year, they send more than 6,000 book packages to people incarcerated in over 500 prisons across the United States.",
  },
  {
    name: "Food for All DC",
    logo: "/logos/partners/foodforall.webp",
    description:
      "One of the few programs in Washington, D.C. that delivers groceries directly to homebound individuals citywide. FFA makes about 240 deliveries each week through volunteer drivers and a DoorDash partnership. Each household receives up to 40 pounds of food, including shelf-stable staples and fresh produce, dairy, and meats. That comes to 30,000 pounds distributed every month.",
  },
  {
    name: "Bread for the City",
    logo: "/logos/partners/bfc.webp",
    description:
      "Bread for the City helps Washington, D.C. residents living with low income develop their power to determine the future of their own communities. They provide food, clothing, medical care, and legal and social services to reduce the burden of poverty, and pursue justice through community organizing and public advocacy.",
  },
  {
    name: "Capital Clubhouse",
    logo: "/logos/partners/capitalclubhouse.jpg",
    description:
      "Capital Clubhouse is a Washington, D.C.-based nonprofit offering people whose lives have been disrupted by mental illness the opportunity to demonstrate that they can lead productive, meaningful lives. They offer a work-ordered structured day alongside resources for employment, housing, and counseling.",
  },
];

const pastPartners = [
  { src: "/logos/partners/aalead.png", alt: "AALEAD" },
  { src: "/logos/partners/bright-beginnings.webp", alt: "Bright Beginnings" },
  { src: "/logos/partners/best-kids.png", alt: "Best Kids" },
  { src: "/logos/partners/miriam.webp", alt: "Miriam's Kitchen" },
  { src: "/logos/partners/wanda-alston.webp", alt: "Wanda Alston Foundation" },
  { src: "/logos/partners/roots-for-life.webp", alt: "Roots for Life" },
  { src: "/logos/partners/eco.webp", alt: "Eco Action" },
  { src: "/logos/partners/stamp.webp", alt: "STAMP" },
  { src: "/logos/partners/cf.webp", alt: "Community Foundation" },
  { src: "/logos/partners/past-asset8.png", alt: "Partner Organization" },
  { src: "/logos/partners/past-asset11.png", alt: "Partner Organization" },
  { src: "/logos/partners/past-asset18.png", alt: "Partner Organization" },
  { src: "/logos/partners/past-asset19.png", alt: "Partner Organization" },
  { src: "/logos/partners/past-asset20.png", alt: "Partner Organization" },
  { src: "/logos/partners/past-asset21.png", alt: "Partner Organization" },
  { src: "/logos/partners/past-asset22.png", alt: "Partner Organization" },
  { src: "/logos/partners/past-asset23.png", alt: "Partner Organization" },
  { src: "/logos/partners/past-asset24.png", alt: "Partner Organization" },
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
            Our Partners
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
              maxWidth: "22ch",
            }}
          >
            Nonprofits we&rsquo;ve been proud to serve.
          </h1>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p
            style={{
              fontSize: "var(--text-md)",
              lineHeight: 1.7,
              color: "rgba(233,234,244,0.72)",
              maxWidth: "52ch",
              fontFamily: "var(--font-public-sans)",
            }}
          >
            Every semester, DCivitas consulting teams embed with local nonprofits
            in the D.C.-Maryland-Virginia area to deliver pro bono strategy, marketing,
            operations, and data work, all at no cost to our partners.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Current Partners ───────────────────────────────────────────── */

function CurrentPartners() {
  return (
    <section style={{ backgroundColor: "var(--paper)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <FadeIn>
          <p className="eyebrow mb-4" style={{ color: "var(--purple-mid)" }}>
            Current Partners
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
            Organizations we&rsquo;re actively working with this year.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentPartners.map((partner, i) => (
            <FadeIn key={partner.name} delay={0.06 + i * 0.07}>
              <div
                className="flex flex-col h-full p-8"
                style={{
                  border: "1px solid rgba(102,96,161,0.15)",
                  backgroundColor: "var(--paper)",
                }}
              >
                <div
                  className="flex items-center justify-start mb-6"
                  style={{
                    height: "56px",
                  }}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={56}
                    className="object-contain object-left max-h-14 w-auto"
                  />
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
                    fontWeight: 400,
                    fontSize: "var(--text-md)",
                    lineHeight: 1.3,
                    color: "var(--ink)",
                  }}
                >
                  {partner.name}
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    lineHeight: 1.75,
                    color: "rgba(44,47,61,0.72)",
                    fontFamily: "var(--font-public-sans)",
                  }}
                >
                  {partner.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Past Partners ──────────────────────────────────────────────── */

function PastPartners() {
  return (
    <section style={{ backgroundColor: "var(--purple-pale)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <FadeIn>
          <p className="eyebrow mb-4" style={{ color: "var(--purple-mid)" }}>
            Past Partners
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
            Organizations we&rsquo;ve had the privilege of serving.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {pastPartners.map((partner) => (
              <div
                key={partner.src}
                className="flex items-center justify-center p-4"
                style={{
                  backgroundColor: "var(--paper)",
                  border: "1px solid rgba(102,96,161,0.1)",
                  aspectRatio: "3/2",
                }}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={120}
                  height={60}
                  className="object-contain max-h-12 w-auto opacity-75"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── CTA ────────────────────────────────────────────────────────── */

function PartnerCTA() {
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
            Is your nonprofit a fit?
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
            We partner with DMV-area nonprofits each semester at no cost.
            If your organization is facing a challenge we can help with, reach out.
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

export default function PartnersPage() {
  return (
    <>
      <Hero />
      <CurrentPartners />
      <PastPartners />
      <PartnerCTA />
    </>
  );
}
