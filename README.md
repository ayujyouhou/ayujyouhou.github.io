# Ayu's Portfolio Website

[![Deploy Status](https://img.shields.io/github/deployments/ayujyouhou/ayujyouhou.github.io/github-pages?label=deployment)](https://ayujyouhou.github.io/)
[![License](https://img.shields.io/github/license/ayujyouhou/ayujyouhou.github.io)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

東京大学理科一類在籍のソフトウェアエンジニア Ayu のポートフォリオサイトです。モダンなWeb技術を使用して構築された、レスポンシブでアクセシブルなウェブサイトです。

🌐 **Live Site**: [https://ayujyouhou.github.io/](https://ayujyouhou.github.io/)

## ✨ Features

- **モダンなデザイン**: Tailwind CSS + shadcn/ui による美しいUI
- **スムーズなアニメーション**: Framer Motion による洗練されたトランジション
- **ダークモード対応**: システム設定に応じた自動切り替え
- **レスポンシブデザイン**: モバイルからデスクトップまで最適化
- **高いパフォーマンス**: Next.js 15 + Static Export による高速表示
- **SEO最適化**: メタデータ、OGP、構造化データ対応
- **アクセシビリティ**: WCAG 2.1準拠のアクセシブルな設計
- **ブログ機能**: MDX対応の記事投稿システム

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

## 🤝 Contributing

このプロジェクトへの貢献を歓迎します！

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
