import Heading from "@/components/shared/common/heading";
import React from "react";

type Props = {
  title: string;
  reqDoc: string[];
  redPoints: string[];
};

const steps = [
  "The only Government services center operating 24 hours in the UAE. The only Government services center operating 24 hours in the UAE.",
  "The only Government services center operating on Friday and public holidays. The only Government services center operating on Friday and public holidays.",
  "There are sufficient parking space available in the area. There are sufficient parking space available in the area.",
  "One stop shop (you can finish all your Government transactions at Amer 247) One stop shop (you can finish all your Government transactions at Amer 247)",
  "Our customer happiness consultants are well trained to cater to all your needs. Our customer happiness consultants are well trained to cater to all your needs.",
];
const RequiredDoc = ({ title, reqDoc, redPoints }: Props) => {
  return (
    <div>
      <div
        data-aos="zoom-in"
        className="text-grey1 md:text-lg text-md py-10 px-5 "
      >
        <div className="border-l-[8px] border-black pl-10 mb-5">
          <Heading text={`Required Documents To Apply For ${title}`} />
        </div>
        {reqDoc?.map((text, index) => (
          <div key={index} className="flex items-center mt-2 gap-7">
            <div className=" bg-black p-2"></div>

            <p className="text-md">{text}</p>
          </div>
        ))}
        {redPoints?.map((text, index) => (
          <div key={index} className="flex items-center pl-16 gap-7">
            <p className="text-md text-red-600">{text}</p>
          </div>
        ))}
      </div>
      <div className="md:py-10 py-5 px-5">
        <div className="border-l-[8px] border-black pl-10 mb-5">
          <Heading text="A Step by Step Guide to Application Process" />
        </div>
        {steps.map((text, index) => (
          <div key={index} className="flex items-center gap-7">
            <div className=" bg-black p-2"></div>
            <p className="text-md mt-2 ">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequiredDoc;
