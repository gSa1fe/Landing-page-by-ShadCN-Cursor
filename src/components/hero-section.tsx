"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!headlineRef.current) return

    const chars = headlineRef.current.querySelectorAll('.char')
    
    // Set initial state - characters positioned above
    gsap.set(chars, { y: -100, opacity: 0 })

    // Animate characters into position with stagger
    gsap.to(chars, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.05, // 50ms delay between each character
      delay: 0.5 // Start animation after 500ms
    })
  }, [])

  // Function to split text into characters and wrap each in a span
  const renderAnimatedText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char inline-block" style={{ overflow: 'hidden' }}>
        <span className="inline-block">{char === ' ' ? '\u00A0' : char}</span>
      </span>
    ))
  }

  return (
    <section className="relative min-h-screen flex items-end justify-start overflow-hidden">
      {/* Unicorn.studio Interactive Background */}
      <div 
        className="absolute inset-0 z-0 w-full h-full"
        aria-label="Unicorn.studio interactive background element"
      >
        <div 
          data-us-project="HsNts56KOMIr1xc5fbcP" 
          style={{width: '100%', height: '100%'}}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-32">
        <div className="max-w-4xl">
          <h1 
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight"
          >
            <div className="block text-foreground overflow-hidden">
              {renderAnimatedText("INTELLIGENT")}
            </div>
            <div className="block text-foreground overflow-hidden">
              {renderAnimatedText("ANALYTICS,")}
            </div>
            <div className="block text-primary overflow-hidden">
              {renderAnimatedText("FINALLY.")}
            </div>
          </h1>
          
              <div className="mt-8 lg:mt-12">
                <Button size="default" className="text-base px-6 py-3" asChild>
                  <Link href="/demo">
                    Try it out
                  </Link>
                </Button>
              </div>
        </div>
      </div>
    </section>
  )
}

