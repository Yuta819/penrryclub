import { useState } from "react";
import Image from "next/image";
import { DecoratedTitle } from "../Decorations/TextDecorations";

interface Creation {
  year: number;
  images: string[];
}

const creations: Creation[] = [
  {
    year: 2023,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
  },
  {
    year: 2022,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
  },
  {
    year: 2021,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
  },
];

export default function CreationList() {
  const [selectedYear, setSelectedYear] = useState(creations[0].year);

  return (
    <section
      id="creations"
      className="py-16 bg-gradient-to-br from-gray-100 to-gray-200"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="text-center">
          <DecoratedTitle className="text-primary">旗と幕の作品</DecoratedTitle>
        </div>
        <div className="flex justify-center space-x-4 mb-12">
          {creations.map((creation) => (
            <button
              key={creation.year}
              onClick={() => setSelectedYear(creation.year)}
              className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                selectedYear === creation.year
                  ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg scale-105"
                  : "bg-white text-primary hover:bg-gray-100"
              }`}
            >
              {creation.year}年
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creations
            .find((creation) => creation.year === selectedYear)
            ?.images.map((image, index) => (
              <div
                key={index}
                className="relative h-80 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={image}
                  alt={`Creation ${selectedYear} - ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-300 hover:opacity-90"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
