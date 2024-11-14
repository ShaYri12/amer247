"use client";
import React, { useState } from "react";
import axios from "@/components/utils/axiosConfig";
import Button from "@/components/shared/common/Button";
import CustomFileUpload from "@/components/shared/common/customFIleUpload"; // Corrected import
import CustomInput from "@/components/shared/common/customInput"; // Corrected import
import Heading from "@/components/shared/common/heading"; // Corrected import

import { useRouter } from "next/navigation";
import PhoneInputField from "@/components/shared/common/customPhoneNumber";
import { generateReferenceId } from "@/components/utils/actions";
type Props = {
  serviceName: string;
  price: string | TrustedHTML;
  categoryTitle: string;
};

type FormDataType = {
  applicantName: string;
  email: string;
  mobileNo: string;
  account_IBAN_No: string;
  whatAppNo: string;
  passportApplicant: Blob[];
  visaCopyOfApplicant: Blob[];
  emirateIdCopyOfApplicant: Blob[];
  onePhotoOfApplicant: Blob[];
};

const ApplyForm = ({ serviceName, price, categoryTitle }: Props) => {
  const [formdata, setFormdata] = useState<FormDataType>({
    applicantName: "",
    email: "",
    mobileNo: "",
    account_IBAN_No: "",
    whatAppNo: "",
    passportApplicant: [],
    visaCopyOfApplicant: [],
    emirateIdCopyOfApplicant: [],
    onePhotoOfApplicant: [],
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  //http://localhost:1337/api/golden-visas?filters[transactionId][$eq]=1234&populate=*
  const handleChange = async (e: any) => {
    if (e.target.type === "file") {
      const name = e.target.name as keyof FormDataType;
      if (Array.isArray(formdata[name])) {
        setFormdata({
          ...formdata,
          [name]: [...(formdata[name] as Blob[]), ...e.target.files],
        });
      }
    } else {
      const name = e.target.name as keyof FormDataType;
      setFormdata({ ...formdata, [name]: e.target.value });
    }
  };
  const handlePhoneChange = (value: string) => {
    // Update the phone number in formdata state
    setFormdata({ ...formdata, mobileNo: value });
  };
  const handleWhatsAppChange = (value: string) => {
    // Update the phone number in formdata state
    setFormdata({ ...formdata, whatAppNo: value });
  };
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const requiredFields = [
      "applicantName",
      "email",
      "mobileNo",
      "account_IBAN_No",
      "whatAppNo",
      "address",
    ];

    const newErrors: Record<string, string> = {};
    let hasErrors = false;

    requiredFields.forEach((fieldName) => {
      const value = formdata[fieldName as keyof FormDataType];
      if (typeof value === "string" && (!value || value.trim() === "")) {
        newErrors[fieldName] = `${fieldName.replace(/_/g, " ")} is required.`;
        hasErrors = true;
      }
    });
    if (!formdata.email.match(/\S+@\S+\.\S+/)) {
      newErrors.email = "Email is invalid.";
      hasErrors = true;
    } else {
      newErrors.email = "";
    }
    if (!formdata.emirateIdCopyOfApplicant.length) {
      newErrors.emirateIdCopyOfApplicant = "ID Copy is required";
      hasErrors = true;
    } else {
      newErrors.emirateIdCopyOfApplicant = "";
    }
    if (!formdata.onePhotoOfApplicant.length) {
      newErrors.onePhotoOfApplicant = "Photo of Applicant is required";
      hasErrors = true;
    } else {
      newErrors.onePhotoOfApplicant = "";
    }
    if (!formdata.passportApplicant.length) {
      newErrors.passportApplicant = "Passport of Applicant is required";
      hasErrors = true;
    } else {
      newErrors.passportApplicant = "";
    }
    if (!formdata.visaCopyOfApplicant.length) {
      newErrors.visaCopyOfApplicant = "Visa of Applicant is requiredd";
      hasErrors = true;
    } else {
      newErrors.visaCopyOfApplicant = "";
    }

    setErrors(newErrors);

    return !hasErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!validateForm()) {
      console.log("Form validation failed");
      setLoading(false);

      return;
    }

    const {
      passportApplicant,
      visaCopyOfApplicant,
      emirateIdCopyOfApplicant,
      onePhotoOfApplicant,
      ...newformdata
    } = formdata;
    const referenceID = "Gold" + generateReferenceId();
    try {
      const response = await axios.post("/api/golden-visas", {
        data: {
          serviceName: serviceName,
          referenceID: referenceID,
          ...newformdata,
        },
      });
      const visaId = response.data.data.id;
      await uploadDocuments(passportApplicant, visaId, "passportApplicant");
      await uploadDocuments(visaCopyOfApplicant, visaId, "visaCopyOfApplicant");
      await uploadDocuments(
        emirateIdCopyOfApplicant,
        visaId,
        "emirateIdCopyOfApplicant"
      );
      await uploadDocuments(onePhotoOfApplicant, visaId, "onePhotoOfApplicant");
      const convertedFormData = changeToFormData(
        formdata,
        serviceName,
        referenceID
      );
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/newGoldenVisaMail`,
        convertedFormData
      );

      router.push("/request-sent");
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };
  const uploadDocuments = async (
    files: Blob[],
    refId: string,
    field: string
  ) => {
    if (files.length > 0) {
      const formData = new FormData();
      formData.append("ref", "api::golden-visa.golden-visa");
      formData.append("refId", refId);
      formData.append("field", field);
      files.forEach((file) => formData.append("files", file));
      await axios.post("/api/upload", formData);
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
    formData.append("email", formdata.email);
    formData.append("mobileNo", formdata.mobileNo);
    formData.append("account_IBAN_No", formdata.account_IBAN_No);
    formData.append("whatAppNo", formdata.whatAppNo);
    // For files, you need to append each file in the array to formData
    formdata.passportApplicant.forEach((file, index) =>
      formData.append(`passportApplicant[${index}]`, file)
    );
    formdata.visaCopyOfApplicant.forEach((file, index) =>
      formData.append(`visaCopyOfApplicant[${index}]`, file)
    );
    formdata.emirateIdCopyOfApplicant.forEach((file, index) =>
      formData.append(`emirateIdCopyOfApplicant[${index}]`, file)
    );
    formdata.onePhotoOfApplicant.forEach((file, index) =>
      formData.append(`onePhotoOfApplicant[${index}]`, file)
    );
    return formData;
  };
  return (
    <div>
      <div
        data-aos="zoom-in"
        className="xl:w-3/4 w-full mx-auto bg-white p-5 shadow-md rounded-md"
      >
        <div className=" w-full flex justify-between items-center">
          <div className="">
            <Heading text={`APPLY FOR ${serviceName}`} styles="!text-2xl" />
            <p className="text-grey1 text-md">
              Fill out the form and apply online!
            </p>
          </div>
          <div className="ml-2">
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
            inputType="email"
            placeholder="abc@example.com"
            label="Email ID (*)"
            onChange={handleChange}
            value={formdata.email}
            error={errors.email}
            name="email"
            id="email"
          />
          <PhoneInputField
            placeholder="Enter WhatsApp No."
            label="WhatsApp No. (*)"
            onChange={handlePhoneChange}
            value={formdata.mobileNo}
            error={errors.mobileNo}
            name="mobileNo"
          />
          <PhoneInputField
            placeholder="Enter WhatsApp No. "
            label="WhatsApp No. (*)"
            onChange={handleWhatsAppChange}
            value={formdata.whatAppNo}
            error={errors.whatAppNo}
          />
          <CustomInput
            inputType="text"
            placeholder="Enter IBAN Number"
            label="Account IBAN Number (*)"
            onChange={handleChange}
            value={formdata.account_IBAN_No}
            error={errors.account_IBAN_No}
            name="account_IBAN_No"
            id="account_IBAN_No"
          />

          <CustomFileUpload
            label="Passport of applicant"
            subLabel=""
            name="passportApplicant"
            id="passportApplicant"
            onChange={handleChange}
            value={formdata.passportApplicant}
            error={errors.passportApplicant}
          />
          <CustomFileUpload
            label="Visa Copy of Applicant"
            subLabel=""
            name="visaCopyOfApplicant"
            id="visaCopyOfApplicant"
            onChange={handleChange}
            error={errors.visaCopyOfApplicant}
            value={formdata.visaCopyOfApplicant}
          />
          <CustomFileUpload
            label="Emirates id copy of applicant"
            subLabel=""
            name="emirateIdCopyOfApplicant"
            id="emirateIdCopyOfApplicant"
            error={errors.emirateIdCopyOfApplicant}
            onChange={handleChange}
            value={formdata.emirateIdCopyOfApplicant}
          />
          <CustomFileUpload
            label="One photo of applicant"
            subLabel=""
            name="onePhotoOfApplicant"
            id="onePhotoOfApplicant"
            error={errors.onePhotoOfApplicant}
            onChange={handleChange}
            value={formdata.onePhotoOfApplicant}
          />

          <Button
            label="Submit Request"
            style="w-full mt-4"
            onClick={handleSubmit}
            loading={loading}
            loadingText="Submitting..."
          />
        </form>
        <span className="text-sm font-normal text-grey1">
          *Our customer service agent will review your documents and you will
          get an email for further documents submission. *If you have any
          questions or inquiries, you might find it in FAQs or kindly reach us
          on our WhatsApp +971 58 1257700 or Live Chat or you can send us an
          e-mail: info@amer247.com.
        </span>
      </div>
    </div>
  );
};

export default ApplyForm;
