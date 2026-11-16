import CoursesPage from "@/components/admin/CoursesPage";
import { PageLoader } from "@/components/utils/Loaders";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <CoursesPage />
    </Suspense>
  );
};

export default page;
