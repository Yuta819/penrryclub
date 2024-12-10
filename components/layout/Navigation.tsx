export function Navigation() {
  const categories = [
    "総合",
    "テクノロジー",
    "モバイル",
    "アプリ",
    "エンタメ",
    "ビューティー",
    "ファッション",
    "ライフスタイル",
    "ビジネス",
    "グルメ",
    "スポーツ",
  ];

  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-6 overflow-x-auto py-3">
          {categories.map((category) => (
            <a
              key={category}
              href="#"
              className="text-sm text-muted-foreground whitespace-nowrap hover:text-foreground"
            >
              {category}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
