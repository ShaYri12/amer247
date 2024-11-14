"use client";
import React, { useState } from "react";

interface Faq {
  question: string;
  answer: string;
}

interface FaqProps {
  faqs: Faq[];
}

const CustomFaq: React.FC<FaqProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {faqs.map((faq, index) => (
        <div data-aos="zoom-in" key={index} className="faq-item">
          <button
            className="faq-toggle-btn"
            onClick={() => handleToggle(index)}
            aria-expanded={activeIndex === index}
          >
            <div
              className={`${
                activeIndex === index ? "text-black" : "text-grey1"
              } md:text-xl text-md font-semibold py-3 items-center text-left flex gap-5`}
              style={{
                borderImage:
                  "linear-gradient(to bottom right, white 0%, black 25%, white 50%, black 75%, white 100%)",
                borderBottom: "2px solid transparent",
                borderTop: 0,
                borderLeft: 0,
                borderImageSlice: 1,
              }}
            >
              {activeIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M31.6668 21.6667H8.3335V18.3334H31.6668V21.6667Z"
                    fill="black"
                  />
                  <path
                    d="M31.6668 21.6667H8.3335V18.3334H31.6668V21.6667Z"
                    fill="black"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M31.6668 21.6667H8.3335V18.3334H31.6668V21.6667Z"
                    fill="black"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M31.6668 21.6667H8.3335V18.3334H31.6668V21.6667Z"
                    fill="black"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M31.6668 21.6667H8.3335V18.3334H31.6668V21.6667Z"
                    fill="black"
                    fill-opacity="0.2"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M31.6668 21.6633H21.6668V31.6633H18.3335V21.6633H8.3335V18.33H18.3335V8.32996H21.6668V18.33H31.6668V21.6633Z"
                    fill="#4D4D4D"
                  />
                </svg>
              )}
              {faq.question}
            </div>
          </button>
          {activeIndex === index && (
            <p
              className="faq-answer duration-300 transition-all text-grey1 text-lg font-normal md:pr-5 pl-16 py-5"
              style={{
                borderImage:
                  "linear-gradient(to bottom right, white 0%, black 25%, white 50%, black 75%, white 100%)",
                borderBottom: "2px solid transparent",
                borderTop: 0,
                borderLeft: 0,
                borderImageSlice: 1,
              }}
            >
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomFaq;
