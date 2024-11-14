"use client";
import React, { useState } from "react";

import axios from "@/components/utils/axiosConfig";
import Button from "@/components/shared/common/Button";
import CustomFileUpload from "@/components/shared/common/customFIleUpload";
import CustomInput from "@/components/shared/common/customInput";
import Heading from "@/components/shared/common/heading";
import { useRouter } from "next/navigation";
import CustomSelectInput from "@/components/shared/common/customSelectInput";
import PhoneInputField from "@/components/shared/common/customPhoneNumber";
import { generateReferenceId } from "@/components/utils/actions";

type Props = {
  serviceName: string;
  categoryTitle: string;
  price: string | TrustedHTML;
};

type FormDataType = {
  applicantName: string;
  sponsorName: string;
  sponsorEmail: string;
  sponsorMobileNo: string;
  whatAppNo: string;
  emirates: string; // Added emirates field
  p0BoxNumber: string; // Added p0BoxNumber field
  uidNumber: string; // Added uidNumber field
  address: string;
  comment: string;
  requiredDocument: Blob[];
};

const ApplyForm = ({ categoryTitle, serviceName, price }: Props) => {
  const [formdata, setFormdata] = useState<FormDataType>({
    applicantName: "",
    sponsorName: "",
    sponsorEmail: "",
    sponsorMobileNo: "",
    whatAppNo: "",
    emirates: "Dubai", // Added emirates field
    p0BoxNumber: "", // Added p0BoxNumber field
    uidNumber: "", // Added uidNumber field
    address: "",
    comment: "",
    requiredDocument: [],
  });
  const [loading, setLoading] = useState(false);

  const handleChange = async (e: any) => {
    if (e.target.type === "file") {
      setFormdata({
        ...formdata,
        requiredDocument: [...formdata.requiredDocument, ...e.target.files],
      });
    } else {
      setFormdata({ ...formdata, [e.target.name]: e.target.value });
    }
  };
  const handlePhoneChange = (value: string) => {
    // Update the phone number in formdata state
    setFormdata({ ...formdata, sponsorMobileNo: value });
  };
  const handleWhatsAppChange = (value: string) => {
    // Update the phone number in formdata state
    setFormdata({ ...formdata, whatAppNo: value });
  };
  const router = useRouter();

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const requiredFields = [
      "applicantName",
      "sponsorName",
      "sponsorEmail",
      "sponsorMobileNo",
      "whatAppNo",
      "address",
      "emirates", // Added emirates field
      "p0BoxNumber", // Added p0BoxNumber field
      "uidNumber", // Added uidNumber field
    ];

    const newErrors: Record<string, string> = {};
    let hasErrors = false;

    requiredFields.forEach((fieldName) => {
      if (fieldName in formdata) {
        const value = formdata[fieldName as keyof FormDataType]; // Type assertion
        if (typeof value === "string" && (!value || value.trim() === "")) {
          newErrors[fieldName] = `${fieldName.replace(/_/g, " ")} is required.`;
          hasErrors = true;
        }
      }
    });
    // Add similar validations for other fields
    if (!formdata.sponsorEmail.match(/\S+@\S+\.\S+/)) {
      newErrors.sponsorEmail = "Sponsor Email is invalid.";
      hasErrors = true;
    } else {
      newErrors.sponsorEmail = "";
    }
    if (!formdata.requiredDocument.length) {
      newErrors.requiredDocument = "Documents are required";
      hasErrors = true;
    } else {
      newErrors.requiredDocument = "";
    }
    setErrors(newErrors);

    return !hasErrors;
  };
  const referenceID = "EID" + generateReferenceId();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!validateForm()) {
      console.log("Form validation failed");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    const { requiredDocument, ...newformdata } = formdata;

    try {
      const response = await axios.post("/api/emirate-ids", {
        data: {
          serviceName: serviceName,
          referenceID: referenceID,
          ...newformdata,
        },
      });

      formData.append("ref", "api::emirate-id.emirate-id");
      formData.append("refId", response.data.data.id);
      formData.append("field", "requiredDocument");

      Array.from(formdata.requiredDocument).forEach((file) =>
        formData.append("files", file)
      );

      await axios.post("/api/upload", formData);
      const convertedFormData = changeToFormData(
        formdata,
        serviceName,
        referenceID
      );
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/newEmiratesIDMail`,
        convertedFormData
      );
      // Uncomment the line below if you want to navigate after successful submission
      router.push("/request-sent");
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };
  const changeToFormData = (
    formdata: FormDataType,
    serviceName: string,
    referenceID: string
  ) => {
    const formData = new FormData();

    // Append files and other data to formData
    formData.append("serviceName", serviceName);
    formData.append("categoryTitle", categoryTitle);
    formData.append("referenceID", referenceID);
    formData.append("applicantName", formdata.applicantName);
    formData.append("sponsorName", formdata.sponsorName);
    formData.append("sponsorEmail", formdata.sponsorEmail);
    formData.append("sponsorMobileNo", formdata.sponsorMobileNo);
    formData.append("whatAppNo", formdata.whatAppNo);
    formData.append("address", formdata.address);
    formData.append("emirates", formdata.emirates);
    formData.append("p0BoxNumber", formdata.p0BoxNumber);
    formData.append("uidNumber", formdata.uidNumber);
    formData.append("comment", formdata.comment);

    // For files, you need to append each file in the array to formData
    formdata.requiredDocument.forEach((file, index) =>
      formData.append(`requiredDocument[${index}]`, file)
    );

    return formData;
  };
  const emirates = [
    { value: "dubai", label: "Dubai" },
    { value: "abu-dhabi", label: "Abu Dhabi" },
    { value: "sharjah", label: "Sharjah" },
    { value: "ajman", label: "Ajman" },
    // Add more emirates as needed
  ];
  return (
    <div>
      <div
        data-aos="zoom-in"
        className="xl:w-3/4 w-full mx-auto bg-white p-5 shadow-lg  rounded-md "
      >
        <div className="flex justify-between items-center">
          <div className="">
            <Heading text={`APPLY FOR ${serviceName}`} styles="!text-2xl" />
            <p className="text-grey1 text-md">
              Fill out the form and apply online!
            </p>
          </div>
          <div className="">
            <p className="text-grey1 text-md">(Inc. of VAT)</p>

            <div
              className="bg-background2 w-max text-primary text-lg font-semibold p-2"
              dangerouslySetInnerHTML={{ __html: price }}
            />
          </div>
        </div>

        <form action="" className="py-5 space-y-2">
          <CustomInput
            inputType="text"
            placeholder="Enter Full Name"
            label="Full Name of Applicant (*)"
            onChange={handleChange}
            value={formdata.applicantName}
            error={errors.applicantName}
            name="applicantName"
            id="applicantName"
          />
          <CustomInput
            inputType="text"
            placeholder="Enter Sponsor Full Name"
            label="Full Name of Sponsor (*)"
            onChange={handleChange}
            value={formdata.sponsorName}
            error={errors.sponsorName}
            name="sponsorName"
            id="sponsorName"
          />
          <CustomInput
            inputType="email"
            placeholder="abc@example.com"
            label="Sponsor Email ID (*)"
            onChange={handleChange}
            value={formdata.sponsorEmail}
            error={errors.sponsorEmail}
            name="sponsorEmail"
            id="sponsorEmail"
          />
          <PhoneInputField
            label="Enter Sponsor Mobile No"
            name="sponsorMobileNo"
            value={formdata.sponsorMobileNo}
            onChange={handlePhoneChange}
            error={errors.sponsorMobileNo}
            placeholder="Enter Sponsor Mobile No"
          />

          <PhoneInputField
            placeholder="Enter WhatsApp No. "
            label="WhatsApp No. (*)"
            onChange={handleWhatsAppChange}
            value={formdata.whatAppNo}
            error={errors.whatAppNo}
          />
          {/* <div className="flex flex-col relative">
            <label
              htmlFor="input-group-1"
              className="block mb-1 text-sm font-normal text-black"
            >
              Emirates{" "}
            </label>

            <select
              name="emirates"
              id="emirates"
              onChange={handleChange}
              value={formdata.emirates}
              className="text-black text-md bg-transparent border border-gray-200  
                        focus:border-black focus:outline-none block w-full p-2 "
            >
              <option value="Dubai">Dubai</option>
              <option value="John deo">John deo</option>
            </select>
          </div> */}
          <CustomSelectInput
            label="Emirates"
            name="emirates"
            id="emirates"
            options={emirates}
            onChange={handleChange}
            value={formdata.emirates}
          />
          {errors.emirates && (
            <span className="text-sm text-red-500">{errors.emirates}</span>
          )}
          <CustomInput
            inputType="text"
            placeholder="Enter P0 Box Number "
            label="P0 Box Number (*)"
            onChange={handleChange}
            value={formdata.p0BoxNumber}
            error={errors.p0BoxNumber}
            name="p0BoxNumber"
            id="p0BoxNumber"
          />
          <CustomInput
            inputType="text"
            placeholder="Enter UID Number"
            label="UID Number (*)"
            onChange={handleChange}
            value={formdata.uidNumber}
            error={errors.uidNumber}
            name="uidNumber"
            id="uidNumber"
          />

          <CustomFileUpload
            label="Upload Required Documents "
            subLabel="(Applicable only for entry permit applications)"
            name="requiredDocument"
            id="requiredDocument"
            onChange={handleChange}
            error={errors.requiredDocument}
            value={formdata.requiredDocument}
          />

          <div className="flex flex-col relative">
            <label
              htmlFor="input-group-1"
              className="block mb-1 text-sm font-normal text-black"
            >
              Address (*)
            </label>
            <textarea
              rows={3}
              cols={5}
              placeholder="johndeo"
              className="text-black shadow-lg rounded-lg text-md bg-transparent border border-gray-200 
                        focus:border-black focus:outline-none block w-full p-2 "
              name="address"
              id="address"
              onChange={handleChange}
              value={formdata.address}
            />
          </div>
          <div className="flex flex-col relative">
            <label
              htmlFor="input-group-1"
              className="block mb-1 text-sm font-normal text-black"
            >
              Comment (For any specific requirements)
            </label>
            <textarea
              rows={3}
              cols={5}
              placeholder="johndeo"
              className="text-black shadow-lg rounded-lg text-md bg-transparent border border-gray-200 
                        focus:border-black focus:outline-none block w-full p-2  "
              name="comment"
              id="comment"
              onChange={handleChange}
              value={formdata.comment}
            />
          </div>

          <Button
            label="Submit Request"
            style="w-full mt-4"
            onClick={handleSubmit}
            loading={loading}
            loadingText="Submitting..."
          />
        </form>
        <span className="text-sm font-normal text-grey1">
          {" "}
          *If you have any questions or inquiries, you might find it in FAQs or
          kindly reach us on our WhatsApp +971 58 1257700 or Live Chat or you
          can send us an e-mail: info@amer247.com.
        </span>
      </div>
    </div>
  );
};

export default ApplyForm;
