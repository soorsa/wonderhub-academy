"use client";
import { useParams } from "next/navigation";

const Hero = () => {
  const { category, topic } = useParams();
  const description = `Our ${topic ? topic : category ? category : ""} Courses`;
  return (
    <div className="w-full sm:w-6/7 mx-auto py-5 sm:py-10 text-center space-y-2">
      <h2 className="bg-clip-text text-transparent bg-linear-to-r text-5xl font-black from-primary to-pink-700 capitalize">
        {category || topic ? description : "Discover Our courses"}
      </h2>
      <div className="">
        Explore courses from experienced, real-world experts.
      </div>
    </div>
  );
};

export default Hero;
