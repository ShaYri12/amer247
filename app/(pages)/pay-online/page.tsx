import Heading from "@/components/shared/common/heading";
import ConfirmDetails from "@/components/touristVisa/confirmDetails";
import React from "react";

type Props = {};

const ConfirmDetail = (props: Props) => {
  return (
    <>
      <div className=" min-h-screen h-full w-full lg:pt-40 pt-32 px-5">
        <div className="  xl:px-32 lg:px-20 md:px-12 xl:pt-0  ">
          <div className="border-l-[8px] border-black pl-10">
            <Heading
              text="Confirm the details for application"
              styles="!text-xl"
            />
          </div>
          <ConfirmDetails />
        </div>
      </div>
    </>
  );
};

export default ConfirmDetail;
