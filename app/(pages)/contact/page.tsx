import FAQ from "@/components/contact/faq";
import Hero from "@/components/contact/hero";
import React from "react";

type Props = {};
export const metadata = {
  title: "Amer Center Dubai | Amer247",

  openGraph: {
    title: "Amer Center Dubai | Amer247",
    description:
      "We are the only Amer Center in Dubai which opens 24 hrs all days. Our services are available online by clicking on. APPLY ONLINE.",
  },
};
const Contact = (props: Props) => {
  return (
    <>
      <Hero />
      <FAQ />
    </>
  );
};

export default Contact;
