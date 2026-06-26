import HeroBanner from "@/components/landing/HeroBanner";
import HorizontalCourseSlider from "@/components/landing/HorizontalCourseSlider";
import PopularCoursesComponent from "@/components/landing/PopularCategoriesHero";
import TopCategories from "@/components/landing/TopCategories";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full space-y-2 md:space-y-6">
      <div className=" w-full px-5">
        <HeroBanner />
      </div>
      <PopularCoursesComponent />
      <TopCategories />
      <div className="flex flex-col bg-white rounded-2xl w-full mx-auto py-20">
        <div className="flex flex-col w-full md:w-[85%] mx-auto">
          <div className="flex justify-between p-4">
            <h2 className="font-bold text-2xl">Recomended for you</h2>
            <div className="flex items-center hover:underline text-sm">
              {" "}
              <a href="http://">
                See more
              </a> <ArrowRight className="ml-2" />{" "}
            </div>
          </div>

          <HorizontalCourseSlider />
        </div>
      </div>
    </div>
  );
}
