"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const navItems = [
    { href: "#about-section", label: "About" },
    { href: "#projects-section", label: "Projects" },
    { href: "#hobbies-section", label: "Hobbies" },
    { href: "#blog-section", label: "Notes" },
    { href: "#services-section", label: "Services" },
    { href: "#contact-section", label: "Contact" },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            Ayu
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}
