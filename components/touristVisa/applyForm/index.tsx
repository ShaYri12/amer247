"use client";
import Button from "@/components/shared/common/Button";
import CustomFileUpload from "@/components/shared/common/customFIleUpload";
import CustomInput from "@/components/shared/common/customInput";
import Heading from "@/components/shared/common/heading";
import React, { useState } from "react";
import Counter from "./counter";
import axios from "@/components/utils/axiosConfig";
import { useRouter } from "next/navigation";
import PhoneInputField from "@/components/shared/common/customPhoneNumber";
import registerPayment from "@/actions/register";
import { setCookie } from "cookies-next";
import CustomCountryInput from "@/components/shared/common/customCountryInput";
import { generateReferenceId } from "@/components/utils/actions";

type Props = {
  serviceName: string;
  price: number;
};

type FormDataType = {
  applicantName: string;
  email: string;
  mobileNo: string;
  whatAppNo: string;
  nationality: string;
  dateOfTravel: string;
  passportCopies: Blob[];
  photosOfPassenger: Blob[];
  adults: { name: string; dateOfBirth: string }[];
  childs: { name: string; dateOfBirth: string }[];
};
interface FormErrorsType {
  applicantName: string;
  email: string;
  mobileNo: string;
  nationality: string;
  dateOfTravel: string;
  whatAppNo: string;
  passportCopies: string;
  photosOfPassenger: string;
  adults: { name: string; dateOfBirth: string }[];
  childs: { name: string; dateOfBirth: string }[];
}
const TouristVisaForm = ({ price, serviceName }: Props) => {
  const router = useRouter();

  const [formdata, setFormdata] = useState<FormDataType>({
    applicantName: "",
    email: "",
    mobileNo: "",
    nationality: "United Arab Emirates",
    dateOfTravel: "",
    whatAppNo: "",
    passportCopies: [],
    photosOfPassenger: [],
    adults: [{ name: "", dateOfBirth: "" }],
    childs: [{ name: "", dateOfBirth: "" }],
  }) as [FormDataType, React.Dispatch<React.SetStateAction<FormDataType>>];
  const initialErrors: FormErrorsType = {
    applicantName: "",
    email: "",
    mobileNo: "",
    nationality: "",
    dateOfTravel: "",
    whatAppNo: "",
    passportCopies: "",
    photosOfPassenger: "",
    adults: formdata.adults.map(() => ({ name: "", dateOfBirth: "" })),
    childs: formdata.childs.map(() => ({ name: "", dateOfBirth: "" })),
  };
  const [errors, setErrors] = useState<FormErrorsType>(initialErrors);
  const [openNext, setOpenNext] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleAddMore = (count: number) => {
    setFormdata((prevFormData) => {
      // Copy the current state
      const newFormData = { ...prevFormData };

      // Calculate the difference in count
      const currentCount = newFormData.adults.length;
      const difference = count - currentCount;

      if (difference > 0) {
        // If count has increased, add the required number of children
        newFormData.adults = [
          ...newFormData.adults,
          ...Array(difference).fill({}),
        ];
      } else if (difference < 0) {
        // If count has decreased, remove the last 'difference' number of children
        newFormData.adults = newFormData.adults.slice(0, count);
      }

      return newFormData;
    });
  };
  const handleAddChild = (count: number) => {
    setFormdata((prevFormData) => {
      // Copy the current state
      const newFormData = { ...prevFormData };

      // Calculate the difference in count
      const currentCount = newFormData.childs.length;
      const difference = count - currentCount;

      if (difference > 0) {
        // If count has increased, add the required number of children
        newFormData.childs = [
          ...newFormData.childs,
          ...Array(difference).fill({}),
        ];
      } else if (difference < 0) {
        // If count has decreased, remove the last 'difference' number of children
        newFormData.childs = newFormData.childs.slice(0, count);
      }

      return newFormData;
    });
  };
  function isKeyOfFormDataType(key: string): key is keyof FormDataType {
    return key in formdata;
  }

  function isArrayProperty(key: keyof FormDataType): boolean {
    return Array.isArray(formdata[key]);
  }

  const handleChange = async (e: any, index?: number) => {
    const name = e.target.name as keyof FormDataType;
    // Update formdata for adult or child based on index
    const splitedName = name.split("-");

    if (e.target.type === "file") {
      if (Array.isArray(formdata[name])) {
        setFormdata({
          ...formdata,
          [name]: [...(formdata[name] as Blob[]), ...e.target.files],
        });
      }
    } else if (
      index !== undefined &&
      isKeyOfFormDataType(splitedName[0]) &&
      isArrayProperty(splitedName[0])
    ) {
      const updatedArray = [
        ...(formdata[splitedName[0]] as Array<{ [key: string]: string }>),
      ];

      updatedArray[index] = {
        ...updatedArray[index],
        [splitedName[1]]: e.target.value,
      };

      setFormdata({
        ...formdata,
        [splitedName[0]]: updatedArray,
      });
    } else if (name === "dateOfTravel") {
      const selectedDate = new Date(e.target.value);
      const currentDate = new Date();

      if (selectedDate < currentDate) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          dateOfTravel: "Date of travel cannot be in the past",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          dateOfTravel: "", // Clear the error if the date is valid
        }));
      }

      setFormdata({ ...formdata, [name]: e.target.value });
    }
    //  else if (name.startsWith("adults-dateOfBirth-")) {
    //   const index = parseInt(name.split("-")[1]); // Extract index from name
    //   const selectedDate = new Date(e.target.value);
    //   const currentDate = new Date();

    //   if (selectedDate > currentDate) {
    //     setErrors((prevErrors) => ({
    //       ...prevErrors,
    //       adults: prevErrors.adults.map((error, i) => {
    //         if (i === index) {
    //           return { ...error, dateOfBirth: "Date of birth cannot be in the future" };
    //         }
    //         return error;
    //       }),
    //     }));
    //   } else {
    //     setErrors((prevErrors) => ({
    //       ...prevErrors,
    //       adults: prevErrors.adults.map((error, i) => {
    //         if (i === index) {
    //           return { ...error, dateOfBirth: "" }; // Clear the error if the date is valid
    //         }
    //         return error;
    //       }),
    //     }));
    //   }

    //   setFormdata((prevFormData) => ({
    //     ...prevFormData,
    //     adults: prevFormData.adults.map((adult, i) => {
    //       if (i === index) {
    //         return { ...adult, dateOfBirth: e.target.value };
    //       }
    //       return adult;
    //     }),
    //   }));
    // }
    else {
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

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors = { ...initialErrors }; // Reset errors

    // Validate regular string fields
    const regularFields: Array<
      keyof Omit<
        FormDataType,
        "adults" | "childs" | "passportCopies" | "photosOfPassenger"
      >
    > = [
      "applicantName",
      "email",
      "mobileNo",
      "nationality",
      "dateOfTravel",
      "whatAppNo",
    ];
    regularFields.forEach((field) => {
      if (!formdata[field]) {
        (newErrors[field] as string) = `${field} is required`;
        isValid = false;
      } else {
        (newErrors[field] as string) = "";
      }
    });
    if (!formdata.email.match(/\S+@\S+\.\S+/)) {
      newErrors.email = "Email is invalid.";
      isValid = false;
    } else {
      newErrors.email = "";
    }
    // Validate file array fields
    if (!formdata.passportCopies.length) {
      newErrors.passportCopies = "Passport copies are required";
      isValid = false;
    } else {
      newErrors.passportCopies = "";
    }

    if (!formdata.photosOfPassenger.length) {
      newErrors.photosOfPassenger = "Photos of passenger are required";
      isValid = false;
    } else {
      newErrors.photosOfPassenger = "";
    }

    // Validate adults and childs
    const groupFields: Array<keyof Pick<FormDataType, "adults" | "childs">> = [
      "adults",
      "childs",
    ];
    groupFields.forEach((group) => {
      formdata[group].forEach((item, index) => {
        if (!item.name) {
          newErrors[group][index].name = "Name is required";
          isValid = false;
        } else {
          newErrors[group][index].name = "";
        }
        if (!item.dateOfBirth) {
          newErrors[group][index].dateOfBirth = "Date of birth is required";
          isValid = false;
        } else {
          newErrors[group][index].dateOfBirth = "";
        }
      });
    });

    setErrors(newErrors);
    return isValid;
  };
  const changeToFormData = (
    formdata: FormDataType,
    serviceName: string,
    referenceID: string,
    orderNo: string
  ) => {
    const totalPrice =
      price * (formdata.adults.length + formdata.childs.length);
    const formData = new FormData();

    // Append files and other data to formData
    formData.append("serviceName", serviceName);
    formData.append("referenceID", referenceID);
    formData.append("orderNo", orderNo);
    formData.append("totalPrice", totalPrice.toFixed(2).toString());
    formData.append("applicantName", formdata.applicantName);
    formData.append("email", formdata.email);
    formData.append("mobileNo", formdata.mobileNo);
    formData.append("dateOfTravel", formdata.dateOfTravel);
    formData.append("whatAppNo", formdata.whatAppNo);
    // For files, you need to append each file in the array to formData
    formdata.passportCopies.forEach((file, index) =>
      formData.append(`passportCopies[${index}]`, file)
    );
    formdata.photosOfPassenger.forEach((file, index) =>
      formData.append(`photosOfPassenger[${index}]`, file)
    );
    return formData;
  };
  const referenceID = "Tour" + generateReferenceId();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);

      return;
    }

    const {
      passportCopies,
      photosOfPassenger,
      adults,
      childs,
      ...otherFormData
    } = formdata;

    try {
      // Handle payment and redirection
      const paymentResponse = await handlePayment();
      const orderNo = paymentResponse.data.order_no;

      const mainResponse = await postTouristVisa({
        ...otherFormData,
        orderNo: orderNo,
      });
      const visaId = mainResponse.data.data.id;
      setCookie("strapiIdUrl", `/api/tourist-visas/${visaId}`);

      await Promise.all([
        ...postChildrenAndAdults(childs, visaId, "/api/children"),
        ...postChildrenAndAdults(adults, visaId, "/api/adults"),
      ]);

      await uploadDocuments(passportCopies, visaId, "passportCopies");
      await uploadDocuments(photosOfPassenger, visaId, "photosOfPassenger");
      const convertedFormData = changeToFormData(
        formdata,
        serviceName,
        referenceID,
        orderNo
      );
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/newTouristVisaMail`,
        convertedFormData
      );

      router.push(paymentResponse.data.payment_link);
    } catch (error) {
      console.error("Error in form submission:", error);
      setLoading(false);
    }
  };
  // Define helper functions
  const postTouristVisa = async (data: any) => {
    return await axios.post("/api/tourist-visas", {
      data: {
        serviceName: serviceName,
        referenceID: referenceID,
        ...data,
      },
    });
  };

  const postChildrenAndAdults = (
    people: any[],
    visaId: string,
    endpoint: string
  ) => {
    return people.map((person) =>
      axios.post(endpoint, {
        data: { tourist_visa: visaId, ...person },
      })
    );
  };

  const uploadDocuments = async (
    files: Blob[],
    refId: string,
    field: string
  ) => {
    if (files.length > 0) {
      const formData = new FormData();
      formData.append("ref", "api::tourist-visa.tourist-visa");
      formData.append("refId", refId);
      formData.append("field", field);
      files.forEach((file) => formData.append("files", file));
      await axios.post("/api/upload", formData);
    }
  };

  const handlePayment = async () => {
    const totalPrice =
      price * (formdata.adults.length + formdata.childs.length);
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
        amount: totalPrice.toFixed(2).toString(),
        currency: "AED",
        description: "Mettpay - Test Please ignore",
        id: referenceID,
        returnUrl: "https://checkout.mettpsp.live/payment/status",
        timeoutUrl: "https://checkout.mettpsp.live/payment/status",
        cancelUrl: "https://checkout.mettpsp.live/payment/status",
      },
      customer: {
        email: formdata.email,
        firstName: formdata.applicantName,
        lastName: formdata.applicantName,
        mobilePhone: formdata.mobileNo,
        phone: formdata.mobileNo,
      },
    };
    const paymentResponse = await registerPayment(registerData);
    return paymentResponse;
  };

  const handleNextClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setOpenNext(true);
  };

  return (
    <div>
      <div className="xl:w-3/4 w-full mx-auto bg-white p-5 shadow-md">
        <div className="flex justify-between items-center">
          <div className="">
            <Heading text="Apply Now" />
            <p className="text-grey1 text-md">
              Fill out the form and apply online!
            </p>
          </div>
          <div className="">
            <h1 className="text-lg font-semibold text-black">Amount Payable</h1>
            <p className="text-grey1 text-md">(Inclusive of VAT)</p>
            <div className="bg-background2 text-primary text-lg font-semibold p-2">
              Price: {price} AED
            </div>
          </div>
        </div>
        <form data-aos="zoom-in" action="" className="py-5 space-y-2">
          <Heading text="1. General Details" styles="!text-lg " />
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
            label="Enter Valid Email (*)"
            onChange={handleChange}
            value={formdata.email}
            error={errors.email}
            name="email"
            id="email"
          />

          <PhoneInputField
            placeholder="john doe"
            label="Enter Mobile No. (*)"
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

          <CustomCountryInput
            label="Select Your Nationality (*)"
            name="nationality"
            id="nationality"
            onChange={handleChange}
            error={errors.nationality}
          />
          {errors.nationality && (
            <span className="text-sm text-red-500">{errors.nationality}</span>
          )}
          <CustomInput
            inputType="date"
            placeholder="MM / DD / YY"
            label="Date of Travel"
            onChange={handleChange}
            value={formdata.dateOfTravel}
            name="dateOfTravel"
            id="dateOfTravel"
            error={errors.dateOfTravel}
          />

          {openNext ? null : (
            <button
              onClick={handleNextClick}
              className="flex w-full justify-between py-2 px-2 items-center border border-grey1"
            >
              <p className="text-lg font-medium ">Next</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.6751 15.4364C20.7929 15.5777 20.8817 15.7407 20.9365 15.9164C20.9913 16.092 21.0109 16.2766 20.9943 16.4598C20.9776 16.643 20.925 16.8211 20.8395 16.984C20.754 17.1469 20.6372 17.2913 20.4959 17.409L14.8959 22.0752C14.7554 22.1981 14.5917 22.2917 14.4145 22.3504C14.2373 22.4091 14.0502 22.4318 13.8641 22.4172C13.678 22.4025 13.4967 22.3508 13.3309 22.265C13.165 22.1792 13.0181 22.0612 12.8986 21.9178C12.779 21.7744 12.6894 21.6085 12.635 21.4299C12.5805 21.2514 12.5623 21.0637 12.5814 20.878C12.6006 20.6923 12.6566 20.5123 12.7464 20.3486C12.8361 20.1849 12.9576 20.0408 13.1039 19.9248L18.7039 15.2572C18.9891 15.0197 19.3569 14.9051 19.7266 14.9387C20.0962 14.9723 20.4374 15.1513 20.6751 15.4364Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.32477 15.4364C7.56247 15.1513 7.90363 14.9723 8.27327 14.9387C8.64291 14.9051 9.01077 15.0197 9.29597 15.2572L14.896 19.9248C15.0422 20.0408 15.1638 20.1849 15.2535 20.3486C15.3432 20.5123 15.3993 20.6923 15.4184 20.878C15.4375 21.0637 15.4193 21.2514 15.3649 21.4299C15.3104 21.6085 15.2208 21.7744 15.1013 21.9178C14.9818 22.0612 14.8348 22.1792 14.669 22.265C14.5032 22.3508 14.3219 22.4025 14.1358 22.4172C13.9497 22.4318 13.7625 22.4091 13.5853 22.3504C13.4081 22.2917 13.2445 22.1981 13.104 22.0752L7.50397 17.409C7.36262 17.2913 7.24584 17.1469 7.16033 16.984C7.07481 16.8211 7.02223 16.643 7.00559 16.4598C6.98895 16.2766 7.00857 16.092 7.06334 15.9164C7.11811 15.7407 7.20694 15.5777 7.32477 15.4364Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.9984 19.6C13.6271 19.6 13.271 19.4525 13.0085 19.1899C12.7459 18.9274 12.5984 18.5713 12.5984 18.2L12.5984 6.99998C12.5984 6.62867 12.7459 6.27258 13.0085 6.01003C13.271 5.74748 13.6271 5.59998 13.9984 5.59998C14.3697 5.59998 14.7258 5.74748 14.9884 6.01003C15.2509 6.27258 15.3984 6.62867 15.3984 6.99998L15.3984 18.2C15.3984 18.5713 15.2509 18.9274 14.9884 19.1899C14.7258 19.4525 14.3697 19.6 13.9984 19.6Z"
                  fill="black"
                />
              </svg>
            </button>
          )}

          {openNext && (
            <div className="">
              <Heading text="2. Passenger Details" styles="!text-lg !py-2 " />
              <div className="border pb-3">
                <div className="bg-background py-2 flex justify-between items-center px-2">
                  <p className="text-lg font-medium">Adults</p>
                  <Counter
                    initialValue={1}
                    minValue={1}
                    onCountChange={handleAddMore}
                  />
                </div>
                {formdata.adults.map((formItem, index) => (
                  <div key={index}>
                    <CustomInput
                      inputType="text"
                      placeholder="john doe"
                      label={`Full Name (*) - Adult ${index + 1}`}
                      onChange={(e) => handleChange(e, index)}
                      value={formItem?.name || ""}
                      name={`adults-name`}
                      id={`adults-name`}
                      error={errors.adults[index]?.name}
                    />
                    <CustomInput
                      inputType="date"
                      placeholder="MM / DD / YY"
                      label={`Date of Birth - Adult ${index + 1}`}
                      onChange={(e) => handleChange(e, index)}
                      value={formItem?.dateOfBirth || ""}
                      name={`adults-dateOfBirth`}
                      id={`adults-dateOfBirth`}
                      error={errors.adults[index]?.dateOfBirth}
                    />
                  </div>
                ))}
              </div>
              <div className="border ">
                <div className="bg-background py-2 flex justify-between items-center px-2">
                  <p className="text-lg font-medium">Childs</p>
                  <Counter initialValue={1} onCountChange={handleAddChild} />
                </div>
                {formdata.childs.map((formItem, index) => (
                  <>
                    <CustomInput
                      inputType="text"
                      placeholder="john doe"
                      label={`Full Name (*) - Child ${index + 1}`}
                      onChange={(e) => handleChange(e, index)}
                      value={formItem?.name || ""}
                      name={`childs-name`}
                      id={`childs-name`}
                      error={errors.childs[index]?.name}
                    />
                    <CustomInput
                      inputType="date"
                      placeholder="MM / DD / YY"
                      label={`Date of Birth - Child ${index + 1}`}
                      onChange={(e) => handleChange(e, index)}
                      value={formItem?.dateOfBirth || ""}
                      name={`childs-dateOfBirth`}
                      id={`childs-dateOfBirth`}
                      error={errors.childs[index]?.dateOfBirth}
                    />
                  </>
                ))}
                <CustomFileUpload
                  label="Passport Copies of All Passengers (*) "
                  subLabel=" (File format: JPG, JPEG only, must be within 1.5MB of size)"
                  name="passportCopies"
                  id="passportCopies"
                  onChange={handleChange}
                  value={formdata.passportCopies}
                  error={errors.passportCopies}
                />
                <CustomFileUpload
                  label="Photos with white background of All Passengers (*) "
                  subLabel=" (Clear and good quality photos with white background )"
                  name="photosOfPassenger"
                  id="photosOfPassenger"
                  onChange={handleChange}
                  value={formdata.photosOfPassenger}
                  error={errors.photosOfPassenger}
                />
              </div>
              <div className="flex gap-2 items-center py-2">
                <input type="checkbox" />
                <p className="text-grey1 text-sm">
                  I agree to{" "}
                  <span className="font-medium text-blaxk text-md">
                    {" "}
                    Terms & Conditions
                  </span>{" "}
                  for submitting above details.
                </p>
              </div>
              <Button
                label="Proceed to Next Step"
                loading={loading}
                loadingText="Proceeding ..."
                onClick={handleSubmit}
                style="w-full"
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default TouristVisaForm;
