"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { QRModal } from "./qr-modal"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#about-section", label: "About" },
    { href: "#projects-section", label: "Projects" },
    { href: "#hobbies-section", label: "Hobbies" },
    { href: "#blog-section", label: "Notes" },
    { href: "#services-section", label: "Services" },
    { href: "#contact-section", label: "Contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false) // モバイルメニューを閉じる
    
    // 少し遅延を入れてから要素を探す（Reactのレンダリングを待つため）
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        const navHeight = 64 // ナビゲーションの高さ (h-16 = 64px)
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navHeight
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
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

          {/* デスクトップメニュー */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* ハンバーガーメニューボタン (モバイル) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="メニューを開く"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t bg-background/95 backdrop-blur-md"
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              
              {/* QRコード表示ボタン */}
              <QRModal />
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
