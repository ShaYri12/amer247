import React from "react";
import Heading from "../common/heading";
import { usePathname } from "next/navigation";
import { menuItems } from "./menuItems";
import Link from "next/link";

type MenuProps = {
  onClose: () => void;
};

const Menu: React.FC<MenuProps> = ({ onClose }: MenuProps) => {
  const router = usePathname();

  const isActive = (path: string) => {
    return router === path ? "!text-white !bg-primary !border-0" : "";
  };

  const getBorderStyles = (index: number) => {
    const baseStyles = {
      borderImage:
        "linear-gradient(to bottom right, white 0%, black 25%, white 50%, black 75%, white 100%)",
      borderBottom:
        index >= menuItems.length - 5 ? "" : "2px solid transparent",
      borderTop: 0,
      borderLeft: 0,
      borderImageSlice: 1,
    };

    if (index % 5 === 5 - 1) {
      // Apply border styles for the last item in each row
      const mediaQueryStyles = {
        "@media (min-width: 1024px)": {
          borderRight: "2px solid transparent",
          borderBottom: "2px solid transparent",
        },
      };

      // Merge media query styles into baseStyles
      Object.assign(baseStyles, mediaQueryStyles);
    }

    return baseStyles;
  };

  return (
    <>
      <div className=" h-screen w-full fixed opacity-90 top-0 left-0 z-50 flex justify-center items-center ">
        <div className=" lg:px-32 md:px-16 px-5 md:py-16 py-5 absolute left-0 top-0 flex justify-between items-center w-full">
          <Heading text="Menu" styles="text-2xl font-medium" />
          <button onClick={onClose} className="box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.5664 2.0664C17.6408 1.99202 17.6998 1.90372 17.74 1.80653C17.7803 1.70935 17.801 1.60519 17.801 1.5C17.801 1.39481 17.7803 1.29065 17.74 1.19347C17.6998 1.09628 17.6408 1.00798 17.5664 0.9336C17.492 0.85922 17.4037 0.800218 17.3065 0.759963C17.2093 0.719709 17.1052 0.69899 17 0.69899C16.8948 0.69899 16.7906 0.719709 16.6935 0.759963C16.5963 0.800218 16.508 0.85922 16.4336 0.9336L8.99998 8.3688L1.56639 0.9336C1.492 0.85922 1.4037 0.800218 1.30652 0.759963C1.20934 0.719709 1.10518 0.69899 0.999985 0.69899C0.894795 0.69899 0.790635 0.719709 0.693452 0.759963C0.596269 0.800218 0.507966 0.85922 0.433585 0.9336C0.359204 1.00798 0.300203 1.09628 0.259948 1.19347C0.219693 1.29065 0.198975 1.39481 0.198975 1.5C0.198975 1.60519 0.219693 1.70935 0.259948 1.80653C0.300203 1.90372 0.359204 1.99202 0.433585 2.0664L7.86879 9.5L0.433585 16.9336C0.283366 17.0838 0.198975 17.2876 0.198975 17.5C0.198975 17.7124 0.283366 17.9162 0.433585 18.0664C0.583804 18.2166 0.787544 18.301 0.999985 18.301C1.21243 18.301 1.41617 18.2166 1.56639 18.0664L8.99998 10.6312L16.4336 18.0664C16.5838 18.2166 16.7875 18.301 17 18.301C17.2124 18.301 17.4162 18.2166 17.5664 18.0664C17.7166 17.9162 17.801 17.7124 17.801 17.5C17.801 17.2876 17.7166 17.0838 17.5664 16.9336L10.1312 9.5L17.5664 2.0664Z"
                fill="black"
              />
            </svg>
          </button>
        </div>

        <div className="lg:w-3/5 md:w-4/5 w-full flex items-center justify-center flex-wrap gap-2 md:gap-0   md:mt-32 mt-0 px-5 ">
          {menuItems.map((item, index, array) => (
            <Link
              href={item.url}
              onClick={() => {
                // Close the menu when a menu item is clicked
                onClose();
              }}
              key={item.label}
              className={`lg:w-1/5 md:w-2/6 w-[40%] flex justify-center items-center flex-col md:py-10  gap-2 hover:bg-primary hover:text-white ${isActive(
                item.url
              )}  md:border-r-2  md:border-transparent border-b-0 md:border-l-0 ${
                index % 5 === 5 - 1 ? "md:border-r-0" : ""
              }`}
              // style={getBorderStyles(index)}
            >
              <div
                className={`  ${
                  isActive(item.url).length !== 0
                    ? "[&>svg>g>path]:fill-white [&>svg>path]:fill-white "
                    : ""
                }`}
              >
                <div className="lg:w-full md:w-3/4 w-1/2">{item.icon}</div>
              </div>
              <h1
                className={`md:text-lg text-sm font-medium text-center ${isActive(
                  item.url
                )}`}
              >
                {item.label}
              </h1>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-white fixed inset-0 h-full w-full md:blur-2xl blur-md z-20" />
    </>
  );
};

export default Menu;
