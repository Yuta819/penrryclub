"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LightStreak } from "./LightStreak";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  duration: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "2023年度 定期公演「閃光」/ Performance Highlight",
    thumbnail: "/placeholder.svg?height=720&width=1280&text=Performance+1",
    views: "10.2K views",
    duration: "5:17",
  },
  {
    id: "2",
    title: "「夏祭り」/ よさこい演舞",
    thumbnail: "/placeholder.svg?height=720&width=1280&text=Performance+2",
    views: "8.5K views",
    duration: "4:32",
  },
  {
    id: "3",
    title: "YOSAKOI FESTIVAL 2023 / Behind the Scenes",
    thumbnail: "/placeholder.svg?height=720&width=1280&text=Performance+3",
    views: "15.7K views",
    duration: "8:45",
  },
];

export function VideoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="relative bg-black/90 py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
        >
          PERFORMANCE
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="aspect-video bg-black/50 rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <img
                  src={videos[currentIndex].thumbnail}
                  alt={videos[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                    {videos[currentIndex].title}
                  </h3>
                  <div className="flex items-center text-gray-300 text-sm">
                    <span>{videos[currentIndex].views}</span>
                    <span className="mx-2">•</span>
                    <span>{videos[currentIndex].duration}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all"
                >
                  <Play className="w-8 h-8 text-white" />
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={prevVideo}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextVideo}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-red-500 w-4" : "bg-gray-500"
              }`}
            />
          ))}
        </div>

        <LightStreak className="top-0 left-1/4" />
        <LightStreak className="top-1/3 right-1/4" direction="diagonal-left" />
        <LightStreak className="bottom-0 left-1/2" direction="horizontal" />
        <LightStreak className="top-2/3 right-1/3" direction="diagonal-right" />
      </div>
    </div>
  );
}
