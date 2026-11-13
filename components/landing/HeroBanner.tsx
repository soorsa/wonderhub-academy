import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Slider from "@/components/utils/Slider";
import { getInitials } from "@/lib/utils";
import { cn } from "cn";
import { PlayCircle, Star, UserCircle } from "lucide-react";
import Image from "next/image";
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
  return (
    <div className="relative w-full flex items-center justify-center">
      {instructors.slice(0, 3).map((c, i) => (
        <div
          key={c.title}
          className={cn(
            "absolute w-80 h-80 rounded-3xl p-6 shadow-2xl transition-all duration-300",
            c.tone
          )}
          style={{
            top: `${i * 100}px`,
            left: `calc(50% - 160px + ${i * 24}px)`,
            transform: `rotate(${[-10, 3, -2][i]}deg)`,
            zIndex: i + 1,
          }}
        >
          <div className="flex items-center gap-3">
            <div className="border border-current/20 size-10 rounded-full flex justify-center items-center font-semibold text-sm">
              {getInitials(c.name)}
            </div>
            <div>
              <div className="font-semibold text-sm">{c.name}</div>
              <div className="text-xs opacity-80">{c.role}</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs font-medium opacity-80 mt-4">
            <span>{c.category}</span>
            <span>{c.lessons} lessons</span>
          </div>
          <p className="mt-4 text-xl font-bold leading-tight">{c.title}</p>
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
          key={c.name}
          className={`absolute left-0 right-0 rounded-3xl p-6 shadow-xl ${c.theme}`}
          style={{
            top: `${i * 96}px`,
            transform: `rotate(${[-3, 2, -1.5][i]}deg)`,
            zIndex: i,
          }}
        >
          <div className="flex items-center justify-between text-sm font-medium opacity-80">
            <span>{c.category}</span>
            <div className="flex items-center gap-1">
              <UserCircle className="size-3" />
              <span>{c.members} members</span>
            </div>
          </div>
          <p className={`mt-6 text-2xl font-bold leading-tight`}>{c.name}</p>
          <p className="mt-3 text-sm opacity-80">join us</p>
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
      bg: "bg-gradient-to-r from-white/80 via-purple-50/60 to-primary/5",
      primaryTextColor: "text-slate-900",
      secondaryTextColor: "text-primary",
      descriptionColor: "text-slate-600",
      primaryButtonStyle: "text-white bg-primary",
      secondaryButtonStyle: "border-slate-200",
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
      "mx-auto grid items-center gap-0 lg:grid-cols-[1.3fr_1fr] p-10 rounded-lg",
      item.theme.bg
    )}
  >
    <div className="">
      <Badge className="mb-6 rounded-full bg-[#FFC93C] px-3 py-1 text-[#1B1A3A] hover:bg-[#FFC93C]">
        {item.badge}
      </Badge>
      <h1
        className={cn(
          "text-4xl font-extrabold sm:leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl",
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
          "mt-6 max-w-xl sm:text-lg leading-relaxed text-slate-600",
          item.theme.descriptionColor
        )}
      >
        {item.description}
      </p>
      <div className="mt-8 flex flex-col gap-1 sm:gap-3 sm:flex-row">
        <Button
          size="lg"
          className={cn("h-12 px-8 text-base", item.theme.primaryButtonStyle)}
        >
          Browse courses
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className={cn("h-12 px-8 text-base", item.theme.secondaryButtonStyle)}
        >
          <PlayCircle className="mr-2 h-5 w-5" />
          Watch a free lesson
        </Button>
      </div>
      <p className="mt-6 flex items-center gap-2 text-sm text-[#1B1A3A]/70">
        <Star className="h-4 w-4 fill-[#FFC93C] text-[#FFC93C]" />
        Rated 4.8 by 38,000 learners in 90 countries
      </p>
    </div>

    {/* Stacked course previews */}
    <div
      className="relative  mx-auto h-105 w-full max-w-md hidden md:block"
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
