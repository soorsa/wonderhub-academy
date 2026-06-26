import InputField from "@/components/form/InputField";
import { Form, Formik } from "formik";
import { Search } from "lucide-react";
import React from "react";
interface Prop {
  params: CourseFilterParams;
  onSetParams: (params: CourseFilterParams) => void;
}
const SearchBar: React.FC<Prop> = ({ params, onSetParams }) => {
  const initialValues = { query: params.name || "" };
  const submit = (values: typeof initialValues) => {
    onSetParams({
      page: 1,
      name: values.query,
      type: "",
    });
  };
  return (
    <Formik initialValues={initialValues} onSubmit={submit}>
      {() => (
        <Form className="bg-white flex items-center divide-x divide-gray-200 rounded-xl p-1">
          <InputField
            name="query"
            placeholder="Search..."
            className="border-none"
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
