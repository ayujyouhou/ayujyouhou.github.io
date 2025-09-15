"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Engineer & Creator"
  
  useEffect(() => {
    let currentIndex = 0
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900" />
      
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-blue-200/30 rounded-full dark:bg-blue-800/20"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear" 
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 bg-purple-200/30 rounded-full dark:bg-purple-800/20"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          x: [0, -40, 0],
          y: [0, 30, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "linear" 
        }}
      />
      
      {/* 新しい装飾要素1 */}
      <motion.div
        className="absolute top-1/2 left-10 w-32 h-32 bg-green-200/25 rounded-full dark:bg-green-800/15"
        animate={{ 
          scale: [0.8, 1.3, 0.8],
          rotate: [0, -270, -540],
          x: [0, 50, 0],
          y: [0, -40, 0]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      {/* 新しい装飾要素2 */}
      <motion.div
        className="absolute top-32 right-32 w-40 h-40 bg-pink-200/25 rounded-full dark:bg-pink-800/15"
        animate={{ 
          scale: [1.1, 0.9, 1.1],
          rotate: [0, 450, 900],
          x: [0, -25, 0],
          y: [0, 60, 0]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      {/* 新しい装飾要素3 */}
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-yellow-200/30 rounded-full dark:bg-yellow-800/20"
        animate={{ 
          scale: [0.9, 1.4, 0.9],
          rotate: [0, -180, -360],
          x: [0, 80, 0],
          y: [0, -30, 0]
        }}
        transition={{ 
          duration: 22,
          repeat: Infinity,
          ease: "linear" 
        }}
      />
      
      {/* 新しい装飾要素4 */}
      <motion.div
        className="absolute bottom-10 left-1/2 w-28 h-28 bg-indigo-200/25 rounded-full dark:bg-indigo-800/15"
        animate={{ 
          scale: [1.3, 0.7, 1.3],
          rotate: [0, 540, 1080],
          x: [0, -60, 0],
          y: [0, -50, 0]
        }}
        transition={{ 
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-48 h-48 mx-auto mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative w-full h-full"
            >
              {/* 回転するリング効果（背景） */}
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              {/* 実際の写真（前面に表示） */}
              <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full p-1">
                <Image
                  src="/images/profile.jpg"
                  alt="Ayu Profile"
                  fill
                  className="rounded-full object-cover object-[50%_35%] shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400"
        >
          Ayu
        </motion.h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="h-8 mb-12"
        >
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block ml-1"
            >
              |
            </motion.span>
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={() => {
              const projectsSection = document.getElementById('projects-section')
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={() => {
              const contactSection = document.getElementById('contact-section')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
