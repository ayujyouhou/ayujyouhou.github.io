"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { SiGithub, SiInstagram } from "react-icons/si"

interface SocialLink {
  href: string
  icon: string | React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  label: string
  username?: string
  color?: string
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/ayujyouhou",
    icon: SiGithub,
    label: "GitHub",
    username: "@ayujyouhou",
    color: "#181717"
  },
  {
    href: "https://www.instagram.com/4957.ayu?igsh=MWh4aGV3cmVsaXRlYg%3D%3D&utm_source=qr",
    icon: SiInstagram,
    label: "Instagram",
    username: "@4957.ayu",
    color: "#E4405F"
  }
]

export function SocialLinksSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-emerald-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-teal-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Connect With Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find me across the web and stay updated with my latest projects and thoughts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-16 h-16 mb-4 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                      {typeof link.icon === 'string' ? (
                        <Image
                          src={link.icon}
                          alt={link.label}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <link.icon 
                          className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                          style={{ color: link.color }}
                        />
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {link.label}
                    </h3>
                    
                    {link.username && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {link.username}
                      </p>
                    )}
                    
                    <motion.div
                      className="mt-2 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      Visit →
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
