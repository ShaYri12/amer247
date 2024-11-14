import React from "react";
import img from "/public/assets/aboutUs.svg";
import Image from "next/image";
import Heading from "@/components/shared/common/heading";
import SubHeading from "@/components/shared/common/subHeading";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <>
      <div className="md:py-20 py-10  md:min-h-[80vh] h-auto  w-full flex justify-center items-center">
        <div className="flex w-full lg:flex-row flex-col-reverse">
          <div data-aos="zoom-in" className="lg:w-[65%] w-full ">
            <div className="relative">
              <Image src={img} alt=" " className="w-full  mx-auto" />
              <div className="bg-primary w-[10%]  h-[40%] absolute md:top-[50%] lg:block hidden lg:right-[-2rem] z-10"></div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="lg:w-1/2 w-full flex items-center md:relative"
          >
            <div className="lg:space-y-5 space-y-2 px-5 md:py-10 w-full bg-white md:absolute xl:left-[-35%] z-20">
              <Heading
                text="Amer 24/7 Provides Services"
                styles="!lg:text-2xl !text-lg"
              />
              <SubHeading
                text="provides services ranging from issuing entry permits, issuing and renewals of a residency visa, visa cancellation and other related services provided by other Government institutions and departments. The introduction of the private sector as a strategic partner of the various Government ministries and sectors to provide Government and federal services and raise the level of customer satisfaction. It catered to the idea of establishing service centers of specialized services, in cooperation with the private sector to accomplish all Government department and federal transactions."
                styles=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
