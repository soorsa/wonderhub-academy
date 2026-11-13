"use client";
import { logout } from "@/hooks/auth/useAuth";
import Cookies from "js-cookie";
import {
  ChevronDown,
  ChevronDownCircle,
  LayoutPanelTop,
  LogOut,
  Menu,
  School,
  Settings,
  UserCircle,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { useEffect, useState } from "react";
import { useUserState } from "../../zustand/user.state";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Courses",
    href: "/courses",
  },
  { name: "Our Instructors", href: "/our-instructors" },
  { name: "Teach With Us", href: "/become-an-instructor", isPop: true },
];
const userLinks = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutPanelTop },
  {
    name: "My Courses",
    href: "/dashboard/my-courses",
    icon: School,
  },
  { name: "Settings", href: "/dashboard/profile", icon: Settings },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathName = usePathname();
  const { user } = useUserState();
  const token = Cookies.get("auth_token");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-sm text-gray-700"
          : "bg-transparent text-gray-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center divide-x divide-primary/30"
          >
            <div className="relative w-10 pr-2">
              <Image
                src={`/images/simple-logo.png`}
                alt="wonderhub academy"
                width={100}
                height={100}
              />
            </div>
            <div className="pl-2">
              <div className="text-xl font-bold bg-linear-to-r from-primary to-pink-600 bg-clip-text text-transparent ">
                wonderHUB
              </div>
              <div className="text-gray-500 text-xs">Learn ● Build ● Grow</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-primary transition-colors duration-200 ${
                  pathName === link.href
                    ? "font-medium text-primary"
                    : "text-primary/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {token && user ? (
              <div className="relative group flex gap-4 items-center justify-between cursor-pointer py-1 px-2 border rounded-full">
                <div className="flex-1 flex items-center gap-1">
                  {user.profile_picture ? (
                    <Image
                      src={user.profile_picture}
                      alt=""
                      height={100}
                      width={100}
                      className="w-5 h-5 rounded-full"
                    />
                  ) : (
                    <UserCircle className="w-5 h-5" />
                  )}
                  <div className="">{user.first_name}</div>
                </div>
                <ChevronDown className="w-4 h-4" />
                {/* User Dropdown */}
                <div className="absolute top-full -right-20 mt-2 w-64 p-2 bg-white shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-auto">
                  <div className="flex flex-col divide-y divide-gray-100">
                    {userLinks.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="py-2.5 px-3 flex items-center gap-2 hover:bg-gray-50 transition-colors"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                    <button
                      onClick={() => {
                        // Add logout logic here
                        logout();
                      }}
                      className="py-2.5 px-3 flex items-center gap-2 hover:bg-red-50 text-red-600 transition-colors w-full"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <Link
                  href="/login"
                  className="text-primary px-6 py-2 transition-all duration-200"
                >
                  Login
                </Link>
                <Link
                  href="/register?role=student"
                  className="bg-linear-to-r from-primary to-pink-600 text-white px-6 py-2 rounded-full hover:to-pink-800 transition-all duration-200"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${
              scrolled ? "text-gray-700" : "text-gray-700"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="md:hidden fixed inset-0 h-screen top-0 left-0 right-0 bg-white shadow-lg py-4 px-4 flex justify-center items-center"
          >
            <div className="border absolute top-4 right-4 rounded-lg border-gray-200 flex items-center justify-center p-1 hover:bg-gray-200 cursor-pointer">
              <X />
            </div>
            <div className="-mt-20 space-y-3 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg hover:text-primary transition-colors py-2 ${
                    pathName === link.href
                      ? "text-primary bg-primary/5 rounded-lg"
                      : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {token && user ? (
                <div className="w-screen px-10 py-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex text-lg items-center gap-1">
                      <UserCircle size={30} />
                      <div className="">
                        {user?.first_name} {user.last_name}
                      </div>
                    </div>
                    <ChevronDownCircle size={20} />
                  </div>
                  <div className="border-l border-gray-200 ml-10 space-y-4">
                    {userLinks.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="flex items-center text-sm gap-1"
                      >
                        <hr className="w-5 text-gray-200" />
                        <item.icon size={20} />
                        <div className="">{item.name}</div>
                      </Link>
                    ))}

                    <button
                      onClick={logout}
                      className="flex items-center text-sm gap-1 text-red-500"
                    >
                      <hr className="w-5 text-gray-200" />
                      <LogOut size={20} />
                      <div className="">Logout</div>
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  href="/register?role=student"
                  onClick={() => setIsOpen(false)}
                  className="block bg-linear-to-r from-primary to-pink-600 text-white px-10 text-xl font-bold py-2 rounded-full text-center"
                >
                  Get Started
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
