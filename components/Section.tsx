import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  bg?: string;
  className?: string;
  id?: string;
}

export default function Section({ children, bg, className = "", id }: SectionProps) {
  return (
    <section id={id} style={bg ? { backgroundColor: bg } : undefined} className={className}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        {children}
      </div>
    </section>
  );
}
