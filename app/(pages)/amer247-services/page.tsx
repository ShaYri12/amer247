import CustomHero from "@/components/shared/customHero";
import React from "react";
import service from "/public/assets/services.svg";
import text from "/public/assets/SERVICEStext.svg";
import Partners from "@/components/services/partners";
import WeDo from "@/components/services/weDo";

type Props = {};

const Services = (props: Props) => {
  return (
    <div>
      <CustomHero
        heading1="s Corporate services"
        subHeading="Amer247 offers many services to small and medium businesses with the highest standards of quality and speed for any transactions of all Government departments in Dubai; we also provide dispatch services of companies and individuals transactions all around Dubai."
        btnLabel="See Our Pricing"
        heroImg={service}
        textImg={text}
      />
      <Partners />
      <WeDo />
    </div>
  );
};

export default Services;
