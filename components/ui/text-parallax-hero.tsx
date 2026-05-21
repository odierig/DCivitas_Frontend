"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Button from "@/components/Button";

const IMG_PADDING = 12;

type Props = {
  imgUrl: string;
  subheading: React.ReactNode;
  heading: string;
  children?: React.ReactNode;
};

export function TextParallaxHero({ imgUrl, subheading, heading, children }: Props) {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
}

function StickyImage({ imgUrl }: { imgUrl: string }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      {/* Base overlay for readability */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(24,30,72,0.52)" }}
      />
      {/* Secondary overlay that fades in on scroll */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(24,30,72,0.35)", opacity }}
      />
    </motion.div>
  );
}

function OverlayCopy({ subheading, heading }: { subheading: React.ReactNode; heading: string }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center px-6"
    >
      <div className="mb-5 flex items-center justify-center">
        {subheading}
      </div>
      <h1
        className="text-center"
        style={{
          fontWeight: 400,
          fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "var(--paper)",
          maxWidth: "18ch",
        }}
      >
        {heading}
      </h1>
    </motion.div>
  );
}

export function HeroContent() {
  return (
    <div className="mx-auto max-w-5xl px-6 md:px-12 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="col-span-1 md:col-span-5">
          <h2
            style={{
              fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "var(--text-xl)",
              lineHeight: 1.3,
              color: "var(--ink)",
            }}
          >
            Georgetown students. DMV nonprofits. Real impact.
          </h2>
        </div>
        <div className="col-span-1 md:col-span-7">
          <p
            className="mb-8"
            style={{
              fontSize: "var(--text-md)",
              lineHeight: 1.7,
              color: "rgba(44,47,61,0.78)",
              fontFamily: "var(--font-public-sans)",
            }}
          >
            DCivitas is a pro bono consulting club serving Washington D.C.&rsquo;s nonprofits since
            2014. Our student teams bring rigorous thinking, fresh perspectives, and genuine
            dedication to every engagement &mdash; at no cost to the organizations we serve.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/work-with-us/nonprofits">Partner with DCivitas</Button>
            <Link
              href="/join-us"
              className="inline-flex items-center gap-1.5 font-medium transition-opacity hover:opacity-70"
              style={{
                fontSize: "var(--text-base)",
                color: "var(--purple-mid)",
                fontFamily: "var(--font-public-sans)",
              }}
            >
              Apply as a student
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
