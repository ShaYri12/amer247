import React from "react";
import img from "/public/assets/management_illustration 1.svg";
import Image from "next/image";
import Heading from "@/components/shared/common/heading";
import SubHeading from "@/components/shared/common/subHeading";
import Button from "@/components/shared/common/Button";
import Link from "next/link";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <>
      <div className="md:py-20 py-10 lg:px-20 md:px-10 px-5   md:min-h-[80vh]   w-full flex justify-center items-center">
        <div className="flex w-full lg:flex-row flex-col-reverse justify-between">
          <div data-aos="zoom-in" className="lg:w-[45%] w-full ">
            <Image src={img} alt=" " className=" w-3/4  mx-auto" />
          </div>
          <div
            data-aos="zoom-in"
            className="lg:w-1/2 w-full flex items-center md:relative"
          >
            <div className="lg:space-y-5 space-y-4  py-10 w-full bg-white ">
              <Heading text="About Us" styles="" />
              <SubHeading
                text="We understand the challenges that can come with paperwork, long queues, and confusing processes."
                styles="lg:w-3/4 !pl-0 !border-0"
              />
              <SubHeading
                text="Provides services ranging from issuing entry permits, issuing and renewals of a residency visa, visa cancellation and other related services provided by other government institutions and departments."
                styles="lg:w-5/6"
              />
              <Link href="/about">
                <Button label="Know more about Amer 247" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
