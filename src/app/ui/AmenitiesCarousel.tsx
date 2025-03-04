"use client";

import { QueryResultRow } from "@vercel/postgres";
import clsx from "clsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useCarousel from "../hooks/useCarousel";

const AmenitiesCarousel = ({ amenities }: { amenities: QueryResultRow[] }) => {
  const { totalItems, currentIndex, setCarouselApi, scrollToIndex } =
    useCarousel();

  return (
    <div className="relative mx-2 my-auto self-stretch">
      <Carousel opts={{ loop: true }} setApi={setCarouselApi}>
        <CarouselContent>
          {amenities.map(({ id, description, imgsrc }, index) => (
            <CarouselItem key={id} className="md:basis-1/3">
              <div
                className={clsx(
                  "rounded-[12px] bg-black transition-transform duration-700",
                  {
                    "scale-y-95": currentIndex !== index,
                  },
                )}
              >
                {
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={imgsrc}
                    alt={description}
                    className={clsx(
                      "aspect-square h-full w-full rounded-[12px] bg-yellow-100 object-cover",
                      `${currentIndex === index ? "opacity-100 transition-opacity duration-700" : "opacity-50"}`,
                    )}
                  />
                }
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-[12px]" />
        <CarouselNext className="right-[12px]" />
      </Carousel>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={clsx("h-3 w-3 rounded-full bg-white drop-shadow-lg", {
              "bg-yellow-300": currentIndex == index,
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default AmenitiesCarousel;
