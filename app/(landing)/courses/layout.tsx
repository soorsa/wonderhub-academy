import Hero from "@/app/(landing)/courses/_components/Hero";
import CourseSearchBar from "@/components/landing/courses/CoureSearchBar";

export default function CoursesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-2 sm:px-8">
      <Hero />
      <div className="space-y-4">
        <div className="w-full">
          <CourseSearchBar />
        </div>
        <div className="grid sm:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl h-130 hidden sm:block"></div>
          <div className="col-span-3 gap-x-2 gap-y-4 grid sm:grid-cols-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
