"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    name: "Sarah Chen",
    company: "TechStart Inc.",
    quote: "StatsAI transformed our analytics completely.",
    avatar: undefined
  },
  {
    name: "Marcus Rodriguez",
    company: "GrowthCo",
    quote: "Incredible insights that drive real results.",
    avatar: undefined
  },
  {
    name: "Emily Watson",
    company: "InnovateLab",
    quote: "Finally, analytics that actually make sense.",
    avatar: undefined
  },
  {
    name: "David Kim",
    company: "StartupXYZ",
    quote: "AI-powered recommendations saved us months.",
    avatar: undefined
  },
  {
    name: "Lisa Thompson",
    company: "RetailMax",
    quote: "Game-changing conversion tracking features.",
    avatar: undefined
  },
  {
    name: "Alex Johnson",
    company: "DataFlow",
    quote: "Enterprise security with startup ease of use.",
    avatar: undefined
  },
  {
    name: "Maria Garcia",
    company: "CloudTech",
    quote: "Real-time analytics at lightning speed.",
    avatar: undefined
  },
  {
    name: "James Wilson",
    company: "ScaleUp",
    quote: "The ROI was immediate and substantial.",
    avatar: undefined
  },
  {
    name: "Anna Lee",
    company: "NextGen",
    quote: "Perfect for our growing team needs.",
    avatar: undefined
  },
  {
    name: "Tom Brown",
    company: "FutureCorp",
    quote: "Identified bottlenecks we never knew existed.",
    avatar: undefined
  }
]

// Duplicate testimonials for seamless marquee effect
const allTestimonials = [...testimonials, ...testimonials]

export function MarqueeTestimonials() {
  const [isMounted, setIsMounted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || !sectionRef.current) return

    // Add a small delay to ensure DOM is fully ready
    const timer = setTimeout(() => {
      const cards = cardsRef.current.filter(Boolean)
      
      if (cards.length === 0) return
      
      // Set initial state for scroll animation
      gsap.set(cards, { y: 100, opacity: 0 })

      // Create separate animations for top and bottom rows
      const topRowCards = cards.slice(0, 20) // First 20 cards (top row)
      const bottomRowCards = cards.slice(20, 40) // Next 20 cards (bottom row)

      // Animate top row (moving left)
      gsap.to(topRowCards, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1, // 100ms delay between each card
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      // Animate bottom row (moving right) simultaneously
      gsap.to(bottomRowCards, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1, // 100ms delay between each card
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
    }, 100)

    // Cleanup ScrollTrigger instances
    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [isMounted])

  if (!isMounted) {
    return (
      <section ref={sectionRef} className="py-16 bg-muted/20 overflow-hidden">
        <div className="space-y-8">
          {/* Top Row - Static for SSR */}
          <div className="flex">
            {allTestimonials.slice(0, 10).map((testimonial, index) => (
              <div 
                key={`top-${index}`} 
                className="flex-shrink-0 mx-4"
                ref={el => {
                  if (el) cardsRef.current[index] = el
                }}
                style={{ transform: 'translateY(100px)', opacity: 0 }}
              >
                <Card className="w-80 h-32">
                  <CardContent className="p-4 h-full flex items-center gap-4">
                    <Avatar className="h-12 w-12 flex-shrink-0">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <blockquote className="text-sm text-muted-foreground mb-2 leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <div className="text-xs font-semibold">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Bottom Row - Static for SSR */}
          <div className="flex">
            {allTestimonials.slice(0, 10).map((testimonial, index) => (
              <div 
                key={`bottom-${index}`} 
                className="flex-shrink-0 mx-4"
                ref={el => {
                  if (el) cardsRef.current[index + 10] = el
                }}
                style={{ transform: 'translateY(100px)', opacity: 0 }}
              >
                <Card className="w-80 h-32">
                  <CardContent className="p-4 h-full flex items-center gap-4">
                    <Avatar className="h-12 w-12 flex-shrink-0">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <blockquote className="text-sm text-muted-foreground mb-2 leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <div className="text-xs font-semibold">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="py-16 bg-muted/20 overflow-hidden">
      <div className="space-y-8">
        {/* Top Row - Moving Left */}
        <div className="flex animate-marquee-left">
          {allTestimonials.map((testimonial, index) => (
            <div 
              key={`top-${index}`} 
              className="flex-shrink-0 mx-4"
              ref={el => {
                if (el) cardsRef.current[index] = el
              }}
            >
              <Card className="w-80 h-32 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 h-full flex items-center gap-4">
                  <Avatar className="h-12 w-12 flex-shrink-0">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <blockquote className="text-sm text-muted-foreground mb-2 leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="text-xs font-semibold">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom Row - Moving Right */}
        <div className="flex animate-marquee-right">
          {allTestimonials.map((testimonial, index) => (
            <div 
              key={`bottom-${index}`} 
              className="flex-shrink-0 mx-4"
              ref={el => {
                if (el) cardsRef.current[index + 20] = el
              }}
            >
              <Card className="w-80 h-32 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 h-full flex items-center gap-4">
                  <Avatar className="h-12 w-12 flex-shrink-0">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <blockquote className="text-sm text-muted-foreground mb-2 leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="text-xs font-semibold">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


