"use client";
import ModuleList from "@/components/landing/course/ModuleList";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useGetCourseBySlug } from "@/hooks/useQuery";
import { getInitials } from "@/lib/utils";
import { courseService } from "@/services/course.service";
import { formatPrice } from "@/utils/format.utils";
import { cn } from "cn";
import { ArrowRight, Award, Book, GraduationCap } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";

const CourseSidebar: React.FC = () => {
  const { slug } = useParams();
  const { data: course, isLoading } = useGetCourseBySlug(slug);
  const undiscountedPrice = course?.undiscounted_price || 0;
  const salesPrice = course?.price || 0;
  const enroll = () => {
    if (course) {
      courseService.enroll(course);
    }
  };
  return (
    <aside className="space-y-6">
      <div className="bg-white rounded-xl p-6 sticky z-40 top-20 shadow">
        <h3 className="text-sm font-semibold capitalize text-gray-700 mb-1">
          {course?.sale_header}
        </h3>
        <p className="text-xs text-gray-600 mt-2">{course?.sales_message}</p>
        <div className="flex flex-wrap gap-4 justify-between items-center mt-5">
          <div className="flex items-baseline gap-1">
            <div className="font-bold text-xl">{formatPrice(salesPrice)}</div>
            {undiscountedPrice > salesPrice && (
              <div className="text-sm line-through text-gray-500">
                {formatPrice(undiscountedPrice || 0)}
              </div>
            )}
          </div>
          <Button
            className={cn("px-5 capitalize")}
            size={"lg"}
            onClick={enroll}
          >
            <span>Enroll Now</span>
            <ArrowRight />
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 space-y-2">
        <h3 className="text-sm font-semibold">About the Instructor</h3>
        <div className="flex items-center gap-2 my-4">
          <Avatar size="lg">
            <AvatarImage
              src={course?.instructor.job_title}
              alt={course?.instructor.first_name}
            />
            <AvatarFallback className={cn("uppercase")}>
              {getInitials(
                `${course?.instructor.first_name} ${course?.instructor.last_name}`
              )}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold capitalize text-sm">
              {course?.instructor.first_name} {course?.instructor.last_name}
            </p>
            <p className="text-xs text-slate-500">
              Mentor •{" "}
              {course?.instructor.job_title || "Instructor at wonderHUB"}
            </p>
          </div>
        </div>
        <p className="text-xs text-gray-600">
          {course?.instructor.bio || "..."}
        </p>
        <div className="flex divide divide-x divide-wonderhub-200 mt-5">
          <div className="flex gap-1 px-2 text-xs text-gray-600 items-center">
            <Book size={18} /> {12} courses
          </div>
          <div className="flex gap-1 px-2 text-xs text-gray-600 items-center">
            <GraduationCap size={18} /> 134 students
          </div>
          <div className="flex gap-1 px-2 text-xs text-gray-600 items-center">
            <Award size={18} /> 3 Awards
          </div>
        </div>
      </div>
      <ModuleList />
    </aside>
  );
};

export default CourseSidebar;
