import Heading from "@/components/shared/common/heading";
import SubHeading from "@/components/shared/common/subHeading";
import React from "react";

type Props = {};

const data = [
  {
    title: "Last updated January 27, 2021",
    SubHeading:
      "Thank you for using our services. We hope you are happy by using our services. However, if you are not completely satisfied with us for any reason, you may ask a refund. Please see below for more information on our refund policy.purchase, dispute or claim arising out of or in connection with this website shall be governed and construed in accordance with the laws of UAE",
  },
  {
    title: "Notifications",
    SubHeading:
      "All notification must be postmarked within seven (7) days of the payment date.Refund charges will be paid or reimbursed by us.",
  },
  {
    title: "REFUNDS",
    SubHeading:
      "After receiving your return and inspecting the condition of your item, we will process your return. Please allow at least seven (7) days from the receipt of your item to process your return. Refunds will be done only through the Original Mode of Payment. We will notify you by email when your return has been processed",
  },
  {
    title: "EXCEPTIONS",
    SubHeading:
      "For any other reason, please contact us at the customer service number below to arrange a refund.",
  },
  {
    title: "QUESTIONS",
    SubHeading:
      "If you have any questions concerning our return policy, please contact us at:  + 971 4 2300500info@amer247.com",
  },
  // { title: '', SubHeading: "" },
];

const RefundPolicey = (props: Props) => {
  return (
    <div>
      <div className="flex justify- items- gap-5 flex-col md:py-20 py-16 md:mt-20 px-5">
        <div className="center-box">
          <div className="animated-border-box-glow"></div>
          <div className="animated-border-box flex justify-center items-end bg-white py-5 text-xl font-semibold border">
            <h1>Refund Policy</h1>
          </div>
        </div>

        <div className="md:w-4/5 w-full mx-auto space-x-3 border rounded-md py-10 md:px-5">
          <Heading text="Refund Policy" styles="!text-center" />
          <p className="text-center">Updated as on 20/02/2024</p>

          {data.map((item, i) => (
            <div key={i} className="space-y-4 py-5">
              <Heading text={item.title} styles="!text-2xl !font-semibold" />
              <SubHeading text={item.SubHeading} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RefundPolicey;
