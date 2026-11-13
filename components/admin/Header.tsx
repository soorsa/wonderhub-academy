import { CircleArrowOutUpRight } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md flex items-center justify-between">
      <div className="text-3xl font-bold">Admin Dashboard</div>
      <div className="flex items-center gap-1 ">
        <Link href={"/"} className="text-xs flex items-center gap-1">
          <div className="">Go to Site</div>
          <CircleArrowOutUpRight size={13} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
