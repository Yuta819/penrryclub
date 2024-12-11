import Link from "next/link";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-50 text-white z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-red-500 transition-colors"
        >
          炎舞サークル
        </Link>
        <div className="flex space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
          >
            <FaTwitter size={24} />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
          >
            <FaInstagram size={24} />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
          >
            <FaYoutube size={24} />
            <span className="sr-only">YouTube</span>
          </a>
        </div>
      </div>
    </header>
  );
}
