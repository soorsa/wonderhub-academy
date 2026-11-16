"use client";
import CourseCard from "@/components/landing/courses/CourseCard";
import { CourseCardSkeleton } from "@/components/skeletons/Skeletons";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
interface Prop {
  courses: Course[];
  isLoading: boolean;
}
const HorizontalCourseSlider: React.FC<Prop> = ({ courses, isLoading }) => {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 2,
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
    embla.on("select", updateButtons);
    embla.on("reInit", updateButtons);
  }, [embla]);

  const scrollPrev = () => embla?.scrollPrev();
  const scrollNext = () => embla?.scrollNext();

  if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-4 p-2">
        {[1, 2, 3, 4].map((i) => (
          <CourseCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-full mx-auto p-2 md:p-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex space-x-1 p-2">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} size="lg" />
          ))}
        </div>
      </div>

      {canScrollPrev && (
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-4 rounded-full shadow-md"
          onClick={scrollPrev}
        >
          <ChevronLeft size={20} />
        </button>
      )}
      {canScrollNext && (
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-4 rounded-full shadow-md"
          onClick={scrollNext}
        >
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  );
};

export default HorizontalCourseSlider;
