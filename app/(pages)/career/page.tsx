import Heading from "@/components/shared/common/heading";
import SubHeading from "@/components/shared/common/subHeading";
import React from "react";
import img from "/public/assets/career.svg";
import Image from "next/image";
import CareerForm from "./careerForm";

type Props = {};
export const metadata = {
  title: "Career- Amer 247 Our Performance-oriented Culture",
  openGraph: {
    title: "Career- Amer 247 Our Performance-oriented Culture",
    description:
      "We are hiring. At amer247 hiring, our performance-oriented culture and responsible approach are the foundations of our success.",
  },
};
const Career = (props: Props) => {
  return (
    <>
      <div className="bg-black absolute right-0 top-[12%] h-[80vh] w-3/4 lg:block hidden"></div>
      <div className="relative md:pt-40 pt-20 min-h-screen">
        <div className="flex flex-wrap justify-center items-start xl:px-32 lg:px-20 md:px-12  relative ">
          <div className="lg:w-1/2 w-full  relative  ">
            <div className="lg:bg-transparent bg-black p-5 ">
              <div className="xl:w-3/4 w-full bg-white p-5 space-y-5">
                <Heading text={`We are hiring`} styles="" />
                <SubHeading text="At amer247 hiring, our performance-oriented culture and responsible approach are the foundations of our success.We recognize that our business depends on the creativity, dedication, and performance of our employees. We encourage employees to focus on achievement through collaboration and innovation." />
              </div>
            </div>
            <Image src={img} alt="" className="md:w-4/6 w-full" />
          </div>

          <div className="lg:w-1/2 w-full ">
            <CareerForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
