"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    quote:
      "DCivitas has come up in all of my internship interviews; it has been great to be able to talk about the technical skills I'm cultivating, the formal consulting experience DCivitas offers, and the positive impact that my work is contributing to! I'll be working as a consulting intern this summer, and this experience has played a big role in securing that position.",
    author: "Michael Halahurich",
    year: "MSB '22",
    avatar: "/michael.png",
  },
  {
    id: 2,
    quote:
      "I always look forward to our weekly team meetings (shout out the Feed it Forward Team) because they are a great way to share stories of our weeks, present our work, and get advice from our fellow team members. One of my favorite parts of my DCivitas experience is the team aspect; you really do form a team of friends, colleagues, and mentors.",
    author: "Abigail Smith",
    year: "MSB '24",
    avatar: "/abigail.png",
  },
  {
    id: 3,
    quote:
      "I've enjoyed the group presentations the most! Besides getting to show off what my team has done for the semester, I also loved seeing what other groups have achieved. It's satisfying seeing that our work has meaning for the DC community.",
    author: "Josephine Wu",
    year: "SFS '24",
    avatar: "/josephine.png",
  },
]

export function MemberTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayedQuote, setDisplayedQuote] = useState(testimonials[0].quote)
  const [displayedYear, setDisplayedYear] = useState(testimonials[0].year)
  const handleSelect = (index: number) => {
    if (index === activeIndex || isAnimating) return
    setIsAnimating(true)

    setTimeout(() => {
      setDisplayedQuote(testimonials[index].quote)
      setDisplayedYear(testimonials[index].year)
      setActiveIndex(index)
      setTimeout(() => setIsAnimating(false), 400)
    }, 200)
  }

  return (
    <div className="flex flex-col items-center gap-10 py-8">
      {/* Quote */}
      <div className="relative px-8 max-w-2xl w-full">
        <span
          aria-hidden
          className="absolute -left-2 -top-6 text-7xl select-none pointer-events-none"
          style={{
            fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
            color: "rgba(102,96,161,0.12)",
          }}
        >
          &ldquo;
        </span>

        <p
          className={cn(
            "text-sm md:text-base text-center leading-relaxed transition-all duration-[400ms] ease-out",
            isAnimating ? "opacity-0 blur-sm scale-[0.98]" : "opacity-100 blur-0 scale-100",
          )}
          style={{
            fontFamily: "var(--font-public-sans)",
            fontWeight: 400,
            color: "var(--ink)",
          }}
        >
          {displayedQuote}
        </p>

        <span
          aria-hidden
          className="absolute -right-2 -bottom-8 text-7xl select-none pointer-events-none"
          style={{
            fontFamily: "var(--font-pt-serif), 'PT Serif', Georgia, serif",
            color: "rgba(102,96,161,0.12)",
          }}
        >
          &rdquo;
        </span>
      </div>

      <div className="flex flex-col items-center gap-6 mt-2">
        {/* Year / cohort label */}
        <p
          className={cn(
            "eyebrow transition-all duration-500 ease-out",
            isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
          )}
          style={{ color: "var(--purple-mid)" }}
        >
          {displayedYear}
        </p>

        {/* Avatar + name selector pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {testimonials.map((testimonial, index) => {
            const isActive = activeIndex === index

            return (
              <button
                key={testimonial.id}
                onClick={() => handleSelect(index)}
                className="flex items-center gap-2 pl-1 pr-4 py-1 rounded-full cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: isActive ? "var(--purple-deep)" : "transparent",
                  border: "1px solid",
                  borderColor: isActive ? "var(--purple-deep)" : "rgba(102,96,161,0.3)",
                  boxShadow: isActive ? "0 2px 12px rgba(24,30,72,0.18)" : undefined,
                }}
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-7 h-7 rounded-full object-cover flex-shrink-0"
                />
                <span
                  style={{
                    fontFamily: "var(--font-public-sans)",
                    fontSize: "var(--text-sm)",
                    fontWeight: isActive ? 500 : 400,
                    color: isActive ? "var(--paper)" : "rgba(44,47,61,0.6)",
                  }}
                >
                  {testimonial.author}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
