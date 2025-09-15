import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  id: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readTime: string
  featured: boolean
  content: string
}

export function getAllPosts(): BlogPost[] {
  try {
    // ディレクトリが存在しない場合は空配列を返す
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map((fileName) => {
        const id = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        return {
          id,
          content: matterResult.content,
          ...matterResult.data,
        } as BlogPost
      })

    // 日付でソート
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  } catch {
    console.log('Blog posts not found, using fallback data')
    return []
  }
}

export function getFeaturedPosts(): BlogPost[] {
  const posts = getAllPosts()
  return posts.filter(post => post.featured)
}

export function getRecentPosts(limit: number = 3): BlogPost[] {
  const posts = getAllPosts()
  return posts.filter(post => !post.featured).slice(0, limit)
}
