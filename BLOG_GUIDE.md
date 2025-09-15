# ブログ記事をGUIで書く方法 📝

## 方法1: GitHub Web Editor（推奨・最も簡単）

### 📱 手順
1. **GitHubでリポジトリを開く**
   - https://github.com/ayujyouhou/ayujyouhou.github.io

2. **新しい記事を作成**
   - `content/blog/` フォルダに移動
   - `Add file` → `Create new file` をクリック
   - ファイル名: `your-article-title.mdx`

3. **記事を書く**
   ```markdown
   ---
   title: "記事のタイトル"
   date: "2025-09-16"
   excerpt: "記事の要約（150文字程度）"
   tags: ["タグ1", "タグ2", "タグ3"]
   readTime: "5 min"
   featured: false
   ---

   # 記事のタイトル

   ここに本文を書きます...
   ```

4. **公開**
   - 下部の `Commit changes` をクリック
   - 数分でサイトが自動更新されます！

## 方法2: GitHub Codespaces（本格編集）

### 🚀 手順
1. リポジトリページで `Code` → `Codespaces` → `Create codespace`
2. ブラウザ上でVSCodeが起動
3. `content/blog/` で新しいファイルを作成
4. 書き終わったら左サイドバーの Source Control でコミット

## 方法3: スマホアプリ

### 📱 GitHub Mobile App
- iOS/Android の GitHub公式アプリ
- 外出先でも記事の編集が可能
- ファイル作成・編集・コミットまで全部アプリで完結

## テンプレート

新しい記事を作る時は、この形式をコピーして使ってください：

```markdown
---
title: "記事タイトル"
date: "2025-09-16"
excerpt: "記事の概要を1-2文で"
tags: ["技術", "学習", "思考"]
readTime: "3 min"
featured: false
---

# 記事タイトル

## はじめに

## 内容

## まとめ
```

## 画像を追加したい場合

1. `public/images/blog/` フォルダに画像をアップロード
2. 記事内で `![説明文](/images/blog/filename.jpg)` で参照

---

**💡 Tips:**
- `featured: true` にすると「Latest Note」セクションに大きく表示されます
- タグは関連記事のグループ化に使われます
- `readTime` は記事の長さの目安として表示されます
