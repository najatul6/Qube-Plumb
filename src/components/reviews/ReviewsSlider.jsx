import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { reviews } from "@/data/review";

import ReviewCard from "./ReviewCard";
import ReviewHeader from "./ReviewHeader";

export default function ReviewsSlider() {
  const autoplay = Autoplay({
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [autoplay]
  );

  const next = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const previous = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.reInit();
  }, [emblaApi]);

  return (
    <>
      <ReviewHeader
        previous={previous}
        next={next}
      />

      <div
        className="overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="
                min-w-0
                flex-[0_0_100%]
                px-3

                md:flex-[0_0_50%]

                xl:flex-[0_0_33.333%]
              "
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}