# University Clubs Project

このプロジェクトは、大学のサークル情報を管理・表示するためのウェブアプリケーションです。

## 機能

- サークル情報の閲覧（都道府県別、大学別）
- サークル詳細ページ
- 管理画面（サークル情報、イベント管理）

## 技術スタック

- Next.js (App Router)
- TypeScript
- Prisma (ORM)
- Tailwind CSS (スタイリング)

## セットアップ

1. リポジトリをクローン
2. 依存関係をインストール: `npm install`
3. 環境変数を設定: `.env.local`ファイルを作成
4. データベースをセットアップ: `npx prisma migrate dev`
5. 開発サーバーを起動: `npm run dev`

## ディレクトリ構造

- `src/app`: ページコンポーネント（App Router）
- `src/components`: 再利用可能なコンポーネント
- `src/lib`: ユーティリティ関数とAPI
- `prisma`: データベース関連（スキーマ、シード）
- `tests`: テストファイル

## コントリビューション

プルリクエストは歓迎します。大きな変更を行う場合は、まずissueを開いて変更内容を議論してください。

## ライセンス

[MIT](https://choosealicense.com/licenses/mit/)

