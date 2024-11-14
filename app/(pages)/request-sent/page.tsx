"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Heading from "@/components/shared/common/heading";
import SubHeading from "@/components/shared/common/subHeading";
import { getCookie, deleteCookie } from "cookies-next";
import axios from "@/components/utils/axiosConfig";
import Image from "next/image";
import success from "/public/assets/requestSentSuccess.svg";
import failure from "/public/assets/requestSentFailure.png";

const RequestSent = () => {
  const searchParams = useSearchParams();

  const code = searchParams.get("code");
  const transactionID = searchParams.get("transactionID");
  const responseDescription = searchParams.get("responseDescription");

  // Define a mapping of error codes to user-friendly messages
  const errorMessages: { [key: string]: string } = {
    "0": "Your request has been successfully processed.",
    "51": "Not Sufficient Funds - Please check your balance.",
    "5": "Do Not Honor - Please contact your bank.",
    "91": "Issuer Switch Inoperative - Try again later.",
  };
  useEffect(() => {
    const updateTransaction = async () => {
      const strapiIdUrl = getCookie("strapiIdUrl");

      const transactionData = {
        transactionId: transactionID,
        transactionStatus: `${code} ${responseDescription}`,
      };

      try {
        await axios.put((strapiIdUrl || "").toString(), {
          data: transactionData,
        });
        deleteCookie("strapiIdUrl");
      } catch (error) {
        console.error("Error updating Strapi transaction:", error);
        deleteCookie("strapiIdUrl");
      }
    };

    if (code && transactionID && responseDescription) {
      updateTransaction();
    }
  }, []); // Add dependencies here

  // Make sure code is a string before using it to index errorMessages
  const errorMessage =
    typeof code === "string"
      ? errorMessages[code]
      : "There was an error processing your request.";

  return (
    <div className="min-h-[70vh] flex items-center justify-center flex-col">
      <div className="bg-[#F9F9F9] mt-40 h-full w-full">
        {/* Display the message based on the error code */}
        <div className="py-10 flex flex-col justify-center items-center">
          {/* <Heading text={errorMessage} styles="text-center text-xl font-bold" /> */}
          {code === "0" || !code ? (
            <Image src={success} alt="success" />
          ) : (
            <>
              <Image src={failure} alt="falilure" />
              <Heading
                text={"Payment Failed Kindly contact the Support Team"}
                styles="text-center text-xl font-bold"
              />
            </>
          )}
        </div>
      </div>
      <div className="md:px-32 px-5 py-10 space-y-4">
        <SubHeading
          text="Still Got Queries? Contact us on the details below!"
          styles="text-center"
        />
      </div>
    </div>
  );
};

export default RequestSent;
