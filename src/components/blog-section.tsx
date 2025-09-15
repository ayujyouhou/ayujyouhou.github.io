"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// フォールバック用のサンプルデータ
const fallbackPosts = [
  {
    id: "nextjs-portfolio-creation",
    title: "Next.js ポートフォリオサイトの構築",
    excerpt: "モダンなNext.js + React + TypeScriptを使用したポートフォリオサイトの作成プロセス。Framer Motionやshadcn/uiを活用したモダンなWebサイト制作の備忘録。",
    date: "2025-09-15",
    readTime: "5 min",
    tags: ["Next.js", "React", "TypeScript", "Portfolio"],
    featured: true
  },
  {
    id: "coming-soon-1",
    title: "42Tokyoでの学習記録",
    excerpt: "C言語とシステムプログラミングの学習体験をまとめる予定です...",
    date: "Coming Soon",
    readTime: "準備中",
    tags: ["42Tokyo", "C", "学習記録"],
    featured: false,
    comingSoon: true
  },
  {
    id: "coming-soon-2", 
    title: "数学とプログラミングの接点",
    excerpt: "麻雀の確率計算や数学コンテストの経験から得た、アルゴリズム思考について書く予定です...",
    date: "Coming Soon",
    readTime: "準備中",
    tags: ["数学", "アルゴリズム", "思考法"],
    featured: false,
    comingSoon: true
  }
]

export function BlogSection() {
  // 現在はフォールバックデータを使用（後でファイルベースに切り替え可能）
  const blogPosts = fallbackPosts
  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 2)

  return (
    <section id="blog-section" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Learning Notes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            学習した技術や思考プロセスを記録していく場所（不定期更新）
          </p>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-gray-900 dark:text-white"
            >
              Latest Note
            </motion.h3>
            
            <div className="grid grid-cols-1 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(post.date).toLocaleDateString('ja-JP')}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium group-hover:space-x-3 transition-all duration-300">
                            <span>続きを読む</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Recent Posts */}
        {recentPosts.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-gray-900 dark:text-white"
            >
              Upcoming Topics
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className={`group ${post.comingSoon ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <Card className={`overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full ${
                    post.comingSoon 
                      ? 'bg-gray-50 dark:bg-gray-800/50 border-2 border-dashed border-gray-300 dark:border-gray-600' 
                      : 'bg-white dark:bg-gray-800'
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.comingSoon ? post.date : new Date(post.date).toLocaleDateString('ja-JP')}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className={`text-xl font-bold mb-3 transition-colors ${
                        post.comingSoon 
                          ? 'text-gray-500 dark:text-gray-400'
                          : 'text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400'
                      }`}>
                        {post.title}
                      </h3>
                      
                      <p className={`mb-4 leading-relaxed line-clamp-3 ${
                        post.comingSoon 
                          ? 'text-gray-500 dark:text-gray-400 italic'
                          : 'text-gray-600 dark:text-gray-300'
                      }`}>
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              post.comingSoon
                                ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {!post.comingSoon && (
                        <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium group-hover:space-x-3 transition-all duration-300">
                          <span>続きを読む</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
