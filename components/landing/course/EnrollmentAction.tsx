"use client";
import { Button } from "@/components/ui/button";
import { courseService } from "@/services/course.service";
import { formatPrice } from "@/utils/format.utils";
import { cn } from "cn";
import { ArrowRight } from "lucide-react";
interface Props {
  course: Course;
}
export default function EnrollmentAction({ course }: Props) {
  const undiscountedPrice = course?.undiscounted_price || 0;
  const salesPrice = course?.price || 0;

  const enroll = () => {
    if (course) {
      courseService.enroll(course);
    }
  };

  return (
    <div className={cn("sticky z-50 top-18 block md:hidden")}>
      <div
        className={cn(
          "bg-linear-to-br from-primary to-black p-6 rounded-md shadow w-full"
        )}
      >
        <h3 className="text-sm font-semibold capitalize text-white mb-1">
          {course?.sale_header}s
        </h3>
        <p className="text-xs text-gray-200 mt-2">{course?.sales_message}</p>
        <div className="flex flex-wrap gap-4 justify-between items-center mt-5">
          <div className="flex items-baseline gap-1">
            <div className="font-bold text-xl text-white">
              {formatPrice(salesPrice)}
            </div>
            {undiscountedPrice > salesPrice && (
              <div className="text-sm line-through text-slate-300">
                {formatPrice(undiscountedPrice || 0)}
              </div>
            )}
          </div>
          <Button
            className={cn("px-8 font-bold capitalize text-lg rounded-md")}
            size={"lg"}
            variant={"secondary"}
            onClick={enroll}
          >
            <span>Enroll Now</span>
            <ArrowRight strokeWidth={4} />
          </Button>
        </div>
      </div>
    </div>
  );
}
