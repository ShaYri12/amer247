import Image from "next/image";
import React from "react";
import contact from "/public/assets/CONTACT.svg";
import Heading from "@/components/shared/common/heading";
import CustomLink from "@/components/shared/common/customLink";
import ContactForm from "../contactForm";

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <div className=" min-h-screen h-full w-full ">
        <div className="flex flex-wrap lg:h-screen  justify-center items-center  relative mt-[140px] ">
          <div
            data-aos="zoom-in"
            className="md:hidden block relative  w-full  bg-[#1A1B18] pt-6 pb-5"
          >
            <Image src={contact} alt="" className="mx-auto w-1/2" />
          </div>
          <div
            data-aos="zoom-in"
            className="md:w-2/6 w-full md:bg-white bg-[#1A1B18] relative lg:top-[10%] xl:top-[0%] lg:left-[10%] z-10 p-5"
          >
            <ContactForm />
          </div>
          <div
            data-aos="zoom-in"
            className="md:w-4/6 w-full bg-[#1A1B18] md:h-screen flex flex-col justify-center  items-center relative "
          >
            <div className="lg:block hidden ">
              <Image
                src={contact}
                alt=""
                className="mx-auto relative left-[30px] w-[65%]"
              />
            </div>
            <div className="lg:w-1/2 mx-auto w-full">
              <div className="w-full space-y-2 p-5 ">
                <Heading text="ADDRESS" styles="!text-xl !text-grey2" />
                <p className="text-grey2 md:text-lg font-normal pb-2 ">
                  24 Seven Government Transaction Center LLC17 A Street – Al
                  Khabaisi (Behind Abu Baker Al Siddique Metro Station ) – Deira
                  – Dubai, UAE.P.O.Box: 81143
                </p>
                <CustomLink
                  label="Follow Map"
                  href="  https://maps.app.goo.gl/MrgWi7hNu9gZo5Co9"
                  styles="!text-grey2 !border-grey2"
                  iconStyles=""
                  target="_blank"
                />
              </div>
              <div className=" w-full space-y-2 p-5">
                <Heading text="CONTACT INFO" styles="!text-xl !text-grey2" />
                <div className="flex items-center gap-2 flex-wrap">
                  <CustomLink
                    label="E: info@amer247.com"
                    href="/"
                    styles="!text-grey2 !border-grey2 font-normal"
                    iconStyles="hidden"
                  />
                  <CustomLink
                    label="P: +971 4 2300500"
                    href="/"
                    styles="!text-grey2 !border-grey2 font-normal"
                    iconStyles="hidden"
                  />
                  <CustomLink
                    label="F : +971 4 2300510"
                    href="/"
                    styles="!text-grey2 !border-grey2 font-normal"
                    iconStyles="hidden"
                  />
                  <p className="text-grey2 md:text-lg font-normal pb-2 ">
                    For PCR enquiries kindly send email to
                    info@247medservices.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
