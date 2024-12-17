import React from "react";
import { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { RiEBike2Fill } from "react-icons/ri";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PocketBike | 池袋",
  description: "池袋で始めるバイクのある生活。50㏄バイクで東京生活を楽しもう。",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/images/PocketBike/favicon-light.svg",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/images/PocketBike/favicon-dark.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <body>{children}</body>
    </html>
  );
}
