/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import news from "/public/assets/NEWStxt.svg";
import post from "/public/assets/post.svg";
import Heading from "@/components/shared/common/heading";
import SideArrow from "@/components/shared/common/sideArrow";

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <div className=" min-h-screen h-full w-full relative">
        <div className="flex flex-wrap lg:h-screen lg:flex-row flex-col-reverse  justify-center items-center  relative mt-20 xl:mt-[6%] lg:mt-[4%] ">
          <div
            data-aos="zoom-in"
            className="lg:w-2/6 w-full lg:bg-white bg-[#1A1B18] relative lg:top-[10%] space-y-4 lg:left-[10%] z-10 p-5"
          >
            <div className="border-l-[8px] border-black pl-10">
              <Heading text="FEATURED" styles="!text-2xl" />
            </div>
            <Image src={post} alt="" />
            <Heading
              text="Stay Informed with the Latest News and Blogs for Seamless Journey"
              styles="!text-grey1 p-4 !text-lg"
            />
          </div>
          <div
            data-aos="zoom-in"
            className="lg:w-4/6 w-full bg-[#1A1B18] lg:h-screen flex flex-col justify-center md:py-20 items-center relative "
          >
            <div className="lg:block hidden ">
              <Image src={news} alt="" className="mx-auto" />
            </div>
            <div data-aos="zoom-in" className="lg:w-1/2 mx-auto w-full">
              <div className="w-full space-y-2 p-5 ">
                <p className="text-grey2 md:text-lg font-normal pb-2 ">
                  <span className="text-[#255A33]">U</span>
                  <span className="text-white">A</span>
                  <span className="text-[#CB2129]">E </span>
                  Immigration Insights:
                </p>
                <Heading
                  text="UAE Immigration Insights: Stay Informed with the Latest News and Blogs for Seamless Journey"
                  styles="!text-xl !text-grey2"
                />
                <p className="text-grey2 md:text-lg font-normal pb-2 ">
                  Stay connected to expert advice, success stories, and breaking
                  news that can make your journey smoother and more informed.
                  Your path to a new chapter begins here!"
                </p>
              </div>
            </div>
          </div>
          <div className="md:hidden block relative  w-full  bg-[#1A1B18] py-5">
            <Image src={news} alt="" className="mx-auto w-1/2" />
          </div>
        </div>
        <div className="absolute right-3 bottom-5">
          <SideArrow />
        </div>
      </div>
    </>
  );
};

export default Hero;
