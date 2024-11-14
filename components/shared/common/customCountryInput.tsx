// customCountryInput.tsx
import React, { useEffect, useState } from "react";
import { GetCountries } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

interface Country {
  name: string;
  id: number;
}
interface CustomCountryInputProps {
  label?: string;
  subLabel?: string;
  name?: string;
  id?: string;
  style?: string;
  value?: string; // Add value to the interface
  onChange: (selectedValue: any) => void;
  error?: string | undefined;
}

const CustomCountryInput: React.FC<CustomCountryInputProps> = ({
  label,
  subLabel,
  name,
  id,
  style,
  value,
  error,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<Country | null>({
    id: 231,
    name: "United Arab Emirates",
  });
  const [countriesList, setCountriesList] = useState<Country[]>([]);
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const option = countriesList.find((opt) => opt.name === selectedValue);
    setSelectedOption(option || null);
    onChange(event);
  };
  useEffect(() => {
    GetCountries().then((result: Country[]) => {
      setCountriesList(result);
    });
  }, []);
  console.log(countriesList);
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
        value={value || selectedOption?.name || ""} // Use provided value or fallback to selected option or empty string
        onChange={handleOptionChange}
        className="text-black text-md shadow-lg rounded-lg bg-transparent border border-gray-200 
                        focus:border-black focus:outline-none block w-full p-2"
      >
        <option value="" disabled>
          Select an option
        </option>
        {countriesList.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default CustomCountryInput;
