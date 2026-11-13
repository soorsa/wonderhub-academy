import Button from "@/components/global/Button";
import { useDelete } from "@/hooks/useMutation";
import { useModal } from "@/zustand/modal.state";
import { Info } from "lucide-react";
import React from "react";
interface Prop {
  slug: string;
  queries: string[];
  action: string;
  api_path: string;
}
const ConfirmDelete: React.FC<Prop> = ({ slug, queries, action, api_path }) => {
  const { mutate, isPending } = useDelete(queries);
  const modal = useModal();
  const payload: DeletePayload = {
    slug: slug,
    action: action,
    api_path: api_path,
  };
  return (
    <div className="space-y-5">
      <div className="text-center text-xl">
        Are you sure you want to delete this {action}?
      </div>
      <div className="space-y-3">
        <div className="text-gray-500 bg-gray-100 border border-gray-200 p-1 rounded-lg text-xs flex items-start gap-1">
          <Info size={16} className="" />
          <p className="flex-1">
            Note that this action cannot be undone items under this object might
            be lost.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <Button
            label="No, cancel"
            onClick={modal.close}
            className="text-white rounded-lg bg-black!"
          />
          <Button
            label="Yes, delete"
            className="bg-red-500! text-white rounded-lg"
            isLoading={isPending}
            disabled={isPending}
            onClick={() => {
              mutate(payload, {
                onSuccess() {
                  modal.close();
                },
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
