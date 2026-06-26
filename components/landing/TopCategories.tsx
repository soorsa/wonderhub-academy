import {
  Code2Icon,
  Megaphone,
  Music4,
  Palette,
  PlayCircle,
} from "lucide-react";

const TopCategories = () => {
  const categories = [
    {
      name: "Programming",
      count: 200,
      icon: <Code2Icon className="w-5 h-5 md:w-10 md:h-10" />,
    },
    {
      name: "Animation",
      count: 40,
      icon: <PlayCircle className="w-5 h-5 md:w-10 md:h-10" />,
    },
    {
      name: "Music",
      count: 20,
      icon: <Music4 className="w-5 h-5 md:w-10 md:h-10" />,
    },
    {
      name: "Art",
      count: 7,
      icon: <Palette className="w-5 h-5 md:w-10 md:h-10" />,
    },
    {
      name: "Digital Marketing",
      count: 26,
      icon: <Megaphone className="w-5 h-5 md:w-10 md:h-10" />,
    },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      <h4 className="text-4xl font-bold text-center">Top Categories</h4>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 w-full md:w-[80%] mx-auto">
        {categories.map((category, i) => (
          <div
            key={i}
            className="cursor-pointer flex gap-2 items-center bg-purple-200 text-black px-2 md:px-4 py-4 rounded-xl hover:bg-wonderhub hover:text-white"
          >
            {category.icon}
            <div className="flex flex-1 flex-col items-start">
              <p className="text-xs md:text-sm line-clamp-1">{category.name}</p>
              <p className="text-xs md:text-md">{category.count} courses</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
