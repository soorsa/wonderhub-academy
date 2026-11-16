"use client";
import InputField from "@/components/form/InputField";
import { Form, Formik } from "formik";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
interface Prop {
  params: CourseFilterParams;
  onSetParams: (params: CourseFilterParams) => void;
  className?: string;
}
const SearchBar: React.FC<Prop> = ({ params, onSetParams, className }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const initialValues = { query: params.search || "" };
  const submit = (values: typeof initialValues) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    // Set/update search params
    if (values.query.trim()) {
      newSearchParams.set("search", values.query.trim());
    } else {
      newSearchParams.delete("search");
    }

    // Reset pagination when searching
    newSearchParams.set("page", "1");

    // Update your local/filter state
    onSetParams({
      page: 1,
      search: values.query,
    });

    // Update URL without reloading the page
    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={submit}>
      {() => (
        <Form
          className={`bg-white flex items-center divide-x divide-gray-200 rounded-xl p-1 ${className}`}
        >
          <InputField
            name="query"
            placeholder="Search..."
            className="border-none py-1!"
          />
          <button type="submit" className="px-2">
            <Search />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
