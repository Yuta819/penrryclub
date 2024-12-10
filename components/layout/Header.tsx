import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  if (pathname === "/street") return null;
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold">
            PENRRY
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="hover:text-gray-300">
              総合
            </Link>
            <Link href="#" className="hover:text-gray-300">
              テクノロジー
            </Link>
            <Link href="#" className="hover:text-gray-300">
              スポーツ
            </Link>
            <Link href="#" className="hover:text-gray-300">
              文化
            </Link>
            <Link href="/live-stage" className="hover:text-gray-300">
              ライブステージ
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                placeholder="キーワードで検索"
                className="pl-10 bg-gray-800 text-white border-gray-700 focus:border-white"
              />
            </div>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/20"
            >
              ログイン
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
