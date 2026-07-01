"use client";
import Button from "@/components/global/Button";
import clsx from "clsx";
import {
  ChartArea,
  ChevronDown,
  LogOut,
  Menu,
  School,
  Settings,
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

export const Navbar2 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isLoggedIn } = useUserState();
  const pathname = usePathname(); // Get current pathname

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled ? "bg-white/50 backdrop-blur-sm" : "bg-transparent",
        "text-gray-700"
      )}
    >
      <div className="w-full px-4 md:px-0 md:max-w-7xl mx-auto flex justify-between items-center pt-4 pb-1">
        <div className="flex items-center space-x-2">
          <Link href="/">
            {" "}
            {/* Make logo clickable */}
            <Image
              src="/images/simple-logo.png"
              alt="Wonderhub Logo"
              width={160}
              height={60}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-sm relative">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={clsx("relative", link.isPop && "group")}
            >
              <Link
                href={link.href}
                className={clsx(
                  "transition-colors duration-300 flex items-center",
                  pathname === link.href
                    ? "text-purple-950 font-bold"
                    : "hover:text-purple-950"
                )}
              >
                {link.name}
              </Link>

              {/* Popup for "Teach With Us" */}
              {link.isPop && (
                <div className="absolute top-full left-0 mt-2 w-90 p-6 bg-white shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-auto">
                  <div className="flex flex-col gap-4">
                    <p className="font-semibold text-gray-500 text-lg text-left">
                      Turn what you know into passive income and help grow
                      skills of millions of students in Africa.
                    </p>
                    <Button
                      label="Become an Instructor"
                      className="text-white"
                    />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        {isLoggedIn ? (
          <div className="hidden relative group md:flex gap-1 items-center border border-gray-300 pr-5 rounded-l-3xl rounded-r-lg cursor-pointer">
            <Image
              src={user?.profile_picture || "/images/course.jpg"}
              className="h-7 w-7 rounded-full object-cover"
              alt="User avatar"
              width={28}
              height={28}
            />
            <div className="text-xs font-medium">
              {user?.first_name || "User"}
            </div>
            <ChevronDown className="ml-1 h-4 w-4" />

            {/* User Dropdown */}
            <div className="absolute top-full right-0 mt-2 w-50 p-2 bg-white shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-auto">
              <div className="flex flex-col divide-y divide-gray-200">
                <Link
                  href="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 px-3 flex items-center gap-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <ChartArea className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
                <Link
                  href="/dashboard/my-courses"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 px-3 flex items-center gap-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <School className="h-4 w-4" />
                  <span>My Courses</span>
                </Link>
                <Link
                  href="/dashboard/profile"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 px-3 flex items-center gap-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
                <button
                  onClick={() => {
                    // Add logout logic here
                    setIsMobileMenuOpen(false);
                  }}
                  className="py-2.5 px-3 flex items-center gap-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors w-full"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden md:flex space-x-2">
            <Link
              href="/login"
              className="text-gray-800 text-sm px-4 py-2 hover:text-purple-600 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              Sign up
            </Link>
          </div>
        )}

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={clsx(
          "fixed inset-0 z-60 transition-transform duration-300 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Side drawer */}
        <div className="absolute right-0 top-0 w-80 h-full bg-white shadow-2xl p-6 overflow-y-auto">
          <div className="flex justify-end items-center mb-8">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 border border-gray-200 flex justify-center items-center hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <ul className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={clsx(
                    "block px-4 py-3 rounded-lg transition-colors",
                    pathname === link.href
                      ? "bg-purple-50 text-purple-700 font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex gap-4 text-gray-600 text-xl mb-6">
              {/* Add social icons here */}
              <span className="hover:text-purple-600 cursor-pointer">📘</span>
              <span className="hover:text-purple-600 cursor-pointer">🐦</span>
              <span className="hover:text-purple-600 cursor-pointer">📱</span>
              <span className="hover:text-purple-600 cursor-pointer">📷</span>
            </div>

            <div className="space-y-3">
              <Link
                href="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full bg-black text-white text-center py-2.5 rounded-full hover:bg-gray-800 transition-colors"
              >
                Sign up
              </Link>
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center text-gray-700 py-2 hover:text-purple-600 transition-colors"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// components/Navbar.tsx

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathName = usePathname();

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
                WonderHUB
              </div>
              <div className="text-gray-500 text-xs">
                Online Learning Platform
              </div>
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
            <Link
              href="/register?role=student"
              className="bg-linear-to-r from-primary to-pink-600 text-white px-6 py-2 rounded-full hover:to-pink-800 transition-all duration-200"
            >
              Get Started
            </Link>
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
              <Link
                href="/register?role=student"
                onClick={() => setIsOpen(false)}
                className="block bg-linear-to-r from-primary to-pink-600 text-white px-10 text-xl font-bold py-2 rounded-full text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
