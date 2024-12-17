/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // 必要に応じて外部ホストを追加
  },
};

module.exports = {
  compiler: {
    styledComponents: true, // 自動でstyled-componentsをSSR対応にする
  },
};
