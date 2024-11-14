"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import sideIcon from "/public/assets/7.svg";
import logo from "/public/assets/logo.png";
import tasheel from "/public/assets/tasheel.png";
import tasheel1 from "/public/assets/tasheel 1.svg";
import Link from "next/link";
import Menu from "./menu";
import { usePathname } from "next/navigation";

type Props = {};
type MenuItem = {
  label: string;
  url: string;
};

const menuItems: MenuItem[] = [
  { label: "Home", url: "/" },
  { label: "Services", url: "/amer247-services" },
  { label: "About", url: "/about" },
  { label: "Contact", url: "/contact" },
  { label: "Price", url: "/pricing-list" },
  { label: "News", url: "/news" },
];

const rightMenuItems: MenuItem[] = [
  { label: "UAE TOURIST VISA", url: "/uae-tourist-visa" },
  { label: "APPLY ONLINE", url: "/online-services" },
];

const Navbar = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = usePathname();

  const isActive = (path: string) => {
    return router === path ? "!text-black " : "!text-grey1";
  };
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldNavbarBeRed = scrollY > window.innerHeight * 0.001;
      setIsScrolled(shouldNavbarBeRed);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isNewsPage = router === "/news";

  return (
    <>
      <nav
        className={`py-6 lg:px-10 px-4 flex items-start fixed top-0 left-0 w-full z-20 ${
          isScrolled || isNewsPage ? "bg-background" : ""
        }`}
      >
        <Image
          src={sideIcon}
          alt=""
          className={`mt-5 lg:block hidden absolute`}
        />

        <div className="md:px-20 md:pr-10 flex justify-between items-center flex-shrink-0 w-full">
          <div className="flex gap-8 items-center md:border-b border-black pb-5">
            <Image src={logo} alt="" className=" w-52" quality={100} />
            <div className="lg:flex hidden gap-5 ">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.url}
                  className="text-black font-medium text-lg shrink"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className=" ">
            <div className="flex items-center md:gap-3 gap-1">
              {rightMenuItems.map((item) => (
                <Link key={item.label} href={item.url}>
                  <div
                    className={`text-white button-67 md:p-[14px] font-medium md:text-md text-[12px] shrink xl:block hidden`}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
              <Image src={tasheel} alt="" className="w-36" />

              <button onClick={handleModal} className="pr-6 sm:pr-0 block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                >
                  <path
                    d="M5.8006 28H38.8006M5.8006 17H38.8006"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-white text-[12px]  text-grey1 py-2 px-2 fixed bottom-0 left-0 w-full sm:hidden flex justify-between items-center z-[100]">
        <Link
          href="/"
          className={`${isActive(
            "/"
          )} flex justify-center items-center flex-col gap-1 p-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <g clipPath="url(#clip0_804_2569)">
              <path
                d="M20 24H16C15.724 24 15.5 23.776 15.5 23.5V16.5C15.5 16.224 15.276 16 15 16H10C9.724 16 9.5 16.224 9.5 16.5V23.5C9.5 23.776 9.276 24 9 24H5C4.173 24 3.5 23.327 3.5 22.5V13H1.5C0.949 13 0.5 12.551 0.5 12C0.5 11.735 0.608 11.475 0.796 11.287L12.15 0.142988C12.344 -0.0470117 12.656 -0.0470117 12.85 0.142988L24.2 11.283C24.392 11.475 24.5 11.735 24.5 12C24.5 12.551 24.051 13 23.5 13H21.5V22.5C21.5 23.327 20.827 24 20 24ZM16.5 23H20C20.276 23 20.5 22.776 20.5 22.5V12.5C20.5 12.224 20.724 12 21 12H23.5L12.5 1.20099L1.5 11.997L4 12C4.276 12 4.5 12.224 4.5 12.5V22.5C4.5 22.776 4.724 23 5 23H8.5V16.5C8.5 15.673 9.173 15 10 15H15C15.827 15 16.5 15.673 16.5 16.5V23Z"
                fill="#4D4D4D"
              />
            </g>
            <defs>
              <clipPath id="clip0_804_2569">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <p className=" font-bold">Home</p>
        </Link>
        <Link
          href="/online-services"
          className={`${isActive(
            "/online-services"
          )} flex justify-center items-center flex-col gap-1 p-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.2229 18.223L18 19.4456V21.9267C18 22.7968 17.2621 23.4843 16.3942 23.423L4.39419 22.5744C3.60878 22.5188 3 21.8655 3 21.0781V5.00856C3 4.76324 3.37412 3.34181 3.91234 3.41341L19.2605 0.693918C20.1726 0.546362 21 1.25066 21 2.17467V16.9087C21 17.4558 20.7022 17.9594 20.2229 18.223ZM16.5157 4.65906L3.99999 4.2658V21.078C3.99999 21.3405 4.20292 21.5583 4.46472 21.5768L16.4647 22.4253C16.754 22.4458 17 22.2166 17 21.9266V5.1588C17 4.88878 16.7856 4.66754 16.5157 4.65906Z"
              fill="#E0E0E0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5 7.5C8.01472 7.5 6 9.51472 6 12C6 14.4853 8.01472 16.5 10.5 16.5C12.9853 16.5 15 14.4853 15 12C15 9.51472 12.9853 7.5 10.5 7.5ZM5 12C5 8.96243 7.46243 6.5 10.5 6.5C13.5376 6.5 16 8.96243 16 12C16 15.0376 13.5376 17.5 10.5 17.5C7.46243 17.5 5 15.0376 5 12Z"
              fill="#4D4D4D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.91825 8.60814C9.66432 9.4546 9.5 10.6539 9.5 12C9.5 13.3461 9.66432 14.5454 9.91825 15.3919C10.0462 15.8183 10.1886 16.1269 10.324 16.3178C10.4171 16.4491 10.4779 16.4869 10.5 16.4971C10.5221 16.4869 10.5829 16.4491 10.676 16.3178C10.8114 16.1269 10.9538 15.8183 11.0817 15.3919C11.3357 14.5454 11.5 13.3461 11.5 12C11.5 10.6539 11.3357 9.4546 11.0817 8.60814C10.9538 8.18173 10.8114 7.87308 10.676 7.68219C10.5829 7.55089 10.5221 7.51314 10.5 7.50291C10.4779 7.51314 10.4171 7.55089 10.324 7.68219C10.1886 7.87308 10.0462 8.18173 9.91825 8.60814ZM9.5083 7.10366C9.72261 6.80151 10.0505 6.5 10.5 6.5C10.9495 6.5 11.2774 6.80151 11.4917 7.10366C11.7152 7.4188 11.8961 7.84238 12.0396 8.32079C12.3285 9.28398 12.5 10.5846 12.5 12C12.5 13.4154 12.3285 14.716 12.0396 15.6792C11.8961 16.1576 11.7152 16.5812 11.4917 16.8963C11.2774 17.1985 10.9495 17.5 10.5 17.5C10.0505 17.5 9.72261 17.1985 9.5083 16.8963C9.28478 16.5812 9.10395 16.1576 8.96043 15.6792C8.67147 14.716 8.5 13.4154 8.5 12C8.5 10.5846 8.67147 9.28398 8.96043 8.32079C9.10395 7.84238 9.28478 7.4188 9.5083 7.10366Z"
              fill="#4D4D4D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 12C5 11.7239 5.22386 11.5 5.5 11.5H15.5C15.7761 11.5 16 11.7239 16 12C16 12.2761 15.7761 12.5 15.5 12.5H5.5C5.22386 12.5 5 12.2761 5 12Z"
              fill="#4D4D4D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.50129 18.9644C6.52096 18.689 6.7602 18.4816 7.03564 18.5013L14.0356 19.0013C14.3111 19.021 14.5184 19.2602 14.4987 19.5356C14.4791 19.8111 14.2398 20.0184 13.9644 19.9988L6.96439 19.4988C6.68895 19.4791 6.48161 19.2398 6.50129 18.9644Z"
              fill="#4D4D4D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 4.74928C3 3.90239 3.70064 3.22343 4.54711 3.25002L16.5471 3.62708C17.3568 3.65252 18 4.31625 18 5.12634V21.8941C18 22.7642 17.2621 23.4518 16.3942 23.3904L4.39421 22.5418C3.6088 22.4863 3.00002 21.8329 3.00002 21.0456L3 4.74928ZM4.5157 4.24953C4.23354 4.24066 4 4.46699 4 4.74928V21.0456C4 21.308 4.20293 21.5258 4.46473 21.5443L16.4647 22.3929C16.754 22.4134 17 22.1842 17 21.8941V5.12628C17 4.85625 16.7856 4.635 16.5157 4.62652L4.5157 4.24953Z"
              fill="#4D4D4D"
            />
          </svg>
          <p className=" font-bold">Apply Online</p>
        </Link>
        <Link
          href="/uae-tourist-visa"
          className={`${isActive(
            "/uae-tourist-visa"
          )} flex justify-center items-center flex-col gap-1 p-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 2C4 1.17157 4.67157 0.5 5.5 0.5H19.5C20.3284 0.5 21 1.17157 21 2V22C21 22.8284 20.3284 23.5 19.5 23.5H5.5C4.67157 23.5 4 22.8284 4 22V2ZM5.5 1.5C5.22386 1.5 5 1.72386 5 2V22C5 22.2761 5.22386 22.5 5.5 22.5H19.5C19.7761 22.5 20 22.2761 20 22V2C20 1.72386 19.7761 1.5 19.5 1.5H5.5Z"
              fill="#4D4D4D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 20C8 19.7239 8.22386 19.5 8.5 19.5H16.5C16.7761 19.5 17 19.7239 17 20C17 20.2761 16.7761 20.5 16.5 20.5H8.5C8.22386 20.5 8 20.2761 8 20Z"
              fill="#4D4D4D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 17C9 16.7239 9.22386 16.5 9.5 16.5H15.5C15.7761 16.5 16 16.7239 16 17C16 17.2761 15.7761 17.5 15.5 17.5H9.5C9.22386 17.5 9 17.2761 9 17Z"
              fill="#4D4D4D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5 3.5C10.0147 3.5 8 5.51472 8 8C8 10.4853 10.0147 12.5 12.5 12.5C14.9853 12.5 17 10.4853 17 8C17 5.51472 14.9853 3.5 12.5 3.5ZM7 8C7 4.96243 9.46243 2.5 12.5 2.5C15.5376 2.5 18 4.96243 18 8C18 11.0376 15.5376 13.5 12.5 13.5C9.46243 13.5 7 11.0376 7 8Z"
              fill="#4D4D4D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.6643 5.61332L9.33784 4.4728L9.66216 3.52686L12.9887 4.66737C14.0925 5.04583 14.3605 6.48431 13.467 7.23485L12.9462 7.67226C12.7827 7.80967 12.5916 7.91055 12.3859 7.96815L11.2836 8.2768C11.0676 8.33726 10.9184 8.53407 10.9184 8.75829V8.86759C10.9184 8.95762 10.9427 9.04597 10.9887 9.12333L11.3547 9.73826C11.7798 10.4523 11.5433 11.3757 10.8275 11.7977L9.75391 12.4306L9.24609 11.5691L10.3197 10.9362C10.5583 10.7956 10.6371 10.4878 10.4955 10.2497L10.1294 9.63481C9.99128 9.40274 9.91837 9.13767 9.91837 8.86759V8.75829C9.91837 8.08563 10.3662 7.49521 11.0139 7.31384L12.1163 7.00518C12.1848 6.98598 12.2485 6.95236 12.3031 6.90655L12.8238 6.46914C13.1216 6.21896 13.0323 5.73947 12.6643 5.61332Z"
              fill="#4D4D4D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.4855 8.40829L17.4361 7.99811L17.2192 7.00562L15.2687 7.4158C14.8677 7.5001 14.5224 7.75242 14.3153 8.11235L13.4693 9.5828C13.0355 10.3368 13.3252 11.3233 14.099 11.7267L15.2744 12.3396L15.7071 11.4385L14.5316 10.8256C14.2737 10.6911 14.1771 10.3622 14.3217 10.1109L15.1678 8.64046C15.2368 8.52049 15.3519 8.43639 15.4855 8.40829Z"
              fill="#4D4D4D"
            />
          </svg>
          <p className=" text-center font-bold">UAE Tourist Visa</p>
        </Link>
        <div></div>
      </div>
      {isModalOpen && <Menu onClose={closeModal} />}
    </>
  );
};

export default Navbar;
