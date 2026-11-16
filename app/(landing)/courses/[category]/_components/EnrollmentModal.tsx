import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/utils/format.utils";
import { cn } from "cn";
import { Form, Formik } from "formik";
import {
  ArrowRight,
  Award,
  Book,
  GraduationCap,
  PlayCircle,
  UserCircle,
} from "lucide-react";
import React from "react";
interface Prop {
  course: Course;
}
const EnrollmentModal: React.FC<Prop> = ({ course }) => {
  const formData = {
    fullName: "",
    email: "",
    phone: "",
    experienceLevel: "beginner",
    agreeTerms: false,
  };
  function enroll(params: typeof formData) {}
  return (
    <div className="mt-5">
      <Formik initialValues={formData} onSubmit={enroll}>
        {() => {
          return (
            <Form className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <div>
                  <InputField name="fullName" label="Full Name *" />
                </div>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-2">
                  <InputField name="email" label="Email Address *" />
                  <InputField name="phoneNumber" label="Phone Number *" />
                </div>
              </div>

              {/* Summary Box */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <div>
                  <h3 className="text-gray-700 uppercase font-semibold tracking-wider">
                    Enrollment Summary:
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="">
                    <h3 className="text-xs font-bold text-gray-700">
                      Course Info:
                    </h3>
                    <div className="ml-5 text-muted-foreground grid grid-cols-2">
                      <p className="text-sm font-medium flex gap-1 items-center">
                        <Book className="size-4" />
                        {course.title}
                      </p>
                      <div className="flex gap-1 text-xs items-center">
                        <PlayCircle className="size-4" /> {12} Lessons
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <h3 className="text-xs font-bold text-gray-700">
                      Instructor Info:
                    </h3>
                    <div className="ml-5 text-muted-foreground grid grid-cols-2">
                      <p className="text-sm font-medium capitalize flex gap-1 items-center">
                        <UserCircle className="size-4" />
                        <span>
                          {course.instructor.first_name}{" "}
                          {course.instructor.last_name}
                        </span>
                      </p>
                      <div className="flex gap-1 text-xs items-center">
                        <Book className="size-4" /> {12} Courses
                      </div>
                      <div className="flex gap-1 text-xs items-center">
                        <Award className="size-4" /> {12} Awards
                      </div>
                      <div className="flex gap-1 text-xs items-center">
                        <GraduationCap className="size-4" /> {12} Students
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex gap-2 items-baseline">
                    <div className="text-muted-foreground uppercase text-sm">
                      Price:
                    </div>
                    <p className="text-2xl font-bold text-indigo-600">
                      {formatPrice(course.price)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    // onChange={handleChange}
                    className="mt-1 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-indigo-600 underline hover:text-indigo-800"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-indigo-600 underline hover:text-indigo-800"
                    >
                      Refund Policy
                    </a>
                    .
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size={"lg"}
                className={cn("w-full h-12 text-base")}
              >
                Complete Enrollment
                <ArrowRight />
                {/* {isSubmitting ? "Processing Enrollment..." : `Complete Enrollment ($${course.price})`} */}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default EnrollmentModal;
