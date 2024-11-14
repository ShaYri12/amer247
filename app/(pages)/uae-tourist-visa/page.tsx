import CustomHero from "@/components/shared/customHero";
import React from "react";
import text from "/public/assets/UAE TOURIST VISA text.svg";
import img from "/public/assets/tourist.svg";
import TouristServices from "@/components/touristVisa/services";

type Props = {};

export const metadata = {
  title: "UAE Tourist Visa | Apply Online with Amer247.com",

  openGraph: {
    title: "UAE Tourist Visa | Apply Online with Amer247.com",
    description:
      "Apply for your UAE tourist visa hassle-free with Amer247.com. Fast and reliable visa processing services. Expert guidance and assistance. Start your journey to the UAE today!",
  },
};
const TouristVisa = (props: Props) => {
  return (
    <>
      <div className="">
        <CustomHero
          heading1="Apply UAE Tourist Visa Online"
          heading2=""
          subHeading="The online UAE Visit Visa Process simplifies the procedures & permits the user getting the permit quickly. 24/7 Support. Fast ConfirmationChoose from 96-hours, 14-days, 30-days, & 90-days UAE Visit Visas."
          btnLabel="+971 54 780 0500"
          btn2Label="+971 52 727 6699"
          heroImg={img}
          textImg={text}
        />

        <TouristServices />
      </div>
    </>
  );
};

export default TouristVisa;
