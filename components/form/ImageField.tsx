/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { cn } from "cn";
import { useField } from "formik";
import { ImagePlus, RefreshCw, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  name: string;
  label?: string;
  className?: string;
  labelClassName?: string;
  accept?: string[];
  disabled?: boolean;
  size?: string;
};

export default function ImageInput({
  name,
  label,
  className,
  size = "size-45",
  labelClassName,
  accept = [".png", ".jpg", ".jpeg", ".webp"],
  disabled,
}: Props) {
  const [field, meta, helpers] = useField<File | string | null>(name);
  const fileRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // Build / revoke object URL whenever the value changes
  useEffect(() => {
    const value = field.value;

    if (value instanceof File) {
      const url = URL.createObjectURL(value);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }

    if (typeof value === "string") {
      setPreview(value); // existing thumbnail URL
      return;
    }

    setPreview(null);
  }, [field.value]);

  function handleFile(file?: File | null) {
    if (!file) return;
    helpers.setValue(file);
    helpers.setTouched(true);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    handleFile(e.target.files?.[0]);
    // reset input so re-selecting the same file re-triggers onChange
    e.target.value = "";
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    if (disabled) return;
    handleFile(e.dataTransfer.files?.[0]);
  }

  function remove() {
    helpers.setValue(null);
    helpers.setTouched(true);
  }

  const showError = meta.touched && meta.error;
  const acceptStr = accept.join(",");

  return (
    <div className={cn("space-y-1.5", className)}>
      {label && (
        <label
          className={cn(
            "text-sm font-medium text-gray-700 mb-2",
            labelClassName
          )}
        >
          {label}
        </label>
      )}

      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => !disabled && fileRef.current?.click()}
        className={cn(
          "relative group rounded-lg border-2 border-dashed transition-colors cursor-pointer",
          "flex items-center justify-center overflow-hidden max-h-45",
          size,
          showError
            ? "border-red-400 bg-red-50/40"
            : "border-gray-300 hover:border-gray-400 bg-gray-50",
          disabled && "opacity-60 cursor-not-allowed"
        )}
      >
        {preview ? (
          <>
            {/* <img src={preview} alt="thumnail" /> */}
            <Image
              src={preview}
              alt="Thumbnail preview"
              fill
              unoptimized={preview.startsWith("blob:")}
              className="object-cover"
            />
            {/* Overlay actions */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  fileRef.current?.click();
                }}
                className="flex items-center gap-1 rounded-md bg-white/90 px-3 py-1.5 text-xs font-medium text-gray-800 hover:bg-white"
              >
                <RefreshCw className="size-3.5" />
                Replace
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  remove();
                }}
                className="flex items-center gap-1 rounded-md bg-red-500/90 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-500"
              >
                <X className="size-3.5" />
                Remove
              </button>
            </div>
          </>
        ) : (
          <div className="text-center p-6 pointer-events-none">
            <ImagePlus className="mx-auto size-6 text-gray-400" />
            <p className="mt-2 text-xs text-gray-600">
              <span className="font-medium text-gray-800">Click to upload</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {accept.join(", ").toUpperCase()}
            </p>
          </div>
        )}
      </div>

      <input
        ref={fileRef}
        type="file"
        accept={acceptStr}
        onChange={handleChange}
        className="hidden"
        disabled={disabled}
      />

      {showError && (
        <p className="text-xs text-red-500">{meta.error as string}</p>
      )}
    </div>
  );
}
