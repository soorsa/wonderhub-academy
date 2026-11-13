import Checkbox from "@/components/form/CheckBox";
import InputField from "@/components/form/InputField";
import ListInputField from "@/components/form/ListInput";
import RadioGroup from "@/components/form/RadioGroup";
import Button from "@/components/global/Button";
import { useCreateCourse } from "@/hooks/useMutation";
import { useGetAllTopics } from "@/hooks/useQuery";
import { useModal } from "@/zustand/modal.state";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const CreateCourse = () => {
  const { data, isLoading } = useGetAllTopics();
  const { mutate, isPending } = useCreateCourse();
  const modal = useModal();
  const initialValues = {
    title: "",
    // instructor: user?.id,
    description: "",
    benefits: [],
    topic: [],
    suitable_for: [],
    level: "beginner",
    price: 0,
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("required"),
    // instructor: Yup.number().required("required"),
    description: Yup.string().min(200).required("required"),
    level: Yup.string().required("required"),
    price: Yup.number().required("required"),
    benefits: Yup.array()
      .of(Yup.string().trim().min(1).required("required"))
      .max(12, "Too many benefits")
      .min(1, "Add at least one benefit"),
    topic: Yup.array()
      .of(Yup.string().trim().min(1).required("required"))
      .max(12, "Too many topics")
      .min(1, "Add at least one topic"),
  });
  const levelOptions = [
    { label: "beginner", value: "beginner" },
    { label: "intermediate", value: "intermediate" },
    { label: "advanced", value: "advanced" },
  ];
  const topics = data || [];
  const options = topics.map((i) => ({ value: i.slug, label: i.name }));
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
            <InputField name="title" placeholder="Course Title" label="Title" />
            <RadioGroup
              label="Select Level:"
              options={levelOptions}
              name="level"
              className=""
              orientation="horizontal"
              optionClassName="min-w-[calc(30%)]"
              size="xs"
            />
            <Checkbox
              type="multiple"
              options={options}
              name="topic"
              label="Select Topics:"
            />
            <InputField label="Price" name="price" type="number" formatMoney />
            <ListInputField
              name="benefits"
              label="What You'll Learn:"
              addButtonText="Add"
              // minItems={1}
            />
            <InputField
              label="Description"
              name="description"
              placeholder="About this course."
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
              disabled={!isValid || isLoading || isPending}
              className="rounded-lg"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateCourse;
