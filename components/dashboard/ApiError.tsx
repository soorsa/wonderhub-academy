import { Info } from "lucide-react";
import Image from "next/image";
import React from "react";

const ApiErrorBlock: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-75 h-[80vh] mx-auto bg-red relative">
      <Image
        height={100}
        width={100}
        src="/500.svg"
        alt="error"
        className="h-full w-full"
      />
      <div className="flex flex-col gap-1 items-center">
        <Info size={24} className="text-red-400" />
        <h4 className="text-2xl font-bold text-red-400">Api Error</h4>
      </div>
    </div>
  );
};

export default ApiErrorBlock;
