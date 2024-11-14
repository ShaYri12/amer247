import React from "react";
import Heading from "@/components/shared/common/heading";
import SubHeading from "@/components/shared/common/subHeading";
import Link from "next/link";
import CustomLink from "@/components/shared/common/customLink";
import { FaArrowRight } from "react-icons/fa6";
import { TouristVisasData } from "./touristVisasData";

const TouristServices = () => {
  return (
    <div>
      <div className="py-10 xl:px-32 lg:px-16 md:px-10 px-5 w-full flex flex-wrap items-center relative">
        <div className="w-full space-y-5">
          <Heading
            text="Tourist Visa Services & Application"
            styles="font-semibold"
          />
          <SubHeading text="Here are the services we provide" styles="" />
          <div className=" flex md:flex-row flex-col-reverse justify-evenly">
            <div className="lg:w-[70%] w-full">
              <div className="flex flex-wrap w-full items-stretch gap-5 pt-5">
                {TouristVisasData.map((visa, index) => (
                  <div
                    data-aos="zoom-in"
                    key={index}
                    className={`lg:w-[47%] w-full shadow-xl hover:shadow-2xl hover:scale-105 rounded-2xl  flex justify-between items-start flex-col gap-4 md:p-5 p-3 bg-white shrink`}
                  >
                    <div className="flex justify-between items-center">
                      <Heading
                        text={visa.heading}
                        styles="!md:text-xl !text-lg "
                      />
                    </div>
                    <div className="text-grey1 text-md w-full">
                      {visa.ProcessingTime && (
                        <li className="">
                          Processing time: {visa.ProcessingTime}
                        </li>
                      )}
                      {visa.stayPeriod && (
                        <li className="">
                          Stay period: {visa.stayPeriod} days
                        </li>
                      )}
                      {visa.validity && (
                        <li className="">Validity: {visa.validity} days</li>
                      )}
                      <div
                        className={`flex ${
                          visa.entry ? "justify-between " : "justify-end"
                        } items-center`}
                      >
                        {visa.entry && (
                          <li className="">Entry: {visa.entry} </li>
                        )}
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                      <Link
                        href={`touristVisaForm/${visa.slug}`}
                        className="w-1/2 px-4 rounded-lg border border-black text-black text-lg font-semibold flex justify-between items-center"
                      >
                        <div className="bg-white w-full py-2">
                          {visa.price} AED
                        </div>
                        <div className="flex items-center justify-center gap-5">
                          <FaArrowRight />

                          <div className="w-[6px] h-7 bg-black"></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="lg:w-[30%] w-full flex  items-start"
            >
              <div
                className={`md:w-[90%] mt-6         flex justify-between items-start flex-col gap-4 md:p-5 p-3 bg-white shrink`}
              >
                <Heading text="Need guidance?" />
                <p className="text-md text-grey1">
                  Leave us your details & we’ll get back to you!
                </p>
                <div className="border-t border-b py-2">
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-medium text-black">
                      Leave Your Details here
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.7215 13.7311C17.8225 13.8522 17.8986 13.992 17.9456 14.1425C17.9925 14.2931 18.0093 14.4514 17.9951 14.6084C17.9808 14.7654 17.9357 14.9181 17.8624 15.0577C17.7891 15.1973 17.6891 15.3211 17.5679 15.4219L12.7679 19.4215C12.6475 19.5269 12.5072 19.6071 12.3553 19.6575C12.2034 19.7078 12.043 19.7272 11.8835 19.7147C11.724 19.7021 11.5686 19.6578 11.4264 19.5842C11.2843 19.5107 11.1583 19.4095 11.0559 19.2866C10.9535 19.1637 10.8767 19.0215 10.83 18.8685C10.7833 18.7154 10.7677 18.5546 10.7841 18.3954C10.8005 18.2362 10.8486 18.082 10.9255 17.9416C11.0024 17.8013 11.1065 17.6778 11.2319 17.5783L16.0319 13.5775C16.2764 13.3739 16.5917 13.2758 16.9085 13.3046C17.2253 13.3334 17.5178 13.4868 17.7215 13.7311Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.27893 13.7311C6.48267 13.4868 6.7751 13.3334 7.09193 13.3046C7.40877 13.2758 7.72407 13.3739 7.96853 13.5775L12.7685 17.5783C12.8939 17.6778 12.9981 17.8013 13.075 17.9416C13.1519 18.082 13.1999 18.2362 13.2163 18.3954C13.2327 18.5546 13.2171 18.7154 13.1705 18.8685C13.1238 19.0215 13.047 19.1637 12.9445 19.2866C12.8421 19.4095 12.7161 19.5107 12.574 19.5842C12.4319 19.6578 12.2765 19.7021 12.1169 19.7147C11.9574 19.7272 11.797 19.7078 11.6451 19.6575C11.4932 19.6071 11.353 19.5269 11.2325 19.4215L6.43253 15.4219C6.31137 15.3211 6.21128 15.1973 6.13798 15.0577C6.06468 14.9181 6.01961 14.7654 6.00535 14.6084C5.99108 14.4514 6.0079 14.2931 6.05485 14.1425C6.10179 13.992 6.17794 13.8522 6.27893 13.7311Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.9992 17.2999C11.681 17.2999 11.3757 17.1735 11.1507 16.9485C10.9256 16.7234 10.7992 16.4182 10.7992 16.0999L10.7992 6.49993C10.7992 6.18167 10.9256 5.87644 11.1507 5.6514C11.3757 5.42635 11.681 5.29993 11.9992 5.29993C12.3175 5.29993 12.6227 5.42635 12.8477 5.6514C13.0728 5.87644 13.1992 6.18167 13.1992 6.49993L13.1992 16.0999C13.1992 16.4182 13.0728 16.7234 12.8477 16.9485C12.6227 17.1735 12.3175 17.2999 11.9992 17.2999Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <CustomLink
                    label="E: info@amer247.com"
                    href="/"
                    styles="!lg:text-lg !text-[12px] "
                    iconStyles="hidden"
                  />
                  <CustomLink
                    label="P: +971 4 2300500"
                    href="/"
                    styles="!lg:text-lg !text-[12px] "
                    iconStyles="hidden"
                  />
                  <CustomLink
                    label="F : +971 4 2300510"
                    href="/"
                    styles="!lg:text-lg !text-[12px] "
                    iconStyles="hidden"
                  />
                  <CustomLink
                    label="WhatsApp: +971 52 727 6699"
                    href="/"
                    styles="!lg:text-lg !text-[12px] "
                    iconStyles="hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristServices;
