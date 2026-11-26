import ImageInput from "@/components/form/ImageField";
import InputField from "@/components/form/InputField";
import ListInputField from "@/components/form/ListInput";
import MultiSelect from "@/components/form/MultiSelect";
import RadioGroup from "@/components/form/RadioGroup";
import { Button } from "@/components/ui/button";
import { useCreateCourse } from "@/hooks/useMutation";
import { useGetAllTopics } from "@/hooks/useQuery";
import { useModal } from "@/zustand/modal.state";
import { cn } from "cn";
import { Form, Formik } from "formik";
import { Send } from "lucide-react";
import * as Yup from "yup";

const CreateCourse = () => {
  const { data, isLoading } = useGetAllTopics();
  const { mutate, isPending } = useCreateCourse();
  const modal = useModal();
  const initialValues: CoursePayload = {
    title: "",
    description: "",
    benefits: [],
    topic_slugs: [],
    suitable_for: [],
    level: "beginner",
    price: 0,
    undiscounted_price: 0,
    sale_type: "sale",
    sales_message: "",
    thumbnail: "",
    preview_video: "",
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
  const salesOptions = [
    { label: "sale", value: "sale" },
    { label: "presale", value: "presale" },
    { label: "free", value: "free" },
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
          <div className="space-y-5">
            <ImageInput
              name="thumbnail"
              label="Upload a Thumbnail"
              labelClassName="text-xs"
              size="sm:size-100"
              className=""
            />

            <InputField
              name="preview_video"
              placeholder="Https://youtube.com/channel/fjkgjfgkjgfg"
              label="Preview"
              className="bg-gray-200"
              labelClassName="text-xs"
            />

            <InputField
              name="title"
              placeholder="Course Title"
              label="Title"
              className="bg-gray-200"
              labelClassName="text-xs"
            />
            <RadioGroup
              label="Select Level:"
              options={levelOptions}
              name="level"
              className=""
              orientation="horizontal"
              optionClassName="min-w-[calc(30%)]"
              lableClassName="text-xs"
              size="xs"
            />
            <MultiSelect
              label="Select Topics"
              options={options}
              name="topic_slugs"
              className="bg-gray-200"
              labelClassName="text-xs"
            />
            <div className="grid sm:grid-cols-2 gap-2">
              <InputField
                label="Sales Price (₦)"
                name="price"
                type="number"
                formatMoney
                labelClassName="text-xs"
                className="bg-gray-200"
              />
              <InputField
                label="Undiscounted Price (₦)"
                name="undiscounted_price"
                type="number"
                formatMoney
                labelClassName="text-xs"
                className="bg-gray-200"
              />
            </div>
            <ListInputField
              name="benefits"
              label="What You'll Learn:"
              addButtonText="Add"
              // className="bg-gray-200"
              // minItems={1}
            />
            <ListInputField
              name="suitable_for"
              label="Who's is the course meant for:"
              addButtonText="Add"
              // minItems={1}
            />
            <InputField
              label="Description"
              name="description"
              placeholder="About this course."
              type="textarea"
              labelClassName="text-xs"
              rows={2}
            />

            <RadioGroup
              label="Sales Type (Optional)"
              options={salesOptions}
              name="sale_type"
              className=""
              orientation="horizontal"
              optionClassName="min-w-[calc(30%)]"
              lableClassName="text-xs"
              size="xs"
            />
            <InputField
              name="sale_header"
              placeholder="Enroll for this course"
              label="Sale Header"
              className="bg-gray-200"
              labelClassName="text-xs"
            />

            <InputField
              label="Sales Message (Optional)"
              name="sales_message"
              placeholder="Type your sales message."
              type="textarea"
              labelClassName="text-xs"
              rows={2}
            />
          </div>
          <div className="grid grid-cols-2 gap-1">
            <Button variant={"secondary"} onClick={modal.close} size={"lg"}>
              <span>Cancel</span>
            </Button>
            <Button
              type="submit"
              disabled={!isValid || isLoading || isPending}
              size={"lg"}
              className={cn("")}
            >
              <span>{isPending ? "Saving..." : "Save"}</span>
              <Send />
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateCourse;
