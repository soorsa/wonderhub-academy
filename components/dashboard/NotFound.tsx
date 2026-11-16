import { Info } from "lucide-react";
import Image from "next/image";
import React from "react";
type Props = {
  text: string;
};
const NotFound: React.FC<Props> = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center w-75 h-[40vh] mx-auto bg-red relative">
      <Image
        height={100}
        width={100}
        src="/icons/not-found.svg"
        alt="error"
        className="h-full w-full"
      />
      <div className="flex gap-1 items-center">
        <Info size={14} className="text-gray-500" />
        <span className="text-gray-500">{text}</span>
      </div>
    </div>
  );
};

export default NotFound;
