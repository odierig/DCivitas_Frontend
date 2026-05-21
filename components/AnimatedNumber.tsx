"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedNumberProps {
  start?: number;
  end: number;
  decimals?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedNumber({
  start = 0,
  end,
  decimals = 0,
  className,
  suffix = "",
  prefix = "",
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const value = useMotionValue(start);
  const spring = useSpring(value, { damping: 30, stiffness: 100 });
  const display = useTransform(spring, (num) => {
    const n = Number(num);
    const fixed = n.toFixed(decimals);
    return n >= 1000 ? Number(fixed).toLocaleString() : fixed;
  });

  useEffect(() => {
    value.set(isInView ? end : start);
  }, [start, end, isInView, value]);

  return (
    <span ref={ref} className={className} style={{ display: "inline-block" }}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
