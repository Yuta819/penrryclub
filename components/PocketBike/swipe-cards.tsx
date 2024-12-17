"use client";

import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const calculateGridSize = () => {
  if (typeof window !== "undefined") {
    const width = Math.floor(window.innerWidth / 32) * 32;
    const height = Math.floor(window.innerHeight / 32) * 32;
    return `${width}px ${height}px`;
  }
  return "32px 32px";
};

const SwipeCards = () => {
  const [cards, setCards] = useState<Card[]>(cardData);
  const [gridSize, setGridSize] = useState("32px 32px");

  useEffect(() => {
    const handleResize = () => {
      setGridSize(calculateGridSize());
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="grid h-full w-full place-items-center bg-neutral-100 rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23d4d4d4'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        backgroundSize: gridSize,
      }}
    >
      {cards.map((card) => {
        return (
          <Card key={card.id} cards={cards} setCards={setCards} {...card} />
        );
      })}
    </div>
  );
};

const Card = ({
  id,
  src,
  setCards,
  cards,
}: {
  id: number;
  src: string;
  setCards: Dispatch<SetStateAction<Card[]>>;
  cards: Card[];
}) => {
  const x = useMotionValue(0);

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;

    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    const swipeThreshold = 50; // Reduced from 100 to 50
    if (Math.abs(x.get()) > swipeThreshold) {
      setCards((pv) => pv.filter((v) => v.id !== id));
    }
  };

  return (
    <motion.div
      className="w-full h-full flex items-center justify-center"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={handleDragEnd}
      dragElastic={0.1}
    >
      <img
        src={src}
        alt={`Tokyo Scene ${id}`}
        className="w-full h-full object-cover rounded-lg shadow-lg"
        style={{
          maxWidth: "min(90%, 300px)",
          maxHeight: "min(90%, 400px)",
          aspectRatio: "3 / 4",
          transition: "0.125s transform",
          boxShadow: isFront
            ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
            : undefined,
        }}
      />
    </motion.div>
  );
};

export default SwipeCards;

type Card = {
  id: number;
  src: string;
};

const cardData: Card[] = [
  {
    id: 1,
    src: "@/images/PocketBike/Bike1.jpg",
  },
  {
    id: 2,
    src: "@/images/PocketBike/Bike2.jpg",
  },
  {
    id: 3,
    src: "@/images/PocketBike/Bike3.jpg",
  },
  {
    id: 4,
    src: "@/images/PocketBike/Bike4.jpg",
  },
  {
    id: 5,
    src: "@/images/PocketBike/Bike5.jpg",
  },
  {
    id: 6,
    src: "@/images/PocketBike/Bike6.jpg",
  },
  {
    id: 7,
    src: "@/images/PocketBike/Bike7.jpg",
  },
  {
    id: 8,
    src: "@/images/PocketBike/Bike8.jpg",
  },
  {
    id: 9,
    src: "@/images/PocketBike/Bike9.jpg",
  },
  {
    id: 10,
    src: "@/images/PocketBike/Bike10.jpg",
  },
];
