import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MarqueeTestimonials } from "@/components/marquee-testimonials"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MarqueeTestimonials />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
