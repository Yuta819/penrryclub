import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Penrry</h3>
            <p className="text-sm text-gray-400">
              全国の大学生の活動を応援するプラットフォーム
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">リンク</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Comingsoon
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Comingsoon
                </Link>
              </li>
              <li>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe8GL9XGLOIZElbr4UUHNijcttR2x1VDOGjZRAhMLmHj3GTRQ/viewform?usp=sf_link"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  無料HP作成依頼
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">お問い合わせ</h4>
            <p className="text-sm text-gray-400">
              お問い合わせはこちらから
              <br />
              <a href="mailto:yuta-i@penrry.com" className="hover:text-white">
                運営メール
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © 2024 PENRRY. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
