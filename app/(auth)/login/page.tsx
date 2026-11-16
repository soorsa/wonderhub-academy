import LoginForm from "@/components/auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login · Wonderhub Academy",
  description: "Login in to wonderhub academy",
};

const LoginPage = () => {
  return <LoginForm />;
};

export default LoginPage;
