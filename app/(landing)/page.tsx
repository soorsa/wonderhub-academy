import HeroBanner from "@/components/landing/HeroBanner";
import HorizontalCourseSlider from "@/components/landing/HorizontalCourseSlider";
import PopularCoursesComponent from "@/components/landing/PopularCategoriesHero";
import Testimonials from "@/components/landing/Testimonials";
import { Button } from "@/components/ui/button";
import { cn } from "cn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
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
    <div className="flex flex-col w-full space-y-10">
      <HeroBanner />
      <div className="w-full sm:w-6/7 mx-auto space-y-10 p-4 sm:p-0">
        <PopularCoursesComponent />
      </div>
      <div className="flex flex-col bg-white w-full mx-auto py-20">
        <div className="flex flex-col w-full sm:w-6/7 mx-auto">
          <div className="flex justify-between p-4 items-end">
            <div className="">
              <span className="text-xs uppercase tracking-widest font-semibold text-primary">
                for you
              </span>

              <h2 className="font-bold text-2xl capitalize">
                Recomended for you
              </h2>
            </div>
            <Link href={`/courses`}>
              <Button variant={"ghost"} className={cn("")}>
                <span>See more</span>
                <ArrowRight className="size-3" />
              </Button>
            </Link>
          </div>

          <HorizontalCourseSlider />
        </div>
      </div>
      <div className="">
        <Testimonials />
      </div>
    </div>
  );
}
