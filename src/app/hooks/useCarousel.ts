import { useEffect, useState } from "react";
import { CarouselApi } from "@/components/ui/carousel";

const useCarousel = () => {
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

    return {
        currentIndex,
        totalItems,
        scrollToIndex,
        setCarouselApi
    }
}

export default useCarousel;
