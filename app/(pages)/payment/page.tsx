import Heading from "@/components/shared/common/heading";
import Image from "next/image";
import React from "react";
import samsung from "/public/assets/samsung.png";
import PaymentCard from "@/components/payment/paymentCard";

type Props = {};
interface ApplicantInfoProps {
  label: string;
  value: string;
}

const ApplicantInfo: React.FC<ApplicantInfoProps> = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center custom-border py-2">
      <p className="text-grey1 text-lg">{label}</p>
      <p className="text-black text-lg font-semibold">{value}</p>
    </div>
  );
};

const Payment = (props: Props) => {
  return (
    <>
      <div className="confirmDetail min-h-screen h-full w-full lg:pt-40 pt-20 px-5  xl:px-32 lg:px-20 md:px-12 xl:pt-40 ">
        <div className="  ">
          <div className="border-l-[8px] border-black pl-10">
            <Heading text="Confirm Your Payment Details" styles="!text-xl" />
          </div>
        </div>
        <div className="md:py-10 shadow-md bg-white mt-5 p-5">
          <div className="flex justify-center items-start flex-wrap">
            <div className="lg:w-1/2 w-full space-y-4 lg:px-10">
              <Heading text="General Detail" styles="" />
              <ApplicantInfo label="Name" value="Amer 247" />
              <ApplicantInfo label="Order" value="Visa Application" />
              <div className="flex justify-between items-start custom-border py-2">
                <p className="text-grey1 text-lg">Adult Passengers</p>
                <div className="flex lg:flex-col flex-row justify-between lg:gap-0 gap-5">
                  <div className="">
                    <div className="bg-background2 text-primary text-lg font-semibold p-2">
                      Price: AED400
                    </div>
                    <p className="text-grey1 text-md">(Inclusive of VAT)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full space-y-4 lg:border-l-2 lg:px-10 border-[#4D4D4D] ">
              <Heading text="Passengers Detail" styles="" />

              <div className="flex justify-between items-center custom-border py-2">
                <p className="text-black text-lg">Pay Using Samsung Pay</p>
                <div className="text-black text-lg font-semibold border border-black p-1">
                  <Image src={samsung} alt="" className="w-3/4 mx-auto" />
                </div>
              </div>

              <p className="text-grey1 text-md py-1 text-center">or</p>
              <PaymentCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
