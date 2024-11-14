"use client";
import Button from "@/components/shared/common/Button";
import CustomFileUpload from "@/components/shared/common/customFIleUpload";
import CustomInput from "@/components/shared/common/customInput";
import Heading from "@/components/shared/common/heading";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import CustomSelectInput from "@/components/shared/common/customSelectInput";

type Props = {};

const CareerForm = (props: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [requiredDocument, setRequiredDocument] = useState<Blob[]>([]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    router.push("/request-sent");
  };

  const cities = [
    { value: "lhr", label: "Lahore" },
    { value: "lhr", label: "Karachi" },
  ];
  const nationality = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    // Add more nationalities as needed
  ];
  const experience = [
    { value: "1", label: "1 Year" },
    { value: "2", label: "2 Year" },
    { value: "3", label: "3 Year" },
    { value: "4", label: "4 Year" },
    // Add more nationalities as needed
  ];

  return (
    <div>
      <div className="xl:w-3/4 w-full mx-auto bg-white p-5">
        <div className="flex justify-between items-center">
          <div className="">
            <Heading text="Apply Now" />
            <p className="text-grey1 text-md">
              Fill out the form and apply online!
            </p>
          </div>
        </div>

        <form action="" className="py-5 space-y-2">
          <CustomInput
            inputType="text"
            placeholder="john doe"
            label="Full Name (*) "
          />
          <CustomInput
            inputType="text"
            placeholder="john doe"
            label="Your Email (*)"
          />
          <CustomInput
            inputType="text"
            placeholder="john doe"
            label="Phone No. (*)"
          />
          <CustomSelectInput
            options={cities}
            label="Current Location (*)"
            onChange={function (selectedValue: string): void {
              throw new Error("Function not implemented.");
            }}
          />
          <CustomSelectInput
            options={nationality}
            label="Nationality (*)"
            onChange={function (selectedValue: string): void {
              throw new Error("Function not implemented.");
            }}
          />
          <CustomSelectInput
            options={experience}
            label="Experience (*)"
            onChange={function (selectedValue: string): void {
              throw new Error("Function not implemented.");
            }}
          />
          <CustomInput
            inputType="text"
            placeholder="john doe"
            label="Key Skills (*)"
          />

          <CustomFileUpload
            value={requiredDocument}
            label="Upload CV "
            subLabel=""
            id="cv"
          />

          <Button
            label="Submit Request"
            style="w-full mt-4"
            onClick={handleSubmit}
            loading={loading}
            loadingText="Submitting..."
          />
        </form>
      </div>
    </div>
  );
};

export default CareerForm;
