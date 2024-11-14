import React from "react";

import ApplyForm from "@/components/apply/emirateIdForm";

import FAQ from "@/components/contact/faq";
import RequiredDoc from "@/components/apply/amerServiceFrom/reqDoc";
import { data } from "@/components/apply/emiratesID/data";
import { notFound } from "next/navigation";

type Props = {
  params(params: any): unknown;
};

const FormEmirateId = (props: Props) => {
  const { slug }: any = props.params;

  const filteredServices = data
    .flatMap((category) => category.services)
    .find((scan) => scan.slug === slug);
  const categoryTitle =
    data.find((category) =>
      category.services.some((service) => service.slug === slug)
    )?.title || "Title not found";
  if (!filteredServices) {
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
            <ApplyForm
              categoryTitle={categoryTitle}
              serviceName={filteredServices.heading}
              price={filteredServices.price}
            />
          </div>
        </div>
        <FAQ />
      </div>
    </div>
  );
};
export default FormEmirateId;
