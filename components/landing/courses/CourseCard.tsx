import LinkButton from "@/components/global/LinkButton";
import { formatPrice } from "@/utils/format.utils";
import { BookText, Heart, UserCircle, Users2 } from "lucide-react";
import Image from "next/image";
import React from "react";
type Props = {
  course: Course;
  size?: "sm" | "md" | "lg";
};
const CourseCard: React.FC<Props> = ({ course, size = "sm" }) => {
  return (
    <div
      className={`relative ${size === "sm" && "min-w-55"} ${
        size === "md" && "min-w-70"
      } ${
        size === "lg" && "min-w-90"
      } flex flex-col bg-white p-2 md:p-4 rounded-2xl hover:shadow-lg`}
    >
      <button
        type="button"
        className="group bg-black/50 rounded-full absolute top-5 right-5 p-2 text-white/50 hover:text-white"
      >
        <Heart className="" />
        <div className="absolute z-50 hidden -top-8 right-0 w-25 group-hover:block px-3 py-2 text-[8px] font-medium bg-gray-900/50 duration-300 rounded-lg shadow-xs">
          Add to Favourites
        </div>
      </button>
      <Image
        width={100}
        height={100}
        src="/images/course.jpg"
        className="h-37.5 w-full rounded-lg"
        alt=""
      />
      <div className="flex flex-col gap-2 pt-4">
        <h3 className="line-clamp-1 font-bold">{course.title}</h3>
        <div className="flex justify-between items-end text-xs text-gray-600">
          <div className="flex gap-1 items-center">
            <UserCircle size={18} />
            <div className="">{course.instructor}</div>
          </div>
          <div className="flex gap-1 items-center">
            <BookText size={18} /> 12 Lessons
          </div>
        </div>
        <p className="text-xs line-clamp-2 md:line-clamp-3"> {course.desc} </p>
        <div className="flex justify-between w-full text-xs text-gray-600 my-2">
          <div className="flex gap-1 items-center">
            <Users2 size={18} /> 30 students
          </div>
          <div className="flex">
            <span>⭐⭐⭐⭐☆</span>
            (4.5)
          </div>
        </div>
        <LinkButton
          label="Enroll at"
          className=" bg-primary text-white hover:no-underline!"
          link={`/dashboard/course/${course.slug}`}
          rightIcon={
            <span className="text-sm ml-5 md:ml-10">
              {formatPrice(course.price)}
            </span>
          }
        />
      </div>
    </div>
  );
};

export default CourseCard;
