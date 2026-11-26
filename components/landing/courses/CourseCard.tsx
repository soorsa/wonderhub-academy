import { formatPrice } from "@/utils/format.utils";
import { BookText, UserCircle, Users2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
      } flex flex-col bg-white h-fit rounded-xl overflow-hidden hover:shadow-lg`}
    >
      <Link
        href={`/courses/${course.topic[0].category}/${course.topic[0].slug}/${course.slug}`}
        className="h-37.5 w-full overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-black/5 z-10" />
        <Image
          src={course.thumbnail || "/images/course.jpg"}
          fill
          className="object-cover"
          alt={course.title}
        />
      </Link>
      <div className="flex flex-col gap-2 p-4">
        <div className="">
          <Link
            href={`/courses/${course.topic[0].category}/${course.topic[0].slug}/${course.slug}`}
            className="line-clamp-1 font-bold"
          >
            {course.title}
          </Link>
          <div className="flex justify-between items-end text-xs text-gray-600">
            <div className="flex gap-1 items-center">
              <UserCircle size={18} />
              <div className="capitalize">{`${course.instructor.first_name} ${course.instructor.last_name}`}</div>
            </div>
          </div>
        </div>
        <p className="text-xs font-light line-clamp-2 md:line-clamp-3">
          {" "}
          {course.description}{" "}
        </p>
        <div className="flex justify-between w-full text-xs text-gray-600 my-2">
          <div className="flex gap-1 items-center">
            <Users2 size={18} /> {(course.number_of_students || 0) + 8} students
          </div>
          <div className="flex gap-1 items-center">
            <BookText size={18} /> {course.total_lectures || 0} Lessons
          </div>
        </div>
        <div className="space-x-1.5">
          <span className="text-lg font-bold" title={formatPrice(course.price)}>
            {formatPrice(course.price)}
          </span>
          {course.undiscounted_price > course.price && (
            <span className="line-through text-slate-500 text-sm font-normal">
              {formatPrice(course.undiscounted_price)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
