import InputField from "@/components/form/InputField";
import Button from "@/components/global/Button";
import { useCreateCategory } from "@/hooks/useMutation";
import { useModal } from "@/zustand/modal.state";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const CreateCategory = () => {
  const modal = useModal();
  const { mutate: create, isPending } = useCreateCategory();
  const initialValues = {
    name: "",
    description: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("required"),
    description: Yup.string().required("required"),
  });
  const submit = (values: typeof initialValues) => {
    create(values, {
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
              <InputField
                name="name"
                label="name"
                placeholder="Category name"
              />
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

export default CreateCategory;
