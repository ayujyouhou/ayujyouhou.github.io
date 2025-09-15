# Ayu's Portfolio Website

[![Deploy Status](https://img.shields.io/github/deployments/ayujyouhou/ayujyouhou.github.io/github-pages?label=deployment)](https://ayujyouhou.github.io/)
[![License](https://img.shields.io/github/license/ayujyouhou/ayujyouhou.github.io)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

 Ayu のポートフォリオサイトです。
🌐 **Live Site**: [https://ayujyouhou.github.io/](https://ayujyouhou.github.io/)

## ✨ Features

- **モダンなデザイン**: Tailwind CSS + shadcn/ui による美しいUI
- **スムーズなアニメーション**: Framer Motion による洗練されたトランジション
- **ダークモード対応**: システム設定に応じた自動切り替え
- **レスポンシブデザイン**: モバイルからデスクトップまで最適化
- **高いパフォーマンス**: Next.js 15 + Static Export による高速表示（スマホだとややラグい）
- **SEO最適化**: メタデータ、OGP、構造化データ対応
- **アクセシビリティ**: WCAG 2.1準拠のアクセシブルな設計
- **ブログ機能**: MDX対応の記事投稿システム
webeditorくらいの機能は実装しようと思っています。

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Content Management
- **Blog**: MDX (Markdown + JSX)
- **Contact Form**: EmailJS integration

### Deployment
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Build**: Static Site Generation (SSG)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. リポジトリをクローン
```bash
git clone https://github.com/ayujyouhou/ayujyouhou.github.io.git
cd ayujyouhou.github.io
```

2. 依存関係をインストール
```bash
npm install
```

3. 開発サーバーを起動
```bash
npm run dev
```

4. ブラウザで確認
```
http://localhost:3000
```

## 📝 Available Scripts

- `npm run dev` - 開発サーバーを起動
- `npm run build` - プロダクションビルドを生成
- `npm run start` - プロダクションサーバーを起動
- `npm run lint` - ESLintでコードをチェック
- `npm run type-check` - TypeScriptの型チェック

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   ├── components/             # Reactコンポーネント
│   ├── lib/                    # ユーティリティ関数
│   └── styles/                 # グローバルスタイル
├── content/
│   └── blog/                   # ブログ記事 (MDX)
├── public/                     # 静的ファイル
├── .github/workflows/          # GitHub Actions
└── docs/                       # ドキュメント
```

## 🎨 Key Components

- **HeroSection**: メインビジュアルとCTA
- **AboutSection**: 自己紹介とスキル一覧
- **ProjectsSection**: 主要プロジェクトの紹介
- **HobbiesSection**: 趣味と実績の紹介
- **BlogSection**: 学習記録とノート
- **ContactSection**: お問い合わせフォーム

## 📖 Blog System

このサイトには MDX ベースのブログシステムが組み込まれています。

### 記事の追加方法
1. `content/blog/` ディレクトリに `.mdx` ファイルを作成
2. Frontmatter にメタデータを記述
3. Markdown + JSX で記事を執筆

詳細な手順は [BLOG_GUIDE.md](BLOG_GUIDE.md) をご覧ください。

## 🔧 Customization

### カラーテーマの変更
`src/styles/globals.css` でCSS変数を編集

### コンテンツの更新
各コンポーネントファイルを直接編集するか、将来的にCMSとの連携を予定

## 📊 Performance

- **Core Web Vitals**: 全指標で Good スコア
- **Lighthouse Score**: Performance 90+
- **Bundle Size**: 最適化済み (248kB total)
- **Loading Speed**: 初回表示 < 2秒

## 💼 Available Services

### 📚 家庭教師サービス

現在、以下のような悩みを抱えるお子さん向けに家庭教師サービスを提供しています：

- 学校の授業についていけない
- 前に勉強した内容を忘れてしまった
- わからないけど学校では質問できない
- より詳しい受験の知識がほしい

**当方、学生なのでお子さんが気軽に質問できる点も魅力です。**

#### 📖 対応科目
- **小学校範囲**: 国数理社英
- **中学校範囲**: 国数理社英  
- **高校範囲**: 数英物情（国語、化学、地学、地理は多少）
- **競技数学**: IMO1番級レベルまで
- **競技プログラミング**: C++、Pythonがメイン

#### ⭐ こんな生徒にオススメ
- 塾または学校の勉強を徹底して身につけたい方
- 参考書で独学をしている方
- 志望校が旧帝大レベル、最難関公立私立高校までの方

#### 📋 指導形式
- 前もって問題、質問を送っていただき、それについて回答
- ご家庭で購入された問題集を進めるサポート
- 答案添削
- Discordの画面共有で授業を実施
- その日のノートはPDFファイルとして送付
- その他、自由度が高いのでお気軽にご相談ください

#### 💰 料金・時間
- **料金**: 2,500円/1時間（月ごとに精算）
- **対面指導**: 東京、千葉県の一部地域のみ可能（交通費別途）
- **対応時間**: 平日17:00以降、休日基本いつでも

#### 🏆 実績・資格
- **学歴**: 東京大学理科一類
- **資格**: 英検準一級、数検一級
- **経験**: 家庭教師歴3年目
- **競技成績**: 
  - OMC 黄色（競技数学サイト top30位程度）
  - AtCoder 水色（競技プログラミングサイト 上位10%以上）

#### 📈 生徒実績
1. **中2生**: 定期テスト 1年1学期44位/220 → 2年2学期1位/220
2. **22歳**: 青山学院大学文系学部合格
3. **小6生**: SAPIXと併用、広尾学園中学、吉祥女子中学など難関中学複数合格

> 詳しいお問い合わせは、下記のコンタクトフォームまたはSNSからお気軽にご連絡ください。

## 🤝 Contributing

このプロジェクトをぜひまねしてみてください！

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. Pull Request を作成

## 📜 License

このプロジェクトは MIT License の下で公開されています。詳細は [LICENSE](LICENSE) ファイルをご覧ください。

## 👤 Author

**Ayu**
- Website: [https://ayujyouhou.github.io/](https://ayujyouhou.github.io/)
- GitHub: [@ayujyouhou](https://github.com/ayujyouhou)
- Instagram: [@4957.ayu](https://www.instagram.com/4957.ayu)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React フレームワーク
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファースト CSS
- [shadcn/ui](https://ui.shadcn.com/) - 美しいUIコンポーネント
- [Framer Motion](https://www.framer.com/motion/) - アニメーションライブラリ
- [Lucide](https://lucide.dev/) - アイコンライブラリ

---

⭐ このプロジェクトが気に入ったら、スターを付けていただけると嬉しいです！
