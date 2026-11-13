"use client";
import ApiErrorBlock from "@/components/dashboard/ApiError";
import NotFound from "@/components/dashboard/NotFound";
import LinkButton from "@/components/global/LinkButton";
import { ArrowRight, Loader } from "lucide-react";
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

const EnrolledCourseProgressList: React.FC<Props> = ({
  courses,
  isError,
  isLoading,
  listName,
}) => {
  const router = useRouter();

  const renderList = () => {
    return (
      <ul className="space-y-2">
        {courses.map((course, i) => (
          <li
            onClick={() => router.push(`course/enrolled/${course.id}`)}
            key={i}
            className={`p-2 md:p-4 cursor-pointer rounded-xl md:rounded-2xl even:bg-gray-100 flex justify-between items-center gap-2`}
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
            <div className="text-right w-[25%] space-y-2">
              <div className="h-1 bg-primary-200 rounded-full w-full">
                <div
                  className="bg-primary h-full rounded-full"
                  style={{ width: "75%" }}
                />
              </div>
              <LinkButton
                label="Continue"
                className="text-[9px] hover:no-underline! border py-1! border-primary"
                link={`course/enrolled/${course.id}`}
                rightIcon={<ArrowRight />}
              />
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
    <div className="bg-white p-2 md:p-6 rounded-3xl w-full">
      <div className="flex items-center justify-between mb-6 p-2">
        <h4 className="text-lg ">{listName}</h4>
        <button className="text-xs flex items-center gap-2 px-4 py-1.5 border rounded-full border-gray-100 text-gray-600 hover:bg-gray-100">
          See all <ArrowRight />
        </button>
      </div>

      {/* LIST */}
      {renderContent()}
    </div>
  );
};

export default EnrolledCourseProgressList;
