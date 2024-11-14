"use client";

import React, { useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type CustomInputProps = {
  label?: string;
  inputType: string;
  placeholder?: string;
  style?: string;
  value?: string;
  name?: string;
  id?: string;
  onChange?: (e: any) => void;
  icon?: string | StaticImport;
  error?: string | undefined;
};

const CustomInput = (props: CustomInputProps) => {
  const {
    label,
    inputType,
    placeholder,
    icon,
    style,
    value,
    name,
    id,
    onChange,
    error,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className={`flex flex-col ${style}`}>
        <label
          htmlFor="input-group-1"
          className="block mb-1 text-sm font-normal text-black"
        >
          {label}
        </label>
        {inputType === "password" ? (
          <input
            type={showPassword ? "text" : "password"} // Toggle input type
            className={`first-line:text-[#AFAFAF] shadow-lg rounded-lg text-md bg-transparent border border-grey2 
                        focus:border-black focus:outline-none block w-full p-2 py-2 ${
                          error ? "border-red-500" : ""
                        }`}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
            id={id}
          />
        ) : (
          <input
            type={inputType}
            className={`text-[#AFAFAF] text-md shadow-lg rounded-lg bg-transparent border border-grey2
                        focus:border-black focus:outline-none block w-full  p-2 py-2 ${
                          error ? "border-red-500" : ""
                        }`}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
            id={id}
            autoComplete="on"
          />
        )}
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    </>
  );
};

export default CustomInput;
