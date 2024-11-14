import React from "react";

interface Props {
  text: string;
  styles?: string; // If you want to pass additional styles
}

const Heading: React.FC<Props> = ({ text, styles }) => {
  return (
    <div>
      <h1
        className={`text-black md:font-bold font-semibold md:text-4xl text-2xl ${styles}`}
      >
        {text}
      </h1>
    </div>
  );
};

export default Heading;
