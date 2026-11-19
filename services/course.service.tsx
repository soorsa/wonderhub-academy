import EnrollmentModal from "@/app/(landing)/courses/[category]/_components/EnrollmentModal";
import { useModal } from "@/zustand/modal.state";
import Cookies from "js-cookie";
const token = Cookies.get("auth_token");
const modal = useModal.getState();
class CourseServices {
  enroll(course: Course) {
    modal.open({
      content: <EnrollmentModal course={course} />,
      title: `Course Enrollment`,
      size: "sm:w-md",
      description:
        course.sales_message ||
        "Complete the form below to reserve your seat for the upcoming cohort.",
      headerStyle: "bg-primary text-white p-5",
    });
  }
}
export const courseService = new CourseServices();
