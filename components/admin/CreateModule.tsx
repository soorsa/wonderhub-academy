"use client";
import InputField from "@/components/form/InputField";
import Button from "@/components/global/Button";
import { useCreateModule } from "@/hooks/useMutation";
import { useGetCourseBySlug } from "@/hooks/useQuery";
import { useModal } from "@/zustand/modal.state";
import { Form, Formik } from "formik";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";
import * as Yup from "yup";
// interface Prop {
//   course: Course;
// }
const CreateModule: React.FC = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetCourseBySlug(slug);
  const course = data;
  const { mutate, isPending } = useCreateModule();
  const modal = useModal();
  if (isLoading || !course) {
    return (
      <div className="h-[40vh] flex justify-center items-center">
        <Loader2 className="animate-spin w-20 h-20 text-gray-300" />
      </div>
    );
  }
  const initialValues = {
    title: "",
    order: 1,
    course: course.slug,
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("required"),
    order: Yup.string().required("required"),
    course: Yup.string().required("required"),
  });
  const submit = (values: typeof initialValues) => {
    mutate(values, {
      onSuccess() {
        modal.close();
      },
    });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnMount
      onSubmit={submit}
    >
      {({ isValid }) => (
        <Form className="space-y-6">
          <div className="space-y-3">
            <InputField name="title" placeholder="Module name" label="Title" />
            <InputField label="Order" name="order" type="number" />
          </div>
          <div className="grid grid-cols-2 gap-1">
            <Button
              label="Cancel"
              className="rounded-lg bg-black!"
              onClick={modal.goBack}
            />
            <Button
              label="Submit"
              type="submit"
              isLoading={isPending}
              disabled={!isValid || isPending}
              className="rounded-lg"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateModule;
