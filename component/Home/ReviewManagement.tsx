"use client";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FadeInWhenVisible } from "../shared/FadeInWhenVisible";

const ReviewManagement = () => {
  return (
    <div className="pt-120 pb-100">
      <div className="container">
        <FadeInWhenVisible>
          <div
            className=" max-h-[452px] bg-cover bg-no-repeat bg-top rounded-3xl -mx-4 md:mx-0 overflow-hidden"
            style={{
              backgroundImage: "url('/images/ReviewManagement-bg.png')",
            }}
          >
            <div className="flex justify-between flex-col gap-4 md:gap-0 md:flex-row pl-4  pt-6  md:pl-16 ">
              <div className="md:pt-[80px] pr-4 md:pr-0">
                <h2 className="title text-white ">
                  Ready to Transform Your Review Management?
                </h2>
                <p className="text-white! desc pt-5 pb-8">
                  Start your 14-day free trial today. No credit card required.
                  Cancel anytime.
                </p>

                <div className="flex gap-2 items-center flex-wrap">
                  <button className="primary-btn w-full md:w-fit">
                    <span>Start Free Trail</span> <ArrowRight />
                  </button>
                  <button className="bg-white justify-center flex gap-2 items-center border px-4 py-2.5 rounded-xl w-full md:w-fit border-[#00000033] cursor-pointer hover:bg-[#f0f0f0] hover:border-[#000000] transition-colors duration-300">
                    <span>Make an Schedule</span> <Calendar height={20} />
                  </button>
                </div>
              </div>

              <div className=" relative h-[250px] md:h-[545px] w-full ">
                <Image
                  src="/images/DashboardSingle.png"
                  alt="DashboardSingle.png"
                  fill
                />
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default ReviewManagement;
