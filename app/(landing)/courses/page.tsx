import CourseListAndFilter from "@/components/landing/courses/CourseListAndFilter";

const page = () => {
  return (
    <div className="">
      <div className="w-full sm:w-6/7 mx-auto py-5 sm:py-10 text-center space-y-2">
        <h2 className="bg-clip-text text-transparent bg-linear-to-r text-5xl font-black from-primary to-pink-700">
          Discover Your Next Skill
        </h2>
        <div className="">
          Explore courses from experienced, real-world experts.
        </div>
      </div>
      <div className="w-full">
        <CourseListAndFilter />
      </div>
    </div>
  );
};

export default page;
