"use client";
import AdminModuleLessonList from "@/components/admin/AdminModuleLessonList";
import CreateModule from "@/components/admin/CreateModule";
import Button from "@/components/global/Button";
import { useGetCourseModules } from "@/hooks/useQuery";
import { useModal } from "@/zustand/modal.state";
import { useParams } from "next/navigation";

const AdminModuleList = () => {
  const { slug } = useParams();
  const modal = useModal();
  const { data } = useGetCourseModules(slug);
  const modules = data || [];
  const openCreateModal = () => {
    modal.open({
      title: "Create New Module",
      content: <CreateModule />,
      size: "sm:w-md",
    });
  };
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl p-6 flex items-center sticky top-0 border border-gray-100">
        <h2 className="text-xl font-bold flex-1">Modules & Lessons</h2>
        <div className="">
          <Button
            label="Create Modules"
            className="text-xs px-4 rounded-lg"
            onClick={openCreateModal}
          />
        </div>
      </div>
      {modules.map((module, i) => (
        <AdminModuleLessonList key={i} module={module} />
      ))}
    </div>
  );
};

export default AdminModuleList;
