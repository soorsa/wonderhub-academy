/* eslint-disable react/no-unescaped-entities */
import LinkButton from "@/components/global/LinkButton";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="h-[70vh] w-full md:w-6/7 p-4 sm:p-8 mx-auto flex flex-col md:flex-row justify-center">
      <div className="flex flex-col justify-center gap-10 w-full md:w-1/2">
        <div className="text-4xl font-bold w-full md:w-[70%]">
          Find the right instructor for you
        </div>
        <div className="">
          Hello, Dribbble Community! This is a landing page exploration for
          Online Education Course. Feel free to give feedback. Don't forget to
          press "L" for like.
        </div>
        <LinkButton
          link="/register"
          label="Get Started"
          className="w-fit! px-6 bg-primary text-white"
          rightIcon={<ArrowRight />}
        />
        <div className="grid grid-cols-3 w-fit gap-4 sm:gap-10">
          <div className="flex flex-col">
            <p className="font-extrabold text-2xl sm:text-4xl">80k+</p>
            <p className="text-xs sm:text-base text-gray-700">Students</p>
          </div>
          <div className="flex flex-col">
            <p className="font-extrabold text-2xl sm:text-4xl">+20k</p>
            <p className="text-xs sm:text-base text-gray-700">Courses</p>
          </div>
          <div className="flex flex-col">
            <p className="font-extrabold text-2xl sm:text-4xl">10k+</p>
            <p className="text-xs sm:text-base text-gray-700">Instructors</p>
          </div>
        </div>
      </div>
      <div className="h-[70vh] w-1/2 hidden md:block">
        <Image
          src="/images/Webinar-amico.svg"
          alt=""
          className="h-full w-full"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default HeroBanner;
