import ConfirmDelete from "@/components/admin/ConfirmDelete";
import CreateTopic from "@/components/admin/CreateTopic";
import UpdateTopic from "@/components/admin/UpdateTopic";
import Button from "@/components/global/Button";
import Placeholder from "@/components/global/Placeholder";
import { useGetTopics } from "@/hooks/useQuery";
import { useModal } from "@/zustand/modal.state";
import { Pen, PlusCircle, Search, Trash2 } from "lucide-react";
import React from "react";
interface Prop {
  activeCategory: string;
}
const TopicList: React.FC<Prop> = ({ activeCategory }) => {
  const params = {
    category__slug: activeCategory,
    paginate: true,
  };
  const { data } = useGetTopics(params);
  const topics = data?.results || [];
  const modal = useModal();
  const handleCreateTopic = () => {
    modal.open({
      title: "Create Topic",
      content: <CreateTopic category={activeCategory} />,
      goBack: modal.close,
    });
  };

  return (
    <div className="bg-white rounded-md p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-semibold">Topics</h4>
        <div className="">
          <Button
            label="Add new Topic"
            className="text-white text-xs px-4"
            icon={<PlusCircle size={13} />}
            onClick={handleCreateTopic}
          />
        </div>
      </div>
      <div className="border border-gray-200 p-2 rounded-md space-y-2">
        <div className="font-semibold text-base sm:text-lg divide-x divide-gray-200 grid grid-cols-16 bg-linear-to-t from-primary-200 to-white">
          <div className=" px-1"></div>
          <div className="col-span-9 px-1">Name</div>
          <div className="col-span-4 px-1">courses</div>
          <div className="col-span-2 px-1">Action</div>
        </div>
        {topics.length < 1 ? (
          <Placeholder
            icon={<Search size={50} />}
            title="Not found"
            message="unfortunally there are no topics under this category yet, add new topics"
            action={() => {}}
            actionLabel="Add Topics"
          />
        ) : (
          <div className="divide-y divide-gray-200 text-sm">
            {topics.map((item, i) => (
              <div
                className="grid grid-cols-16 py-2 divide-x divide-gray-200"
                key={i}
              >
                <div className=" px-1">{i + 1}.</div>
                <div className="col-span-9 px-1 line-clamp-1">{item.name}</div>
                <div className="col-span-4 px-1">
                  {item.total_courses} courses
                </div>
                <div className="flex items-center gap-1 px-1 col-span-2">
                  <div
                    className="bg-primary-200 cursor-pointer text-primary rounded-md w-fit h-fit p-1 flex justify-center items-center"
                    onClick={() => {
                      modal.open({
                        title: "Update Topic",
                        content: <UpdateTopic topic={item} />,
                        goBack: modal.close,
                      });
                    }}
                  >
                    <Pen size={15} />
                  </div>
                  <div
                    className="bg-red-200 cursor-pointer text-red-500 rounded-md h-fit w-fit p-1 flex justify-center items-center"
                    onClick={() => {
                      modal.open({
                        title: "Delete Topic",
                        content: (
                          <ConfirmDelete
                            slug={item.slug}
                            action="topic"
                            api_path="topics"
                            queries={["topics", "categories"]}
                          />
                        ),
                        goBack: modal.close,
                        size: "sm:w-sm",
                      });
                    }}
                  >
                    <Trash2 size={15} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicList;
