/* eslint-disable react/jsx-key */
import Image from "next/image";
import React from "react";
import logo from "/public/assets/logo.svg";
import paymentMethods from "/public/assets/paymentMethods.png";
import CustomLink from "@/components/shared//common/customLink";
import Link from "next/link";
type Props = {};

interface LinkInfo {
  href: string;
  label: string;
  styles: string;
  iconStyles: string;
}

const linkData: LinkInfo[] = [
  {
    href: "/privacy-policy",
    label: "Privacy Policy",
    styles: "!border-0 !pl-0 !md:text-lg !text-[12px] text-grey1",
    iconStyles: "hidden",
  },
  {
    href: "/refund-policy",
    label: "Refund Policy",
    styles: "!border-0 !pl-0 !md:text-lg !text-[12px] text-grey1",
    iconStyles: "hidden",
  },
  {
    href: "/terms-conditions",
    label: "Terms & Conditions",
    styles: "!border-0 !pl-0 !md:text-lg !text-[12px] text-grey1",
    iconStyles: "hidden",
  },
  {
    href: "/career",
    label: "Careers",
    styles: "!border-0 !pl-0 !md:text-lg !text-[12px] text-grey1",
    iconStyles: "hidden",
  },
  // {
  //   href: "/",
  //   label: "Golden Visa",
  //   styles: "!border-0 !pl-0 !md:text-lg !text-[12px] text-grey1",
  //   iconStyles: "hidden",
  // },
  {
    href: "/covid-testing",
    label: "Covid Testing",
    styles: "!border-0 !pl-0 !md:text-lg !text-sm font-medium text-black",
    iconStyles: "",
  },
  {
    href: "/contact",
    label: "Contact",
    styles: "!border-0 !pl-0 !md:text-lg !text-[12px] text-grey1",
    iconStyles: "hidden",
  },
];

type SocialMediaItem = {
  url: string;
  icon: JSX.Element;
};

const socialMediaData: SocialMediaItem[] = [
  {
    url: "https://www.facebook.com/Amer247service/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.488 4.53702C11.4724 3.55242 12.8077 2.99919 14.2 2.99902L16.9 2.99903C17.0989 2.99903 17.2897 3.07804 17.4303 3.2187C17.571 3.35935 17.65 3.55011 17.65 3.74903L17.65 7.34903C17.65 7.54794 17.571 7.7387 17.4303 7.87936C17.2897 8.02001 17.0989 8.09903 16.9 8.09903L14.2 8.09902C14.1803 8.09902 14.1608 8.1029 14.1426 8.11044C14.1244 8.11798 14.1079 8.12903 14.0939 8.14296C14.08 8.15689 14.069 8.17342 14.0614 8.19162C14.0539 8.20982 14.05 8.22933 14.05 8.24902L14.05 10.199L16.9 10.199C17.014 10.199 17.1266 10.2249 17.229 10.2749C17.3315 10.3248 17.4213 10.3975 17.4915 10.4873C17.5617 10.5772 17.6104 10.6819 17.6341 10.7934C17.6578 10.905 17.6557 11.0204 17.628 11.131L16.728 14.731C16.6874 14.8933 16.5937 15.0374 16.4618 15.1403C16.3299 15.2433 16.1673 15.2991 16 15.299L14.05 15.299L14.05 21.749C14.05 21.9479 13.971 22.1387 13.8303 22.2794C13.6897 22.42 13.4989 22.499 13.3 22.499L9.7 22.499C9.50108 22.499 9.31032 22.42 9.16967 22.2794C9.02901 22.1387 8.95 21.9479 8.95 21.749L8.95 15.299L7 15.299C6.80109 15.299 6.61032 15.22 6.46967 15.0794C6.32902 14.9387 6.25 14.7479 6.25 14.549L6.25 10.949C6.25 10.8505 6.2694 10.753 6.30709 10.662C6.34478 10.571 6.40002 10.4883 6.46967 10.4187C6.53931 10.349 6.62199 10.2938 6.71299 10.2561C6.80398 10.2184 6.90151 10.199 7 10.199L8.95 10.199L8.95 8.24902C8.95016 6.8567 9.5034 5.52146 10.488 4.53702ZM14.2 4.49902C13.2054 4.49902 12.2516 4.89411 11.5483 5.59737C10.8451 6.30064 10.45 7.25446 10.45 8.24902L10.45 10.949C10.45 11.1479 10.371 11.3387 10.2303 11.4794C10.0897 11.62 9.89891 11.699 9.7 11.699L7.75 11.699L7.75 13.799L9.7 13.799C9.89891 13.799 10.0897 13.878 10.2303 14.0187C10.371 14.1593 10.45 14.3501 10.45 14.549L10.45 20.999L12.55 20.999L12.55 14.549C12.55 14.3501 12.629 14.1593 12.7697 14.0187C12.9103 13.878 13.1011 13.799 13.3 13.799L15.414 13.799L15.939 11.699L13.3 11.699C13.1011 11.699 12.9103 11.62 12.7697 11.4794C12.629 11.3387 12.55 11.1479 12.55 10.949L12.55 8.24902C12.55 7.81142 12.7238 7.39173 13.0333 7.0823C13.3427 6.77286 13.7624 6.59902 14.2 6.59902L16.15 6.59903L16.15 4.49903L14.2 4.49902Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    url: "https://twitter.com/amer24_7?lang=en",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          d="M13.808 11.218L20.88 2.74903L19.204 2.74903L13.062 10.102L8.158 2.74902L2.5 2.74902L9.918 13.869L2.5 22.749L4.176 22.749L10.662 14.984L15.842 22.749L21.5 22.749L13.808 11.218ZM11.512 13.966L10.76 12.859L4.78 4.04902L7.355 4.04902L12.181 11.159L12.932 12.266L19.205 21.508L16.631 21.508L11.511 13.967L11.512 13.966Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    url: "https://www.instagram.com/amer_247/?hl=en",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          d="M12 16.749C13.0609 16.749 14.0783 16.3276 14.8284 15.5775C15.5786 14.8273 16 13.8099 16 12.749C16 11.6882 15.5786 10.6707 14.8284 9.9206C14.0783 9.17045 13.0609 8.74902 12 8.74902C10.9391 8.74902 9.92172 9.17045 9.17157 9.9206C8.42143 10.6707 8 11.6882 8 12.749C8 13.8099 8.42143 14.8273 9.17157 15.5775C9.92172 16.3276 10.9391 16.749 12 16.749Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 16.749L3 8.74902C3 7.42294 3.52678 6.15117 4.46447 5.21349C5.40215 4.27581 6.67392 3.74902 8 3.74902L16 3.74903C17.3261 3.74903 18.5979 4.27581 19.5355 5.21349C20.4732 6.15117 21 7.42294 21 8.74903L21 16.749C21 18.0751 20.4732 19.3469 19.5355 20.2846C18.5978 21.2222 17.3261 21.749 16 21.749L8 21.749C6.67391 21.749 5.40214 21.2222 4.46446 20.2846C3.52678 19.3469 3 18.0751 3 16.749Z"
          stroke="black"
          strokeWidth="1.5"
        />
        <path
          d="M17.5 7.25905L17.51 7.24805"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    url: "https://www.youtube.com/@amer247-visaandresidencyse3?app=desktop",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          d="M21.556 7.94557C21.4421 7.52221 21.2189 7.1362 20.9089 6.82618C20.5989 6.51616 20.2129 6.29301 19.7895 6.17907C18.6325 5.73207 7.4235 5.51307 4.1715 6.19157C3.74807 6.30555 3.36202 6.52878 3.052 6.83889C2.74198 7.149 2.51887 7.53511 2.405 7.95857C1.8825 10.2501 1.843 15.2041 2.418 17.5471C2.53194 17.9704 2.75509 18.3564 3.0651 18.6665C3.37512 18.9765 3.76113 19.1996 4.1845 19.3136C6.476 19.8411 17.37 19.9151 19.8025 19.3136C20.2259 19.1996 20.6119 18.9765 20.9219 18.6665C21.2319 18.3564 21.4551 17.9704 21.569 17.5471C22.126 15.0506 22.1655 10.4036 21.556 7.94557Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.2835 12.7465L10.06 9.75098L10.06 15.742L15.2835 12.7465Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];
const Footer = (props: Props) => {
  return (
    <>
      <div className="md:py-10 md:pb-10 py-5 pb-20 lg:px-20 md:px-12  px-5 w-full flex flex-wrap justify-center  items-center bg-background ">
        <div className="flex flex-wrap justify-center items-start gap-2 md:gap-0 ">
          <div
            data-aos="zoom-in"
            className="lg:w-2/5 w-full md:px-10 px-0 space-y-2 mt-5"
          >
            <Image src={logo} alt="" />
            <p className="text-grey1 md:text-[16px] text-[12px] font-[500]">
              We are open 24 hrs all days.
            </p>

            <p className="text-grey1 md:text-[16px] text-[12px] font-[500]">
              We take pride in simplifying visa and immigration application
              procedures and thus making your life easier. The only Amer center
              to operate 24 hours every day.
            </p>

            <div className="border-l-4 border-black pl-5 flex gap-5 items-center ">
              {socialMediaData.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="lg:w-3/5 w-full flex flex-wrap flex-col-reverse gap-3 lg:gap-0 lg:flex-row py-5"
          >
            <div className="lg:w-2/3 w-full flex  justify-between gap-5 sm:gap-0">
              <div className=" md:w-1/2  ">
                {/* <Heading text='' styles='!text-xl' /> */}
                <h1 className="md:text-[30px] text-[16px] font-[500] text-black pb-2">
                  Useful Links
                </h1>

                <div className="space-y-1">
                  {linkData.map((link, index) => (
                    <Link
                      href={link.href}
                      className={`group text-grey1 md:text-[16px] text-[12px] font-[500] flex items-center gap-2 hover:border-l-4 border-black hover:pl-2 hover:text-black hover:font-[600] transition-all duration-300`}
                    >
                      <p className="">{link.label}</p>
                      <div className={`group-hover:block hidden`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.2312 6.88495C13.3523 6.78395 13.4921 6.70781 13.6426 6.66086C13.7931 6.61392 13.9514 6.5971 14.1084 6.61137C14.2655 6.62563 14.4181 6.6707 14.5577 6.744C14.6973 6.8173 14.8211 6.91739 14.922 7.03855L18.9216 11.8385C19.027 11.959 19.1072 12.0993 19.1575 12.2511C19.2079 12.403 19.2273 12.5635 19.2147 12.723C19.2022 12.8825 19.1578 13.0379 19.0843 13.18C19.0108 13.3221 18.9096 13.4481 18.7867 13.5505C18.6637 13.653 18.5216 13.7298 18.3685 13.7765C18.2155 13.8232 18.0546 13.8388 17.8955 13.8224C17.7363 13.806 17.582 13.7579 17.4417 13.681C17.3014 13.6041 17.1779 13.4999 17.0784 13.3745L13.0776 8.57455C12.874 8.33009 12.7758 8.01478 12.8046 7.69795C12.8334 7.38112 12.9869 7.08869 13.2312 6.88495Z"
                            fill="black"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.2312 18.328C12.9869 18.1243 12.8334 17.8318 12.8046 17.515C12.7758 17.1982 12.874 16.8829 13.0776 16.6384L17.0784 11.8384C17.1779 11.7131 17.3014 11.6089 17.4417 11.532C17.582 11.4551 17.7363 11.407 17.8955 11.3906C18.0546 11.3742 18.2155 11.3898 18.3685 11.4365C18.5216 11.4832 18.6637 11.56 18.7867 11.6624C18.9096 11.7648 19.0108 11.8908 19.0843 12.033C19.1578 12.1751 19.2022 12.3305 19.2147 12.49C19.2273 12.6495 19.2079 12.8099 19.1575 12.9618C19.1072 13.1137 19.027 13.254 18.9216 13.3744L14.922 18.1744C14.8211 18.2956 14.6973 18.3957 14.5577 18.469C14.4181 18.5423 14.2655 18.5873 14.1084 18.6016C13.9514 18.6158 13.7931 18.599 13.6426 18.5521C13.4921 18.5051 13.3523 18.429 13.2312 18.328Z"
                            fill="black"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.8 12.6067C16.8 12.925 16.6736 13.2302 16.4485 13.4553C16.2235 13.6803 15.9182 13.8067 15.6 13.8067L5.99999 13.8067C5.68173 13.8067 5.3765 13.6803 5.15146 13.4553C4.92642 13.2302 4.79999 12.925 4.79999 12.6067C4.79999 12.2885 4.92642 11.9833 5.15146 11.7582C5.3765 11.5332 5.68173 11.4067 5.99999 11.4067L15.6 11.4067C15.9182 11.4067 16.2235 11.5332 16.4485 11.7582C16.6736 11.9833 16.8 12.2885 16.8 12.6067Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div data-aos="zoom-in" className="md:w-1/2  ">
                {/* <Heading text='CONTACT INFO' styles='!text-xl pb-2' /> */}
                <h1 className="md:text-[30px] text-[16px] font-[500] text-black pb-2">
                  Contact Info
                </h1>

                <div className="space-y-2 flex flex-col">
                  <Link
                    href="#"
                    className="text-grey1 md:text-[16px] text-[12px] font-[500] border-l-4 border-black pl-2"
                  >
                    E: info@amer247.com
                  </Link>
                  <Link
                    href="#"
                    className="text-grey1 md:text-[16px] text-[12px] font-[500] border-l-4 border-black pl-2"
                  >
                    P: +971 4 2300500
                  </Link>
                  <Link
                    href="#"
                    className="text-grey1 md:text-[16px] text-[12px] font-[500] border-l-4 border-black pl-2"
                  >
                    F : +971 4 2300510
                  </Link>
                  {/* <CustomLink label='E: info@amer247.com' href='/' styles='!lg:text-[16px] !text-[12px] ' iconStyles='hidden' /> */}
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" className="lg:w-1/3 w-full">
              <div className="">
                <h1 className="md:text-[30px] text-[16px] font-[500] text-black pb-2">
                  Address
                </h1>
                <p className="text-grey1 md:text-[16px] text-[12px] font-[500] pb-2">
                  24 Seven Government Transaction Center LLC 17 A Street – Al
                  Khabaisi (Behind Abu Baker Al Siddique Metro Station ) – Deira
                  – Dubai, UAE.P.O.Box: 81143
                </p>
                <CustomLink
                  label="Follow Map"
                  href="  https://maps.app.goo.gl/MrgWi7hNu9gZo5Co9"
                  styles="!md:text-md text-sm "
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <p className="text-grey1 md:text-[16px] text-[10px] font-[500]">
            We accept payments online using Visa and MasterCard credit/debit
            card in AED
          </p>
          <Image
            src={paymentMethods}
            alt="paymentMethods"
            width={300}
            className="w-52 md:w-80"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
