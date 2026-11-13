import AdminModuleList from "@/components/admin/AdminModuleList";
import CourseDetail from "@/components/landing/course/CourseDetail";

const AdminCourseDetailPage = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <div className="">
        <CourseDetail />
      </div>
      <div className="sm:overflow-y-auto scrollbar-hide">
        <AdminModuleList />
      </div>
    </div>
  );
};

export default AdminCourseDetailPage;
