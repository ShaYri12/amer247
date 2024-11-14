// Counter.tsx
"use client";
import React, { useState } from "react";

interface CounterProps {
  initialValue: number;
  minValue?: number;
  onCountChange: (count: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  initialValue,
  onCountChange,
  minValue,
}) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  const handleDecrement = () => {
    if (minValue) {
      const newCount = count - 1;
      setCount(newCount >= minValue ? newCount : minValue);
      onCountChange(newCount >= minValue ? newCount : minValue);
      return;
    }
    const newCount = count - 1;
    setCount(newCount >= 0 ? newCount : 0);
    onCountChange(newCount >= 0 ? newCount : 0);
  };

  return (
    <div data-aos="zoom-in" className="flex ">
      <div className="cursor-pointer" onClick={handleDecrement}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <rect x="0.5" y="0.5" width="39" height="39" fill="white" />
          <rect x="0.5" y="0.5" width="39" height="39" stroke="#D6D6D6" />
          <path
            d="M31.6654 21.6666H8.33203V18.3333H31.6654V21.6666Z"
            fill="black"
          />
          <path
            d="M31.6654 21.6666H8.33203V18.3333H31.6654V21.6666Z"
            fill="black"
            fill-opacity="0.2"
          />
          <path
            d="M31.6654 21.6666H8.33203V18.3333H31.6654V21.6666Z"
            fill="black"
            fill-opacity="0.2"
          />
          <path
            d="M31.6654 21.6666H8.33203V18.3333H31.6654V21.6666Z"
            fill="black"
            fill-opacity="0.2"
          />
          <path
            d="M31.6654 21.6666H8.33203V18.3333H31.6654V21.6666Z"
            fill="black"
            fill-opacity="0.2"
          />
        </svg>
      </div>
      <p className="text-lg font-semibold px-2 py-2 w-10 text-center">
        {count}
      </p>
      <div className="cursor-pointer" onClick={handleIncrement}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <rect x="0.5" y="0.5" width="39" height="39" fill="white" />
          <rect x="0.5" y="0.5" width="39" height="39" stroke="#D6D6D6" />
          <path
            d="M31.6654 21.6634H21.6654V31.6634H18.332V21.6634H8.33203V18.3301H18.332V8.33008H21.6654V18.3301H31.6654V21.6634Z"
            fill="black"
          />
          <path
            d="M31.6654 21.6634H21.6654V31.6634H18.332V21.6634H8.33203V18.3301H18.332V8.33008H21.6654V18.3301H31.6654V21.6634Z"
            fill="black"
            fill-opacity="0.2"
          />
          <path
            d="M31.6654 21.6634H21.6654V31.6634H18.332V21.6634H8.33203V18.3301H18.332V8.33008H21.6654V18.3301H31.6654V21.6634Z"
            fill="black"
            fill-opacity="0.2"
          />
          <path
            d="M31.6654 21.6634H21.6654V31.6634H18.332V21.6634H8.33203V18.3301H18.332V8.33008H21.6654V18.3301H31.6654V21.6634Z"
            fill="black"
            fill-opacity="0.2"
          />
          <path
            d="M31.6654 21.6634H21.6654V31.6634H18.332V21.6634H8.33203V18.3301H18.332V8.33008H21.6654V18.3301H31.6654V21.6634Z"
            fill="black"
            fill-opacity="0.2"
          />
        </svg>
      </div>
    </div>
  );
};

export default Counter;
