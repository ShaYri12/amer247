import React from "react";
import Hero from "@/components/home/hero";
import WhoWeAre from "@/components/home/whoWeAre";
import Stats from "@/components/home/stats";
import AboutUs from "@/components/home/aboutUs";
import WeDo from "@/components/home/weDo";
import DocService from "@/components/home/docService";
import Partners from "@/components/home/partners";

const Home = () => {
  return (
    <>
      <div className="">
        <Hero />
        <WhoWeAre />
        {/* <Stats /> */}
        <AboutUs />
        <WeDo />
        <DocService />
        <Partners />
      </div>
    </>
  );
};

export default Home;
