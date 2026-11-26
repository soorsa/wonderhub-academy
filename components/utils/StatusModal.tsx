import { cn } from "cn";
import { AlertTriangle, CheckCircle2, MoreHorizontal } from "lucide-react";
interface Props {
  status: "success" | "pending" | "failed";
  title: string;
  message: string;
}
export default function StatusModal({ status, title, message }: Props) {
  return (
    <div className="p-4 flex flex-col justify-center items-center text-center">
      <div className="">
        {status === "success" && (
          <CheckCircle2 className="size-40 text-green-500" strokeWidth={4} />
        )}
        {status === "pending" && (
          <MoreHorizontal className="size-40 text-slate-700" strokeWidth={4} />
        )}
        {status === "failed" && (
          <AlertTriangle className="size-40 text-red-500" strokeWidth={4} />
        )}
      </div>
      <div
        className={cn(
          "text-xl font-bold",
          status === "success" && "text-green-500",
          status === "pending" && "text-slate-700",
          status === "failed" && "text-red-500"
        )}
      >
        {title}
      </div>
      <div className="">{message}</div>
    </div>
  );
}
