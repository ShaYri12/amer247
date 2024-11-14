import AboutUs from "@/components/about/about";
import Deals from "@/components/about/deals";
import Hero from "@/components/about/hero";
import Objective from "@/components/about/objective";
import WeDifferent from "@/components/about/weDifferent";

import React from "react";

export const metadata = {
  title: "Visa and Residency Services Dubai - Amer247",

  openGraph: {
    title: "Visa and Residency Services Dubai - Amer247",
    description:
      "Amer247 operates 24/7 and provides Entry permits, Issuing & Renewals of a Residency Visa, Visa Cancellation and other related services.",
  },
};

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Objective />
      <WeDifferent />
      <Deals />
    </div>
  );
};

export default page;
