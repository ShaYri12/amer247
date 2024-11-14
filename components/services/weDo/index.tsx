import Heading from "@/components/shared/common/heading";
import SubHeading from "@/components/shared/common/subHeading";
import React from "react";
import { items } from "./item";
import Image from "next/image";
import img from "/public/assets/slogo.svg";

type Props = {};

const WeDo = (props: Props) => {
  return (
    <>
      <div className="md:py-20 py-5 lg:px-32 md:px-12  px-4  w-full flex  items-center weDo !bg-background">
        <div className="">
          <div data-aos="zoom-in" className="space-y-5">
            <Heading text="What We Do" />
            <SubHeading text="Here are the services we provide" />
          </div>

          <div
            data-aos="zoom-in"
            className="flex  gap-4 py-10 flex-wrap !justify-center items-stretch "
          >
            <div
              className={` md:w-[48%] w-full flex shadow-lg justify-center items-start flex-col gap-3 md:p-5 p-3  bg-white shrink`}
            >
              <div className="flex gap-2 items-center">
                <Image src={img} alt="" />
                <Heading
                  text="AMER Services"
                  styles="!md:text-xl !text-lg md:w-3/4"
                />
              </div>
              <h1 className="text-grey1 md:text-md text-sm">
                General directorate of residency and foreigners affairs) entry
                permit for (company employment & family) – inside & outside the
                country residencies (company employment & family) -
                new/renewal/cancellation family visit visa newborn baby visa
                processing sponsorship transfer company & family change status
                company & family visit visa extension for on arrival & gcc
                residents new/renewal of establishment card pro card
              </h1>
            </div>
            <div
              className={` md:w-[48%] w-full flex shadow-lg justify-center items-start flex-col gap-3 md:p-5 p-3  bg-white shrink`}
            >
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <path
                    d="M53.75 55H6.25C2.805 55 0 52.195 0 48.75V16.25C0 12.805 2.805 10 6.25 10H21.25C21.94 10 22.5 10.56 22.5 11.25C22.5 11.94 21.94 12.5 21.25 12.5H6.25C4.1825 12.5 2.5 14.1825 2.5 16.25V48.75C2.5 50.8175 4.1825 52.5 6.25 52.5H53.75C55.8175 52.5 57.5 50.8175 57.5 48.75V16.25C57.5 14.1825 55.8175 12.5 53.75 12.5H38.75C38.06 12.5 37.5 11.94 37.5 11.25C37.5 10.56 38.06 10 38.75 10H53.75C57.195 10 60 12.805 60 16.25V48.75C60 52.195 57.195 55 53.75 55Z"
                    fill="black"
                  />
                  <path
                    d="M18.75 35C15.305 35 12.5 32.195 12.5 28.75C12.5 25.305 15.305 22.5 18.75 22.5C22.195 22.5 25 25.305 25 28.75C25 32.195 22.195 35 18.75 35ZM18.75 25C16.6825 25 15 26.6825 15 28.75C15 30.8175 16.6825 32.5 18.75 32.5C20.8175 32.5 22.5 30.8175 22.5 28.75C22.5 26.6825 20.8175 25 18.75 25Z"
                    fill="black"
                  />
                  <path
                    d="M28.75 47.5C28.06 47.5 27.5 46.94 27.5 46.25V43.75C27.5 41.6825 25.8175 40 23.75 40H13.75C11.6825 40 10 41.6825 10 43.75V46.25C10 46.94 9.44 47.5 8.75 47.5C8.06 47.5 7.5 46.94 7.5 46.25V43.75C7.5 40.305 10.305 37.5 13.75 37.5H23.75C27.195 37.5 30 40.305 30 43.75V46.25C30 46.94 29.44 47.5 28.75 47.5Z"
                    fill="black"
                  />
                  <path
                    d="M51.25 27.5H36.25C35.56 27.5 35 26.94 35 26.25C35 25.56 35.56 25 36.25 25H51.25C51.94 25 52.5 25.56 52.5 26.25C52.5 26.94 51.94 27.5 51.25 27.5Z"
                    fill="black"
                  />
                  <path
                    d="M51.25 37.5H36.25C35.56 37.5 35 36.94 35 36.25C35 35.56 35.56 35 36.25 35H51.25C51.94 35 52.5 35.56 52.5 36.25C52.5 36.94 51.94 37.5 51.25 37.5Z"
                    fill="black"
                  />
                  <path
                    d="M51.25 47.5H36.25C35.56 47.5 35 46.94 35 46.25C35 45.56 35.56 45 36.25 45H51.25C51.94 45 52.5 45.56 52.5 46.25C52.5 46.94 51.94 47.5 51.25 47.5Z"
                    fill="black"
                  />
                  <path
                    d="M36.25 17.5H23.75C21.6825 17.5 20 15.8175 20 13.75V8.75C20 6.6825 21.6825 5 23.75 5H36.25C38.3175 5 40 6.6825 40 8.75V13.75C40 15.8175 38.3175 17.5 36.25 17.5ZM23.75 7.5C23.06 7.5 22.5 8.06 22.5 8.75V13.75C22.5 14.44 23.06 15 23.75 15H36.25C36.94 15 37.5 14.44 37.5 13.75V8.75C37.5 8.06 36.94 7.5 36.25 7.5H23.75Z"
                    fill="black"
                  />
                </svg>
                <Heading
                  text="Emirates ID"
                  styles="!md:text-xl !text-lg md:w-3/4"
                />
              </div>
              <h1 className="text-grey1 md:text-md text-sm">
                (Federal authority for identity & citizenship) all emirates
                identity card application for all categories – citizens,
                residents & companies emirates id for local emirates id for gcc
                emirates id new, renewal for 1 year emirates id new, renewal for
                2 years emirates id new, renewal for 3 years emirates id
                replacement
              </h1>
            </div>
            <div
              className={` md:w-[48%] w-full flex shadow-lg justify-center items-start flex-col gap-3 md:p-5 p-3  bg-white shrink`}
            >
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <path
                    d="M30.0713 58.6855C29.9702 58.6855 29.8715 58.6738 29.7728 58.6456C29.5402 58.5868 6.57129 52.2935 6.57129 30.9062V11.6855C6.57129 11.1944 6.87679 10.7526 7.33974 10.5834L29.6647 2.3584C29.9256 2.26205 30.2146 2.26205 30.4778 2.3584L52.8028 10.5834C53.2658 10.7526 53.5713 11.1944 53.5713 11.6855V30.9062C53.5713 52.2959 30.6024 58.5868 30.3697 58.6479C30.271 58.6738 30.1723 58.6855 30.0713 58.6855ZM8.92129 12.5057V30.9062C8.92129 49.4289 27.3688 55.5013 30.0713 56.2909C32.7738 55.5013 51.2213 49.4289 51.2213 30.9062V12.5057L30.0713 4.7131L8.92129 12.5057Z"
                    fill="black"
                  />
                  <path
                    d="M31.2457 44.5857H28.8957C26.9523 44.5857 25.3707 43.0042 25.3707 41.0607V35.1857H19.4957C17.5523 35.1857 15.9707 33.6042 15.9707 31.6607V29.3107C15.9707 27.3673 17.5523 25.7857 19.4957 25.7857H25.3707V19.9107C25.3707 17.9673 26.9523 16.3857 28.8957 16.3857H31.2457C33.1892 16.3857 34.7707 17.9673 34.7707 19.9107V25.7857H40.6457C42.5892 25.7857 44.1707 27.3673 44.1707 29.3107V31.6607C44.1707 33.6042 42.5892 35.1857 40.6457 35.1857H34.7707V41.0607C34.7707 43.0042 33.1892 44.5857 31.2457 44.5857ZM19.4957 28.1357C18.8471 28.1357 18.3207 28.6621 18.3207 29.3107V31.6607C18.3207 32.3093 18.8471 32.8357 19.4957 32.8357H26.5457C27.1943 32.8357 27.7207 33.3621 27.7207 34.0107V41.0607C27.7207 41.7093 28.2471 42.2357 28.8957 42.2357H31.2457C31.8943 42.2357 32.4207 41.7093 32.4207 41.0607V34.0107C32.4207 33.3621 32.9471 32.8357 33.5957 32.8357H40.6457C41.2943 32.8357 41.8207 32.3093 41.8207 31.6607V29.3107C41.8207 28.6621 41.2943 28.1357 40.6457 28.1357H33.5957C32.9471 28.1357 32.4207 27.6093 32.4207 26.9607V19.9107C32.4207 19.2621 31.8943 18.7357 31.2457 18.7357H28.8957C28.2471 18.7357 27.7207 19.2621 27.7207 19.9107V26.9607C27.7207 27.6093 27.1943 28.1357 26.5457 28.1357H19.4957Z"
                    fill="black"
                  />
                </svg>
                <Heading
                  text="Medical Fitness Application"
                  styles="!md:text-xl !text-lg md:w-3/4"
                />
              </div>
              <h1 className="text-grey1 md:text-md text-sm">
                Dubai health authority occupational health card medical for
                companies & families (normal – 48 hours – 24 hours – vip) we
                assist for health insurance
              </h1>
            </div>
            <div
              className={` md:w-[48%] w-full flex shadow-lg justify-center items-start flex-col gap-3 md:p-5 p-3  bg-white shrink`}
            >
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <g clipPath="url(#clip0_138_5515)">
                    <path
                      d="M8.75 55H1.25C0.56 55 0 54.44 0 53.75V31.25C0 30.56 0.56 30 1.25 30C9.7525 30 14.245 32.865 14.4325 32.9875C14.88 33.28 15.0925 33.8225 14.96 34.3425L9.96 54.0575C9.8225 54.6125 9.3225 55 8.75 55ZM2.5 52.5H7.7775L12.2975 34.675C10.8925 34 7.5775 32.71 2.5 32.5225V52.5Z"
                      fill="black"
                    />
                    <path
                      d="M32.5002 60C26.6102 60 15.1952 55.0375 8.91772 52.08C8.29272 51.785 8.02522 51.04 8.32022 50.4175C8.61272 49.7925 9.36272 49.5225 9.98272 49.82C20.3452 54.7 28.5527 57.5 32.5002 57.5C38.5827 57.5 52.9127 50.3575 57.0352 48.2325C56.3852 47.385 55.0427 46.25 52.5002 46.25C50.1927 46.25 47.2677 47.175 44.4377 48.0675C41.4302 49.0175 38.3177 50 35.6252 50C30.4652 50 23.6102 47.53 23.3227 47.425C22.6727 47.19 22.3377 46.4725 22.5752 45.8225C22.8102 45.175 23.5252 44.8375 24.1777 45.075C24.2427 45.1 30.9077 47.5 35.6252 47.5C37.9327 47.5 40.8577 46.575 43.6877 45.6825C46.6952 44.7325 49.8077 43.75 52.5002 43.75C58.3352 43.75 59.8727 48.1675 59.9377 48.355C60.1302 48.9325 59.8777 49.5675 59.3402 49.855C58.5627 50.2675 40.2252 60 32.5002 60Z"
                      fill="black"
                    />
                    <path
                      d="M41.2502 48.975C40.5602 48.975 40.0002 48.415 40.0002 47.725V46.475C40.0002 44.73 38.8227 43.235 37.1402 42.8425L13.0077 37.015C12.3352 36.855 11.9227 36.1775 12.0852 35.5075C12.2477 34.8375 12.9227 34.4175 13.5952 34.585L37.7177 40.41C40.5302 41.065 42.5002 43.56 42.5002 46.475V47.725C42.5002 48.415 41.9402 48.975 41.2502 48.975Z"
                      fill="black"
                    />
                    <path
                      d="M43.3335 38C43.2761 38 43.2201 37.9933 43.1641 37.9773C43.0321 37.944 30 34.3733 30 22.2385V11.3331C30 11.0544 30.1733 10.8037 30.436 10.7077L43.1028 6.041C43.2508 5.98633 43.4148 5.98633 43.5641 6.041L56.2309 10.7077C56.4936 10.8037 56.6669 11.0544 56.6669 11.3331V22.2385C56.6669 34.3746 43.6348 37.944 43.5028 37.9787C43.4468 37.9933 43.3908 38 43.3335 38ZM31.3333 11.7984V22.2385C31.3333 32.7479 41.8001 36.1933 43.3335 36.6413C44.8668 36.1933 55.3336 32.7479 55.3336 22.2385V11.7984L43.3335 7.37701L31.3333 11.7984Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M43.9988 30.0002H42.6654C41.5628 30.0002 40.6654 29.1028 40.6654 28.0001V24.6668H37.3321C36.2294 24.6668 35.332 23.7694 35.332 22.6668V21.3334C35.332 20.2307 36.2294 19.3334 37.3321 19.3334H40.6654V16C40.6654 14.8973 41.5628 14 42.6654 14H43.9988C45.1015 14 45.9988 14.8973 45.9988 16V19.3334H49.3322C50.4349 19.3334 51.3322 20.2307 51.3322 21.3334V22.6668C51.3322 23.7694 50.4349 24.6668 49.3322 24.6668H45.9988V28.0001C45.9988 29.1028 45.1015 30.0002 43.9988 30.0002ZM37.3321 20.6667C36.964 20.6667 36.6654 20.9654 36.6654 21.3334V22.6668C36.6654 23.0348 36.964 23.3334 37.3321 23.3334H41.3321C41.7001 23.3334 41.9988 23.6321 41.9988 24.0001V28.0001C41.9988 28.3682 42.2974 28.6668 42.6654 28.6668H43.9988C44.3668 28.6668 44.6655 28.3682 44.6655 28.0001V24.0001C44.6655 23.6321 44.9641 23.3334 45.3321 23.3334H49.3322C49.7002 23.3334 49.9989 23.0348 49.9989 22.6668V21.3334C49.9989 20.9654 49.7002 20.6667 49.3322 20.6667H45.3321C44.9641 20.6667 44.6655 20.3681 44.6655 20.0001V16C44.6655 15.632 44.3668 15.3333 43.9988 15.3333H42.6654C42.2974 15.3333 41.9988 15.632 41.9988 16V20.0001C41.9988 20.3681 41.7001 20.6667 41.3321 20.6667H37.3321Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_138_5515">
                      <rect width="60" height="60" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <Heading
                  text="Health Insurance Services"
                  styles="!md:text-xl !text-lg md:w-3/4"
                />
              </div>
              <h1 className="text-grey1 md:text-md text-sm">
                Amer247 services provides many varieties of health insurance
                services which mandatory to apply and renew the employment or
                residence visa. This service is available during the day.
              </h1>
            </div>
            {items.map((item, index) => (
              <div
                data-aos="zoom-in"
                key={item.heading}
                className={`lg:w-[23%] md:w-[30%] shadow-lg w-[47%] flex justify-center items-start flex-col gap-3 md:p-5 p-3  bg-white shrink`}
              >
                <Heading
                  text={item.heading}
                  styles="!md:text-xl !text-lg md:w-3/4"
                />
                <h1 className="text-grey1 md:text-md text-sm">
                  {item.subHeading}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WeDo;
