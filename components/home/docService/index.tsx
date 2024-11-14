import Image from "next/image";
import React from "react";
import img from "/public/assets/docPickUp.jpg";
import Heading from "@/components/shared/common/heading";

type Props = {};

const DocService = (props: Props) => {
  return (
    <>
      <div className="md:py-20 py-10 lg:px-24 md:px-12  px-5  w-full flex  items-center ">
        <div className="flex lg:flex-row flex-col-reverse justify-evenly items-center gap-5 w-full">
          <div data-aos="zoom-in" className="lg:w-[45%] w-full ">
            <Image src={img} alt="" />
          </div>
          <div data-aos="zoom-in" className="lg:w-[50%] w-full space-y-7">
            <Heading
              text="Amer 247 provides documents pick up and drop off service"
              styles=""
            />
            <div className="border-l-[8px] text-md md:text-lg border-primary md:pl-10 pl-5 space-y-4">
              <li>
                The only Government services center operating 24 hours in the
                UAE.
              </li>
              <li>
                The only Government services center operating on Friday and
                public holidays.
              </li>
              <li>There are sufficient parking space available in the area.</li>
              <li>
                One stop shop (you can finish all your Government transactions
                at Amer 247)
              </li>
              <li>
                Our customer happiness consultants are well trained to cater to
                all your needs.
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocService;
