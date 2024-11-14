import CustomLink from "@/components/shared/common/customLink";
import React from "react";
import { newsBlogData } from "./newsData";

type Props = {};
// type NewsBlogItem = {
//     id: number;
//     title: string;
//     content: string;
//     date: string;
// };

// const newsBlogData: NewsBlogItem = {
//     id: 1,
//     title: 'Stay Informed with Amer 24/7 For Latest News and Blogs for Seamless Journey With Us.',
//     content: 'Stay connected to expert advice, success stories, and breaking news that can make your journey smoother and more informed. Your path to a new chapter begins here...',
//     date: '25-10-2023',
// };

const NewsBlog = (props: Props) => {
  // const repeatedData = Array.from({ length: 9 }, (_, index) => ({ ...newsBlogData, id: index + 1 }));
  return (
    <>
      <div className="md:py-20 py-5 xl:px-32 lg:px-16 md:px-10 px-5 w-full flex flex-wrap justify-center items-center relative">
        <div className="flex flex-wrap justify-center gap-5">
          {newsBlogData.map((item: any) => (
            <div
              data-aos="zoom-in"
              key={item.id}
              className="lg:w-[30%] md:w-[48%] w-full space-y-4 border-b-[.3rem] py-2 border-black"
            >
              <div className="bg-background py-10 px-5 text-xl font-semibold underline-offset-4 text-grey1 underline decoration-primary">
                {item.title}
              </div>
              <div className="text-lg font-medium text-grey1 p-2">
                {item.content.split(" ").slice(0, 20).join(" ")}{" "}
                {item.content.split(" ").length > 20 ? "..." : ""}
              </div>

              <div className="flex justify-between items-center">
                <p className="">{item.date}</p>
                <CustomLink href={`/news/${item.slug}`} label="Read More" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsBlog;
