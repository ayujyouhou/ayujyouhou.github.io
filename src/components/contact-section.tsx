"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import emailjs from "@emailjs/browser"
import { Mail, Send, CheckCircle, AlertCircle, User, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

// EmailJSの設定値を確認
const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  toEmail: process.env.NEXT_PUBLIC_YOUR_EMAIL
}

// デバッグ用ログ出力
console.log('🌐 EmailJS Config Debug:', {
  ...EMAILJS_CONFIG,
  publicKey: EMAILJS_CONFIG.publicKey ? `${EMAILJS_CONFIG.publicKey.slice(0, 4)}***` : 'undefined'
})

// EmailJSの初期化
if (EMAILJS_CONFIG.publicKey) {
  emailjs.init(EMAILJS_CONFIG.publicKey);
  console.log('✅ EmailJS initialized with public key')
} else {
  console.error('❌ EmailJS Public Key not found!')
}

// バリデーションスキーマ
const contactSchema = z.object({
  name: z.string().min(1, "お名前を入力してください").max(50, "お名前は50文字以内で入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  subject: z.string().min(1, "件名を入力してください").max(100, "件名は100文字以内で入力してください"),
  message: z.string().min(10, "メッセージは10文字以上で入力してください").max(1000, "メッセージは1000文字以内で入力してください")
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // 環境とEmailJS設定の詳細確認
  useEffect(() => {
    console.log('🔍 Environment Check:')
    console.log('- Location:', typeof window !== 'undefined' ? window.location.href : 'SSR')
    console.log('- Host:', typeof window !== 'undefined' ? window.location.host : 'SSR')
    console.log('- Protocol:', typeof window !== 'undefined' ? window.location.protocol : 'SSR')
    
    console.log('📧 EmailJS Config Status:')
    Object.entries(EMAILJS_CONFIG).forEach(([key, value]) => {
      if (key === 'publicKey' && value) {
        console.log(`- ${key}: ${value.slice(0, 4)}*** (${value.length} chars)`)
      } else {
        console.log(`- ${key}:`, value ? `✅ ${value}` : '❌ undefined')
      }
    })
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      console.log('📮 メール送信開始...')
      console.log('🕒 送信タイムスタンプ:', new Date().toISOString())
      console.log('📍 送信元:', window.location.href)
      
      // 設定値の最終確認
      console.log('⚙️ 使用する設定:')
      console.log('- Service ID:', EMAILJS_CONFIG.serviceId)
      console.log('- Template ID:', EMAILJS_CONFIG.templateId)
      console.log('- Public Key:', EMAILJS_CONFIG.publicKey ? 'あり' : 'なし')
      console.log('- To Email:', EMAILJS_CONFIG.toEmail)
      
      // 送信データの確認
      const emailData = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: EMAILJS_CONFIG.toEmail
      }
      console.log('📧 送信データ:', emailData)

      // 必須設定の確認
      if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
        throw new Error('EmailJS設定が不完全です: ' + JSON.stringify({
          serviceId: !!EMAILJS_CONFIG.serviceId,
          templateId: !!EMAILJS_CONFIG.templateId,
          publicKey: !!EMAILJS_CONFIG.publicKey
        }))
      }

      // EmailJS送信
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        emailData,
        EMAILJS_CONFIG.publicKey
      )

      console.log('✅ EmailJS送信成功:', result)
      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('❌ EmailJS送信エラー:', error)
      
      // エラーの詳細分析
      if (error instanceof Error) {
        console.error('エラーメッセージ:', error.message)
        console.error('エラースタック:', error.stack)
      }
      
      // ネットワークエラーの可能性をチェック
      if (typeof error === 'object' && error !== null) {
        console.error('エラーオブジェクト:', error)
      }
      
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-section" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            プロジェクトやコラボの機会、ご質問などがございましたら、お気軽にお声がけください。
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
          >
            {/* ステータス表示 */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg"
              >
                <div className="flex items-center text-green-800 dark:text-green-300">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>メッセージが正常に送信されました！返信をお待ちください。</span>
                </div>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg"
              >
                <div className="flex items-center text-red-800 dark:text-red-300">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span>送信に失敗しました。しばらく時間をおいて再度お試しください。</span>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* お名前 */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <User className="w-4 h-4 mr-2" />
                  お名前 *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                  placeholder="山田 太郎"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                )}
              </div>

              {/* メールアドレス */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Mail className="w-4 h-4 mr-2" />
                  メールアドレス *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                )}
              </div>

              {/* 件名 */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  件名 *
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                  placeholder="プロジェクトについて"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject.message}</p>
                )}
              </div>

              {/* メッセージ */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  メッセージ *
                </label>
                <textarea
                  {...register('message')}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none transition-all duration-200"
                  placeholder="お気軽にメッセージをお送りください..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                )}
              </div>

              {/* 送信ボタン */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      送信中...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      メッセージを送信
                    </div>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
