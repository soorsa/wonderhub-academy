"use client";
import { TopCategorySkeleton } from "@/components/skeletons/Skeletons";
import { useGetCategories } from "@/hooks/useQuery";
import { Code2Icon } from "lucide-react";
import Link from "next/link";

const TopCategories = () => {
  const { data, isLoading } = useGetCategories();
  const categories = data?.results || [];
  if (isLoading) {
    return (
      <div className="p-4 sm:p-6 w-full sm:w-[80%] mx-auto">
        <TopCategorySkeleton />
      </div>
    );
  }
  return (
    <div className="space-y-6">
      <h4 className="text-4xl font-bold text-center">Top Categories</h4>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 w-full md:w-[80%] mx-auto">
        {categories.map((category, i) => (
          <Link
            key={i}
            href={`/courses/${category.slug}`}
            className="cursor-pointer flex gap-2 items-center bg-purple-200 text-black px-2 md:px-4 py-4 rounded-xl hover:bg-wonderhub hover:text-white"
          >
            <Code2Icon />
            <div className="flex flex-1 flex-col items-start">
              <p className="text-xs md:text-sm line-clamp-1">{category.name}</p>
              <p className="text-xs md:text-md">
                {category.total_courses} courses
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
