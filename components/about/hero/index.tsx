import SubHeading from "@/components/shared/common/subHeading";
import heroImg from "/public/assets/aboutHero.svg";
import about from "/public/assets/aboutTxt.svg";
import React from "react";
import Image from "next/image";
import SocialMedia from "@/components/shared/common/socialMedia";
import SideArrow from "@/components/shared/common/sideArrow";

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <div className="bg-[#F9F9F9] md:min-h-screen h-full w-full">
        <div className="flex flex-wrap md:h-screen flex-shrink-0 md:flex-row flex-col-reverse justify-center items-center xl:px-32 lg:px-20 md:px-12 xl:pt-0 pt-40 relative ">
          <div
            data-aos="zoom-in"
            className="bg-[#FF512F4D] md:w-1/4 w-1/2 md:h-[80%] h-[30%]  absolute right-[5%]  top-0"
          ></div>
          <Image
            src={about}
            alt=""
            className="md:w-1/3 absolute   lg:right-[0%] right-0 top-[10%]"
          />

          <div
            data-aos="zoom-in"
            className="md:w-1/2 w-full px-5  flex flex-col gap-5 justify-center items-start z-10 py-5"
          >
            <h1 className="text-4xl font-bold md:w-3/4 w-full leading-normal ">
              <span className="text-[#CB2129]">AMER</span>{" "}
              <span className="text-[#128D45]">247</span>
              <span className=""> is a Semi-Government Organization</span>
              <div className="text-2xl font-semibold leading-normal">
                which allows residents to complete all Visa and Residency
                Transaction
              </div>
            </h1>
            <SubHeading
              text="Amer 24/7 Center Was established in 2017 in collaboration with the General Directorate of Residency and Foreigners Affairs and the experience was a direct application of the strategy of the Federal Government advocated by His Highness Sheikh Mohammed bin Rashid Al Maktoum, Prime Minister and Ruler of Dubai."
              styles="w-3/4 py-5 !z-10"
            />
          </div>
          <div data-aos="zoom-in" className="md:w-1/2 w-full  relative px-5 ">
            <div className="bg-primary w-1/2 h-[80%] absolute right-[30%] top-0 mx-auto ">
              {" "}
            </div>
            <Image
              src={heroImg}
              alt=""
              className="w-2/3 relative mx-auto  hidden md:block  right-[-5%]"
            />
          </div>

          <div className="absolute md:left-0 right-0 bottom-0 hidden xl:block">
            {" "}
            <SocialMedia />
          </div>
          <div className="absolute right-3 bottom-5">
            <SideArrow />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
