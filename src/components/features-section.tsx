"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Brain, Zap, Shield, Target, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Get intelligent recommendations and predictions based on your data patterns and user behavior.",
    badge: "Popular"
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Monitor your website performance with live dashboards and instant data updates.",
    badge: null
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process millions of data points in seconds with our optimized analytics engine.",
    badge: "Fast"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption and GDPR compliance built-in.",
    badge: null
  },
  {
    icon: Target,
    title: "Conversion Tracking",
    description: "Track every interaction and optimize your sales funnel with precision targeting.",
    badge: null
  },
  {
    icon: TrendingUp,
    title: "Growth Analytics",
    description: "Identify growth opportunities and scale your business with data-driven decisions.",
    badge: "New"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything you need to
            <span className="text-primary block">grow your business</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful analytics tools designed to help you understand your customers, 
            optimize your sales funnel, and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    {feature.badge && (
                      <Badge variant="outline" className="text-xs">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
