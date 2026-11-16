import Button from "@/components/global/Button";
import { useDeleteTopic } from "@/hooks/useMutation";
import { useModal } from "@/zustand/modal.state";
import { Info } from "lucide-react";
import React from "react";
interface Prop {
  topic: Topic;
}
const DeleteTopic: React.FC<Prop> = ({ topic }) => {
  const { mutate, isPending } = useDeleteTopic();
  const modal = useModal();
  return (
    <div className="space-y-10">
      <div className="space-y-1">
        <div className="">
          Are you sure you want to delete <b>{topic.name}</b> topic?
        </div>
        <div className="text-gray-500 text-xs flex items-center gap-1">
          <Info size={12} />
          Note that this action cannot be undone.
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
            mutate(topic.slug, {
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

export default DeleteTopic;
