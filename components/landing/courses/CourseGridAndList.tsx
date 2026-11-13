"use client";
import Placeholder from "@/components/global/Placeholder";
import CourseCard from "@/components/landing/courses/CourseCard";
import { CourseCardSkeleton } from "@/components/skeletons/Skeletons";
import { useGetCourses } from "@/hooks/useQuery";
import { GraduationCap } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";
// import { courses } from "@/data/constants";

const CourseGridAndList = () => {
  const { topic, category } = useParams();
  const searchParams = useSearchParams();
  const filterParams = {
    title: searchParams.get("title"),
    page: 1,
    topic__slug: topic ? topic : null,
  };
  const { data, isLoading } = useGetCourses(filterParams);
  const courses = data?.results || [];
  if (isLoading) {
    return (
      <>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <CourseCardSkeleton key={i} />
        ))}
      </>
    );
  }
  if (courses.length < 1) {
    return (
      <div className="col-span-3">
        <Placeholder
          title="No Courses Found"
          icon={<GraduationCap size={40} />}
          message="There are no  courses under this topic."
        />
      </div>
    );
  }
  return (
    <>
      {courses.map((course, i) => (
        <CourseCard course={course} key={i} size="sm" />
      ))}
    </>
  );
};

export default CourseGridAndList;
