// seed.ts: 初期データ投入用スクリプト

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 初期データを投入するロジックをここに記述します。
  await prisma.prefecture.createMany({
    data: [
      { name: "Hokkaido" },
      { name: "Tokyo" },
      { name: "Osaka" },
      // 他の都道府県データを追加
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// モジュールとして認識されるためのエクスポート
export {};
