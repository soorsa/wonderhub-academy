"use client";
import { useGetCourseModules } from "@/hooks/useQuery";
import { Tv } from "lucide-react";
import { useParams } from "next/navigation";

const ModuleList = () => {
  const { slug } = useParams();
  const { data } = useGetCourseModules(slug);
  const modules = data || [];

  return (
    <div className="p-6 bg-white rounded-xl">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-semibold text-gray-700">Course Outline</h3>
        <p className="text-xs text-gray-500 mt-2">{`${modules.length} Modules`}</p>
      </div>
      <ul className="space-y-2">
        {modules.map((module, idx) => (
          <li
            key={idx}
            className={`flex items-center justify-between p-3 rounded-lg text-sm hover:bg-gray-100 text-gray-700
`}
          >
            <div className="flex items-center gap-2">
              <Tv className="w-4 h-4 text-gray-500" />
              <div className="flex flex-col">
                <span className="text-xs line-clamp-1">{module.title}</span>
                <span className="text-xs text-gray-500">
                  {module.lecture_count} Lessons
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModuleList;
