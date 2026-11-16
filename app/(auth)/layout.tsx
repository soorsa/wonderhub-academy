import AuthNavbar from "@/components/auth/AuthNavBar";
import Slideshow from "@/components/auth/SlideShow";
import Image from "next/image";
import React from "react";
interface Prop {
  children: React.ReactNode;
}
const AuthLayout: React.FC<Prop> = ({ children }) => {
  return (
    <>
      {/* <RouteProtection /> */}
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 fixed w-full backdrop-blur-3xl">
        {/* Promo Section */}
        <div className="relative hidden md:block text-white h-screen ">
          <Slideshow />
        </div>

        {/* Signup Form Section */}
        <div className="bg-white flex flex-col max-h-screen p-4 justify-between overflow-y-scroll">
          <div className="text-center">
            <Image
              src="/images/logo.png"
              alt="Adron Logo"
              width={100}
              height={100}
              className="mx-auto h-15 w-auto object-cover"
            />
          </div>
          <div className="px-0 md:px-10 py-4 flex-1">{children}</div>
          <div className="w-full">
            <AuthNavbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
