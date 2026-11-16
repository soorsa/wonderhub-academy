import Button from "@/components/global/Button";
import { useDeleteCategory } from "@/hooks/useMutation";
import { useModal } from "@/zustand/modal.state";
import { Info } from "lucide-react";
import React from "react";
interface Prop {
  category: Category;
}
const DeleteCategory: React.FC<Prop> = ({ category }) => {
  const { mutate, isPending } = useDeleteCategory();
  const modal = useModal();
  return (
    <div className="space-y-10">
      <div className="space-y-1">
        <div className="">
          Are you sure you want to delete <b>{category.name}</b> category?
        </div>
        <div className="text-gray-500 text-xs flex items-start gap-1">
          <Info size={20} />
          Note that this action cannot be undone topics & courses under this
          category will be lost.
        </div>
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
            mutate(category.slug, {
              onSuccess() {
                modal.close();
              },
            });
          }}
        />
      </div>
    </div>
  );
};

export default DeleteCategory;
