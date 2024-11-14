import Hero from "@/components/news/blogDetail/hero";
import { newsBlogData } from "@/components/news/newsBlog/newsData";
import NewsCard from "@/components/news/newsCard";

import Button from "@/components/shared/common/Button";
import Heading from "@/components/shared/common/heading";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: any;
};

const BlogDetail = (props: Props) => {
  const { slug }: any = props.params;

  const filteredBlog = newsBlogData.find((blog) => blog.slug === slug);

  if (!filteredBlog) {
    // The scan with the specified name exists

    notFound();
  }

  return (
    <div>
      <Hero blog={filteredBlog} />
      <div className="lg:w-1/2 w-full md:py-20 py-10 lg:px-24 md:px-20 px-5 space-y-5">
        <NewsCard blog={filteredBlog} />
        <div className=" w-full space-y-7">
          <Heading text="Amer 247 provides documents pick up and drop off service" />
          <div className="border-l-[8px] border-primary pl-10 space-y-4">
            <li>
              The only Government services center operating 24 hours in the UAE.
            </li>
            <li>
              The only Government services center operating on Friday and public
              holidays.
            </li>
            <li>There are sufficient parking space available in the area.</li>
            <li>
              One stop shop (you can finish all your Government transactions at
              Amer 247)
            </li>
            <li>
              Our customer happiness consultants are well trained to cater to
              all your needs.
            </li>
          </div>
        </div>
        {/* <NewsCard /> */}
        <Button label="Apply Now" />
      </div>
    </div>
  );
};

export default BlogDetail;
