"use client";
import InputField from "@/components/form/InputField";
import SearchableSelect from "@/components/form/Select";
import { Button } from "@/components/ui/button";
import { useGetCategories, useGetTopics } from "@/hooks/useQuery";
import { cn } from "cn";
import { Form, Formik } from "formik";
import { SlidersHorizontal, Tag } from "lucide-react";
import React from "react";
const CourseFilterBar: React.FC = () => {
  const { data, isLoading } = useGetCategories();
  const topic_params = {
    page: 1,
    paginate: false,
    category__slug: "",
  };
  const { data: topicData, isLoading: isGettingTopics } =
    useGetTopics(topic_params);

  const categories = data?.results || [];
  const categoryOption = categories.map((item) => ({
    label: item.name,
    value: item.slug,
    icon: (
      <div className="size-6 flex justify-center items-center bg-gray-100 rounded relative">
        <Tag className="size-3" />
      </div>
    ),
  }));
  const topics = data?.results || [];
  const topicOption = topics.map((item) => ({
    label: item.name,
    value: item.slug,
    icon: (
      <div className="size-6 flex justify-center items-center bg-gray-100 rounded relative">
        <Tag className="size-3" />
      </div>
    ),
  }));
  const cat_all = {
    label: "All",
    value: "",
    icon: (
      <div className="size-6 flex justify-center items-center bg-gray-100 rounded relative">
        <Tag className="size-3" />
      </div>
    ),
  };
  const initialValues = {
    search: "",
    category__slug: "",
    min_price: 0,
    max_price: 9999999,
  };
  function submit(values: typeof initialValues) {
    // setFilterParams({
    //   ...values,
    //   page: 1,
    // });
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validateOnMount
        onSubmit={submit}
      >
        {({ resetForm, values }) => {
          const filterTopics = topicOption.filter(
            (item) => item.value === values.category__slug
          );
          return (
            <Form className="space-y-7">
              <div className="">
                <h2 className="text-lg font-bold">Filter Courses</h2>
                <p className="text-xs text-gray-500">
                  Search courses by name, instructor, topics and categories.
                </p>
              </div>
              <div className="space-y-4">
                <InputField
                  name="search"
                  placeholder="Search course..."
                  label="Search"
                  labelClassName="text-xs text-gray-500!"
                  className="bg-gray-200 py-2! rounded-sm"
                />
                <SearchableSelect
                  label="Category"
                  labelClassName="text-xs text-gray-500!"
                  name="category__slug"
                  options={[cat_all, ...categoryOption]}
                  placeholder="Select category"
                  className="py-2! rounded-sm bg-gray-200"
                />
                <SearchableSelect
                  label="topics"
                  labelClassName="text-xs text-gray-500!"
                  name="topic__slug"
                  options={filterTopics}
                  placeholder="Select topic"
                  className="py-2! rounded-sm bg-gray-200"
                />
                <div className="grid grid-cols-2 gap-1.5">
                  <InputField
                    name="min_price"
                    placeholder=""
                    formatMoney
                    label="Min price"
                    labelClassName="text-xs text-gray-500!"
                    className="bg-gray-200 py-2! rounded-sm"
                  />

                  <InputField
                    name="max_price"
                    placeholder=""
                    formatMoney
                    label="Max price"
                    labelClassName="text-xs text-gray-500!"
                    className="bg-gray-200 py-2! rounded-sm"
                  />
                </div>
              </div>
              <div className="flex justify-end sm:justify-between gap-2">
                <Button
                  variant={"ghost"}
                  onClick={() => {
                    resetForm();
                    // Reset external filter params back to default values
                    // setFilterParams({
                    //   search: "",
                    //   category__slug: "",
                    //   min_price: 0,
                    //   max_price: 9999999,
                    //   page: 1,
                    // });
                  }}
                  className={cn("px-4 rounded-sm")}
                >
                  <span>Clear</span>
                </Button>
                <Button type="submit" className={cn("px-4 rounded-sm")}>
                  <SlidersHorizontal className="size-4" />
                  <span>Apply</span>
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CourseFilterBar;
