import Image from "next/image";
import React from "react";
import img from "/public/assets/error.svg";
import Heading from "@/components/shared/common/heading";
import SubHeading from "@/components/shared/common/subHeading";

type Props = {};

const Error = (props: Props) => {
  return (
    <div className=" min-h-screen">
      <div className="bg-[#F9F9F9] h-full w-full md:pt-40 pt-20 px-5">
        <div className="py-10 flex justify-center items-center">
          <Image src={img} alt="" className="" />
        </div>
      </div>
      <div className="md:px-32 px-5 py-10 space-y-4">
        <Heading text="Still Got Queries?" styles="" />
        <SubHeading text="Contact us on details below!" />
      </div>
    </div>
  );
};

export default Error;
