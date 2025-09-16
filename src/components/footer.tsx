"use client"

import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const footerLinks = {
  Product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Analytics", href: "/analytics" },
    { name: "API", href: "/api" }
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" }
  ],
  Resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Help Center", href: "/help" },
    { name: "Community", href: "/community" },
    { name: "Status", href: "/status" }
  ],
  Legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Security", href: "/security" },
    { name: "GDPR", href: "/gdpr" }
  ]
}

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="text-2xl font-bold text-primary mb-4 block">
                StatsAI
              </Link>
              <p className="text-muted-foreground mb-6 max-w-sm">
                The most intelligent analytics platform for modern businesses. 
                Get AI-powered insights that drive real growth.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  Start Free Trial
                </Button>
                <Button variant="ghost" size="sm">
                  View Demo
                </Button>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>© 2024 StatsAI. All rights reserved.</span>
              <Badge variant="outline" className="text-xs">
                SOC 2 Compliant
              </Badge>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Trusted by 10,000+ companies</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
