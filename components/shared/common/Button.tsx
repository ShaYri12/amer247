"use client";
import React from "react";
import LoadingSpinner from "./LoadingSpinner";

type ButtonProps = {
  label: string;
  style?: string; // Assuming you want to pass a custom style string
  borderStyle?: string;
  loadingText?: string;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  style,
  loadingText,
  borderStyle,
  loading,
  type,
}) => {
  return (
    <div className="my-2">
      <button
        className={`flex gap-2 button-67 justify-between items-center btn text-white py-3 px-4 hover:scale-105 transition-all duration-300 ${style}`}
        onClick={onClick}
        disabled={loading}
        type={type || "button"}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <LoadingSpinner /> {loadingText}
          </div>
        ) : (
          label
        )}

        <div
          className={`w-[6px] bg-white self-stretch min-h-[5px] ${borderStyle}`}
        ></div>
      </button>
    </div>
  );
};

export default Button;
