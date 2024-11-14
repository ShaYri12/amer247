// customSelectInput.tsx
import React, { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectInputProps {
  label?: string;
  subLabel?: string;
  name?: string;
  id?: string;
  style?: string;
  value?: string; // Add value to the interface
  options: Option[];
  onChange: (selectedValue: any) => void;
  error?: string | undefined;
}

const CustomSelectInput: React.FC<CustomSelectInputProps> = ({
  label,
  subLabel,
  name,
  id,
  style,
  value,
  options,
  error,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const option = options.find((opt) => opt.value === selectedValue);
    setSelectedOption(option || null);
    onChange(event);
  };

  return (
    <div className={`${style}`}>
      <label
        htmlFor={id || "custom-select"}
        className="block mb-1 text-sm font-normal text-black"
      >
        {label}
        <br />
        {subLabel && (
          <span className="text-sm font-normal text-grey1"> {subLabel}</span>
        )}
      </label>
      <select
        id={id}
        name={name}
        value={value || selectedOption?.value || ""} // Use provided value or fallback to selected option or empty string
        onChange={handleOptionChange}
        className="text-black text-md shadow-lg rounded-lg bg-transparent border border-gray-200 
                        focus:border-black focus:outline-none block w-full p-2"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default CustomSelectInput;
