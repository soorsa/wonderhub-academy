"use client";
import { navigation } from "@/data/constants";
import { logout } from "@/hooks/auth/useAuth";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function SideNavBar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="flex flex-col p-5 gap-5 h-screen justify-between overflow-y-auto scrollbar-hide">
      <Image
        height={100}
        width={100}
        src="/images/logo.png"
        alt="Wonder HUB"
        className="w-[60%] mx-auto"
      />
      <div className="w-full py-1.5 bg-white h-fit! rounded-2xl">
        <nav className="space-y-2 p-5 text-sm">
          {navigation.overview.map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className={`flex gap-2 items-center p-2 rounded-lg ${
                pathname === item.path
                  ? "bg-primary text-white"
                  : "text-black hover:bg-primary/40 hover:text-white"
              }`}
            >
              <item.icon />
              {item.label}
            </Link>
          ))}
          <div className="flex items-center mt-7 px-7 gap-2">
            <h4 className="text-gray-500 font-bold text-[13px]">LEARN</h4>
            <hr className="text-gray-300 w-full" />
          </div>
          {navigation.courses.map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className={`flex gap-2 items-center p-2 rounded-lg ${
                pathname === item.path
                  ? "bg-primary text-white"
                  : "text-black hover:bg-primary/40 hover:text-white"
              }`}
            >
              <item.icon />
              {item.label}
            </Link>
          ))}
          {/* Profile Nav */}
          <div className="flex items-center mt-7 px-7 gap-2">
            <h4 className="text-gray-500 font-bold text-[13px]">PROFILE</h4>
            <hr className="text-gray-300 w-full" />
          </div>
          {navigation.profile.map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className={`flex gap-2 items-center p-2 rounded-lg ${
                pathname === item.path
                  ? "bg-primary text-white"
                  : "text-black hover:bg-primary/40 hover:text-white"
              }`}
            >
              <item.icon />
              {item.label}
            </Link>
          ))}

          <button
            onClick={() => {
              logout();
              router.refresh();
            }}
            className="flex items-center w-full px-7 py-1.75 text-[12px] text-red-500 rounded-lg hover:bg-[#FFE6E6]"
          >
            <LogOut className="mr-2 w-4 h-4" />
            Logout
          </button>
        </nav>
      </div>
    </div>
  );
}

export default SideNavBar;
