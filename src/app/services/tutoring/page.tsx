import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, GraduationCap, Users, Clock, DollarSign, Award, MapPin, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: '家庭教師サービス - Ayu',
  description: '東京大学理科一類在籍のAyuによる家庭教師サービス。小中高の主要科目から競技数学・プログラミングまで幅広く対応。オンライン・対面どちらも可能。',
  keywords: '家庭教師,東京大学,オンライン授業,受験指導,数学,プログラミング,競技数学',
};

export default function TutoringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            ホームに戻る
          </Link>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 shadow-lg mb-6">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              家庭教師サービス
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              東京大学理科一類在籍のAyuが提供する、お子さん一人ひとりに寄り添った個別指導サービスです
            </p>
            <div className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mt-4">
              現在募集中
            </div>
          </div>
        </div>

        {/* 対象者 */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <Users className="w-6 h-6 mr-3 text-green-600" />
              このような悩みを抱えるお子さん向けです
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                '学校の授業についていけない',
                '前に勉強した内容を忘れてしまった',
                'わからないけど学校では質問できない',
                'より詳しい受験の知識がほしい'
              ].map((item, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
              <p className="text-green-800 dark:text-green-200 font-medium">
                ✨ 当方、学生なのでお子さんが気軽に質問できる点も魅力です！
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 対応科目 */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
              対応科目
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">小学校範囲</h3>
                <p className="text-gray-600 dark:text-gray-300">国語・算数・理科・社会・英語</p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">中学校範囲</h3>
                <p className="text-gray-600 dark:text-gray-300">国語・数学・理科・社会・英語</p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">高校範囲</h3>
                <p className="text-gray-600 dark:text-gray-300">数学・英語・物理・情報<br />
                <span className="text-sm">（国語・化学・地学・地理は多少）</span></p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">競技数学</h3>
                <p className="text-gray-600 dark:text-gray-300">IMO1番級レベルまで</p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg md:col-span-2">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">競技プログラミング</h3>
                <p className="text-gray-600 dark:text-gray-300">C++・Pythonがメイン</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* おすすめ対象者 */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <Award className="w-6 h-6 mr-3 text-purple-600" />
              こんな生徒にオススメ
            </h2>
            <div className="space-y-4">
              {[
                '塾または学校の勉強を徹底して身につけたい方',
                '参考書で独学をしている方',
                '志望校が旧帝大レベル、最難関公立私立高校までの方'
              ].map((item, index) => (
                <div key={index} className="flex items-start p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 指導形式 */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <Users className="w-6 h-6 mr-3 text-indigo-600" />
              指導形式
            </h2>
            <div className="space-y-4 mb-6">
              {[
                '前もって問題、質問を送っていただき、それについて答えます',
                'ご家庭で購入された問題集を進めるサポートも可能です',
                '答案添削も行っております',
                'Discordの画面共有で授業を行います',
                'その日のノートはPDFファイルとして、生徒に送らせていただきます',
                'その他、自由度が高いのでお気軽にご相談ください'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
              <p className="text-indigo-800 dark:text-indigo-200">
                💡 その他のプラットフォームをご希望の場合はその旨をお願いします
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 料金・時間 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <DollarSign className="w-6 h-6 mr-3 text-green-600" />
                料金
              </h2>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                  ¥2,500
                </div>
                <div className="text-gray-600 dark:text-gray-300 mb-4">/ 1時間</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  月ごとに精算
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Clock className="w-6 h-6 mr-3 text-blue-600" />
                対応時間
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">平日</span>
                  <span className="font-medium text-gray-900 dark:text-white">17:00以降</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">休日</span>
                  <span className="font-medium text-gray-900 dark:text-white">基本いつでも</span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  詳しくはご連絡の際にお聞かせください
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 対面指導 */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <MapPin className="w-6 h-6 mr-3 text-red-600" />
              対面指導について
            </h2>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-700">
              <p className="text-red-800 dark:text-red-200 mb-2">
                <strong>対応地域：</strong>東京、千葉県の一部地域のみ
              </p>
              <p className="text-red-700 dark:text-red-300 text-sm">
                交通費は別途請求させていただきます
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 自己紹介・実績 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                自己紹介・資格
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">公立中学→千葉県立船橋高等学校→東京大学理科一類</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">英検準一級</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">数検一級</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">家庭教師歴3年目</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">OMC 黄色（競技数学サイト top30位程度）</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">AtCoder 水色（競技プログラミングサイト 上位10%以上）</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                生徒実績
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">中2生</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    定期テスト：1年1学期44位/220 → 2年2学期1位/220
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">22歳</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    青山学院大学文系学部合格
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">小6生</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    SAPIXと併用、広尾学園中学、吉祥女子中学など難関中学複数合格
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* お問い合わせ */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              お問い合わせ
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              ご質問やお申し込みは、お気軽にお問い合わせフォームまたはSNSからご連絡ください。
            </p>
            <Link 
              href="/#contact-section"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              お問い合わせフォームへ
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
