import Link from "next/link";
import Image from "next/image";

const aboutLinks = [
  { label: "About", href: "/about" },
  { label: "Mission", href: "/about#mission" },
  { label: "Team", href: "/about#executive-board" },
  { label: "Where We Go", href: "/join-us#where-we-go" },
];

const engageLinks = [
  { label: "Client Services", href: "/services" },
  { label: "Partners", href: "/partners" },
  { label: "Impact Stories", href: "/impact" },
  { label: "Join Us", href: "/join-us" },
  { label: "Work with Us", href: "/work-with-us" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/dcivitas",
    icon: "/icons/instagram.png",
    isSvg: false,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/dcivitas",
    icon: "/icons/facebook.png",
    isSvg: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/dcivitas/posts/?feedView=all",
    icon: "/icons/linkedin.svg",
    isSvg: true,
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--purple-deep)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Logo + mission */}
          <div className="md:col-span-1">
            <Image
              src="/logos/NewDCivitasLogo_white.png"
              alt="DCivitas"
              width={129}
              height={48}
              className="h-10 w-auto object-contain mb-4"
              style={{
                filter: "brightness(0) invert(1) sepia(30%) saturate(200%) hue-rotate(225deg) brightness(1.15)",
              }}
            />
            <p
              className="leading-relaxed"
              style={{
                fontSize: "var(--text-sm)",
                color: "rgba(233,234,244,0.65)",
                lineHeight: 1.7,
                fontFamily: "var(--font-public-sans)",
              }}
            >
              Pro bono consulting for DMV-area nonprofits, driven by Georgetown undergraduates.
            </p>
          </div>

          {/* Col 2: About */}
          <div>
            <p
              className="eyebrow mb-5"
              style={{ color: "rgba(233,234,244,0.45)" }}
            >
              About
            </p>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-150 hover:text-[var(--paper)]"
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "rgba(233,234,244,0.65)",
                      fontFamily: "var(--font-public-sans)",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Engage */}
          <div>
            <p
              className="eyebrow mb-5"
              style={{ color: "rgba(233,234,244,0.45)" }}
            >
              Engage
            </p>
            <ul className="space-y-3">
              {engageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-150 hover:text-[var(--paper)]"
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "rgba(233,234,244,0.65)",
                      fontFamily: "var(--font-public-sans)",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div>
            <p
              className="eyebrow mb-5"
              style={{ color: "rgba(233,234,244,0.45)" }}
            >
              Connect
            </p>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-opacity duration-150 hover:opacity-100"
                    style={{ opacity: 0.65 }}
                  >
                    <Image
                      src={link.icon}
                      alt={link.label}
                      width={18}
                      height={18}
                      className="object-contain shrink-0"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                    <span
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--paper)",
                        fontFamily: "var(--font-public-sans)",
                      }}
                    >
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:dcivitas@georgetown.edu"
                  className="transition-colors duration-150 hover:text-[var(--paper)]"
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "rgba(233,234,244,0.65)",
                    fontFamily: "var(--font-public-sans)",
                  }}
                >
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <p
            style={{
              fontSize: "var(--text-xs)",
              color: "rgba(233,234,244,0.5)",
              fontFamily: "var(--font-public-sans)",
            }}
          >
            &copy; 2026 DCivitas. Georgetown University.
          </p>
          <p
            style={{
              fontSize: "var(--text-xs)",
              color: "rgba(233,234,244,0.4)",
  
              fontFamily: "var(--font-public-sans)",
            }}
          >
            Made by Otto Dierig, CAS &rsquo;28
          </p>
        </div>
      </div>
    </footer>
  );
}
