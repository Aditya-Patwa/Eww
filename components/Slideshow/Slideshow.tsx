"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function SlideShow() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        className="mt-8"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    name: "Meme #1",
    price: "0.01",
    image: "/images/slider/meme1.webp"
  },
  {
    name: "Meme #1",
    price: "0.02",
    image: "/images/slider/meme1.webp"
  },
  {
    name: "Meme #1",
    price: "0.2",
    image: "/images/slider/meme1.webp"
  },
  {
    name: "Jane Austen",
    price: "1",
    image: "/images/slider/meme1.webp"
  },
  {
    name: "Herman Melville",
    price: "1.75",
    image: "/images/slider/meme1.webp"
  },
];
