"use client";
import Button from "@/components/global/Button";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const OngoingCourseSlider: React.FC = () => {
  const mapper = [1, 2, 3, 4, 5];
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  React.useEffect(() => {
    if (!embla) return;

    const updateButtons = () => {
      setCanScrollPrev(embla.canScrollPrev());
      setCanScrollNext(embla.canScrollNext());
    };
    updateButtons();
    embla.on("init", updateButtons);
    embla.on("select", updateButtons);
    embla.on("reInit", updateButtons);

    // return () => {
    //   embla.off("init", updateButtons);
    //   embla.off("select", updateButtons);
    //   embla.off("reInit", updateButtons);
    // };
  }, [embla]);

  const scrollPrev = () => embla?.scrollPrev();
  const scrollNext = () => embla?.scrollNext();

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {" "}
          {/* Negative margin to counteract slide padding */}
          {mapper.map((map, index) => (
            <div
              className="first:pl-0 pl-4 py-2 flex-[0_0_90%] lg:flex-[0_0_50%] min-w-0"
              key={index}
            >
              <div className="flex flex-col md:flex-row w-full gap-4 bg-primary rounded-3xl p-4 h-full">
                <Image
                  src="/images/course.jpg"
                  alt={`${map}`}
                  height={100}
                  width={100}
                  className="md:w-[40%] rounded-2xl object-cover"
                />
                <div className="flex flex-col md:w-[60%] text-white gap-3">
                  <p className="text-sm">UI/UX Design Foundation</p>
                  <p className="text-xs line-clamp-2 text-white/50">
                    UI/UX Design Foundation Design Foundation Design Foundation
                    Design Foundation Design Foundation Design Foundation Design
                    Foundation
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-white/50">Progress:</p>
                    <div className="w-full h-0.5 rounded-full bg-white/20 flex items-center">
                      <div className="w-1/3 h-0.75 rounded-full bg-white"></div>
                    </div>
                    <p className="text-xs text-white/50">4/12</p>
                  </div>
                  <Button
                    label="Continue Learning"
                    className="text-white! rounded-full! hover:bg-white hover:text-primary! border border-white! text-sm!"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {canScrollPrev && (
        <button
          className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full shadow-md ${
            !canScrollPrev ? "opacity-50 cursor-default" : ""
          }`}
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {canScrollNext && (
        <button
          className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full shadow-md ${
            !canScrollNext ? "opacity-50 cursor-default" : ""
          }`}
          onClick={scrollNext}
          disabled={!canScrollNext}
        >
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  );
};

export default OngoingCourseSlider;
