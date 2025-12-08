"use client";
import { ArrowRight } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "How much can I save with renewable energy?",
    answer: "Savings depend on your energy usage, system size, and location.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Typically, installation takes 1-3 days depending on system complexity.",
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, flexible plans are available to suit your budget.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [heights, setHeights] = useState<number[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const newHeights = contentRefs.current.map((el) => el?.scrollHeight || 0);
    setHeights(newHeights);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-120">
      <div className="container bg-[#E0E0E030] rounded-xl">
        <div className="p-0 lg:p-14">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full p-4">
            <h2 className="title max-w-[505px] text-2xl font-bold">
              Your Questions, Answered
            </h2>
            <div className="w-full md:w-auto">
              <button className="primary-btn flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="pt-[20px] lg:pt-[40px]">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="my-4 p-4  md:p-6 rounded-xl cursor-pointer bg-white text-[#181818] transition-all duration-300"
                >
                  <div
                    className="flex justify-between items-center"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg md:text-2xl font-medium">
                      {item.question}
                    </span>
                    <span
                      className={`border h-7 w-7 rounded-full flex justify-center items-center p-4 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 border-none bg-secondary text-white"
                          : "rotate-0 border-secondary"
                      }`}
                    >
                      ↑
                    </span>
                  </div>

                  <div
                    ref={(el: HTMLDivElement | null) => {
                      contentRefs.current[index] = el;
                    }}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: isOpen ? `${heights[index] || 0}px` : "0px",
                    }}
                  >
                    <p className="text-sm md:text-[18px] text-[#181818CC] mt-3">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
