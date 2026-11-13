import ConfirmDelete from "@/components/admin/ConfirmDelete";
import CreateLesson from "@/components/admin/CreateLesson";
import EditLesson from "@/components/admin/EditLesson";
import Placeholder from "@/components/global/Placeholder";
import { useGetModuleLessons } from "@/hooks/useQuery";
import { useModal } from "@/zustand/modal.state";
import { Book, Pen, Plus, SearchAlert, Trash2, Tv } from "lucide-react";
import React from "react";
interface Prop {
  module: Modules;
}
const AdminModuleLessonList: React.FC<Prop> = ({ module }) => {
  const { data, isLoading } = useGetModuleLessons(module.slug);
  const lessons = data || [];
  const modal = useModal();
  const openCreateLesson = () => {
    modal.open({
      title: "Create New Lesson",
      content: <CreateLesson module={module} />,
      size: "sm:w-md",
    });
  };
  const deleteModuleModal = () => {
    modal.open({
      title: "Delete Module",
      content: (
        <ConfirmDelete
          slug={module.slug}
          api_path="modules"
          action="module"
          queries={["modules"]}
        />
      ),
      size: "sm:w-sm",
    });
  };
  return (
    <div className="p-6 bg-white rounded-xl">
      <div className=" mb-3">
        <div className="space-y-2">
          <div className="flex items-center gap-2 ">
            <h3 className="font-semibold ">
              Module {module.order}: {module.title}
            </h3>
            <button className="h-6 w-6 rounded-md flex justify-center items-center bg-indigo-100 text-indigo-500">
              <Pen className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <div className="text-xs text-gray-500 h-6 bg-gray-200 px-2 gap-0.5 rounded-sm flex items-center justify-center">
              <Book className="w-4 h-4" />
              {`${lessons.length} Lessons`}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={openCreateLesson}
                className="bg-primary h-6 w-fit px-2 rounded-sm text-white flex gap-0.5 justify-center items-center"
              >
                <Plus className="w-4 h-4" />{" "}
                <span className="text-xs">New lesson</span>
              </button>
              <button
                onClick={deleteModuleModal}
                className="bg-red-100 h-6 w-fit px-2 rounded-sm text-red-500 flex gap-0.5 justify-center items-center"
              >
                <Trash2 className="w-4 h-4" />
                <span className="text-xs">Delete module</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="space-y-1">
          {[1, 2, 3, 4].map((i) => (
            <div
              className="h-10 w-full bg-gray-50 even:bg-gray-100 animate-pulse rounded-lg"
              key={i}
            />
          ))}
        </div>
      )}
      {lessons.length > 0 ? (
        <ul className="space-y-1">
          {lessons.map((lesson, idx) => (
            <li
              key={idx}
              className={`flex items-center gap-2 p-2 rounded-lg text-sm even:bg-gray-100 hover:bg-gray-100 text-gray-700 cursor-pointer
`}
            >
              <Tv className="w-4 h-4 text-gray-500" />
              <div className="flex flex-col flex-1">
                <span className="text-xs line-clamp-1">{lesson.title}</span>
                <span className="text-xs text-gray-500">{lesson.duration}</span>
              </div>
              <div className="flex gap-1 items-center">
                <div
                  className="bg-indigo-100 text-indigo-500 h-6 w-6 flex justify-center items-center rounded-md"
                  onClick={() => {
                    modal.open({
                      title: "Edit Lesson",
                      content: <EditLesson lesson={lesson} />,
                      size: "sm:w-md",
                    });
                  }}
                >
                  <Pen className="w-3.5 h-3.5" />
                </div>
                <div
                  className="bg-red-100 text-red-500 h-6 w-6 flex justify-center items-center rounded-md"
                  onClick={() => {
                    modal.open({
                      title: "Delete Lessoon",
                      content: (
                        <ConfirmDelete
                          action="lesson"
                          api_path="lessons"
                          slug={lesson.slug}
                          queries={["lessons", "module-lessons"]}
                        />
                      ),
                      size: "sm:w-sm",
                    });
                  }}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <Placeholder
          title="No Lessons"
          message="No lesson under this module yet."
          icon={<SearchAlert size={30} />}
          action={openCreateLesson}
          actionLabel="Add Lesson"
        />
      )}
    </div>
  );
};

export default AdminModuleLessonList;
