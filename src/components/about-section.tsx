"use client"

import { motion } from "framer-motion"
import { Code, Palette, Coffee, Rocket } from "lucide-react"
import Image from "next/image"
import { 
  SiCplusplus,
  SiPython, 
  SiC,
  SiJavascript,
  SiTypescript,
  SiRuby,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiLatex,
  SiAstro,
  SiMermaid,
  SiAmazonwebservices,
  SiGooglecloud,
  SiDocker,
  SiGithub
} from "react-icons/si"

const skills = [
  {
    icon: Code,
    title: "Programming Languages",
    items: [
      { name: "C++", icon: SiCplusplus, color: "#00599C", url: "https://isocpp.org/" },
      { name: "Python", icon: SiPython, color: "#3776AB", url: "https://www.python.org/" },
      { name: "C", icon: SiC, color: "#A8B9CC", url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", url: "https://www.typescriptlang.org/" },
      { name: "Ruby", icon: SiRuby, color: "#CC342D", url: "https://www.ruby-lang.org/" },
      { name: "SQL", icon: SiMysql, color: "#4479A1", url: "https://www.mysql.com/" }
    ]
  },
  {
    icon: Palette, 
    title: "Frontend & Tools",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB", url: "https://react.dev/" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000", url: "https://nextjs.org/" },
      { name: "Astro", icon: SiAstro, color: "#FF5D01", url: "https://astro.build/" },
      { name: "TeX", icon: SiLatex, color: "#008080", url: "https://www.latex-project.org/" },
      { name: "Mermaid", icon: SiMermaid, color: "#FF3670", url: "https://www.mermaidchart.com/" },
      { name: "HTML/CSS", icon: SiHtml5, color: "#E34F26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" }
    ]
  },
  {
    icon: Rocket,
    title: "Infrastructure & Tools",
    items: [
      { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900", url: "https://aws.amazon.com/" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4", url: "https://cloud.google.com/" },
      { name: "Docker", icon: SiDocker, color: "#2496ED", url: "https://www.docker.com/" },
      { name: "GitHub", icon: SiGithub, color: "#181717", url: "https://github.com/" },
      { name: "Dify", icon: () => <Image src="/icons/dify.png" width={16} height={16} alt="Dify" className="w-4 h-4" />, color: "#1E40AF", url: "https://dify.ai/" }
    ]
  },
  {
    icon: Coffee,
    title: "Data & Analysis",
    items: ["機械学習", "データ分析", "アルゴリズム実装"]
  }
]

const timeline = [
  {
    date: "2025年9月",
    title: "Next.js ポートフォリオサイト作成",
    description: "React + TypeScript + Tailwind CSSでポートフォリオサイトを構築"
  },
  {
    date: "継続中",
    title: "東京大学理科一類 在籍",
    description: "数学・物理・情報科学を中心とした教養科目を受講。経済学も勉強中"
  },
  {
    date: "継続中",
    title: "42Tokyo での学習",
    description: "C言語を中心としたシステムプログラミングとアルゴリズム実装を学習"
  },
  {
    date: "最近の実務経験",
    title: "業務効率化ツール開発",
    description: "Dify・LLM・AWSを活用した質問対応Bot・業務効率化ツールの開発"
  }
]

export function AboutSection() {
  return (
    <section id="about-section" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            エンジニアとして、アルゴリズム実装からWebアプリケーション開発、機械学習・データ分析まで幅広く学習しています。
          </p>
        </motion.div>

        {/* Skills Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Skills & Expertise
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg mb-4">
                  <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  {skill.title}
                </h4>
                
                <div className="space-y-1">
                  {skill.items.map((item) => {
                    if (typeof item === 'string') {
                      return (
                        <span
                          key={item}
                          className="inline-block bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm mr-1 mb-1"
                        >
                          {item}
                        </span>
                      );
                    } else {
                      const IconComponent = item.icon;
                      const isFunction = typeof IconComponent === 'function' && IconComponent.name === '';
                      const skillElement = (
                        <span className="inline-flex items-center gap-1.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm mr-1 mb-1 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                          {isFunction ? (
                            <IconComponent />
                          ) : (
                            <IconComponent 
                              className="w-4 h-4" 
                              style={{ color: item.color }}
                            />
                          )}
                          {item.name}
                        </span>
                      );

                      return item.url ? (
                        <a
                          key={item.name}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block hover:scale-105 transition-transform duration-200"
                        >
                          {skillElement}
                        </a>
                      ) : (
                        <span key={item.name} className="inline-block">
                          {skillElement}
                        </span>
                      );
                    }
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Recent Activity
          </motion.h3>
          
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {item.date}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
