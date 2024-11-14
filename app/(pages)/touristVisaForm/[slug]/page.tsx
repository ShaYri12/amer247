import Heading from "@/components/shared/common/heading";
import SubHeading from "@/components/shared/common/subHeading";
import React from "react";
import TouristVisaForm from "@/components/touristVisa/applyForm";
import { TouristVisasData } from "@/components/touristVisa/services/touristVisasData";
import { notFound } from "next/navigation";

type Props = {
  params(params: any): unknown;
};

const TouristVisaFormPage = (props: Props) => {
  const { slug }: any = props.params;

  const filteredServices = TouristVisasData.find(
    (touristVisa) => touristVisa.slug === slug
  );

  if (!filteredServices) {
    notFound();
  }
  return (
    <>
      <div className="bg-black absolute right-0 top-[140px] h-[80vh] w-3/4 lg:block hidden"></div>
      <div className="relative md:pt-40 pt-20 min-h-screen">
        <div className="flex flex-wrap justify-center items-start xl:px-32 lg:px-20 md:px-12  relative ">
          <div className="lg:w-1/2 w-full  relative  ">
            <div className="lg:bg-transparent bg-black p-5 ">
              <div className="xl:w-3/4 w-full bg-white p-5 space-y-5">
                <Heading text={filteredServices.heading} styles="" />
                <SubHeading text="We help our customers to keep updated with application fees and other charges required for the kind of applications they applied for. We also request to keep checking this page for regular updates or contact us for latest revisions of Amer services fees and charges." />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full ">
            <TouristVisaForm
              price={filteredServices.price}
              serviceName={filteredServices.heading}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TouristVisaFormPage;
