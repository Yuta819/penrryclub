import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export default function FooterSection() {
  return (
    <section className="min-h-screen flex items-center justify-center snap-start py-12 sm:py-16 bg-black bg-opacity-50 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-shadow-md">
              ペンリー大学ハングライダー部
            </h2>
            <p className="mt-2 text-shadow-sm">空への挑戦、仲間との絆</p>
          </div>
          <nav className="flex space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-400 transition-colors"
            >
              <Twitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-pink-400 transition-colors"
            >
              <Instagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-red-500 transition-colors"
            >
              <Youtube />
            </a>
          </nav>
        </div>
        <div className="text-center text-shadow-sm">
          <p>&copy; 2023 ペンリー大学ハングライダー部. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
