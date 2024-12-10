import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Cinzel, Noto_Serif_JP } from "next/font/google";

// フォント設定
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"], // 必須プロパティを追加
  variable: "--font-noto-serif-jp",
});

// メタデータ
export const metadata = {
  title: "University Clubs",
  description: "Explore university clubs and activities",
  icons: {
    icon: "/favicon.ico",
  },
};

// RootLayout コンポーネント
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${cinzel.variable} ${notoSerifJP.variable}`}>
      <body className="min-h-screen bg-background">
        {/* ページトップにスクロールする機能 */}
        <ScrollToTop />
        {/* 子要素 */}
        {children}
      </body>
    </html>
  );
}
