import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Slider from "@/components/utils/Slider";
import { getInitials } from "@/lib/utils";
import { cn } from "cn";
import { Headset, PlayCircle, Star, UserCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
const instructors = [
  {
    title: "Product Design from Scratch",
    category: "Design",
    name: "Amara Okafor",
    role: "Product manager at Washtrack",
    lessons: 32,
    rating: "4.9",
    tone: "bg-[#3B2FE0] text-white",
  },
  {
    title: "Start a Freelance Business",
    category: "Business",
    name: "Tunde Bakare",
    role: "CEO/Founder PemaTech",
    lessons: 26,
    rating: "4.7",
    tone: "bg-[#1B1A3A] text-white",
  },
  {
    title: "TypeScript for Working Developers",
    category: "Coding",
    name: "Daniel Reyes",
    role: "Software Developer at XtraTRD",
    lessons: 41,
    rating: "4.8",
    tone: "bg-[#FFC93C] text-[#1B1A3A]",
  },
];
const communities = [
  {
    name: "Graphics Designers Community",
    members: 128,
    category: "Design",
    theme: "bg-green-700 text-white",
  },
  {
    name: "AI & Data Science Community",
    members: 54,
    category: "AI",
    theme: "bg-purple-500 text-white",
  },
  {
    name: "Frontend Developers Community",
    members: 20,
    category: "Coding",
    theme: "bg-orange-200 text-black",
  },
  {
    name: "Frontend Developers Community",
    members: 20,
    category: "Coding",
    theme: "bg-cyan-200 text-black",
  },
];
function CardStacks() {
  const rotations = [-10, 3, -2];

  return (
    <div className="relative w-full flex items-center justify-center">
      {instructors.slice(0, 3).map((c, i) => (
        <div
          key={c.title}
          style={
            {
              "--top-mobile": `${i * 55}px`,
              "--top-desktop": `${i * 100}px`,
              "--left-desktop": `calc(50% - 160px + ${i * 24}px)`,
              "--rotate-desktop": `${rotations[i]}deg`,
              transform: `rotate(${rotations[i]}deg)`,
              zIndex: i + 1,
            } as React.CSSProperties
          }
          className={cn(
            "absolute size-60 sm:size-80 rounded-xl sm:rounded-3xl p-6 shadow-2xl transition-all duration-300",
            "top-(--top-mobile) sm:top-(--top-desktop)",
            "sm:left-(--left-desktop)",
            c.tone
          )}
        >
          <div className="flex items-center gap-1 sm:gap-3">
            <div className="border border-current/20 size-7 sm:size-10 rounded-full flex justify-center items-center font-semibold text-xs sm:text-sm">
              {getInitials(c.name)}
            </div>
            <div>
              <div className="font-semibold text-xs sm:text-sm">{c.name}</div>
              <div className="text-[9px] sm:text-xs opacity-80">{c.role}</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs font-medium opacity-80 mt-2 sm:mt-4">
            <span>{c.category}</span>
            <span>{c.lessons} lessons</span>
          </div>
          <p className="mt-2 sm:mt-4 sm:text-xl font-bold leading-tight">
            {c.title}
          </p>
          <p className="mt-3 text-xs opacity-80 flex items-center gap-1">
            <Star className="size-3 fill-current" /> {c.rating} instructor
            rating
          </p>
        </div>
      ))}
    </div>
  );
}
function CommunityCards() {
  return (
    <div className="">
      {communities.slice(0, 4).map((c, i) => (
        <div
          key={i}
          style={
            {
              "--top-mobile": `${i * 60}px`,
              "--top-desktop": `${i * 96}px`,
              transform: `rotate(${[-3, 2, -6][i]}deg)`,
              zIndex: i,
            } as React.CSSProperties
          }
          className={`absolute left-0 right-0 top-(--top-mobile) sm:top-(--top-desktop) rounded-lg sm:rounded-3xl p-6 shadow-xl ${c.theme}`}
        >
          <div className="flex items-center justify-between text-xs sm:text-sm font-medium opacity-80">
            <span>{c.category}</span>
            <div className="flex items-center gap-1">
              <UserCircle className="size-3" />
              <span>{c.members} members</span>
            </div>
          </div>
          <p
            className={`mt-2 sm:mt-6 text-base sm:text-2xl font-bold leading-tight`}
          >
            {c.name}
          </p>
          <p className="mt-1 sm:mt-3 text-sm opacity-80">join us</p>
        </div>
      ))}
    </div>
  );
}

const SLIDE_CONTENTS = [
  {
    badge: "120+ new lessons added this month",
    header: {
      title: "Learn something new this week.",
      sub_text: "Finish it, too.",
    },
    description:
      "Wonderhub sells short, project-based courses from people who do the work for a living. Pick a skill, build something real, and keep the certificate.",
    display: (
      <Image
        src="/images/Webinar-amico.svg"
        alt=""
        className="h-full w-full"
        width={100}
        height={100}
      />
    ),
    theme: {
      bg: "bg-gradient-to-r from-indigo-600/30 via-purple-50/60 to-primary/5",
      primaryTextColor: "text-slate-900",
      secondaryTextColor: "text-primary",
      descriptionColor: "text-slate-600",
      primaryButtonStyle: "text-white bg-primary",
      secondaryButtonStyle: "border-slate-400",
    },
  },
  {
    badge: "20+ experience senior tutor",
    header: {
      title: "Find the right instructor for you.",
      sub_text: "Learn from the best.",
    },
    description:
      "No fluff or outdated theory. Get direct guidance from practicing senior engineers, designers, and founders who build world-class products every day.",
    display: <CardStacks />,
    theme: {
      bg: "bg-gradient-to-r from-white/80 via-indigo-50/60 to-indigo-500/5",
      primaryTextColor: "text-slate-900",
      secondaryTextColor: "text-indigo-600",
      descriptionColor: "text-slate-600",
      primaryButtonStyle: "text-white bg-primary",
      secondaryButtonStyle: "border-slate-200",
    },
  },
  {
    badge: "50+ new students this month",
    header: {
      title: "Join our student community.",
      sub_text: "Grow together.",
    },
    description:
      "Collaborate on live challenges, share code reviews, get feedback on your portfolio, and network with ambitious peers scaling their careers.",
    display: <CommunityCards />,
    theme: {
      bg: "bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950",
      primaryTextColor: "text-white",
      secondaryTextColor: "text-amber-400",
      descriptionColor: "text-slate-300",
      primaryButtonStyle: "text-black bg-white",
      secondaryButtonStyle: "border-white/20 text-slate-300 hover:bg-white/20",
    },
  },
];

const heroSlides = SLIDE_CONTENTS.map((item, i) => (
  <div
    key={i}
    className={cn(
      "mx-auto grid items-center gap-5 sm:gap-0 lg:grid-cols-[1.3fr_1fr] p-5 sm:p-10 rounded-lg h-[80vh] max-h-[80vh]",
      item.theme.bg
    )}
  >
    <div className="">
      {/* <Badge className="mb-6 rounded-full bg-[#FFC93C] px-3 py-1 text-[#1B1A3A] hover:bg-[#FFC93C]">
        {item.badge}
      </Badge> */}
      <h1
        className={cn(
          "text-xl font-extrabold leading-none sm:leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl",
          item.theme.primaryTextColor
        )}
      >
        {item.header.title}
        <span className={cn("block", item.theme.secondaryTextColor)}>
          {item.header.sub_text}
        </span>
      </h1>
      <p
        className={cn(
          "mt-2 sm:mt-6 max-w-xl text-base sm:text-lg sm:leading-relaxed text-slate-600",
          item.theme.descriptionColor
        )}
      >
        {item.description}
      </p>
      <div className="mt-8 flex flex-row gap-1 sm:gap-3 sm:flex-row">
        <Button
          size="lg"
          className={cn(
            "h-12 px-5 sm:px-8 text-sm sm:text-base",
            item.theme.primaryButtonStyle
          )}
        >
          <PlayCircle className="sm:mr-2 h-5 w-5" />
          Browse courses
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className={cn(
            "h-12 px-5 sm:px-8 text-sm sm:text-base",
            item.theme.secondaryButtonStyle
          )}
        >
          <Headset className="sm:mr-2 h-5 w-5" />
          Teach with us
        </Button>
      </div>
      <div
        className={cn(
          "hidden sm:flex items-center gap-6 pt-4 text-sm",
          item.theme.descriptionColor
        )}
      >
        <AvatarGroup className="-space-x-6 sm:-space-x-4">
          <Avatar size="lg">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="text-gray-200">CN</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage
              src="https://github.com/maxleiter.png"
              alt="@maxleiter"
            />
            <AvatarFallback className="text-gray-200">LR</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback className="text-gray-200">ER</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback className="text-gray-200">ER</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+3</AvatarGroupCount>
        </AvatarGroup>
        <div className="flex items-center gap-1.5">
          Join 15k+ Students Nationawide
        </div>
      </div>
    </div>

    {/* Stacked course previews */}
    <div
      className="relative mx-auto h-85 sm:h-105 w-full max-w-md"
      aria-hidden="true"
    >
      {item.display}
    </div>
  </div>
));

const HeroBanner = () => {
  return (
    <>
      <Slider slides={heroSlides} showNav={false} />
    </>
  );
};

export default HeroBanner;
