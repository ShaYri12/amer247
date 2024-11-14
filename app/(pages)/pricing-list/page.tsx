import CustomHero from "@/components/shared/customHero";
import React from "react";
import price from "/public/assets/price.svg";
import pricetext from "/public/assets/priceText.svg";
import Heading from "@/components/shared/common/heading";
import SubHeading from "@/components/shared/common/subHeading";
import { items } from "./item";
import CustomLink from "@/components/shared/common/customLink";

type Props = {};

const Pricing = (props: Props) => {
  return (
    <>
      <CustomHero
        heading1="AMER 247’s Services Fees & Payments"
        heading2=""
        subHeading="We help our customers to keep updated with application fees and other charges required for the kind of applications they applied for. We also request to keep checking this page for regular updates or contact us for latest revisions of Amer services fees and charges."
        heroImg={price}
        textImg={pricetext}
      />

      <div className="md:py-40 py-10 lg:px-32 md:px-12  px-4  w-full flex  items-center weDo !bg-background">
        <div className="">
          <div className="space-y-5">
            <Heading text="Who We Do" />
            <SubHeading text="Here are the services we provide" />
          </div>
          <div className="flex  gap-4 py-10 flex-wrap !justify-center items-stretch w-full">
            {items.map((item, index) => (
              <div
                key={item.heading}
                className={` lg:w-[30%] shadow-lg md:w-[47%] w-full flex justify-center items-start flex-col gap-3 md:p-5 p-3  bg-white shrink`}
              >
                <div className="flex gap-2 items-center">
                  {item.svg}
                  <Heading
                    text={item.heading}
                    styles="!md:text-xl !text-lg md:w-3/4"
                  />
                </div>
                <h1 className="text-grey1 md:text-md text-sm">
                  {item.subHeading}
                </h1>
                <CustomLink
                  href={"/online-services"}
                  styles="w-full py-2 !border border-black justify-between  px-3"
                  label="Check Pricing"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
