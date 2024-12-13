"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { DecoratedTitle } from "../Decorations/TextDecorations";

const works = [
  {
    id: 1,
    title: "2023年作品",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "2022年作品",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "2021年作品",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "2020年作品",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "2019年作品",
    image: "/placeholder.svg?height=400&width=600",
  },
];

export default function SuccessiveList() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + works.length) % works.length
    );
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const getSlideIndex = (offset: number) => {
    return (currentIndex + offset + works.length) % works.length;
  };

  return (
    <section id="successive" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="relative overflow-hidden px-4 sm:px-6 md:px-8 py-8 text-white">
          <div className="text-center">
            <DecoratedTitle className="text-orange-400">
              歴代の作品
            </DecoratedTitle>
          </div>

          {/* Slides Container */}
          <div className="relative h-[400px] mx-auto max-w-[1200px]">
            {/* Previous Slide */}
            <div
              className="absolute top-0 left-0 w-[30%] h-full transform -translate-x-1/2 transition-all duration-500 opacity-50 scale-75"
              style={{
                transform: `translateX(${
                  isTransitioning ? "-100%" : "0"
                }) scale(0.75)`,
                zIndex: 1,
              }}
            >
              <img
                src={works[getSlideIndex(-1)].image}
                alt={works[getSlideIndex(-1)].title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Current Slide */}
            <div
              className="absolute top-0 left-1/2 w-[40%] h-full transform -translate-x-1/2 transition-all duration-500 pb-16"
              style={{ zIndex: 2 }}
            >
              <img
                src={works[currentIndex].image}
                alt={works[currentIndex].title}
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
              <p className="text-xl font-semibold text-center mt-4 mb-8 text-orange-400 absolute bottom-0 left-0 right-0">
                {works[currentIndex].title}
              </p>
            </div>

            {/* Next Slide */}
            <div
              className="absolute top-0 right-0 w-[30%] h-full transform translate-x-1/2 transition-all duration-500 opacity-50 scale-75"
              style={{
                transform: `translateX(${
                  isTransitioning ? "100%" : "0"
                }) scale(0.75)`,
                zIndex: 1,
              }}
            >
              <img
                src={works[getSlideIndex(1)].image}
                alt={works[getSlideIndex(1)].title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gradient-to-r from-red-500 to-orange-500 bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-all z-10 text-white"
            disabled={isTransitioning}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gradient-to-r from-red-500 to-orange-500 bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-all z-10 text-white"
            disabled={isTransitioning}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicator Bar */}
          <div className="flex justify-center items-center mt-8 gap-2">
            {works.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative h-2 transition-all duration-300 focus:outline-none"
                style={{ width: index === currentIndex ? "2rem" : "1rem" }}
              >
                <div
                  className={cn(
                    "absolute inset-0 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "bg-gradient-to-r from-red-500 to-orange-500 w-full"
                      : "bg-gray-600 group-hover:bg-gray-500 w-full"
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
