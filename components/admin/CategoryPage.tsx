"use client";
import CategoriesTab from "@/components/admin/CategoriesTab";
import CreateCategory from "@/components/admin/CreateCategory";
import TopicList from "@/components/admin/TopicList";
import Button from "@/components/global/Button";
import { useModal } from "@/zustand/modal.state";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

const CategoryPage = () => {
  const [activeCategory, setactiveCategory] = useState("");
  const modal = useModal();
  const handleCreateCategory = () => {
    modal.open({
      title: "Create Category",
      content: <CreateCategory />,
      goBack: modal.close,
    });
  };

  return (
    <div className="space-y-6 py-6">
      <div className="bg-white rounded-md p-4">
        <div className="flex flex-col sm:flex-row justify-between gap-2 sm:items-start">
          <div className="flex-1">
            <h2 className="text-4xl font-semibold">Categories</h2>
            <div className="text-gray-500">
              Select category to edit, delete or update topics.
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              icon={<PlusCircle size={20} />}
              label="Create new category"
              className="px-4 text-white w-fit!"
              onClick={handleCreateCategory}
            />
          </div>
        </div>
        <CategoriesTab
          activeCategory={activeCategory}
          setActiveCategory={setactiveCategory}
        />
      </div>
      <TopicList activeCategory={activeCategory} />
    </div>
  );
};

export default CategoryPage;
