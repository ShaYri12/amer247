"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

type CustomInputProps = {
  label?: string;
  id?: string;
  subLabel?: string;
  placeholder?: string;
  icon?: string;
  value: Blob[];
  error?: string | undefined;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
};

// ... (import statements remain unchanged)

const CustomFileUpload = ({
  label,
  error,
  subLabel,
  name,
  onChange,
  id,
  value,
}: CustomInputProps) => {
  const [filePreviews, setFilePreviews] = useState<string[]>([]);

  // Generate file previews when value changes
  useEffect(() => {
    if (value) {
      const fileReaders = value.map((file) => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            // Use a type guard to check if e.target is not null
            if (e.target) {
              resolve(e.target.result as string);
            } else {
              resolve(""); // Resolve with an empty string or handle the error as appropriate
            }
          };
          reader.readAsDataURL(file);
        });
      });
      Promise.all(fileReaders).then(setFilePreviews);
    } else {
      setFilePreviews([]);
    }
  }, [value]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      await onChange(e);
    }
  };

  const cancelFile = (index: number) => {
    // Remove the preview
    const updatedPreviews = filePreviews.filter((_, idx) => idx !== index);
    setFilePreviews(updatedPreviews);

    // If there is an onChange handler and value array, update it
    if (onChange && value) {
      const updatedValue = value.filter((_, idx) => idx !== index);
      // Construct a synthetic event with the updated value
      const event = {
        target: {
          name,
          value: updatedValue, // Pass the updated value array, not a FileList
        },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    }
    // Reset the file input
    if (document && id) {
      const fileInput = document.getElementById(id) as HTMLInputElement;
      fileInput.value = "";
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <label
          htmlFor="input-group-1"
          className="block mb-1 text-base font-medium text-black"
        >
          {label}
          <br />{" "}
          <span className="text-sm font-normal text-grey1"> {subLabel}</span>
        </label>
        {filePreviews.length > 0 && (
          <span className="text-sm text-black font-medium">
            {" "}
            Files ({filePreviews.length})
          </span>
        )}
        <div className="flex">
          {/* Display file previews */}
          {filePreviews.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {filePreviews.map((preview, index) => (
                <div key={index} className="relative">
                  <Image
                    src={preview}
                    width={70}
                    height={70}
                    alt={`File Preview ${index + 1}`}
                    className="object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => cancelFile(index)}
                    className="absolute top-0 right-2  text-black rounded-full text-lg"
                    aria-label={`Remove file ${index + 1}`}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <input
          id={id}
          type="file"
          className="hidden"
          onChange={handleFileChange}
          name={name}
          multiple
        />
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor={id}
            className="flex flex-col items-center justify-center w-full h-32 border-2 shadow-lg rounded-lg border-gray-300 border-dashed  cursor-pointer bg-[#F9F9F9] "
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <div className="flex flex-col items-center justify-center pt-5 pb-6 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.3954 27.7117C17.7732 27.712 17.1735 27.479 16.7147 27.0587C16.2559 26.6385 15.9712 26.0615 15.917 25.4417C15.6817 22.7568 15.6222 20.0594 15.7387 17.3667C15.5981 17.3572 15.4576 17.3472 15.317 17.3367L12.8337 17.1567C12.471 17.1302 12.1215 17.01 11.8192 16.8078C11.5169 16.6056 11.2724 16.3284 11.1094 16.0034C10.9464 15.6783 10.8707 15.3165 10.8895 14.9533C10.9084 14.5902 11.0213 14.2381 11.217 13.9317C13.0454 11.0717 16.3937 7.87169 19.1504 5.89169C19.5436 5.60937 20.0155 5.45752 20.4995 5.45752C20.9836 5.45752 21.4555 5.60937 21.8487 5.89169C24.6037 7.87169 27.952 11.0717 29.7787 13.9317C29.9745 14.2381 30.0873 14.5902 30.1062 14.9533C30.1251 15.3165 30.0493 15.6783 29.8863 16.0034C29.7234 16.3284 29.4788 16.6056 29.1765 16.8078C28.8743 17.01 28.5247 17.1302 28.162 17.1567L25.6787 17.3367L25.2587 17.3667C25.3754 20.06 25.3154 22.7567 25.0804 25.4417C25.0262 26.0615 24.7416 26.6385 24.2827 27.0587C23.8239 27.479 23.2242 27.712 22.602 27.7117H18.3954ZM18.302 16.27C18.1122 19.249 18.1473 22.238 18.407 25.2117H22.5904C22.8504 22.2384 22.8854 19.25 22.697 16.27C22.6867 16.1049 22.7092 15.9393 22.7633 15.7829C22.8175 15.6266 22.9021 15.4825 23.0123 15.3591C23.1226 15.2357 23.2562 15.1354 23.4055 15.064C23.5548 14.9926 23.7168 14.9516 23.882 14.9434C24.422 14.9167 24.9604 14.8834 25.4987 14.8434L27.3004 14.7134C25.7003 12.3561 23.6974 10.2991 21.3837 8.63669L20.4987 8.00169L19.6137 8.63669C17.2999 10.2991 15.2971 12.3561 13.697 14.7134L15.4987 14.845C16.037 14.8834 16.577 14.9167 17.1154 14.9434C17.2806 14.9516 17.4426 14.9926 17.5919 15.064C17.7412 15.1354 17.8748 15.2357 17.9851 15.3591C18.0953 15.4825 18.1799 15.6266 18.2341 15.7829C18.2882 15.9393 18.3107 16.1049 18.3004 16.27H18.302Z"
                    fill="#FF512F"
                  />
                  <path
                    d="M10.082 28.3334C10.082 28.0019 9.95034 27.6839 9.71591 27.4495C9.48149 27.2151 9.16355 27.0834 8.83203 27.0834C8.50051 27.0834 8.18257 27.2151 7.94815 27.4495C7.71373 27.6839 7.58203 28.0019 7.58203 28.3334V31.6667C7.58203 33.2767 8.8887 34.5834 10.4987 34.5834H30.4987C31.2722 34.5834 32.0141 34.2761 32.5611 33.7291C33.1081 33.1821 33.4154 32.4403 33.4154 31.6667V28.3334C33.4154 28.0019 33.2837 27.6839 33.0492 27.4495C32.8148 27.2151 32.4969 27.0834 32.1654 27.0834C31.8338 27.0834 31.5159 27.2151 31.2815 27.4495C31.0471 27.6839 30.9154 28.0019 30.9154 28.3334V31.6667C30.9154 31.7772 30.8715 31.8832 30.7933 31.9613C30.7152 32.0395 30.6092 32.0834 30.4987 32.0834H10.4987C10.3882 32.0834 10.2822 32.0395 10.2041 31.9613C10.1259 31.8832 10.082 31.7772 10.082 31.6667V28.3334Z"
                    fill="#FF512F"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  {" "}
                  Drag and drop files here to upload or Browse File{" "}
                </p>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  {" "}
                  or{" "}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Browse File
                </p>
              </div>
            </div>
            <input
              id={id}
              type="file"
              className="hidden"
              onChange={handleFileChange}
              name={name}
              multiple
            />
          </label>
        </div>
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    </>
  );
};

export default CustomFileUpload;
