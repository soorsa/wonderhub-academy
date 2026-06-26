"use client";
import Button from "@/components/global/Button";
import { ArrowLeft, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const PageNotFound: React.FC = () => {
  const router = useRouter();
  return (
    <div className="fixed inset-0 bg-white z-99 h-screen flex items-center justify-center">
      <div className="h-fit [--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-md rounded-2xl bg-white [box-shadow:var(--shadow)] max-w-xs md:max-w-md mx-auto">
        <div className="flex flex-col items-center justify-between pt-9 px-6 pb-6 relative">
          <span className="relative mx-auto -mt-16 mb-4 bg-white border border-primary h-40 w-40 flex flex-col justify-center items-center rounded-full">
            <Image
              width={100}
              height={100}
              src="/icons/404 Error-cuate.svg"
              alt=""
            />
          </span>

          <h5 className="text-2xl font-bold mb-2 text-center">
            Oops... Page Not Found!
          </h5>

          <p className="w-full mb-4 text-sm text-center">
            Unfortunatly the page you are looking for does not exist.
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm w-full">
            <Button
              label={"Go Back"}
              icon={<ArrowLeft size={20} />}
              onClick={() => router.back()}
              className="hover:bg-primary/80 text-white"
            />
            <Link
              href={"/"}
              className="flex items-center gap-2 border text-sky-800 border-sky-800 hover:bg-sky-800 hover:text-white p-2 rounded-xl w-full justify-center"
            >
              <Home size={20} />
              <div className="">Go Home</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
