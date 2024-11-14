"use client";
import React from "react";
import card from "/public/assets/cardtype.png";
import Image from "next/image";
import Button from "@/components/shared/common/Button";
import CustomInput from "@/components/shared/common/customInput";
import CustomSelectInput from "@/components/shared/common/customSelectInput";
import { useRouter } from "next/navigation";

type Props = {};

const PaymentCard = (props: Props) => {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/request-sent");
  };

  const monthOptions = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];
  const yearOptions = [
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    // Add more years as needed
  ];

  return (
    <>
      <div className="border-1 ">
        <div className="flex justify-between items-center  py-2">
          <p className="text-black text-lg">
            Pay with any of these cards below
          </p>
          <div className="text-black text-lg font-semibold border border-black p-1">
            <Image src={card} alt="" className="w-3/4 mx-auto" />
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="border p-1 flex flex-wrap justify-between gap-2 "
        >
          <CustomInput
            label="Card Number (*)"
            inputType="number"
            placeholder="**** ****** *****"
            style="lg:w-[47%] w-full"
          />
          <CustomInput
            label="CVV/CVC/CID (*)"
            inputType="number"
            placeholder="123"
            style="lg:w-[47%] w-full"
          />
          <CustomSelectInput
            label="Expiry Month (*)"
            options={monthOptions}
            style="lg:w-[47%] w-full"
            onChange={function (selectedValue: string): void {
              throw new Error("Function not implemented.");
            }}
          />
          <CustomSelectInput
            label="Expiry Year (*)"
            options={yearOptions}
            style="lg:w-[47%] w-full"
            onChange={function (selectedValue: string): void {
              throw new Error("Function not implemented.");
            }}
          />

          <div className="flex items-center flex-wrap w-full justify-between">
            <Button label="Reset" />

            <Button
              label="Proceed to Payment"
              style=""
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCard;
