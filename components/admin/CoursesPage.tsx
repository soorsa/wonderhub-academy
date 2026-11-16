"use client";
import CoursesList from "@/components/admin/CoursesList";
import CreateCourse from "@/components/admin/CreateCourse";
import Button from "@/components/global/Button";
import SearchBar from "@/components/landing/courses/SearchBar";
import { AdminCoursesListskeleton } from "@/components/skeletons/Skeletons";
import { useGetCourses } from "@/hooks/useQuery";
import { useModal } from "@/zustand/modal.state";
import { PlusCircle, SlidersHorizontal } from "lucide-react";
import { Suspense, useState } from "react";

const CoursesPage = () => {
  const [params, setparams] = useState({ page: 1 });
  const modal = useModal();
  const { data, isLoading, isError } = useGetCourses(params);
  const courses = data?.results || [];
  const handleCreate = () => {
    modal.open({
      title: "Create Course",
      content: <CreateCourse />,
      goBack: modal.close,
      size: "w-md",
    });
  };
  return (
    <div>
      <div className="space-y-4 p-4">
        <div className="">
          <h2 className="text-3xl font-semibold">Courses</h2>
          <div className="text-gray-500 text-sm">
            Create, Edit, Delete or manage courses here.
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-1 gap-2 items-center">
            <Suspense>
              <SearchBar
                params={params}
                onSetParams={setparams}
                className="w-full flex-1 rounded-md! sm:py-1"
              />
            </Suspense>
            <Button
              label="Filter"
              icon={<SlidersHorizontal className="w-3 h-3 sm:w-5 sm:h-5" />}
              className="w-fit! px-2 sm:px-4 bg-white! text-black! rounded-md text-xs sm:text-sm"
            />
            {/* <div className="bg-white px-4 flex items-center rounded-md gap-2">
              <SlidersHorizontal />
              <span>Filter</span>
            </div> */}
          </div>
          <Button
            label="Create"
            icon={<PlusCircle className="w-3 h-3 sm:w-5 sm:h-5" />}
            className="w-fit! px-4 rounded-md text-xs sm:text-sm"
            onClick={handleCreate}
          />
        </div>
      </div>
      <div className="bg-white p-4 rounded-md">
        <div className="grid grid-cols-16 bg-linear-to-t from-gray-200 py-2 mb-2">
          <div className=""></div>
          <div className="col-span-6">Name</div>
          <div className="col-span-2">Price</div>
          <div className="col-span-4">Category</div>
          <div className="col-span-2">Level</div>
          <div className="">Action</div>
        </div>
        {isLoading || isError ? (
          <AdminCoursesListskeleton />
        ) : (
          <CoursesList courses={courses} />
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
