"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/shared/common/Button";
import SubHeading from "@/components/shared/common/subHeading";

import React from "react";
import Image from "next/image";
import SocialMedia from "@/components/shared/common/socialMedia";
import SideArrow from "@/components/shared/common/sideArrow";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type CustomHeroProps = {
  heading1: string;
  heading2?: string;
  subHeading: string;
  btnLabel?: string;
  btn2Label?: string;
  heroImg: string | StaticImport; // Assuming `about` is an imported image
  textImg: string | StaticImport; // Assuming `heroImg` is an imported image
};

const CustomHero: React.FC<CustomHeroProps> = ({
  heading1,
  heading2,
  subHeading,
  btnLabel,
  heroImg,
  btn2Label,
  textImg,
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/pricing-list");
  };

  return (
    <>
      <div className="bg-[#F9F9F9]  h-full w-full">
        <div className="flex flex-wrap lg:h-screen flex-shrink-0 lg:flex-row flex-col-reverse justify-center items-center xl:px-32 lg:px-20 md:px-12 xl:pt-0 pt-40 relative ">
          <div
            data-aos="zoom-in"
            className="bg-[#FF512F4D] lg:w-1/4 w-1/2 md:h-[80%] h-[30%]  absolute right-[5%]  top-0"
          ></div>
          <Image
            src={textImg}
            alt=""
            className="md:w-1/3 absolute w-1/2  lg:right-[0.4%] right-[40%] top-[10%]"
          />

          <div
            data-aos="zoom-in"
            className="lg:w-1/2 w-full px-5  flex flex-col gap-5 justify-center items-start z-10 py-5"
          >
            <h1 className="text-4xl font-bold md:w-3/4 w-full leading-normal ">
              <span className="text-[#CB2129]">AMER</span>{" "}
              <span className="text-[#128D45]">247</span>
              <span className=""> {heading1}</span>
              <h1 className="text-2xl font-semibold leading-normal">
                {heading2}
              </h1>
            </h1>

            <SubHeading text={subHeading} styles="md:w-3/4 py-5 !z-10" />
            <div className="flex gap-10">
              {btnLabel && (
                <Button label={btnLabel} onClick={handleClick} style="" />
              )}
              {btn2Label && (
                <Button label={btn2Label} onClick={handleClick} style="" />
              )}
            </div>
          </div>
          <div data-aos="zoom-in" className="md:w-1/2 w-full  relative px-5 ">
            <div className="bg-primary w-1/2 h-[80%] absolute right-[30%] top-0 mx-auto ">
              {" "}
            </div>
            <Image
              src={heroImg}
              alt=""
              className="md:w-2/3  relative mx-auto hidden md:block right-[-5%]"
            />
          </div>

          <div
            data-aos="zoom-in"
            className="absolute md:left-0 right-0 bottom-0 hidden xl:block"
          >
            {" "}
            <SocialMedia />
          </div>
          <div data-aos="zoom-in" className="absolute right-3 bottom-5">
            <SideArrow />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomHero;
