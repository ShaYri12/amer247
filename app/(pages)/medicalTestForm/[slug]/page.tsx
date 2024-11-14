import React from "react";
import RequiredDoc from "@/components/apply/amerServiceFrom/reqDoc";
import FAQ from "@/components/contact/faq";
import { notFound } from "next/navigation";
import { data } from "@/components/apply/medical_test/data";
import ApplyMedicalForm from "@/components/apply/medical_test/applyMedicalForm";

type Props = {
  params(params: any): unknown;
};

const MedicalTest = (props: Props) => {
  const { slug }: any = props.params;

  const filteredServices = data
    .flatMap((category) => category.services)
    .find((scan) => scan.slug === slug);
  const categoryTitle =
    data.find((category) =>
      category.services.some((service) => service.slug === slug)
    )?.title || "Title not found";
  if (!filteredServices) {
    // The scan with the specified name exists
    notFound();
  }

  return (
    <div>
      <div className=" absolute right-0 top-[12%] h-[80vh] w-3/4 lg:block hidden"></div>
      <div className="relative md:pt-40 pt-20 min-h-screen">
        <div className="flex flex-wrap justify-center items-start xl:px-32 lg:px-20 md:px-12  relative ">
          <div className="lg:w-1/2 w-full  relative  ">
            <RequiredDoc
              title={filteredServices.heading}
              reqDoc={filteredServices.reqDocs}
              redPoints={filteredServices.redpoints}
            />
          </div>

          <div className="lg:w-1/2 w-full ">
            <ApplyMedicalForm
              serviceName={filteredServices.heading}
              price={filteredServices.price}
              categoryTitle={categoryTitle}
            />
          </div>
        </div>
        <FAQ />
      </div>
    </div>
  );
};

export default MedicalTest;