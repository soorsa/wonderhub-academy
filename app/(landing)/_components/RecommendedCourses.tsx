"use client";
import HorizontalCourseSlider from "@/components/landing/HorizontalCourseSlider";
import { Button } from "@/components/ui/button";
import { useGetCourses } from "@/hooks/useQuery";
import { cn } from "cn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RecommendedCourses() {
  const { data, isLoading } = useGetCourses({ page: 1 });
  const courses = data?.results || [];
  return (
    <div className="flex flex-col bg-white w-full mx-auto py-10 sm:py-20">
      <div className="flex flex-col w-full sm:w-6/7 mx-auto">
        <div className="flex justify-between p-4 items-end">
          <div className="">
            <span className="text-xs uppercase sm:tracking-widest font-semibold text-primary">
              for you
            </span>

            <h2 className="font-bold text-lg sm:text-2xl capitalize">
              Recomended for you
            </h2>
          </div>
          <Link href={`/courses`}>
            <Button variant={"ghost"} className={cn("")}>
              <span>See more</span>
              <ArrowRight className="size-3" />
            </Button>
          </Link>
        </div>

        <HorizontalCourseSlider courses={courses} isLoading={isLoading} />
      </div>
    </div>
  );
}
