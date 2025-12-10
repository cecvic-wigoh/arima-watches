"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-80 md:h-[500px] lg:h-[600px] w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      {/* Top description text */}
      {card.description && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent py-4 px-4">
          <p className="text-white text-sm md:text-base font-medium leading-relaxed">
            {card.description}
          </p>
        </div>
      )}
      
      {/* Bottom title text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end py-8 px-4">
        <div className="text-xl md:text-2xl font-medium text-white font-semibold">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  description?: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
