import { Breadcrumb } from "@/components/landing/course/BreadCrum";
import CourseDetail from "@/components/landing/course/CourseDetail";
import CourseSidebar from "@/components/landing/course/CourseSideBar";

const coursedetailpage = () => {
  return (
    <div className="min-h-screen p-2 sm:p-8 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-2/3 space-y-6 h-full">
        <Breadcrumb />
        <CourseDetail />
      </div>
      <div className="w-full lg:w-1/3 relative">
        <CourseSidebar />
      </div>
    </div>
  );
};

export default coursedetailpage;
