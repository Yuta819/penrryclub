import { useState } from "react";
import Image from "next/image";
import { DecoratedTitle } from "../Decorations/TextDecorations";

interface Clothing {
  year: number;
  image: string;
  description: string;
}

const clothings: Clothing[] = [
  {
    year: 2023,
    image: "/placeholder.svg?height=400&width=300",
    description: "2023年の衣装説明",
  },
  {
    year: 2022,
    image: "/placeholder.svg?height=400&width=300",
    description: "2022年の衣装説明",
  },
  {
    year: 2021,
    image: "/placeholder.svg?height=400&width=300",
    description: "2021年の衣装説明",
  },
];

export default function ClotingList() {
  const [selectedClothing, setSelectedClothing] = useState(clothings[0]);

  return (
    <section
      id="clothing"
      className="py-16 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="text-center">
          <DecoratedTitle className="text-white">衣装の歴史</DecoratedTitle>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2 max-w-md">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105">
              <Image
                src={selectedClothing.image}
                alt={`Clothing ${selectedClothing.year}`}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 hover:opacity-90"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 max-w-md">
            <h3 className="text-3xl font-semibold mb-6 text-orange-300">
              {selectedClothing.year}年の衣装
            </h3>
            <p className="text-white text-lg mb-8">
              {selectedClothing.description}
            </p>
            <div className="flex space-x-4">
              {clothings.map((clothing) => (
                <button
                  key={clothing.year}
                  onClick={() => setSelectedClothing(clothing)}
                  className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                    selectedClothing.year === clothing.year
                      ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg scale-105"
                      : "bg-white text-secondary hover:bg-orange-100"
                  }`}
                >
                  {clothing.year}年
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
