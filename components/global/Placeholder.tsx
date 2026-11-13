import Button from "@/components/global/Button";
import { AlertCircle } from "lucide-react";
import React, { ReactNode } from "react";
interface Prop {
  title?: string;
  message?: string;
  icon?: ReactNode;
  action?: () => void;
  actionLabel?: string;
}
const Placeholder: React.FC<Prop> = ({
  title,
  message,
  icon,
  action,
  actionLabel,
}) => {
  return (
    <div className="w-full h-full space-y-4 bg-white text-center border border-gray-300 rounded-2xl p-4 flex flex-col items-center ">
      <div className="flex flex-col items-center">
        <div className="bg-primary-200 p-4 w-fit h-fit rounded-full">
          {icon ? icon : <AlertCircle size={50} />}
        </div>
        <div className="text-2xl sm:text-3xl">{title ? title : "Error"}</div>
      </div>
      <div className="space-y-2">
        <div className="">
          {message
            ? message
            : "Sorry... unfortunally there has been a problem from our end."}
        </div>
        {action && (
          <Button
            label={actionLabel ? actionLabel : "Retry"}
            onClick={action}
            className="w-fit! px-7 text-primary! border border-primary hover:text-white! bg-transparent hover:bg-primary"
          />
        )}
      </div>
    </div>
  );
};

export default Placeholder;
