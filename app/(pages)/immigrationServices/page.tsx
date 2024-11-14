import WhyGlobal from "@/components/immigration_Services/global";
import Hero from "@/components/immigration_Services/hero";
import Mission from "@/components/immigration_Services/mission";
import Needs from "@/components/immigration_Services/needs";

import React from "react";

type Props = {};

const ImmigrationServices = (props: Props) => {
  return (
    <div>
      <Hero />
      <Mission />
      <Needs />
      <WhyGlobal />
    </div>
  );
};

export default ImmigrationServices;
