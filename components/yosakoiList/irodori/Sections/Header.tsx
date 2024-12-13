import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "ホーム", href: "/yosakoi/irodori#hero" },
  { name: "紹介", href: "/yosakoi/irodori#about" },
  { name: "作品", href: "/yosakoi/irodori#creations" },
  { name: "衣装", href: "/yosakoi/irodori#clothing" },
  { name: "歴代", href: "/yosakoi/irodori#successive" },
  { name: "ブログ", href: "/yosakoi/irodori#blog" },
  { name: "SNS", href: "/yosakoi/irodori#sns" },
  { name: "動画", href: "/yosakoi/irodori#movie" },
  { name: "連絡", href: "/yosakoi/irodori#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const targetId = href.split("#")[1];
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        window.location.href = href;
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg">
      <div className="container mx-auto px-8 md:px-16 lg:px-32 backdrop-blur-sm">
        <div className="flex justify-between items-center py-4">
          <a
            href="/yosakoi/irodori"
            onClick={(e) => scrollToSection(e, "/yosakoi/irodori#hero")}
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-colors duration-300 brush-font"
          >
            彩
          </a>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-colors duration-300 font-medium text-lg"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden text-white hover:text-yellow-300 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-primary-dark px-8 py-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-yellow-300 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col items-start space-y-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-colors duration-300 font-medium text-lg"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
