"use client";

/**
 * LikeMovieFilmCardsSlider Component
 * ===================================
 * This component displays a slider of cards with images, styled to look like movie film strips.
 * The slider moves continuously and supports customization options such as speed, angle, direction, and depth.
 *
 * Props:
 * - `images` (Array): List of images to display. Each image object should have:
 *     - `src` (string | undefined): The image source URL.
 *     - `alt` (string): The alternative text for the image.
 * - `className` (string | optional): Additional CSS classes for customization.
 * - `angle` (number | optional): The rotation angle of the slider (default: -12).
 * - `speed` (number | optional): The scrolling speed (default: 5).
 * - `direction` ('left' | 'right' | optional): The scrolling direction (default: 'right').
 * - `depth` (number | optional): The scaling factor for depth effect (default: 1).
 *
 * Usage Example:
 * ```
 *<LikeMovieFilmCardsSlider
 *  images={[
 *    { src: '/path/to/image1.jpg', alt: 'Image 1' },
 *    { src: '/path/to/image2.jpg', alt: 'Image 2' },
 *    { src: '/path/to/image3.jpg', alt: 'Image 3' },
 *  ]}
 *  className="custom-slider"
 *  angle={-20} // カード列の回転角度
 *  speed={8} // スクロール速度
 *  direction="left" // 左方向に流れる
 *  depth={1.5} // スケーリング/>
 * ```
 **/

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface LikeMovieFilmCardsSliderProps {
  images: Array<{
    src?: string;
    alt: string;
  }>;
  className?: string; // Custom class name
  angle?: number; // Rotation angle (default: -12)
  speed?: number; // Scrolling speed (default: 5)
  direction?: "left" | "right"; // Scrolling direction (default: 'right')
  depth?: number; // Scaling for depth effect (default: 1)
}

export const LikeMovieFilmCardsSlider: React.FC<
  LikeMovieFilmCardsSliderProps
> = ({
  images,
  className = "",
  angle = -12,
  speed = 5,
  direction = "right",
  depth = 1,
}) => {
  const [cards, setCards] = useState(images);
  const rowRef = useRef<HTMLDivElement>(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    let animationFrameId: number;
    let lastTimestamp = 0;
    const scrollSpeed = direction === "right" ? speed : -speed; // Adjust scrolling direction

    const moveRow = (timestamp: number) => {
      if (lastTimestamp === 0) {
        lastTimestamp = timestamp;
      }

      const elapsed = timestamp - lastTimestamp;
      if (elapsed > 20) {
        row.scrollLeft += scrollSpeed;
        lastTimestamp = timestamp;

        const totalWidth = row.scrollWidth / 2;

        if (row.scrollLeft >= totalWidth || row.scrollLeft <= 0) {
          setCards((prevCards) => {
            const newCard = images[prevCards.length % images.length];
            return [
              ...prevCards.slice(1),
              { ...newCard, src: newCard.src || "" },
            ];
          });
          row.scrollLeft = row.scrollLeft % totalWidth;
        }
      }

      animationFrameId = requestAnimationFrame(moveRow);
    };

    animationFrameId = requestAnimationFrame(moveRow);

    return () => cancelAnimationFrame(animationFrameId);
  }, [images, speed, direction]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 flex items-center"
        style={{
          transform: `rotate(${angle}deg) scale(${depth})`, // Apply angle and depth
        }}
      >
        <div ref={rowRef} className="flex overflow-hidden whitespace-nowrap">
          {cards.concat(cards).map((image, index) => (
            <div
              key={`${index}-${key}`}
              className="inline-block w-48 h-32 sm:w-56 sm:h-40 md:w-64 md:h-48 lg:w-72 lg:h-48 mx-2 flex-shrink-0 transform transition-all duration-500 hover:scale-105"
            >
              <div className="w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden">
                {image.src ? (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No image</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
