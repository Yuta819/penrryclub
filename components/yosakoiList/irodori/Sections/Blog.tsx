"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  url: string;
}

const ABEMA_BLOG_URL = "https://ameblo.jp/irodori-kanazawa/";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // In a real application, you would fetch the blog posts from an API
    // For this example, we'll use dummy data
    const dummyPosts: BlogPost[] = [
      {
        id: 1,
        title: "最新の活動報告",
        date: "2023-05-01",
        url: `${ABEMA_BLOG_URL}entry-12345.html`,
      },
      {
        id: 2,
        title: "新メンバー紹介",
        date: "2023-04-15",
        url: `${ABEMA_BLOG_URL}entry-12344.html`,
      },
      {
        id: 3,
        title: "次回イベントのお知らせ",
        date: "2023-04-01",
        url: `${ABEMA_BLOG_URL}entry-12343.html`,
      },
    ];
    setBlogPosts(dummyPosts);
  }, []);

  return (
    <section
      id="blog"
      className="py-16 bg-gradient-to-br from-white to-green-50"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-400">
          ブログ
        </h2>
        <div className="grid gap-8 max-w-3xl mx-auto">
          {blogPosts.map((post) => (
            <Link key={post.id} href={post.url} passHref>
              <a className="block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 transition-transform border-2 border-green-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-300 to-green-500 transform rotate-45 translate-x-8 -translate-y-8"></div>
                <h3 className="text-2xl font-semibold mb-2 text-green-700">
                  {post.title}
                </h3>
                <p className="text-green-600">{post.date}</p>
              </a>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href={ABEMA_BLOG_URL} passHref>
            <a className="inline-block bg-gradient-to-r from-green-500 to-green-400 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-500 transition duration-300 shadow-lg">
              Amebaブログをもっと見る
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
