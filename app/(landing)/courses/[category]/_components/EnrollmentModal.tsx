import Checkbox from "@/components/form/CheckBox";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { usePreEnroll } from "@/hooks/academy/useEnrollment";
import { useGetUser } from "@/hooks/auth/useAuth";
import { usePaystackPayment } from "@/hooks/payments/usePaystack";
import { useInitiatePayment } from "@/hooks/transactions/useTransaction";
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
import toast from "react-hot-toast";
import * as Yup from "yup";
interface Prop {
  course: Course;
}
const EnrollmentModal: React.FC<Prop> = ({ course }) => {
  const { data: userData } = useGetUser();
  const paySatck = usePaystackPayment();
  const { mutate: initiate, isPending: isInitiating } = useInitiatePayment();
  const { mutate: preEnroll, isPending: isEnrolling } = usePreEnroll();
  const formData = {
    fullName: `${userData?.first_name || ""} ${userData?.last_name || ""}`,
    email: userData?.email || "",
    phone: userData?.phone_number || "",
    experienceLevel: "beginner",
    agreeTerms: false,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    fullName: Yup.string().required("Required"),
    phone: Yup.mixed().required("Required"),
    agreeTerms: Yup.boolean()
      .required("Required")
      .oneOf([true], "You must accept the terms and conditions"),
  });
  console.log(process.env.PK_TEST || "");

  function enroll(params: typeof formData) {
    const fullName = params.fullName.split(" ", 2);

    initiate(
      {
        amount: course.price,
        description: `Payment of ${formatPrice(
          course.price
        )} for course enrollment of ${course.title}`,
        metadata: {
          purpose: "course enrollment",
          course_name: course.title,
          course_price: course.price,
          course_slug: course.slug,
          student_name: params.fullName,
          email: params.email,
          phone_number: params.phone,
        },
      },
      {
        onSuccess(data) {
          paySatck({
            email: params.email,
            firstName: fullName[0],
            lastName: fullName[1],
            phoneNumber: params.phone,
            amount: course.price,
            reference: data.reference,
            onSuccess(reference) {
              preEnroll({
                course_slug: course.slug,
                fullname: params.fullName,
                phone_number: params.phone,
                email: params.email,
                transaction_id: data.id,
                amount_paid: course.price,
              });
            },
            onClose() {
              toast.error("Payment canceled");
            },
          });
        },
      }
    );
  }
  return (
    <div className="mt-5">
      <Formik
        initialValues={formData}
        validateOnMount
        validationSchema={validationSchema}
        onSubmit={enroll}
      >
        {({ isValid }) => {
          return (
            <Form className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <div>
                  <InputField name="fullName" label="Full Name *" />
                </div>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-2">
                  <InputField name="email" label="Email Address *" />
                  <InputField
                    name="phone"
                    label="Phone Number (WhatsApp) *"
                    type="tel"
                  />
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
                        <PlayCircle className="size-4" />{" "}
                        {course.total_lectures || 0} Lessons
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
                        <Book className="size-4" />{" "}
                        {course.instructor.number_of_courses} Courses
                      </div>
                      <div className="flex gap-1 text-xs items-center">
                        <Award className="size-4" /> {3} Awards
                      </div>
                      <div className="flex gap-1 text-xs items-center">
                        <GraduationCap className="size-4" />{" "}
                        {(course.instructor.number_of_students || 0) + 8}{" "}
                        Students
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
                <Checkbox
                  name="agreeTerms"
                  label={
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
                  }
                />
              </div>

              {/* Submit Button */}
              <div className="grid grid-cols-[1fr_2fr] gap-1">
                <Button variant={"secondary"} className={cn("h-12 text-base")}>
                  <span>Cancel</span>
                </Button>
                <Button
                  type="submit"
                  size={"lg"}
                  className={cn("w-full h-12 text-base")}
                  disabled={!isValid || isInitiating || isEnrolling}
                >
                  {isInitiating || isEnrolling
                    ? "Processing Enrollment..."
                    : `Complete Enrollment`}
                  <ArrowRight />
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default EnrollmentModal;
