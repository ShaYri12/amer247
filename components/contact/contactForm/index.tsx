"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Button from "@/components/shared/common/Button";
import CustomInput from "@/components/shared/common/customInput"; // Make sure the paths are correct
import Heading from "@/components/shared/common/heading";
import PhoneInputField from "@/components/shared/common/customPhoneNumber";
import axios from "axios";

// Define the types for your form fields
interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  reasonForContact: string;
  subject: string;
  message: string;
}

// Define the types for the errors
interface FormErrors {
  [key: string]: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    reasonForContact: "",
    subject: "",
    message: "",
  });
  const [submit, setSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({
    fullName: "",
    email: "",
    phoneNumber: "",
    reasonForContact: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    // Update the field's value
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate the field
    const newError = validateField(name, value); // Using the same validateField function from before
    // Update the error state for this field
    setFormErrors((prev) => ({ ...prev, [name]: newError }));
  };

  // Simple validation function
  const validateField = (fieldName: string, value: string): string => {
    switch (fieldName) {
      case "email":
        return value.match(/\S+@\S+\.\S+/) ? "" : "Email is invalid.";
      case "fullName":
        return value.length > 0 ? "" : "Full Name is required.";
      case "phoneNumber":
        return value.length > 0 ? "" : "Phone Number is required.";
      case "reasonForContact":
        return value.length > 0 ? "" : "Reason is required.";
      case "subject":
        return value.length > 0 ? "" : "Subject is required.";
      case "message":
        return value.length > 0 ? "" : "Message is required.";

      default:
        return "";
    }
  };
  const handlePhoneChange = (value: string) => {
    // Update the phone number in formdata state
    setFormData({ ...formData, phoneNumber: value });
    const newError = validateField("phoneNumber", value); // Using the same validateField function from before
    // Update the error state for this field
    setFormErrors((prev) => ({ ...prev, ["phoneNumber"]: newError }));
  };
  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    console.log("first");
    setSubmit(true);
    let errors: FormErrors = {};
    let isValid = true;

    // Validate each field and accumulate errors
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof FormData]); // Returns an error message or an empty string
      if (error) isValid = false; // If any error is found, mark form as invalid
      errors[key as keyof FormErrors] = error;
    });

    setFormErrors(errors); // Update the state once with all accumulated errors

    if (isValid) {
      console.log("Form data:", formData);
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/sendMail`,
        formData
      );
      setSubmit(false);
      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        reasonForContact: "",
        subject: "",
        message: "",
      });
    } else {
      console.error("Validation errors:", errors); // Now 'errors' contains the most recent validation results
      setSubmit(false);
    }
  };
  useEffect(() => {
    // Only set a timer if success is true
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 4000); // 2000 milliseconds = 2 seconds

      // Clear the timer if the component unmounts or success changes before the 2 seconds are up
      return () => clearTimeout(timer);
    }
  }, [success]);
  return (
    <div data-aos="zoom-in" className="bg-white px-2 py-5">
      <form className="space-y-3" onSubmit={handleSubmit}>
        <Heading text="Get in Touch" styles="pb-3" />
        <CustomInput
          name="fullName"
          label="Full Name"
          placeholder="John Doe"
          inputType="text"
          value={formData.fullName}
          onChange={handleChange}
          error={formErrors.fullName}
        />
        <CustomInput
          name="email"
          label="Email"
          placeholder="example@example.com"
          inputType="email"
          value={formData.email}
          onChange={handleChange}
          error={formErrors.email}
        />

        <PhoneInputField
          placeholder="4124124"
          label="Enter Mobile No. (*)"
          onChange={handlePhoneChange}
          value={formData.phoneNumber}
          error={formErrors.phoneNumber}
          name="phoneNumber"
        />
        <div className="flex flex-col relative">
          <label
            htmlFor="reasonForContact"
            className="block mb-1 text-lg font-medium text-black"
          >
            Your Reason For Contact
          </label>
          <select
            name="reasonForContact"
            className="text-black text-md bg-transparent border border-black focus:border-black focus:outline-none block w-full p-2"
            value={formData.reasonForContact}
            onChange={handleChange}
          >
            <option value="">Please Select</option>
            <option value="Visa">Visa</option>
            <option value="Career">Career</option>
            <option value="Suggestion">Suggestion</option>
            <option value="Complaint">Complaint</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {formErrors.reasonForContact && (
          <span className="text-sm text-red-500">
            {formErrors.reasonForContact}
          </span>
        )}

        <CustomInput
          name="subject"
          label="Subject"
          placeholder="Subject"
          inputType="text"
          value={formData.subject}
          onChange={handleChange}
          error={formErrors.subject}
        />
        <CustomInput
          name="message"
          label="Message"
          placeholder="Write Your Message"
          inputType="textarea"
          value={formData.message}
          onChange={handleChange}
          error={formErrors.message}
        />
        <Button
          loading={submit}
          loadingText="Submitting..."
          type="submit"
          label="Submit"
          style="w-full mt-5"
        />
        {success && (
          <p className="text-green-600 ">We have Received the Email</p>
        )}
      </form>
      {/* Optionally, render validation errors here */}
    </div>
  );
};

export default ContactForm;
