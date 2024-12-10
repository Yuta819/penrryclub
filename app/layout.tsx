import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";

export const metadata = {
  title: "University Clubs",
  description: "Explore university clubs and activities",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-background">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
