import Image from "next/image";
import { DecoratedTitle } from "../Decorations/TextDecorations";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="text-center">
          <DecoratedTitle className="text-white">
            金沢大学よさこいサークル 彩-IRODORI-
          </DecoratedTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-white">
            <p className="text-lg leading-relaxed text-white">
              私たちは、金沢大学を拠点に活動するよさこいサークル「彩-IRODORI-」です。
              伝統的な踊りと現代的なパフォーマンスを融合させ、情熱的で色彩豊かな演舞を披露しています。
            </p>
            <p className="text-lg leading-relaxed text-white">
              サークル名の「彩」には、多様な個性が集まり、美しい調和を生み出すという意味が込められています。
              学生たちの若さと活力、そして金沢の文化的な要素を取り入れた独自の演舞スタイルが特徴です。
            </p>
            <p className="text-lg leading-relaxed text-white">
              地域のイベントや学園祭、よさこい祭りなど、様々な場所で活動し、観客の皆様に笑顔と感動をお届けしています。
              私たちの目標は、よさこいを通じて地域の活性化に貢献し、日本の伝統文化を次世代に継承することです。
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="彩-IRODORI- パフォーマンス"
              layout="fill"
              objectFit="cover"
              className="transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
