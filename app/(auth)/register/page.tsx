import SignupForm from "@/components/auth/RegisterForm";
import { Loader } from "lucide-react";
import { Suspense } from "react";

const RegisterPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <SignupForm />;
    </Suspense>
  );
};

export default RegisterPage;
