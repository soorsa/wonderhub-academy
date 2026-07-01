"use client";
import CourseCard from "@/components/landing/courses/CourseCard";
import SearchBar from "@/components/landing/courses/SearchBar";
import { courses } from "@/data/constants";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const CourseListAndFilter = () => {
  const categories = [
    "Web Design",
    "Programming",
    "Software Development",
    "Graphic Design",
    "Music",
  ];
  const [params, setparams] = useState<CourseFilterParams>({
    page: 1,
    ordering: "-created_at",
    name: "",
    type: "",
  });
  const handleCategoryClick = (category: string) => {
    setparams((prev) => ({
      ...prev,
      type: category,
      page: 1,
    }));
  };
  return (
    <div className="px-2 sm:px-8 w-screen space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 ">
        <div className="sm:w-1/3 flex gap-2">
          <div className="flex-1">
            <SearchBar onSetParams={setparams} params={params} />
          </div>
          <div className="bg-white flex gap-1 items-center justify-center sm:hidden p-2 rounded-xl cursor-pointer hover:bg-primary-200">
            <SlidersHorizontal />
            <div className="">Filter</div>
          </div>
        </div>
        <div className="flex sm:w-2/3 items-center text-sm sm:text-base divide-x divide-gray-200">
          <div className="pr-2">
            <div
              onClick={() => handleCategoryClick("")}
              className={`${
                params.type === "" ? "bg-primary text-white" : "bg-gray-200"
              } rounded-lg px-6 py-2 cursor-pointer`}
            >
              All
            </div>
          </div>
          <div className="flex-1 pl-2 overflow-auto scrollbar-hide">
            <div className="flex items-center gap-2 ">
              {categories.map((item, i) => (
                <div
                  onClick={() => handleCategoryClick(item)}
                  className={`${
                    item === params.type
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-black"
                  } rounded-lg px-4 py-2 cursor-pointer text-nowrap`}
                  key={i}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-4 gap-4">
        <div
          className="bg-white rounded-xl h-130 hidden sm:block
        "
        ></div>
        <div className="col-span-3 gap-x-2 gap-y-4 grid sm:grid-cols-3">
          {courses.map((course, i) => (
            <CourseCard course={course} key={i} size="sm" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseListAndFilter;
