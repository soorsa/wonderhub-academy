"use client";
import Button from "@/components/global/Button";
import ModuleList from "@/components/landing/course/ModuleList";
import { courses } from "@/data/constants";
import { course } from "@/services/course.service";
import { formatPrice } from "@/utils/format.utils";
import { Award, Book, GraduationCap } from "lucide-react";
import Image from "next/image";
import React from "react";

const CourseSidebar: React.FC = () => {
  const enroll = () => {
    course.enroll(courses[0]);
  };
  return (
    <aside className="space-y-6">
      <div className="bg-white rounded-xl p-6 sticky top-20 shadow">
        <h3 className="text-sm font-semibold text-gray-700 mb-1">
          Buy this Course
        </h3>
        <p className="text-xs text-gray-600 mt-2">
          Great job! You’re on the path to becoming a certified Mastering
          Illustrator.
        </p>
        <div className="flex justify-between items-center mt-5">
          <div className="">{formatPrice(25000)}</div>
          <Button
            label="Buy Now"
            onClick={enroll}
            className="w-fit! text-white px-6 text-sm"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 space-y-2">
        <h3 className="text-sm font-semibold">About the Instructor</h3>
        <div className="flex items-center gap-4 my-4">
          <Image
            height={100}
            width={100}
            src="/images/course.jpg"
            alt="Mentor"
            className="rounded-full w-12 h-12"
          />
          <div>
            <p className="font-semibold text-sm">Simon Simorangkir</p>
            <p className="text-xs">Mentor • Illustrator at Google</p>
          </div>
        </div>
        <p className="text-xs text-gray-600">
          Unlock your creative potential with our Beginner-Level Illustrator
          Course! Are you ready to embark on a journey...
        </p>
        <div className="flex divide divide-x divide-wonderhub-200 mt-5">
          <div className="flex gap-1 px-2 text-xs text-gray-600 items-center">
            <Book size={18} /> 12 courses
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
