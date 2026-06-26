import Pill from "@/components/global/Pill";
import { CircleArrowOutUpRight } from "lucide-react";

const PopularCoursesComponent = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 p-4 md:p-8 w-full md:w-6/7 mx-auto">
      {/* Left Section */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-100 col-span-2 text-center p-6 rounded-3xl space-y-2">
          <h2 className="text-lg font-semibold w-1/2 mx-auto">
            Unlock New Skills for your learning
          </h2>
          <Pill
            label="More Details"
            type="link"
            href="/courses"
            className="text-xs block mx-auto w-fit!"
          />
        </div>
        <div className="bg-primary-200 p-6 text-center space-y-2 rounded-3xl m-auto">
          <h2 className="text-3xl font-bold">200+</h2>
          <p className="text-xs font-adron-thin">
            Online courses for your learning
          </p>
        </div>
        <div className="bg-black text-white text-center space-y-2 p-6 rounded-3xl m-auto">
          <h2 className="text-3xl font-bold">+22k</h2>
          <p className="text-xs font-adron-thin">
            Students trusted our platform
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-primary-200 p-8 rounded-3xl flex-1 relative md:col-span-2">
        <div className="flex gap-2 mb-4 flex-wrap">
          {[
            "Product Design",
            "Marketing",
            "SMM",
            "UX",
            "Develop",
            "SEO",
            "UI Design",
            "Branding",
            "3d Design",
            "Illustrations",
          ].map((category, index) => (
            <Pill
              label={category}
              type="link"
              key={index}
              href=""
              className="text-primary! hover:bg-primary! hover:text-white!"
            />
            // <button
            //   key={index}
            //   className="px-4 py-2 bg-black text-white rounded-3xl text-sm"
            // >
            //   {category}
            // </button>
          ))}
        </div>
        <div className="divide divide-y w-[70%] mt-10">
          <h2 className="text-2xl font-bold mb-2">Popular Courses</h2>
          <p className="mb-6 text-sm">
            Our platform features top-notch courses across various domains.
            Crafted by leading experts, these programs ensure you receive
            high-quality and up-to-date knowledge for your success.
          </p>
        </div>
        <div className="absolute bottom-8 right-8">
          <CircleArrowOutUpRight className="h-28 w-28" />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg> */}
        </div>
      </div>
    </div>
  );
};

export default PopularCoursesComponent;
