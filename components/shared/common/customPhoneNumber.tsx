// PhoneInputField.tsx
import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

interface PhoneInputFieldProps {
  label?: string;
  name?: string;
  value?: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}

const PhoneInputField: React.FC<PhoneInputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={name}
        className="block mb-1 text-sm font-normal text-black"
      >
        {label}
      </label>
      <PhoneInput
        international
        defaultCountry="AE"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        name={name}
        id={name}
        countrySelectProps={{
          className: "text-black text-md w-full  p-2 py-2",
        }}
        numberInputProps={{
          className:
            "text-[#AFAFAF] text-md shadow-lg rounded-lg bg-transparent border border-grey2 focus:border-black focus:outline-none block w-full  p-2 py-2",
        }}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default PhoneInputField;
