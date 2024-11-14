import Heading from "@/components/shared/common/heading";
import React from "react";
import man from "/public/assets/arab man 1 1.svg";
import Image from "next/image";
import Hours from "/public/assets/24_hours.png";

type Props = {};

const Stats = (props: Props) => {
  return (
    <>
      <div className="md:py-10  lg:px-40 md:px-24  px-5 md:min-h-[75vh] flex items-center !w-full !bg-background">
        <div className="flex justify-center items-center flex-wrap  ">
          <div data-aos="zoom-in" className="lg:w-1/2 w-full space-y-5">
            <Heading
              text="Seamless Immigration Solutions Tailored to Your Journey:"
              styles=""
            />
            <div className=" md:pl-10 text-grey1 ">
              <div className="text-grey1 flex items-center gap-5 md:mt-5">
                {/* <h1 className="text-4xl font-semibold leading-normal text-center text-primary">
                  Open 24/7
                </h1> */}
                <Image src={Hours} alt="as" className="w-36 md:w-60" />

                <div
                  className="elfsight-app-e85239fa-d345-48c6-9c37-e84c00345c87 md:ml-10 md:scale-125"
                  data-elfsight-app-lazy
                ></div>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" className="md:w-1/2 w-full hidden md:block">
            <Image src={man} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
