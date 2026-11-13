export const AdminCategorySkeleton = () => {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4].map((count) => (
        <div
          className="flex-[0_0_80%] sm:flex-[0_0_40%] bg-gray-300 animate-pulse h-40 rounded-md "
          key={count}
        ></div>
      ))}
    </div>
  );
};
export const TopCategorySkeleton = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
      {[1, 2, 3, 4, 5].map((count) => (
        <div
          className=" bg-gray-300 animate-pulse h-20 rounded-xl "
          key={count}
        ></div>
      ))}
    </div>
  );
};

export const AdminCoursesListskeleton = () => {
  return (
    <div className="">
      {[1, 2, 3, 4, 5].map((i) => (
        <div className="grid grid-cols-16 py-2 gap-2" key={i}>
          <div className="animate-pulse bg-gray-300 rounded-md h-7"></div>
          <div className="col-span-8 animate-pulse h-7 rounded-md bg-gray-300"></div>
          <div className="col-span-4 animate-pulse h-7 rounded-md bg-gray-300"></div>
          <div className="col-span-2 animate-pulse h-7 rounded-md bg-gray-300"></div>
          <div className="grid grid-cols-2 gap-1">
            <div className="animate-pulse bg-gray-300 rounded-md h-7"></div>
            <div className="animate-pulse bg-gray-300 rounded-md h-7"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const CourseCardSkeleton = () => {
  return (
    <div
      className={`relative min-w-55 flex flex-col bg-white h-fit p-2 md:p-4 rounded-2xl hover:shadow-lg`}
    >
      <div className="h-37.5 w-full rounded-lg overflow-hidden bg-gray-200 animate-pulse" />
      <div className="flex flex-col gap-2 pt-4">
        <div className="line-clamp-1 font-bold h-7 w-full bg-gray-200 rounded-sm animate-pulse" />
        <div className="grid grid-cols-2 gap-20">
          <div className="h-3 w-full bg-gray-200 rounded-sm" />
          <div className="h-3 bg-gray-200 rounded-sm w-full flex-1" />
        </div>
        <div className="text-xs h-10 bg-gray-200 rounded-sm" />
        <div className="grid grid-cols-2 gap-20">
          <div className="bg-gray-200 rounded-sm h-3 w-full animate-pulse" />
          <div className="bg-gray-200 rounded-sm h-3 w-full animate-pulse" />
        </div>
        <div className=" bg-gray-200 rounded-sm h-8 animate-pulse " />
      </div>
    </div>
  );
};
