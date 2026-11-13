"use client";
import Button from "@/components/global/Button";
import { useUserState } from "@/zustand/user.state";
import {
  ArrowLeft,
  BellDot,
  CircleArrowOutUpRight,
  Settings,
  Smile,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const { user } = useUserState();
  return (
    <div className="hidden relative md:flex justify-between items-center bg-white rounded-3xl p-8 mb-5 mt-2">
      <div
        onClick={() => router.back()}
        className="absolute cursor-pointer bg-white hover:bg-wonderhub-200 -bottom-2 left-0.5 p-2 rounded-full border border-wonderhub-200"
      >
        <ArrowLeft size={20} className="text-gray-600 hover:text-wonderhub" />
      </div>
      <div className="flex flex-1 items-center gap-1">
        <div className="text-3xl">
          <span className="text-gray-400 text-xl">Welcome, </span>
          {user ? (
            <span className=" font-bold">{user.first_name}</span>
          ) : (
            <span className="px-20 ml-1 w-10 rounded-lg bg-gray-200 animate-pulse"></span>
          )}
        </div>
        <Smile />
      </div>

      <div className="flex items-center gap-1">
        {user?.is_superuser && (
          <Button
            type="link"
            href="/admin"
            label="Go to Admin Portal"
            className="text-xs px-4 bg-purple-100 text-purple-600"
            rightIcon={<CircleArrowOutUpRight size={12} />}
          />
        )}
        {user?.role === "instructor" && (
          <Button
            type="link"
            href="/instructor"
            label="Go to Instructor Portal"
            className="text-xs px-4 border border-primary-200 text-primary"
          />
        )}
        <Link
          href={"/dashboard/notifications"}
          className="p-2 text-wonderhub hover:bg-wonderhub-200 flex justify-center items-center rounded-full"
        >
          <BellDot className="" size={18} />
        </Link>
        <Link
          href={"/dashboard/settings"}
          className="p-2 text-wonderhub hover:bg-wonderhub-200 flex justify-center items-center rounded-full"
        >
          <Settings className="" size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
