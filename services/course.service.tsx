import EnrollmentModal from "@/app/(landing)/course/_components/EnrollmentModal";
import { useModal } from "@/zustand/modal.state";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
const token = Cookies.get("auth_token");
const modal = useModal.getState();
class CourseServices {
  enroll(course: Course) {
    if (token) {
      modal.open({
        content: <EnrollmentModal course={course} />,
        title: `Enroll for this course`,
        size: "sm:w-md",
      });
    } else {
      toast.error("Your are not logged in.");
      window.location.href = "/login";
    }
  }
}
export const course = new CourseServices();
