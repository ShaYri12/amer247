import Heading from "@/components/shared/common/heading";
import React from "react";
import partner from "/public/assets/partner.svg";
import dubaiEconomy from "/public/assets/DubaiEconomy.png";
import fau from "/public/assets/fauCopy.png";
import grdf from "/public/assets/GRDRFAe1600377231925.png";

import Image from "next/image";
type Props = {};

const Partners = (props: Props) => {
  return (
    <>
      <div className="md:py-20 py-5 lg:px-32 md:px-12  px-5  w-full flex flex-wrap justify-center  items-center ">
        <Heading text="Our Partners" />
        <div
          data-aos="zoom-in"
          className="flex justify-between flex-wrap items-center w-full py-10"
        >
          <Image
            src={partner}
            alt="img"
            className="md:w-1/5 w-2/5 mt-[-20px]"
          />
          <Image src={dubaiEconomy} alt="img" className="md:w-1/5 w-2/5" />
          <Image src={fau} alt="img" className="md:w-1/5 w-2/5 mt-[6px]" />
          <Image src={grdf} alt="img" className="md:w-1/5 w-2/5" />
        </div>
      </div>
    </>
  );
};

export default Partners;
