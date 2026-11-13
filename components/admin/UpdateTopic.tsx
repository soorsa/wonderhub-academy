import InputField from "@/components/form/InputField";
import Select from "@/components/form/Select";
import Button from "@/components/global/Button";
import { useUpdateTopic } from "@/hooks/useMutation";
import { useGetCategories } from "@/hooks/useQuery";
import { useModal } from "@/zustand/modal.state";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
interface Prop {
  topic: Topic;
}
const UpdateTopic: React.FC<Prop> = ({ topic }) => {
  const modal = useModal();
  const { data, isLoading } = useGetCategories();
  const categories = data?.results || [];
  const option = categories.map((item) => ({
    label: item.name,
    value: item.slug,
  }));
  const { mutate: update, isPending } = useUpdateTopic();
  const initialValues = {
    name: topic.name || "",
    description: topic.description || "",
    category: topic.category || "",
    slug: topic.slug || "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("required"),
    description: Yup.string().required("required"),
    category: Yup.string().required("required"),
  });
  const submit = (values: typeof initialValues) => {
    update(values, {
      onSuccess() {
        modal.goBack();
      },
    });
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnMount
        onSubmit={submit}
      >
        {({ isValid }) => (
          <Form className="space-y-5">
            <div className="space-y-2">
              {isLoading ? (
                <div className="space-y-1">
                  <div className="h-3 w-1/3 bg-gray-300 rounded-sm animate-pulse"></div>
                  <div className="h-10 w-full rounded-lg bg-gray-300 animate-pulse"></div>
                </div>
              ) : (
                <Select options={option} name="category" label="category" />
              )}
              <InputField name="name" label="name" placeholder="Topic name" />
              <InputField
                name="description"
                placeholder="Enter description here..."
                type="textarea"
                label="description"
              />
            </div>
            <div className="grid grid-cols-2 gap-1">
              <Button
                label="Cancel"
                className="text-white rounded-lg bg-black!"
                onClick={modal.goBack}
              />
              <Button
                label="Save"
                type="submit"
                isLoading={isPending}
                disabled={!isValid || isPending}
                loadingLabel="Saving..."
                className="text-white rounded-lg"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateTopic;
