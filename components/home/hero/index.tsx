"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/shared/common/Button";
import Heading from "@/components/shared/common/heading";
import SubHeading from "@/components/shared/common/subHeading";
import img1 from "/public/assets/IMMIGRATION.svg";

import abmer from "/public/assets/AMER 247.svg";

import React from "react";
import Image from "next/image";
import SocialMedia from "@/components/shared/common/socialMedia";
import SideArrow from "@/components/shared/common/sideArrow";

import YouTube from "react-youtube";

type Props = {};

const Hero = (props: Props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/amer247-services");
  };

  return (
    <>
      <div className="bg-[#F9F9F9] min-h-screen w-full">
        <div className="flex flex-wrap lg:h-[105vh] flex-shrink-0 md:flex-row flex-col-reverse justify-center items-center xl:px-32 lg:px-20 md:px-12 pt-40 relative">
          <Image
            src={img1}
            alt=" "
            className="absolute left-[5px] top-5 w-1/2"
          />
          <div
            data-aos="zoom-in"
            className="md:w-1/2 w-full px-5  flex flex-col gap-5 justify-center items-start z-10 py-5"
          >
            <Heading
              text="Seamless Immigration Solutions Tailored to Your Journey:"
              styles="leading-normal md:w-3/4 text-3xl "
            />
            <SubHeading
              text="We take pride in simplifying visa and immigration application procedures and thus making your life easier. The only Amer center to operate 24 hours every day."
              styles="md:w-3/4 py-5"
            />
            <div className="md:flex md:flex-row-reverse">
              <div
                className="elfsight-app-e85239fa-d345-48c6-9c37-e84c00345c87 md:ml-10"
                data-elfsight-app-lazy
              ></div>
              <Button label="Explore Our Services" onClick={handleClick} />
            </div>
          </div>
          <div data-aos="zoom-in" className="md:w-1/2 w-full relative px-5">
            <div className="bg-[#FF512F4D] w-3/4 md:h-40 h-20 absolute right-0 md:top-[-4rem] top-[-3em]"></div>
            <div className="w-full overflow-hidden">
              <video
                controls={true}
                muted={true}
                loop={true}
                autoPlay={true}
                className="md:h-[400px]"
              >
                <source src="assets/Amerwebvideo.mp4" />
              </video>
            </div>
            <div className="bg-primary w-3/6 h-5 relative left-5 bottom-0 "></div>
            <div className="float-right border-l-4 border-grey1 text-black md:text-md text-[10px]  px-5 md:font-medium mt-2 ">
              E: info@amer247.com P: +971 4 2300500 F : +971 4 2300510
            </div>
          </div>

          <div className="absolute md:left-0 right-0 bottom-0 hidden xl:block">
            {" "}
            <SocialMedia />
          </div>
          <h1 className="absolute right-[55px] md:bottom-5 md:block hidden opacity-[0.04] font-[700] text-black text-[140px] leading-[80px]">
            AMER24<span className="ps-[2px] font-[900]">7</span>
          </h1>
          <div className="absolute right-3 bottom-5">
            <SideArrow />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
