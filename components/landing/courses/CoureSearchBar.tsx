"use client";
import SearchBar from "@/components/landing/courses/SearchBar";
import { useGetTopics } from "@/hooks/useQuery";
import { SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const CourseSearchBar = () => {
  // const { data, isLoading } = useGetAllTopics();
  const { topic, category } = useParams();
  const topic_params = {
    page: 1,
    paginate: false,
    category__slug: category,
  };
  const { data, isLoading } = useGetTopics(topic_params);
  const [params, setparams] = useState<CourseFilterParams>({
    page: 1,
    ordering: "-created_at",
    title: "",
    type: "",
  });
  const topics: Topic[] = (data as unknown as Topic[]) || [];

  // const handleCategoryClick = (category: string) => {
  //   setparams((prev) => ({
  //     ...prev,
  //     type: category,
  //     page: 1,
  //   }));
  // };
  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 ">
        <div className="sm:w-1/3 flex gap-2">
          <div className="flex-1">
            <SearchBar
              onSetParams={setparams}
              params={params}
              className="py-2"
            />
          </div>
          <div className="bg-white flex gap-1 items-center justify-center sm:hidden p-2 rounded-xl cursor-pointer hover:bg-primary-200">
            <SlidersHorizontal />
            <div className="">Filter</div>
          </div>
        </div>
        <div className="flex sm:w-2/3 items-center text-sm sm:text-base divide-x divide-gray-200">
          <div className="pr-2">
            <Link
              href={"/courses"}
              // onClick={() => handleCategoryClick("")}
              className={`${
                !topic
                  ? "bg-primary text-white"
                  : "bg-white border border-gray-100"
              } rounded-lg px-6 py-2 cursor-pointer`}
            >
              All
            </Link>
          </div>
          <div className="flex-1 pl-2 overflow-auto scrollbar-hide">
            {isLoading ? (
              <div className="flex item-center gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    className="bg-white/70 min-w-30 h-10 rounded-lg animate-pulse"
                    key={i}
                  ></div>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-2 ">
                {topics.map((item, i) => (
                  <Link
                    href={`/courses/${item.category}/${item.slug}`}
                    // onClick={() => handleCategoryClick(item)}
                    className={`${
                      item.slug === topic
                        ? "bg-primary text-white"
                        : "bg-white/70 border border-gray-100 text-black"
                    } rounded-lg px-4 py-2 cursor-pointer text-nowrap`}
                    key={i}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSearchBar;
