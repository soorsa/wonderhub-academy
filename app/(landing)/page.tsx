import RecommendedCourses from "@/app/(landing)/_components/RecommendedCourses";
import HeroBanner from "@/components/landing/HeroBanner";
import PopularCoursesComponent from "@/components/landing/PopularCategoriesHero";
import Testimonials from "@/components/landing/Testimonials";
const categories = [
  "Design",
  "Code",
  "Writing",
  "Business",
  "Marketing",
  "Data",
  "Photography",
  "Music",
];

export default function Home() {
  return (
    <div className="flex flex-col w-full space-y-4 sm:space-y-10">
      <HeroBanner />
      <div className="w-full sm:w-6/7 mx-auto space-y-10 p-4 sm:p-0">
        <PopularCoursesComponent />
      </div>
      <RecommendedCourses />
      <div className="">
        <Testimonials />
      </div>
    </div>
  );
}
