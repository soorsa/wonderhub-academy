/* eslint-disable react/no-unescaped-entities */
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    quote:
      "The project-based curriculum and hands-on guidance completely streamlined how I approach product design. I landed my first junior product manager role within two weeks of receiving my certificate.",
    author: "Amara Okafor",
    role: "Product Design Graduate",
    company: "Washtrack Alumni",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "As someone transitioning from a completely different industry, the TypeScript and frontend engineering modules were practical, concise, and straight to the point with zero filler.",
    author: "Daniel Reyes",
    role: "Frontend Developer",
    company: "XtraTRD Alumni",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "The mentors actually do the work for a living. When I hit a blocker building my freelance business portfolio, the 1-on-1 feedback session gave me the exact clarity I needed to launch successfully.",
    author: "Tunde Bakare",
    role: "Freelance Founder",
    company: "PemaTech Cohort",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center space-x-1"
      aria-label={`Rating: ${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className={cn(
            "w-4 h-4",
            index < rating
              ? "text-amber-500 fill-amber-500"
              : "text-gray-300 fill-gray-200"
          )}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-primary">
            Loved By Ambitious Learners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Students Say
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            From career switchers to startup founders, hear how our short,
            project-based courses helped them build real skills and advance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-border/60 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 space-y-5"
            >
              <div className="space-y-1">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <StarRating rating={testimonial.rating} />
                  <span className="text-3xl font-serif text-primary select-none">
                    “
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center space-x-4 border-t border-border/40 pt-4">
                <Avatar>
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.author}
                  />
                </Avatar>
                <div>
                  <h4 className="font-serif font-bold text-gray-900 text-sm md:text-base">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {testimonial.role} ·{" "}
                    <span className="font-medium text-gray-700">
                      {testimonial.company}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 text-center border-t border-border/40">
          <div>
            <div className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
              38,000+
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              Active Learners
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
              120+
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              Project Courses
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
              94%
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              Completion Rate
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
              90+
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              Countries Reached
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
