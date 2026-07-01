"use client";
import InputField from "@/components/form/InputField";
import Button from "@/components/global/Button";
import LinkButton from "@/components/global/LinkButton";
import { useLogin } from "@/hooks/auth/useAuth";
import { Form, Formik } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import * as Yup from "yup";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: login, isPending } = useLogin();

  // Password visibility toggle logic
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const initialValues = {
    email: "",
    password: "",
  };

  // Validation schema that changes based on the state (login, forgot, reset)
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  // Handle form submission based on state
  const handleSubmit = (values: typeof initialValues) => {
    login(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnMount
      onSubmit={handleSubmit}
    >
      {({ isValid }) => (
        <Form className="space-y-3 flex flex-col px-4 md:px-20">
          <h1 className="font-medium text-3xl text-black text-center py-4">
            Login{" "}
          </h1>
          {/* Password and Confirm Password Fields */}
          <InputField
            name="email"
            type="email"
            placeholder="Email Address"
            className="input"
          />

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
          {/* Forgot Password Link */}
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
            disabled={isPending || !isValid}
            label={"Log in"}
            loadingLabel="Logging in"
            className={`text-white w-full py-2 rounded-full mt-10`}
          />
          {/* Link to switch between forms */}
          <div className="text-sm flex gap-1 items-center text-center justify-center">
            <>
              Are you new?{" "}
              <LinkButton
                label="Create an Account"
                className="text-purple-900! ml-1 bg-transparent! font-medium w-fit! underline"
                link="/register"
              />
            </>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
