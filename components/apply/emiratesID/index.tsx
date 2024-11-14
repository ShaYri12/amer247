"use client";
import React, { useEffect, useState } from "react";
import ServiceCard from "../serviceCard";
import Heading from "@/components/shared/common/heading";
import { data } from "./data";

type TabOption = {
  id: string;
  title: string;
};

const tabOptions: TabOption[] = [
  { id: "all", title: "All" },
  { id: "New Born Emirates ID", title: "New Born Emirates ID " },
  { id: "New Residency", title: "New Residency" },
  { id: "Sponsor Transfer", title: "Sponsor Transfer" },
  { id: "Emirates ID Renewal", title: "Emirates ID Renewal" },
  { id: "Emirates ID Replacement/Lost", title: "Emirates ID Replacement/Lost" },
  { id: "Golden Emirates ID", title: "Golden Emirates ID" },
  // Add more options as needed
];

type Props = {};

const EmiratesID: React.FC<Props> = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [showMore, setShowMore] = useState(false);
  const defaultTabsToShow = 7;
  const visibleTabs = showMore
    ? tabOptions
    : tabOptions.slice(0, defaultTabsToShow);

  const toggleShowMore = () => {
    setShowMore((prevState) => !prevState);
  };

  const filteredData =
    selectedTab === "all"
      ? data
      : data.filter(
          (item) => item.title.toLowerCase() === selectedTab.toLowerCase()
        );

  const handleTabClick = (tabId: string) => {
    setSelectedTab(tabId);
  };

  return (
    <>
      <h1 className="text-lg md:px-20 px-5 font-medium text-black py-2">
        See All or Choose options below
      </h1>
      {/* Tabs */}
      <div
        data-aos="zoom-in"
        className=" w-full flex flex-wrap md:justify-center  gap-2 py-4 md:px-20 px-5"
      >
        {visibleTabs.map((tab) => (
          <div
            key={tab.id}
            className={`cursor-pointer shadow-lg text-center w-auto  md:px-5 px-2 border md:text-md text-sm bg-black text-white border-grey2 flex items-center hover:bg-white hover:text-black py-2 ${
              selectedTab === tab.id ? "bg-white !text-black" : "text-white"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </div>
        ))}
        {tabOptions.length > defaultTabsToShow && (
          <button
            className={`cursor-pointer  px-4 py-1 space-x-2 flex items-center text-white bg-black`}
            onClick={toggleShowMore}
          >
            {showMore ? "Less" : "More"}
            {showMore ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M20 6.66602L10 16.666M20 6.66602L30 16.666M20 6.66602V24.166M20 33.3327V29.166"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M20.5 33.3334L30.5 23.3334M20.5 33.3334L10.5 23.3334M20.5 33.3334L20.5 15.8334M20.5 6.66671L20.5 10.8334"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Display Data */}
      <div className="amerServices py-10 xl:px-32 lg:px-16 md:px-10 px-5 w-full flex flex-wrap items-center relative">
        {/* Render your filtered data here */}
        {filteredData.map((item) => (
          <div data-aos="zoom-in" key={item.id} className="w-full ">
            <div className="border-l-[8px] border-black pl-10 w-full mt-5">
              <Heading text={item.title} styles="font-semibold" />
            </div>
            <div className="flex flex-wrap gap-3 w-full  pt-5">
              {Array.isArray(item.services) &&
                item.services.map((service, index) => (
                  <ServiceCard
                    service={service}
                    path="formEmirateId"
                    key={index}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EmiratesID;
