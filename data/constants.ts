export const lessons = [
  { title: "Introduction", duration: "20 min" },
  { title: "Mastering Tools", duration: "1 hour 20 min" },
  { title: "Mastering Adobe Illustrator", duration: "2 hour 10 min" },
  { title: "Create Simple Shape", duration: "40 min" },
  { title: "Typography", duration: "40 min" },
  { title: "Mastering Pen Tool", duration: "1 hour" },
  { title: "Mastering Pro Create", duration: "2 hour" },
];

export const enrolledCourses: EnrolledCourse[] = [
  {
    id: 1,
    instructor: "John Doe",
    title: "Crypto Trading",
    desc: "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    price: 45000,
    progress: 20,
    enrolled_date: "25 march 2025",
  },
  {
    id: 2,
    instructor: "John Doe",
    title: "UI/UX Design Foundation",
    desc: "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    price: 45000,
    progress: 50,
    enrolled_date: "25 march 2025",
  },
  {
    id: 3,
    instructor: "John Doe",
    title: "Video Editing",
    desc: "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    price: 45000,
    progress: 5,
    enrolled_date: "25 march 2025",
  },
  {
    id: 4,
    instructor: "John Doe",
    title: "Landing Page with WordPress",
    desc: "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    price: 45000,
    progress: 10,
    enrolled_date: "25 march 2025",
  },
  {
    id: 4,
    instructor: "John Doe",
    title: "3D Animation and Render",
    desc: "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    price: 45000,
    progress: 70,
    enrolled_date: "25 march 2025",
  },
  {
    id: 5,
    instructor: "John Doe",
    title: "Web Design",
    desc: "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    price: 45000,
    progress: 20,
    enrolled_date: "25 march 2025",
  },
  {
    id: 6,
    instructor: "John Doe",
    title: "Robotics and AI Engineering",
    desc: "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    price: 45000,
    progress: 20,
    enrolled_date: "25 march 2025",
  },
];

export const NotificationData: NotificationType[] = [
  {
    id: 1,
    title: "New Course Alert!",
    content:
      "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    created_at: "25 march 2025",
    is_read: "Read",
    updated_at: "25 march 2025",
  },
  {
    id: 2,
    title: "New Course Alert!",
    content:
      "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    created_at: "25 march 2025",
    is_read: "Unread",
    updated_at: "25 march 2025",
  },
  {
    id: 3,
    title: "New Course Alert!",
    content:
      "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    created_at: "25 march 2025",
    is_read: "Read",
    updated_at: "25 march 2025",
  },
  {
    id: 4,
    title: "New Course Alert!",
    content:
      "By training teachers in ICT and Data Science and introducing structured online tech training for rural students, this initiative aims to bridge the digital divide and enhance learning experiences, equipping students with future-ready skills that align with global education standards.",
    created_at: "25 march 2025",
    is_read: "Read",
    updated_at: "25 march 2025",
  },
];

import {
  ArrowLeftRightIcon,
  BellDot,
  Book,
  GraduationCap,
  Heart,
  HelpCircle,
  LayoutPanelLeft,
  Settings,
  Settings2,
  Tv,
  User2,
  Users,
  Wallet2,
} from "lucide-react";
class Navigation {
  overview = [
    {
      label: "Overview",
      icon: LayoutPanelLeft,
      path: "/dashboard",
    },
    {
      label: "Wallet",
      icon: Wallet2,
      path: "/dashboard/wallet",
    },
    {
      label: "Transactions",
      icon: ArrowLeftRightIcon,
      path: "/dashboard/transactions",
    },
    {
      label: "Notifications",
      icon: BellDot,
      path: "/dashboard/notifications",
    },
  ];
  courses = [
    {
      label: "Explore Courses",
      icon: GraduationCap,
      path: "/dashboard/courses",
    },

    {
      label: "My Courses",
      icon: GraduationCap,
      path: "/dashboard/my-courses",
    },

    {
      label: "Favourites",
      icon: Heart,
      path: "/dashboard/my-favourites",
    },

    {
      label: "Communities",
      icon: Users,
      path: "/dashboard/communities",
    },

    {
      label: "Live Class",
      icon: Tv,
      path: "/dashboard/wallet",
    },
  ];
  profile = [
    {
      label: "My Profile",
      icon: User2,
      path: "/dashboard/my-profile",
    },

    {
      label: "Account Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },

    {
      label: "Surport",
      icon: HelpCircle,
      path: "/dashboard/support",
    },
  ];
  admin = [
    {
      label: "Overview",
      icon: LayoutPanelLeft,
      path: "/admin",
    },
    {
      label: "Courses",
      icon: Book,
      path: "/admin/courses",
    },
    {
      label: "Categories",
      icon: Settings2,
      path: "/admin/categories",
    },
    {
      label: "Enrollments",
      icon: GraduationCap,
      path: "/admin/enrollments",
    },
    {
      label: "Transactions",
      icon: ArrowLeftRightIcon,
      path: "/admin/transactions",
    },
    {
      label: "Notifications",
      icon: BellDot,
      path: "/admin/notifications",
    },
  ];
}
export const navigation = new Navigation();
