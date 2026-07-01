"use client";
import InputField from "@/components/form/InputField";
import RadioGroup from "@/components/form/RadioGroup";
import Button from "@/components/global/Button";
import LinkButton from "@/components/global/LinkButton";
import { useRegister } from "@/hooks/auth/useAuth";
import { Form, Formik } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  // Password visibility toggle logic
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const { mutate: register, isPending } = useRegister();
  const params = useSearchParams();
  const role = params.get("role") || "student";

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    role: role,
    password: "",
  };
  const ROLES = [
    { value: "student", label: "student" },
    { value: "instructor", label: "instructor" },
  ];

  // Validation schema that changes based on the state (login, forgot, reset)
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    role: Yup.string().required("Required"),
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
  });

  // Handle form submission based on state
  const handleSubmit = (values: typeof initialValues) => {
    register(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnMount
      onSubmit={handleSubmit}
    >
      {({ isValid }) => (
        <Form className="space-y-3 flex flex-col px-0 md:px-20">
          <h1 className="font-medium text-3xl text-black text-center py-4">
            Register{" "}
          </h1>
          {/* Render based on state */}
          <div className="grid grid-cols-2 gap-2">
            <InputField name="first_name" placeholder="First Name" />
            <InputField name="last_name" placeholder="Last Name" />
          </div>
          <InputField
            name="email"
            type="email"
            placeholder="Email Address"
            className="input"
          />
          <RadioGroup
            options={ROLES}
            name="role"
            label="Select Role"
            orientation="horizontal"
            optionClassName="min-w-[calc(50%-8px)]"
          />
          {/* Password and Confirm Password Fields */}
          <InputField
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input"
            rightIcon={
              showPassword ? (
                <EyeOff
                  className="text-gray-500 w-5 h-5 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <Eye
                  className="text-gray-500 w-5 h-5 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )
            }
          />
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-xs px-6">
              <input
                type="checkbox"
                id="remember"
                className="text-adron-green"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <span className="text-[#FF4A1B] text-xs cursor-pointer">
              Forgot password?
            </span>
          </div>
          <Button
            type="submit"
            isLoading={isPending}
            disabled={!isValid || isPending}
            label={"Sign Up"}
            loadingLabel="Signing up"
            className={`bg-adron-green text-white w-full py-2 rounded-full mt-10`}
          />
          {/* Link to switch between forms */}
          <div className="text-sm flex gap-1 items-center text-center justify-center">
            <span className="">Already have an account?</span>
            <LinkButton
              link="/login"
              label="Log In"
              className="hover:bg-wonderhub/5 w-fit! px-5"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
