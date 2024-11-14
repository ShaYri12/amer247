import Heading from "@/components/shared/common/heading";
import React from "react";
import img from "/public/assets/objecctive.svg";
import Image from "next/image";

type Props = {};
const texts = [
  "Amer 24/7 is the first and only center available 24/7 to assist you with our services",
  "We have two branches: Deira (behind Abu Baker Al Siddique Metro Station), JLT (One JLT Building)",
  "Collection and delivery of the transactions within the same day.",
  "Complete the transactions at the earliest possible time; subject to approval.",
  "Fast turn around and delivery time.",
  // Add more text elements as needed
];

const weDifferent = (props: Props) => {
  return (
    <>
      <div className="md:py-20 py-5 xl:px-32 lg:px-16 md:px-10 px-5 w-full flex flex-wrap  items-center relative">
        <div className="flex flex-wrap   w-full md:gap-0 gap-5 relative top-0 ">
          <div className="border-l-[8px] border-black pl-10 absolute top-5 py-2 left-0 lg:w-1/4 z-10 bg-white">
            <Heading text="How We Are Different" styles="text-start" />
          </div>

          <div data-aos="zoom-in" className=" lg:w-1/2 w-full space-y-5  ">
            <div className=" p-5 relative md:left-5 md:bottom-5">
              <Image src={img} alt="" className=" w-full  " />
              <div className="bg-[#1A1B18] w-3/4 h-[20%] absolute right-0 bottom-0 -z-10"></div>
            </div>
          </div>
          <div className=" lg:w-1/2 w-full flex items-center relative ">
            <div className="bg-white p-5 lg:absolute md:left-[-10%] py-5">
              {texts.map((text, index) => (
                <div
                  data-aos="zoom-in"
                  key={index}
                  className="flex items-center gap-7 space-y-3 "
                >
                  <div className="xl:w-[15px] xl:h-[15px] bg-[#1A1B18]"></div>
                  <p className="">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default weDifferent;
