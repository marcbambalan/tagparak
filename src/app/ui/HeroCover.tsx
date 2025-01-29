"use client";

import { ChevronDoubleDownIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";

const HeroCover = () => {
  const [hasVideoEnded, setHasVideoEnded] = useState(false);

  return (
    <section className="flex aspect-video max-h-[calc(100dvh_-_60px)] min-h-[calc(100dvh_-_60px)] w-full flex-col items-center justify-center overflow-hidden bg-yellow-100">
      <video
        className="min-h-dvh w-full object-cover [block-size:100%] [inline-size:100%]"
        preload="none"
        autoPlay
        muted
        playsInline
        onEnded={() => setHasVideoEnded(true)}
      >
        <source src="/videos/tagparak-hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {hasVideoEnded && (
        <Link
          href="#amenities"
          className="absolute bottom-16 flex animate-pulse items-center rounded-full bg-yellow-300 p-2 px-4 drop-shadow-lg [animation-duration:1000ms] [animation-iteration-count:3]"
        >
          <ChevronDoubleDownIcon className="size-6 animate-bounce" />
          <span>Explore Tagparak</span>
        </Link>
      )}
    </section>
  );
};

export default HeroCover;
