import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "金沢大学 | 彩",
  description:
    "金沢大学よさこいサークル「彩-IRODORI-」の公式ウェブサイトです。",
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/favicon.svg",
    },
  ],
};

export default function IrodoriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
