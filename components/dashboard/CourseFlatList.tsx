"use client";
import ApiErrorBlock from "@/components/dashboard/ApiError";
import NotFound from "@/components/dashboard/NotFound";
import { formatPrice } from "@/utils/format.utils";
import { ArrowRight, ChevronRightCircle, Loader } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
// types.ts
type Props = {
  courses: Course[];
  listName: string;
  isLoading: boolean;
  isError: boolean;
};

const CourseFlatList: React.FC<Props> = ({
  courses,
  isError,
  isLoading,
  listName,
}) => {
  const router = useRouter();

  const renderList = () => {
    return (
      <ul className="space-y-2">
        {courses.map((course) => (
          <li
            onClick={() => router.push(`course/${course.id}`)}
            key={course.id}
            className={`p-4 cursor-pointer rounded-3xl even:bg-gray-100 flex justify-between items-center gap-2`}
          >
            <div className="w-[75%] flex gap-2">
              <Image
                height={100}
                width={100}
                src="/images/course.jpg"
                alt=""
                className="rounded-lg h-full w-[25%]"
              />
              <div className="flex flex-col gap-1 py-1">
                <p className="font-semibold text-gray-700 text-xs md:text-sm line-clamp-1">
                  {course.title}
                </p>
                <p className="text-[11px] text-gray-500 line-clamp-1">
                  {" "}
                  {course.desc}
                </p>
              </div>
            </div>
            <div className="text-right flex flex-col items-end w-[25%] space-y-2">
              <p className="text-sm">{formatPrice(course.price)}</p>
              <ChevronRightCircle className="h-7 w-7 text-gray-500" />
            </div>
          </li>
        ))}
      </ul>
    );
  };

  const renderContent = () => {
    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      return (
        <div className="text-center py-4">
          <ApiErrorBlock />
        </div>
      );
    }

    if (courses.length === 0) {
      return (
        <div className="text-center py-4">
          <NotFound text="No Courses Found." />
        </div>
      );
    }

    return renderList();
  };

  return (
    <div className="bg-white p-6 rounded-3xl w-full">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-lg ">{listName}</h4>
        <button className="text-xs flex items-center gap-2 px-4 py-1.5 border rounded-full border-gray-300 text-gray-600 hover:bg-gray-100">
          See all <ArrowRight />
        </button>
      </div>

      {/* LIST */}
      {renderContent()}
    </div>
  );
};

export default CourseFlatList;
