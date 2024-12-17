"use client";
import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

// Removed calculateGridSize function

const SwipeCards = () => {
  const [cards, setCards] = useState<Card[]>(cardData);
  // Removed gridSize state

  // Removed useEffect hook

  return (
    <div className="h-full w-full flex items-center justify-center rounded-lg overflow-hidden">
      {cards.map((card) => (
        <Card key={card.id} cards={cards} setCards={setCards} {...card} />
      ))}
    </div>
  );
};

const Card = ({
  id,
  img,
  setCards,
  cards,
}: {
  id: number;
  img: string;
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
    const swipeThreshold = 2; // Reduced from 100 to 50
    if (Math.abs(x.get()) > swipeThreshold) {
      setCards((pv) => pv.filter((v) => v.id !== id));
    }
  };

  return (
    <motion.div
      className="absolute w-full h-full flex items-center justify-center"
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
        src={img}
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
  img: string;
};

const cardData: Card[] = [
  {
    id: 1,
    img: "/images/PocketBike/Bike10.webp",
  },
  {
    id: 2,
    img: "/images/PocketBike/Bike2.webp",
  },
  {
    id: 3,
    img: "/images/PocketBike/Bike3.webp",
  },
  {
    id: 4,
    img: "/images/PocketBike/Bike4.webp",
  },
  {
    id: 5,
    img: "/images/PocketBike/Bike5.webp",
  },
  {
    id: 8,
    img: "/images/PocketBike/Bike8.webp",
  },
  {
    id: 9,
    img: "/images/PocketBike/Bike9.webp",
  },
  {
    id: 10,
    img: "/images/PocketBike/Bike1.webp",
  },
];
