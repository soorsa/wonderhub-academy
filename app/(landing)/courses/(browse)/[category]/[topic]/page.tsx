import CourseGridAndList from "@/components/landing/courses/CourseGridAndList";
import { CourseCardSkeleton } from "@/components/skeletons/Skeletons";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense
      fallback={
        <>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <CourseCardSkeleton key={i} />
          ))}
        </>
      }
    >
      <CourseGridAndList />{" "}
    </Suspense>
  );
};

export default page;
