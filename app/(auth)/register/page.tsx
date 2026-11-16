import SignupForm from "@/components/auth/RegisterForm";
import { PageLoader } from "@/components/utils/Loaders";
import { Metadata } from "next";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: `Register · Wonderhub Academy `,
  description: "Register as a student on wonderhub academy.",

  twitter: {
    card: "summary_large_image",
    images: ["/public/images/signup.svg"],
  },
  openGraph: {
    type: "website",
    images: ["/public/images/signup.svg"],
  },
};

const RegisterPage = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <SignupForm />;
    </Suspense>
  );
};

export default RegisterPage;
