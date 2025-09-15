import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ayujyouhou.github.io'),
  title: "Ayu - Engineer & Student",
  description: "東京大学理科一類在籍のエンジニア。Next.js、React、C++、Pythonを使用したWebアプリケーション開発と機械学習に取り組んでいます。42Tokyo、麻雀、数学コンテストなど幅広い分野で活動中。",
  keywords: ["Ayu", "Engineer", "東京大学", "Next.js", "React", "TypeScript", "42Tokyo", "Portfolio"],
  authors: [{ name: "Ayu" }],
  creator: "Ayu",
  publisher: "Ayu",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://ayujyouhou.github.io",
    title: "Ayu - Engineer & Student",
    description: "東京大学理科一類在籍のエンジニア。Next.js、React、機械学習に取り組んでいます。",
    siteName: "Ayu Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Ayu Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayu - Engineer & Student",
    description: "東京大学理科一類在籍のエンジニア",
    images: ["/images/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
