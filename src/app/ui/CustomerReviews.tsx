"use client";

import { QueryResultRow } from "@vercel/postgres";
import clsx from "clsx";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SectionHeader from "./SectionHeader";
import useCarousel from "../hooks/useCarousel";

const CustomerReviews = ({ reviews }: { reviews: QueryResultRow[] }) => {
  const { totalItems, currentIndex, setCarouselApi, scrollToIndex } =
    useCarousel();

  useEffect(() => {
    const timeout = setTimeout(() => {}, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 z-10 m-auto flex items-center justify-center lg:right-1/3">
      <div className="aspect-3/2 flex max-h-full max-w-full flex-col items-center justify-center gap-2 bg-white bg-opacity-50 p-6 lg:max-h-[50%] lg:max-w-[60%]">
        <Image
          src="/icons/review.svg"
          alt="Tagparak - beach icon"
          width={40}
          height={40}
        />
        <SectionHeader text="Customer Reviews" />
        <span>See what our visitors say</span>

        <div className="review-container mt-4 max-w-[400px] p-4">
          <Carousel
            opts={{ loop: true }}
            setApi={setCarouselApi}
            plugins={[Autoplay({ delay: 3000 })]}
          >
            <CarouselContent className="items-center">
              {reviews.map(({ id, rating, comment, user_name, review_url }) => (
                <CarouselItem key={id}>
                  <div className="flex flex-col items-center gap-2 rounded-[12px] bg-white p-4">
                    <span className="flex">
                      {Array.from(Array(5), (_, i) => (
                        <Image
                          key={`${id}-${i}`}
                          src="/icons/starfish.svg"
                          alt="Tagparak - beach icon"
                          width={30}
                          height={30}
                          className={clsx({
                            "yellow-filter": parseInt(rating) >= i + 1,
                          })}
                        />
                      ))}
                    </span>

                    {/* User comment */}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <p className="customer-review-comment line-clamp-4">
                            {comment}
                          </p>
                        </TooltipTrigger>
                        <TooltipContent className="w-full max-w-[90vw] md:max-w-[600px]">
                          <p>{comment}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <div className="user-container self-end">
                      {review_url ? (
                        <Link
                          href={review_url}
                          className="text-yellow-500 underline"
                        >
                          {user_name}
                        </Link>
                      ) : (
                        <span>{user_name}</span>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: totalItems }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={clsx("h-3 w-3 rounded-full bg-white drop-shadow-2xl", {
                "bg-yellow-500": currentIndex == index,
              })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
