"use client";
import { useModal } from "@/zustand/modal.state";
import { cn } from "cn";
import { X } from "lucide-react";
import { useEffect } from "react";
const Modal = () => {
  const {
    isOpen,
    content,
    size,
    close,
    goBack,
    title,
    isCloseable,
    isTransModal,
    headerStyle,
    description,
  } = useModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (isCloseable) {
      if (isOpen) {
        window.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen, isCloseable, close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50"
      // onClick={close}
    >
      <div
        className={`relative bg-white rounded-lg w-[95%] overflow-hidden ${size} ${
          isTransModal ? "bg-transparent" : "shadow-lg"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cn("p-2 space-y-1", headerStyle)}>
          <div className="flex items-start">
            <div className="flex-1 font-bold text-lg overflow-x-scroll uppercase text-nowrap scrollbar-hide">
              {title}
            </div>

            {isCloseable && (
              <button
                className="bg-white hover:bg-gray-200 rounded-lg border border-gray-200 text-gray-600 hover:text-gray-900 cursor-pointer h-7 w-7 flex justify-center items-center"
                onClick={close}
                aria-label="Close Modal"
              >
                <X size={20} />
              </button>
            )}
          </div>
          <p className="text-sm text-muted">{description}</p>
        </div>
        <div
          className={`px-4 pb-4 rounded-lg max-h-[75vh] overflow-y-auto scrollbar-hide`}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;
