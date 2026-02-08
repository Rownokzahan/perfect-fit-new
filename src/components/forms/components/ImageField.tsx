import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FieldError } from "react-hook-form";
import { LuImagePlus } from "react-icons/lu";

interface ImageFieldProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  error?: FieldError;
  watchImage?: FileList | string;
  defaultImageUrl?: string;
}

const ImageField = ({
  register,
  error,
  watchImage,
  defaultImageUrl,
}: ImageFieldProps) => {
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(
    defaultImageUrl ?? null
  );

  useEffect(() => {
    // Manage preview URL lifecycle to prevent memory leaks from object URLs
    if (watchImage && typeof watchImage !== "string" && watchImage.length > 0) {
      const objectURL = URL.createObjectURL(watchImage[0]);

      setPreviewImageUrl((prevUrl) => {
        if (prevUrl !== objectURL) {
          if (prevUrl) URL.revokeObjectURL(prevUrl);
          return objectURL;
        }
        return prevUrl;
      });

      return () => {
        if (objectURL) {
          URL.revokeObjectURL(objectURL);
        }
      };
    }

    // Reset preview if file is removed
    if (
      !watchImage ||
      (typeof watchImage !== "string" && watchImage.length === 0)
    ) {
      setPreviewImageUrl(defaultImageUrl ?? null);
    }
  }, [watchImage, defaultImageUrl]);

  return (
    <div className="h-52 flex gap-4">
      <label
        className={clsx(
          "flex-1 h-full border border-dashed rounded cursor-pointer flex justify-center items-center",
          error && "border-red-600"
        )}
      >
        <div
          className={clsx(
            "text-center text-sm underline underline-offset-4",
            error && "text-red-600"
          )}
        >
          <LuImagePlus className="text-3xl mx-auto w-max mb-1" />
          <span>Click to {previewImageUrl ? "change" : "add"} image</span>
        </div>

        {/* Hidden file input registered for form handling */}
        <input
          accept="image/*"
          type="file"
          id="image"
          className="hidden"
          {...register("image", {
            required: defaultImageUrl ? false : "Image is required",
          })}
        />
      </label>

      {/* Conditionally render live image preview */}
      {previewImageUrl && (
        <figure className="h-full w-[40%] relative">
          <Image
            fill
            unoptimized
            src={previewImageUrl}
            alt="Preview"
            className="object-cover rounded"
          />
        </figure>
      )}
    </div>
  );
};

export default ImageField;
