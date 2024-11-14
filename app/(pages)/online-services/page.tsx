import CustomHero from "@/components/shared/customHero";
import React from "react";
import apply from "/public/assets/apply.svg";
import applytxt from "/public/assets/APPLYtxt.svg";
import Services from "@/components/apply/services";

import FAQ from "@/components/contact/faq";
export const metadata = {
  title: "Amer Online Services - Amer247",

  openGraph: {
    title: "Amer Online Services - Amer247",
    description:
      "Explore a range of convenient online services for immigration, visas, and citizenship at Amer247.com. Streamline your application process with expert guidance and 24/7 support.",
  },
};

const ApplyOnline = () => {
  return (
    <div>
      <CustomHero
        heading1="AMER 247’s Services Fees & Payments"
        heading2=""
        subHeading="We help our customers to keep updated with application fees and other charges required for the kind of applications they applied for. We also request to keep checking this page for regular updates or contact us for latest revisions of Amer services fees and charges."
        heroImg={apply}
        textImg={applytxt}
      />

      <Services />
      <FAQ />
    </div>
  );
};

export default ApplyOnline;
