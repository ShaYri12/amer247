"use client";
import Button from "@/components/shared/common/Button";
import CustomFileUpload from "@/components/shared/common/customFIleUpload";
import CustomInput from "@/components/shared/common/customInput";
import Heading from "@/components/shared/common/heading";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import axios from "@/components/utils/axiosConfig";
import PhoneInputField from "@/components/shared/common/customPhoneNumber";
import CustomSelectInput from "@/components/shared/common/customSelectInput";
import { generateReferenceId } from "@/components/utils/actions";

type Props = {
  serviceName: string;
  price: string | TrustedHTML;
  categoryTitle: string;
};
type FormDataType = {
  applicantName: string;
  sponsorName: string;
  sponsorEmail: string;
  sponsorMobileNo: string;
  account_IBAN_No: string;
  whatAppNo: string;
  applicationPriority: string;
  applicationType: string;
  address: string;
  comment: string;
  requiredDocument: Blob[]; // assuming requiredDocument is an array of files
};
const ApplyMedicalForm = ({ serviceName, price, categoryTitle }: Props) => {
  const [formdata, setFormdata] = useState<FormDataType>({
    applicantName: "",
    sponsorName: "",
    sponsorEmail: "",
    sponsorMobileNo: "",
    account_IBAN_No: "",
    whatAppNo: "",
    applicationPriority: "",
    applicationType: "",
    address: "",
    comment: "",
    requiredDocument: [],
  });
  const [loading, setLoading] = useState(false);

  const handleChange = async (e: any) => {
    if (e.target?.type === "file") {
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
      "account_IBAN_No",
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

    // Check if there are any errors
    return !hasErrors;
  };
  const referenceID = "MED" + generateReferenceId();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validate the form
    if (!validateForm()) {
      // If validation fails, return without submitting
      console.log("Form validation failed");
      setLoading(false);

      return;
    }

    const formData = new FormData();
    const { requiredDocument, ...newformdata } = formdata;

    await axios
      .post("/api/medical-tests", {
        data: {
          serviceName: serviceName,
          referenceID: referenceID,
          ...newformdata,
        },
      })
      .then(async (response: { data: { data: { id: string | Blob } } }) => {
        formData.append("ref", "api::medical-test.medical-test");
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
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/newAmerServiceMail`,
          convertedFormData
        );

        router.push("/request-sent");
      })
      .catch((err: any) => {
        console.error(err);
        setLoading(false);
      });
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
    formData.append("account_IBAN_No", formdata.account_IBAN_No);
    formData.append("whatAppNo", formdata.whatAppNo);
    formData.append("applicationPriority", formdata.applicationPriority);
    formData.append("applicationType", formdata.applicationType);
    formData.append("address", formdata.address);
    formData.append("comment", formdata.comment);
    // For files, you need to append each file in the array to formData
    formdata.requiredDocument.forEach((file, index) =>
      formData.append(`requiredDocument[${index}]`, file)
    );

    return formData;
  };
  const priority = [
    { value: "Normal", label: "Normal" },
    { value: "Urgent", label: "Urgent" },
    // Add more emirates as needed
  ];

  const applicationType = [
    { value: "Normal 24hrs", label: "Normal 24hrs" },
    { value: "VIP 06 Hours", label: "VIP 06 Hours" },
    { value: "VVIP 02 Hours", label: "VVIP 02 Hours" },
  ];
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
            placeholder="Enter Full Name "
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
            placeholder="abc@gmail.com"
            label="Sponsor Email ID (*)"
            onChange={handleChange}
            value={formdata.sponsorEmail}
            error={errors.sponsorEmail}
            name="sponsorEmail"
            id="sponsorEmail"
          />

          <PhoneInputField
            placeholder="Enter Mobile Number"
            label="Sponsor Mobile No. (*)"
            name="sponsorMobileNo"
            onChange={handlePhoneChange}
            value={formdata.sponsorMobileNo}
            error={errors.sponsorMobileNo}
          />
          <PhoneInputField
            placeholder="Enter WhatsApp Number"
            label="WhatsApp No. (*)"
            onChange={handleWhatsAppChange}
            value={formdata.whatAppNo}
            error={errors.whatAppNo}
            name="whatAppNo"
          />

          <CustomInput
            inputType="text"
            placeholder="Enter IBAN  Number"
            label="Account IBAN Number (*)"
            onChange={handleChange}
            value={formdata.account_IBAN_No}
            error={errors.account_IBAN_No}
            name="account_IBAN_No"
            id="account_IBAN_No"
          />

          <CustomSelectInput
            label=" Application Priority"
            name="applicationPriority"
            id="applicationPriority"
            onChange={handleChange}
            value={formdata.applicationPriority}
            options={priority}
          />
          <CustomSelectInput
            label="  Application Type"
            subLabel="(Applicable only for entry permit applications)"
            name="applicationType"
            id="applicationType"
            onChange={handleChange}
            value={formdata.applicationType}
            options={applicationType}
          />

          <CustomFileUpload
            label="Upload Required Documents "
            subLabel="(Applicable only for entry permit applications)"
            name="requiredDocument"
            id="requiredDocument"
            onChange={handleChange}
            value={formdata.requiredDocument}
          />

          <div className="flex flex-col relative">
            <label
              htmlFor="input-group-1"
              className="block mb-1 text-sm font-medium text-grey1 "
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
              className="block mb-1 text-sm font-medium text-grey1"
            >
              Comment (For any specific requirements)
            </label>
            <textarea
              rows={3}
              cols={5}
              placeholder="johndeo"
              className="text-black shadow-lg rounded-lg text-md bg-transparent border border-gray-200 
                        focus:border-black focus:outline-none block w-full p-2 "
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

export default ApplyMedicalForm;
