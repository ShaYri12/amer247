import Hero from "@/components/news/hero";
import NewsBlog from "@/components/news/newsBlog";

import React from "react";

type Props = {};
export const metadata = {
  title: "UAE Visa and Residency News Update - Amer 247",
  openGraph: {
    title: "UAE Visa and Residency News Update - Amer 247",
    description:
      "We are open 24 hrs all days. Our services are available online by clicking on. APPLY ONLINE. ADDRESS. 24 Seven Government Transaction Center LLC",
  },
};
const News = (props: Props) => {
  return (
    <div>
      <Hero />
      <NewsBlog />
    </div>
  );
};

export default News;
