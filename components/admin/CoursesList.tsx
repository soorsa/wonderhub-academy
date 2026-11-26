import ConfirmDelete from "@/components/admin/ConfirmDelete";
import EditCourse from "@/components/admin/EditCourse";
import Placeholder from "@/components/global/Placeholder";
import { formatPrice } from "@/utils/format.utils";
import { useModal } from "@/zustand/modal.state";
import { Pen, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
interface Prop {
  courses: Course[];
}
const CoursesList: React.FC<Prop> = ({ courses }) => {
  const modal = useModal();

  if (courses.length < 1) {
    return (
      <Placeholder
        title="No Courses"
        message="No course created yet, add new courses."
        action={() => {}}
        actionLabel="Create course"
      />
    );
  }
  const renderLevel = (level: string) => {
    if (level === "beginner") {
      return (
        <div className="bg-blue-50 text-blue-500 p-0.5 text-center rounded-sm truncate">
          {level}
        </div>
      );
    }
    if (level === "advanced") {
      return (
        <div className="bg-red-50 text-red-500 p-0.5 text-center rounded-sm truncate">
          {level}
        </div>
      );
    }
    if (level === "intermediate") {
      return (
        <div className="bg-orange-50 text-orange-500 p-0.5 text-center rounded-sm truncate">
          {level}
        </div>
      );
    }
  };
  return (
    <div className="divide-y divide-gray-200 ">
      {courses.map((course, i) => (
        <div
          className="grid grid-cols-16 p-1 divide-x divide-gray-200 items-center"
          key={i}
        >
          <div className=" px-2">{i + 1}.</div>
          <Link
            href={`/admin/courses/${course.slug}`}
            className="hover:underline underline-offset-2 hover:text-indigo-500 col-span-6 px-2 line-clamp-1 truncate"
          >
            {course.title}
          </Link>
          <div className="col-span-2 px-2 text-sm line-clamp-1 truncate">
            {formatPrice(course.price)}
          </div>
          <div className="col-span-4 px-2 text-[10px] text-gray-500 flex flex-wrap gap-0.5">
            {course.topic
              ? course.topic.slice(0, 2).map((topic) => (
                  <div
                    key={topic.id}
                    className="bg-gray-200 py-0.5 px-3 rounded-sm line-clamp-1"
                  >
                    {topic.name}
                  </div>
                ))
              : "No topics"}
          </div>
          <div className="col-span-2 px-2 text-xs font-light capitalize">
            {renderLevel(course.level)}
          </div>
          <div className="flex items-center gap-1 px-2">
            <div
              className="bg-primary-200 cursor-pointer text-primary rounded-md w-fit h-fit p-1 flex justify-center items-center"
              onClick={() => {
                modal.open({
                  title: "Edit this Course",
                  content: <EditCourse course={course} />,
                  goBack: modal.close,
                  size: "w-md",
                });
              }}
            >
              <Pen size={15} />
            </div>
            <div
              className="bg-red-200 cursor-pointer text-red-500 rounded-md w-fit h-fit p-1 flex justify-center items-center"
              onClick={() => {
                modal.open({
                  title: "Delete this Course",
                  content: (
                    <ConfirmDelete
                      slug={course.slug}
                      action="course"
                      api_path="courses"
                      queries={["courses", "topics"]}
                    />
                  ),
                  goBack: modal.close,
                  size: "w-sm",
                });
              }}
            >
              <Trash2 size={15} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesList;
