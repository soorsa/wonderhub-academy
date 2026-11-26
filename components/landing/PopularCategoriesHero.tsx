import Pill from "@/components/global/Pill";
import { CircleArrowOutUpRight } from "lucide-react";

const PopularCoursesComponent = () => {
  return (
    <div className="grid md:grid-cols-[1fr_2fr] place-items-stretch gap-2 w-full">
      {/* Left Section */}
      <div className="grid gap-2">
        <div className="bg-green-100 text-center p-6 rounded-xl space-y-2">
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
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-primary-200 p-6 text-center space-y-2 rounded-xl m-auto">
            <h2 className="text-3xl font-bold">200+</h2>
            <p className="text-xs font-adron-thin">
              Online courses for your learning
            </p>
          </div>
          <div className="bg-black text-white text-center space-y-2 p-6 rounded-xl m-auto">
            <h2 className="text-3xl font-bold">+22k</h2>
            <p className="text-xs font-adron-thin">
              Students trusted our platform
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-primary-200 p-6 rounded-xl flex-1 relative">
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
            //   className="px-4 py-2 bg-black text-white rounded-xl text-sm"
            // >
            //   {category}
            // </button>
          ))}
        </div>
        <div className="divide divide-y divide-slate-400/50 w-[70%] mt-10">
          <h2 className="text-2xl font-bold mb-2">Popular Courses</h2>
          <p className="text-sm">
            Our platform features top-notch courses across various domains.
            Crafted by leading experts, these programs ensure you receive
            high-quality and up-to-date knowledge for your success.
          </p>
        </div>
        <div className="absolute bottom-8 right-8">
          <CircleArrowOutUpRight className="h-28 w-28" />
        </div>
      </div>
    </div>
  );
};

export default PopularCoursesComponent;
