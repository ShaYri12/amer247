import Image from "next/image";
import React from "react";
import logo from "/public/assets/logo.svg";
import Heading from "@/components/shared/common/heading";
import Button from "@/components/shared/common/Button";
import CustomLink from "@/components/shared//common/customLink";
type Props = {};

const AboutInfo = (props: Props) => {
  return (
    <>
      <div className="md:py-20 py-5 lg:px-32 md:px-12  px-5  w-full flex flex-wrap justify-center  items-center ">
        <div className="flex flex-wrap justify-center items-start">
          <div data-aos="zoom-in" className="lg:w-1/2 w-full space-y-5 p-5">
            <Image src={logo} alt="" />
            <p className="text-grey1 md:text-lg font-medium">
              Amer 247 is a Semi Government Organization, which allows residents
              to complete all Visa and Residency transactions.Amer 24/7 is the
              first and only center available 24/7 to assist you with our
              services
            </p>
          </div>
          <div data-aos="zoom-in" className="lg:w-1/2 w-full space-y-5 p-5">
            <Heading text="Our Timings" styles="!text-xl" />
            <p className="text-grey1 md:text-lg font-medium pb-2">
              We are open 24 hrs all days.
            </p>
            <p className="text-grey1 md:text-lg font-medium">
              Our services are available online by clicking on
            </p>
            <div className="flex justify-start">
              <Button label="APPLY ONLINE" />
            </div>
          </div>
          <div data-aos="zoom-in" className="lg:w-1/2 w-full space-y-5 p-5">
            <Heading text="ADDRESS" styles="!text-xl" />
            <p className="text-grey1 md:text-lg font-medium pb-2">
              24 Seven Government Transaction Center LLC17 A Street – Al
              Khabaisi (Behind Abu Baker Al Siddique Metro Station ) – Deira –
              Dubai, UAE.P.O.Box: 81143
            </p>
            <CustomLink
              label="Follow Map"
              href="  https://maps.app.goo.gl/MrgWi7hNu9gZo5Co9"
              target="_blank"
            />
          </div>
          <div data-aos="zoom-in" className="lg:w-1/2 w-full space-y-5 p-5">
            <Heading text="CONTACT INFO" styles="!text-xl" />
            <div className="flex items-center gap-2 flex-wrap">
              <CustomLink
                label="E: info@amer247.com"
                href="/"
                iconStyles="hidden"
              />
              <CustomLink
                label="P: +971 4 2300500"
                href="/"
                iconStyles="hidden"
              />
              <CustomLink
                label="F : +971 4 2300510"
                href="/"
                iconStyles="hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutInfo;
