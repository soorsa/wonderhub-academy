import CourseFlatList from "@/components/dashboard/CourseFlatList";
import EnrolledCourseProgressList from "@/components/dashboard/EnrolledCourseProgressList";
import InfoGrid from "@/components/dashboard/InfoGrid";
import OngoingCourseSlider from "@/components/dashboard/OngoinCourseSlider";

const page = () => {
  return (
    <div className="flex flex-col w-full gap-6">
      <OngoingCourseSlider />
      <InfoGrid />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <EnrolledCourseProgressList
          courses={[]}
          listName="My Courses"
          isError={false}
          isLoading={false}
        />
        <CourseFlatList
          courses={[]}
          listName="Recommended for you"
          isError={false}
          isLoading={false}
        />
      </div>
    </div>
  );
};

export default page;
