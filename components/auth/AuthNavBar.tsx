"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthNavbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Tutors", href: "/tutors" },
    { name: "About us", href: "/about" },
  ];

  return (
    <header className=" w-full transition-colors duration-300 mx-auto">
      <nav className="w-full flex justify-between items-center py-2 px-2 md:px-2">
        <div className="hidden divide-x divide-gray-400 md:flex text-sm justify-center w-full pb-5">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={`transition-colors duration-300 hover:text-primary px-4 ${
                pathname === link.href
                  ? "text-primary underline underline-offset-4"
                  : "text-gray-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
