"use client";
import { navigation } from "@/data/constants";
import { logout } from "@/hooks/auth/useAuth";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="space-y-2 p-5 text-sm h-fit">
      {navigation.admin.map((item, i) => (
        <Link
          key={i}
          href={item.path}
          className={`flex gap-2 items-center p-2 rounded-lg ${
            pathname === item.path
              ? "bg-gray-950 text-white"
              : "text-gray-200 hover:bg-gray-900 hover:text-white"
          }`}
        >
          <item.icon />
          {item.label}
        </Link>
      ))}
      {/* Profile Nav */}
      <div className="flex items-center mt-7 px-7 gap-2">
        <h4 className="text-gray-300 font-bold text-[13px]">PROFILE</h4>
        <hr className="text-gray-500 w-full" />
      </div>
      {navigation.profile.map((item, i) => (
        <Link
          key={i}
          href={item.path}
          className={`flex gap-2 items-center p-2 rounded-lg ${
            pathname === item.path
              ? "bg-gray-950 text-white"
              : "text-gray-200 hover:bg-gray-900 hover:text-white"
          }`}
        >
          <item.icon />
          {item.label}
        </Link>
      ))}

      <button
        onClick={() => {
          logout();
        }}
        className="flex items-center justify-center w-full p-2 text-red-500 rounded-lg hover:bg-red-400/50"
      >
        <LogOut className="mr-2" />
        Logout
      </button>
    </nav>
  );
};

export default SideNavBar;
