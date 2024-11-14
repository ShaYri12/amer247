"use client";
import Heading from "@/components/shared/common/heading";
import SubHeading from "@/components/shared/common/subHeading";
import { usePathname } from "next/navigation";
import React from "react";
import { items } from "./item";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const whoWeAre = (props: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = usePathname();

  const isActive = (path: string) => {
    return router === path ? "!text-white !bg-primary" : "";
  };

  return (
    <>
      <div className="md:py-20  py-10 lg:px-40 md:px-20 px-5 md:min-h-[80vh] flex justify-center items-center w-full">
        <div className="flex flex-wrap w-full justify-between">
          <div
            data-aos="zoom-in"
            className="lg:w-2/3 w-full flex flex-col gap-5 py-2 "
          >
            <Heading text="Who We Are" styles="" />
            <SubHeading text="Amer247 Center Was established in 2017 in collaboration with the General Directorate of Residency and Foreigners Affairs, and the experience was a direct application of the strategy of the Federal Government advocated by His Highness Sheikh Mohammed bin Rashid Al Maktoum, Prime Minister and Ruler of Dubai." />
          </div>
          {items.map((item, index) => (
            <Link
              key={item.label}
              data-aos="zoom-in"
              href={item.url}
              className={`flex md:w-[30%] card1 cursor-default w-[48%] my-2 text-white shadow-lg justify-center rounded-lg items-center gap-2 flex-col md:py-5 py-2 ${isActive(
                item.url
              )} ${index >= 4 && "flex md:hidden"}`}
            >
              <Image
                src={item.icon}
                alt="icon"
                width={100}
                height={100}
                className="mb-4"
              />
              <h1
                className={`md:text-lg text-sm text-center md:font-medium ${isActive(
                  item.url
                )}`}
              >
                {item.label}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default whoWeAre;
