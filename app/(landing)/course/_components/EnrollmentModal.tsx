import { formatPrice } from "@/utils/format.utils";
import React from "react";
interface Prop {
  course: Course;
}
const EnrollmentModal: React.FC<Prop> = ({ course }) => {
  return (
    <div>
      <div className="">
        <div className="text-2xl font-bold">Course Enrollment</div>
      </div>
      <div className="bg-gray-100 p-2 sm:p-4 rounded-md">
        <div className="py-2 font-semibold">Course Details:</div>
        <div className="grid grid-cols-2 text-sm divide-x divide-gray-300">
          <div className=" divide-y divide-gray-300">
            <div className="py-1">Course:</div>
            <div className="py-1">No. of lessons:</div>
            <div className="py-1">Tutor:</div>
            <div className="py-1 font-semibold">Price:</div>
          </div>
          <div className="text-right divide-y divide-gray-300">
            <div className="py-1">{course.title}</div>
            <div className="py-1">{course.total_lectures}</div>
            <div className="py-1">{course.instructor}</div>
            <div className="py-1 font-semibold">
              {formatPrice(course.price)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentModal;
