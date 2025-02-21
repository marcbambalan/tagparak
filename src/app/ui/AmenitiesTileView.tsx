"use client";

import { QueryResultRow } from "@vercel/postgres";
import clsx from "clsx";
import { useEffect, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AmenitiesTileView = ({ amenities }: { amenities: QueryResultRow[] }) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateCarouselState = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
      setTotalItems(carouselApi.scrollSnapList().length);
    };

    updateCarouselState();

    carouselApi.on("select", updateCarouselState);

    return () => {
      carouselApi.off("select", updateCarouselState);
    };
  }, [carouselApi]);

  const scrollToIndex = (index: number) => {
    carouselApi?.scrollTo(index);
  };

  return (
    <div className="relative mx-2 my-auto self-stretch">
      <Carousel opts={{ loop: true }} setApi={setCarouselApi}>
        <CarouselContent>
          {amenities.map(({ id, description, imgsrc }) => (
            <CarouselItem key={id} className="md:basis-1/3">
              <img
                src={imgsrc}
                alt={description}
                className="aspect-square h-full w-full rounded-[12px] bg-yellow-100 object-cover"
              />
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

export default AmenitiesTileView;
