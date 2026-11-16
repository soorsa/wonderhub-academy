import CourseGridAndList from "@/components/landing/courses/CourseGridAndList";
import { PageLoader } from "@/components/utils/Loaders";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <CourseGridAndList />{" "}
    </Suspense>
  );
};

export default page;
