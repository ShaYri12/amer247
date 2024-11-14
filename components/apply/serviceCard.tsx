import React from "react";
import Heading from "../shared/common/heading";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

type ServiceCardProps = {
  service: {
    heading: string;
    subHeading: string;
    slug: string;
    price: string | TrustedHTML;
    reqDocs: string[];
    redpoints: string[];
  };
  path: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service, path }) => {
  // Replace spaces and slashes with underscores
  const linkPath = `/${path}/${service.slug}`;

  return (
    <>
      <div
        className={`lg:w-[24%] md:w-[47%] w-full flex shadow-xl hover:shadow-2xl hover:scale-105 justify-between items-start flex-col gap-3 md:p-5 p-3 bg-white shrink rounded-2xl`}
      >
        <Heading
          text={service.heading}
          styles="!md:text-xl !text-lg !font-medium text-center py-5"
        />
        {/* <h1 className="text-grey1 md:text-md text-sm">{service.subHeading}</h1> */}
        <div className="w-full flex items-center justify-center">
          <Link
            href={linkPath}
            className="w-fit px-4 rounded-lg gap-5 border border-black text-black text-sm font-semibold flex justify-between items-center"
          >
            {/* <div className="bg-white w-full py-2">{service.price} AED</div> */}
            <div
              className="bg-white w-full py-2"
              dangerouslySetInnerHTML={{ __html: service.price }}
            />
            <div className="flex items-center justify-center gap-5">
              <FaArrowRight />

              <div className="w-[6px] h-7 bg-black"></div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
