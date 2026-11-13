"use client";
import ConfirmDelete from "@/components/admin/ConfirmDelete";
import CreateCategory from "@/components/admin/CreateCategory";
import UpdateCategory from "@/components/admin/UpdateCategory";
import Placeholder from "@/components/global/Placeholder";
import { AdminCategorySkeleton } from "@/components/skeletons/Skeletons";
import { useGetCategories } from "@/hooks/useQuery";
import { useModal } from "@/zustand/modal.state";
import useEmblaCarousel from "embla-carousel-react";
import {
  Book,
  Check,
  ChevronLeft,
  ChevronRight,
  PenLine,
  Search,
  Trash2,
} from "lucide-react";
import React, { useEffect, useState } from "react";
interface Prop {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}
const CategoriesTab: React.FC<Prop> = ({
  activeCategory,
  setActiveCategory,
}) => {
  const modal = useModal();
  const { data, isLoading, isError } = useGetCategories();
  const categories = data?.results || [];
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!embla) return;

    const updateButtons = () => {
      setCanScrollPrev(embla.canScrollPrev());
      setCanScrollNext(embla.canScrollNext());
    };
    updateButtons();
    embla.on("init", updateButtons);
    embla.on("select", updateButtons);
    embla.on("reInit", updateButtons);
  }, [embla]);

  const scrollPrev = () => embla?.scrollPrev();
  const scrollNext = () => embla?.scrollNext();
  const handleCreateCategory = () => {
    modal.open({
      title: "Create Category",
      content: <CreateCategory />,
      goBack: modal.close,
    });
  };
  const handleDelete = (category: Category) => {
    modal.open({
      title: "Delete Category",
      content: (
        <ConfirmDelete
          slug={category.slug}
          action="category"
          api_path="categories"
          queries={["categories", "topics"]}
        />
      ),
      goBack: modal.close,
      size: "sm:w-sm",
    });
  };

  const CategoryList = () => {
    if (categories.length < 1) {
      return (
        <Placeholder
          title="No categories"
          icon={<Search size={50} />}
          message="No categories created yet... you can add new categories below"
          action={handleCreateCategory}
          actionLabel="Add new Category"
        />
      );
    }
    return (
      <div className="flex gap-2">
        {categories.map((item, i) => (
          <div
            onClick={() => setActiveCategory(item.slug)}
            className={`relative p-5 flex flex-[0_0_80%] sm:flex-[0_0_40%] gap-2 group border border-primary-200 ${
              activeCategory === item.slug
                ? "bg-primary text-white"
                : "hover:text-white bg-white hover:bg-primary/70"
            } rounded-md cursor-pointer`}
            key={i}
          >
            {activeCategory === item.slug && (
              <div
                onClick={() => setActiveCategory("")}
                className="bg-primary-200/50 text-primary h-8 w-8 flex justify-center items-center rounded-full absolute top-2 right-2"
              >
                <Check />
              </div>
            )}
            <div
              className={`${
                activeCategory === item.slug
                  ? "bg-primary-200/20"
                  : "bg-primary-200 group-hover:bg-primary-200/20"
              } h-10 w-10 flex items-center justify-center rounded-full`}
            >
              <Book />
            </div>
            <div className="flex-1 space-y-2">
              <div className="text-2xl sm:text-4xl font-bold">{item.name}</div>
              <div
                className={`line-clamp-3 text-sm sm:text-base ${
                  activeCategory === item.slug
                    ? "text-gray-300"
                    : "text-gray-600 group-hover:text-gray-300"
                }`}
              >
                {item.description}
              </div>
              <div className="flex items-center justify-end gap-2 text-sm mt-2">
                <button
                  className="flex items-center justify-center text-indigo-500 bg-indigo-200 h-7 w-7 rounded-md"
                  onClick={() => {
                    modal.open({
                      title: "Update Category",
                      content: <UpdateCategory category={item} />,
                      goBack: modal.close,
                    });
                  }}
                >
                  <PenLine className="w-5 h-5" />
                </button>
                <button
                  className="flex items-center justify-center text-red-500 h-7 w-7 rounded-md bg-red-200"
                  onClick={() => handleDelete(item)}
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        {isLoading || isError ? <AdminCategorySkeleton /> : CategoryList()}
      </div>
      {canScrollPrev && (
        <button
          className={`absolute left-2 top-1/2 -translate-y-1/2 bg-primary-200 hover:bg-white p-2 rounded-full shadow-md ${
            !canScrollPrev ? "opacity-50 cursor-default" : ""
          }`}
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {canScrollNext && (
        <button
          className={`absolute right-2 top-1/2 -translate-y-1/2 bg-primary-200 hover:bg-white p-2 rounded-full shadow ${
            !canScrollNext ? "opacity-50 cursor-default" : ""
          }`}
          onClick={scrollNext}
          disabled={!canScrollNext}
        >
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  );
};

export default CategoriesTab;
