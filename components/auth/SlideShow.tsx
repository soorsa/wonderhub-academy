"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Join for Free, Learn for Life",
    text: "Create an account in seconds and unlock unlimited learning opportunities.",
    image: "/images/signup.svg",
  },
  {
    title: "Discover Premium Courses",
    text: "Access top-tier courses curated by industry experts.",
    image: "/images/course-app.svg",
  },
  {
    title: "Advance Your Career",
    text: "Acquire new skills, gain confidence, and achieve your career goals.",
    image: "/images/Career-progress.svg",
  },
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {slides.map((s, index) => (
        <div
          key={index}
          className={`absolute w-full h-full flex flex-col items-center justify-center transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Title - Top Center */}
          <div className="absolute top-8 w-full text-center text-4xl font-extrabold text-primary">
            {s.title}
          </div>

          {/* Image - Center */}
          <Image
            src={s.image}
            alt={`Slide ${index}`}
            height={100}
            width={100}
            className="w-[60%] h-[60%] object-contain"
          />

          {/* Text - Bottom Center */}
          <p className="absolute bottom-8 w-full text-center text-2xl font-adron-thin text-primary px-20">
            {s.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
