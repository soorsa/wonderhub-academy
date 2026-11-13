"use client";
import { useGetCourseBySlug } from "@/hooks/useQuery";
import { useParams } from "next/navigation";

const BreadCrum = () => {
  const params = useParams();
  const slug = params.slug;
  const { data } = useGetCourseBySlug(slug);
  return (
    <nav className="text-sm text-gray-500 space-x-1">
      <span>Course</span>
      <span>{">"}</span>
      <span className="text-gray-800 font-medium">{data?.title}</span>
    </nav>
  );
};

export default BreadCrum;
