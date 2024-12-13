"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Movie {
  year: number;
  videoUrl: string;
  title: string;
}

const movies: Movie[] = [
  {
    year: 2023,
    videoUrl: "https://www.youtube.com/embed/pGqZQqPiow0",
    title: "金沢大学 彩-IRODORI- 咲世 百万石大会 ステージ審査演舞",
  },
  {
    year: 2022,
    videoUrl: "https://www.youtube.com/embed/yyyyyyyy",
    title: "2022年炎舞",
  },
  {
    year: 2021,
    videoUrl: "https://www.youtube.com/embed/zzzzzzzz",
    title: "2021年炎舞",
  },
];

export default function Movie() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + movies.length) % movies.length
    );
  };

  return (
    <section id="movie" className="py-16 ">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          炎舞の動画
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full rounded-lg overflow-hidden shadow-2xl"
            >
              <div className="relative pt-[56.25%]">
                <iframe
                  src={movies[currentIndex].videoUrl}
                  title={movies[currentIndex].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gradient-to-r from-red-500 to-orange-500 bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all text-white"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gradient-to-r from-red-500 to-orange-500 bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all text-white"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
        <div className="text-center mt-8">
          <h3 className="text-2xl font-semibold text-orange-400">
            {movies[currentIndex].title}
          </h3>
        </div>
      </div>
    </section>
  );
}
