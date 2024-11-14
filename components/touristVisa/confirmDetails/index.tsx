"use client";
import React, { useState } from "react";

import Button from "@/components/shared/common/Button";
import CustomInput from "@/components/shared/common/customInput";
import axios from "@/components/utils/axiosConfig";
import registerPayment from "@/actions/register";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import PhoneInputField from "@/components/shared/common/customPhoneNumber";
import { generateReferenceId } from "@/components/utils/actions";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  reference: string;
  amount: string;
  comments: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  mobile: "",
  reference: "",
  amount: "",
  comments: "",
};

const FormPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormData>({
    ...initialFormData,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on input change
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let hasError = false;
    let newErrors: FormData = { ...initialFormData };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      hasError = true;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "A valid email is required";
      hasError = true;
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "A valid mobile number is required";
      hasError = true;
    }
    if (!formData.reference.trim()) {
      newErrors.reference = "Reference is required";
      hasError = true;
    }
    if (!formData.amount.trim() || isNaN(Number(formData.amount))) {
      newErrors.amount = "Amount must be a number";
      hasError = true;
    }

    setErrors(newErrors);
    return !hasError;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!validateForm()) {
      setLoading(false);

      return;
    }

    console.log("Form Data:", formData);
    try {
      const paymentResponse = await handlePayment();
      const orderNo = paymentResponse.data.order_no;
      const mainResponse = await postPayOnline({
        ...formData,
        orderNo: orderNo,
      });
      const visaId = mainResponse.data.data.id;
      setCookie("strapiIdUrl", `/api/pay-onlines/${visaId}`);
      // Handle payment and redirection

      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/payOnlineMail`,
        { ...formData, orderNo }
      );
      router.push(paymentResponse.data.payment_link);
    } catch (error) {}
  };
  const postPayOnline = async (data: any) => {
    return await axios.post("/api/pay-onlines", {
      data,
    });
  };
  const referenceID = "pay" + generateReferenceId();
  const handlePayment = async () => {
    const totalPrice = formData.amount;
    const registerData = {
      billing: {
        address: {
          city: "Dubai",
          stateProvince: "XD",
          country: "ARE",
          postcodeZip: 81143,
          street: "24 Seven Government Transaction Center LLC17 A Street",
          street2: "Al Khabaisi, Deira, Dubai",
        },
      },
      order: {
        amount: formData.amount,
        currency: "AED",
        description: "Mettpay - Test Please ignore",
        id: referenceID,
        returnUrl: "https://checkout.mettpsp.live/payment/status",
        timeoutUrl: "https://checkout.mettpsp.live/payment/status",
        cancelUrl: "https://checkout.mettpsp.live/payment/status",
      },
      customer: {
        email: formData.email,
        firstName: formData.name,
        lastName: formData.name,
        mobilePhone: formData.mobile,
        phone: formData.mobile,
      },
    };
    const paymentResponse = await registerPayment(registerData);
    return paymentResponse;
  };
  const handlePhoneChange = (value: string) => {
    // Update the phone number in formdata state
    setFormData({ ...formData, mobile: value });
  };
  return (
    <div className="container max-w-lg mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <CustomInput
          inputType="text"
          placeholder="Enter your name"
          label="Name (*)"
          onChange={handleChange}
          value={formData.name}
          error={errors.name}
          name="name"
          id="name"
        />
        <CustomInput
          inputType="email"
          placeholder="Enter your email"
          label="Email (*)"
          onChange={handleChange}
          value={formData.email}
          error={errors.email}
          name="email"
          id="email"
        />

        <PhoneInputField
          placeholder="235623623"
          label="Mobile (*)"
          onChange={handlePhoneChange}
          value={formData.mobile}
          error={errors.mobile}
          name="mobileNo"
        />
        <CustomInput
          inputType="text"
          placeholder="Enter a reference"
          label="Reference (*)"
          onChange={handleChange}
          value={formData.reference}
          error={errors.reference}
          name="reference"
          id="reference"
        />
        <CustomInput
          inputType="text"
          placeholder="Enter an amount"
          label="Amount (*)"
          onChange={handleChange}
          value={formData.amount}
          error={errors.amount}
          name="amount"
          id="amount"
        />
        <div className="flex flex-col relative">
          <label
            htmlFor="input-group-1"
            className="block mb-1 text-sm font-medium text-grey1"
          >
            Comment (For any specific requirements)
          </label>
          <textarea
            rows={3}
            cols={5}
            placeholder="Type your comment"
            className="text-black shadow-lg rounded-lg text-md bg-transparent border border-gray-200 
                        focus:border-black focus:outline-none block w-full p-2 "
            name="comments"
            id="comments"
            onChange={handleChange}
            value={formData.comments}
          />
        </div>
        <Button
          label="Proceed to Pay"
          style="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default FormPage;
