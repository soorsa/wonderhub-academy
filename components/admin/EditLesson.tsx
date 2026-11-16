"use client";
import InputField from "@/components/form/InputField";
import Select from "@/components/form/Select";
import Button from "@/components/global/Button";
import { useEditLesson } from "@/hooks/useMutation";
import { useGetCourseModules } from "@/hooks/useQuery";
import { useModal } from "@/zustand/modal.state";
import { Form, Formik } from "formik";
import { useParams } from "next/navigation";
import React from "react";
import * as Yup from "yup";
interface Prop {
  lesson: Lesson;
}
const EditLesson: React.FC<Prop> = ({ lesson }) => {
  const { mutate, isPending } = useEditLesson(lesson.slug);
  const { slug } = useParams();
  const { data } = useGetCourseModules(slug);
  const modal = useModal();
  const moduleOptions =
    data?.map((module) => ({
      label: module.title,
      value: module.slug,
    })) || [];
  const initialValues = {
    title: lesson.title,
    video_url: lesson.video_url,
    text_content: lesson.text_content,
    order: lesson.order,
    module: lesson.module_obj.slug,
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("required"),
    order: Yup.number().required("required"),
    module: Yup.string().required("required"),
    video_url: Yup.string().required("required"),
    text_content: Yup.string().required("required"),
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
            <Select
              name="module"
              options={moduleOptions}
              placeholder="Select Module"
              label="Module"
            />
            <div className="grid grid-cols-5 gap-1">
              <div className="col-span-4">
                <InputField
                  name="title"
                  placeholder="Lesson Title"
                  label="Title"
                />
              </div>
              <InputField label="Order" name="order" type="number" />
            </div>
            <InputField
              name="video_url"
              placeholder="Video Url"
              label="Video URL"
            />
            <InputField
              name="text_content"
              placeholder="Text"
              label="Text"
              type="textarea"
            />
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

export default EditLesson;
