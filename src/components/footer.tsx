"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Let&apos;s Create Something Amazing Together
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            新しいプロジェクトやコラボの機会をお探しでしたら、お気軽にお声がけください。
          </p>
          
          <motion.button
            onClick={() => {
              const contactSection = document.getElementById('contact-section')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 mb-12"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <div className="border-t border-gray-700 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 Ayu. All rights reserved.
            </div>
            
            <div className="flex items-center text-sm text-gray-400">
              Made with 
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              using Next.js & Tailwind CSS
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
