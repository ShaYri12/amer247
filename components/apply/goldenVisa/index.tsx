"use client";
import React, { useEffect, useState } from "react";
import ServiceCard from "../serviceCard";
import Heading from "@/components/shared/common/heading";
import { data } from "./data";

type Props = {};

const GoldenVisa: React.FC<Props> = () => {
  return (
    <>
      {/* Display Data */}
      <div
        data-aos="zoom-in"
        className="amerServices py-10 xl:px-32 lg:px-16 md:px-10 px-5 w-full flex flex-wrap items-center relative"
      >
        {/* Render your filtered data here */}
        {data.map((item) => (
          <div key={item.id} className="shadow-lg w-full">
            <div className="border-l-[8px] border-black pl-10 w-full mt-5">
              <Heading text={item.title} styles="font-semibold" />
            </div>
            <div
              data-aos="zoom-in"
              className="flex flex-wrap gap-3 w-full  pt-5"
            >
              {Array.isArray(item.services) &&
                item.services.map((service, index) => (
                  <ServiceCard
                    service={service}
                    path="formGoldenVisa"
                    key={index}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GoldenVisa;
