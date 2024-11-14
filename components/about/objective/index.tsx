import Heading from "@/components/shared/common/heading";
import Image from "next/image";
import React from "react";
import img from "/public/assets/objecctive.svg";

type Props = {};
const texts = [
  "We care about your valuable time",
  "We care about your satisfaction",
  "We put all our effort and experience to give you satisfaction",
  // Add more text elements as needed
];

const Objective: React.FC<Props> = (props) => {
  return (
    <>
      <div className="md:py-20 py-5 xl:px-32 lg:px-16 md:px-10 px-5 w-full flex flex-wrap  items-center relative">
        <div className="flex flex-wrap justify-between items-center w-full gap-5">
          <div
            data-aos="zoom-in"
            className="lg:w-2/5 md:w-1/2 w-full space-y-5"
          >
            <div className="border-l-[8px] border-[#1A1B18] pl-10">
              <Heading text="Our Objective" />
            </div>
            <div className="w-full relative py-5 ">
              <div className="bg-[#1A1B18] w-[97%] py-4 px-5 text-white text-lg font-medium">
                Our aim is to make your life easy and allow you to focus on your
                business.
              </div>
              <div className="bg-primary w-[20%] h-[90%] absolute right-0 bottom-1 -z-10"></div>
            </div>
            <div className="text-grey1 md:text-lg text-md">
              {texts.map((text, index) => (
                <div key={index} className="flex items-center gap-5">
                  <div className="w-[8px] min-w-[8px] min-h-[8px] h-[8px] lg:w-[15px] lg:min-w-[15px] lg:min-h-[15px] lg:h-[15px] bg-[#1A1B18]"></div>
                  <p className="">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div data-aos="zoom-in" className="md:w-2/5 w-full">
            <div className="relative md:p-4 p-2">
              <div className="bg-primary w-[20%] h-[10%] absolute left-0 top-0 -z-10"></div>
              <Image src={img} alt="" />
              <div className="bg-[#1A1B18] w-3/4 h-[20%] absolute right-0 bottom-0 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Objective;
