/* eslint-disable react/no-unescaped-entities */
"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetCourseBySlug } from "@/hooks/useQuery";
import { cn, getInitials } from "@/lib/utils";
import { CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
const CourseDetail: React.FC = () => {
  const { slug } = useParams();
  const { data: course, isLoading } = useGetCourseBySlug(slug);
  return (
    <>
      <div className="space-y-4">
        <div className="w-full aspect-video rounded-xl overflow-hidden relative">
          <Image
            src={course?.thumbnail || "/images/course.jpg"}
            alt={course?.title || ""}
            fill
          />
          <div className="bg-black/5 absolute inset-0"></div>
        </div>

        <div className="bg-white p-6 rounded-xl space-y-4">
          <div className="space-y-2">
            <div className="">
              <div className="flex items-center gap-1 bg-purple-600/10 px-3 py-1 border border-purple-600/5 rounded-sm w-fit text-xs text-purple-600">
                <Sparkles className="size-3" />
                <div className="">
                  {(course?.number_of_students || 0) + 8} students have enrolled
                  for this course
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                {course?.title}
              </h1>
            </div>
            <div className="flex items-center gap-1">
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
                <p className="font-semibold capitalize">
                  {course?.instructor.first_name} {course?.instructor.last_name}
                </p>
                <p className="text-xs text-slate-500">
                  Mentor •{" "}
                  {course?.instructor.job_title || "Instructor at wonderHUB"}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-lg">About This Course</h2>
            <p className="text-gray-600 text-sm">{course?.description}</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-sm">What You'll Learn:</h3>
            <ul className="list-inside text-sm text-gray-600 space-y-1">
              {course?.benefits.map((benefit, i) => (
                <li className="flex gap-1 items-center" key={i}>
                  <CheckCircle2 className="h-4 w-4" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm">This Course Suits:</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {course?.suitable_for.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
