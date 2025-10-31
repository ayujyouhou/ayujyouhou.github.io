'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, Award, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function ServicesSection() {
  return (
    <section id="services-section" className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Available Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            現在提供可能なサービスをご紹介します。お気軽にお問い合わせください。
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-green-500 to-blue-500 text-white px-4 py-2 text-sm font-medium rounded-bl-lg">
                現在募集中
              </div>
              
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 shadow-lg mr-6">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      家庭教師サービス
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      小学生から高校生まで幅広く対応
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    学校の授業についていけない、前に勉強した内容を忘れてしまった、わからないけど学校では質問できない、
                    より詳しい受験の知識がほしい — このような悩みを抱えるお子さん向けの家庭教師サービスです。
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>当方、学生なのでお子さんが気軽に質問できる点も魅力です。</strong>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/50 mb-3">
                      <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">幅広い科目対応</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      小中高の主要科目から競技数学・プログラミングまで
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 mb-3">
                      <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">オンライン対応</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Discord画面共有・対面指導も可能
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/50 mb-3">
                      <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">確かな実績</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      家庭教師歴3年・難関校合格実績多数
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">料金:</span>
                      <span className="text-gray-700 dark:text-gray-300 ml-2">4,000円/1時間</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">対応時間:</span>
                      <span className="text-gray-700 dark:text-gray-300 ml-2">応相談</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/services/tutoring"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <span>詳細を見る</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <button 
                    onClick={() => {
                      const contactSection = document.getElementById('contact-section');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 rounded-lg font-medium hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
                  >
                    お問い合わせ
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
