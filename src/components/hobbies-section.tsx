"use client"

import { motion } from "framer-motion"
import { Dices, Calculator, Coffee, ExternalLink, Trophy, BarChart3, FileText } from "lucide-react"
import Link from "next/link"

const hobbies = [
  {
    icon: Dices,
    title: "麻雀",
    description: "戦略的思考と確率計算を駆使した伝統的なゲーム。論理的判断力と集中力を鍛える趣味として楽しんでいます。",
    highlights: ["戦略思考", "確率計算", "心理戦", "集中力"],
    gradient: "from-red-500 to-orange-500",
    achievements: [
      {
        title: "セイバー杯本戦出場",
        description: "麻雀の公式大会本戦に出場",
        link: "https://www.youtube.com/live/_5ctt-klCCw?si=x25FW0GTOwzGWHJy",
        icon: Trophy
      },
      {
        title: "雀魂牌譜屋",
        description: "雀魂での対戦記録と統計",
        link: "https://ikeda.sapk.ch/player/101441809/26",
        icon: BarChart3
      },
      {
        title: "麻雀Note記事",
        description: "麻雀戦術や体験記を執筆",
        link: "https://note.com/suisuiren",
        icon: FileText
      }
    ]
  },
  {
    icon: Calculator,
    title: "数学",
    description: "アルゴリズムと数学的思考の探求。美しい数式や論理的な証明に魅力を感じ、プログラミングにも活かしています。",
    highlights: ["論理的思考", "問題解決", "アルゴリズム", "証明"],
    gradient: "from-blue-500 to-purple-500",
    achievements: [
      {
        title: "OMC コンテスト1位",
        description: "オンライン数学コンテストで1位獲得",
        link: "https://onlinemathcontest.com/contests/omcb030/standings",
        icon: Trophy
      },
      {
        title: "OMC プロフィール",
        description: "継続的な数学コンテスト参加記録",
        link: "https://onlinemathcontest.com/users/Suirenn",
        icon: BarChart3
      }
    ]
  }
]

export function HobbiesSection() {
  return (
    <section id="hobbies-section" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Hobbies & Interests
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            技術以外の分野でも論理的思考と戦略的判断を鍛えることを楽しんでいます。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 h-full relative overflow-hidden">
                {/* Header with Icon */}
                <div className="flex items-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${hobby.gradient} shadow-lg mr-4`}>
                    <hobby.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {hobby.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {hobby.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Key Elements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {hobby.highlights.map((highlight, highlightIndex) => (
                      <motion.span
                        key={highlight}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.2 + highlightIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${hobby.gradient} shadow-sm`}
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                {hobby.achievements.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Achievements & Links
                    </h4>
                    <div className="space-y-3">
                      {hobby.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievement.title}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + achievementIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Link
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200"
                          >
                            <div className={`flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r ${hobby.gradient} mr-3 flex-shrink-0`}>
                              <achievement.icon className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 dark:text-white group-hover/link:text-gray-700 dark:group-hover/link:text-gray-200">
                                {achievement.title}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {achievement.description}
                              </p>
                            </div>
                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover/link:text-gray-600 dark:group-hover/link:text-gray-300 flex-shrink-0" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Decorative Element */}
                <motion.div
                  className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r ${hobby.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun Fact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-200/30 dark:border-blue-700/30">
            <Coffee className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <p className="text-lg text-gray-700 dark:text-gray-300 italic">
              &ldquo;麻雀の確率計算とオンライン数学コンテスト、どちらも論理的思考を鍛える最高の趣味です。&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
