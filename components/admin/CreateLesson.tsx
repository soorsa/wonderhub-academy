"use client";
import InputField from "@/components/form/InputField";
import Button from "@/components/global/Button";
import { useCreateLesson } from "@/hooks/useMutation";
import { useModal } from "@/zustand/modal.state";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
interface Prop {
  module: Modules;
}
const CreateLesson: React.FC<Prop> = ({ module }) => {
  const { mutate, isPending } = useCreateLesson();
  const modal = useModal();
  const initialValues = {
    title: "",
    video_url: "",
    text_content: "",
    order: 1,
    module: module.slug,
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("required"),
    order: Yup.string().required("required"),
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

export default CreateLesson;
