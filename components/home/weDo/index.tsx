import Heading from "@/components/shared/common/heading";
import SubHeading from "@/components/shared/common/subHeading";
import React from "react";
import { items } from "./item";
import Button from "@/components/shared/common/Button";

type Props = {};

const WeDo = (props: Props) => {
  return (
    <>
      <div className="md:py-20 py-5 lg:px-32 md:px-12  px-4  w-full flex  items-center !bg-background">
        <div className="">
          <div className="space-y-5">
            <Heading text="What We Do" styles="" />
            <SubHeading text="Here are the services we provide" />
          </div>
          <div className="flex  gap-4 py-10 flex-wrap !justify-center items-stretch">
            {items.map((item, index) => (
              <div
                data-aos="zoom-in"
                key={item.heading}
                className={`lg:w-[18%] md:w-[24%] w-[47%]  bg-white relative flex justify-center items-center flex-col gap-3 p-5 shadow-md rounded-lg shrink`}
              >
                {/* <Heading text={item.heading} styles='!md:text-xl !text-lg md:w-3/4'/> */}
                <p className="md:text-xl text-lg font-medium text-center ">
                  {item.heading}
                </p>
              </div>
            ))}
          </div>

          <div className="flex md:justify-end py-5">
            <Button label="See More Services" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeDo;
