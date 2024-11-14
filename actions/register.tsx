"use server";

import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL || "";
const mainHeaders = {
  merchantKey: process.env.NEXT_PUBLIC_MERCHANT_KEY,
  merchantSecret: process.env.NEXT_PUBLIC_MERCHANT_SECRET,
};

type RegistrationData = {
  billing: {
    address: {
      city: string;
      stateProvince: string;
      country: string;
      postcodeZip: number;
      street: string;
      street2: string;
    };
  };
  order: {
    amount: string;
    currency: string;
    description: string;
    id: string;
    returnUrl: string;
    timeoutUrl: string;
    cancelUrl: string;
  };
  customer: {
    email: string;
    firstName: string;
    lastName: string;
    mobilePhone: string;
    phone: string;
  };
};

type FinalizePayment = {
  TransactionID: string;
  Customer: string;
  UserName: string;
  Password: string;
};
type ApiResponse = {
  // Define the structure of your expected response here
  // For example:
  message: string;
  // Add other fields as per the expected response structure
};

export default async function registerPayment(
  registrationData: RegistrationData
) {
  "use server";
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...mainHeaders,
  };

  const data = {
    ...registrationData,
  };
  try {
    const response = await axios.post(url + "create", data, { headers });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error during API request:", error);
  }
}
export async function finalizePayment(finalizePayment: FinalizePayment) {
  "use server";
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...mainHeaders,
  };

  const data = {
    Finalization: finalizePayment,
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error("Error during API request:", error);
  }
}
