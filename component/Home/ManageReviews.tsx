import Image from "next/image";
import React from "react";
import { FadeInWhenVisible } from "../shared/FadeInWhenVisible";

const ManageReviews = () => {
  const data = [
    {
      icon: "/icon/white-star.svg",
      title: "AI-Powered Responses",
      des: "Advanced AI generates natural, contextual replies that sound authentically human.",
      iconColor: "bg-[#00B67A]",
    },
    {
      icon: "/icon/watch.svg",
      title: "Lightning Fast",
      des: "Respond to reviews within hours, not days. Keep your customers engaged and happy.",
      iconColor: "bg-[#219BE5]",
    },
    {
      icon: "/icon/emoji.svg",
      title: "Sentiment Result",
      des: "Every response maintains your brand voice—friendly, natural, and professional.",
      iconColor: "bg-[#9E57F7]",
    },
    {
      icon: "/icon/boost.svg",
      title: "Boost Reputation",
      des: "Timely responses improve ratings and show customers you care about their feedback.",
      iconColor: "bg-[#F25237]",
    },
    {
      icon: "/icon/light.svg",
      title: "Lightning Fast",
      des: "Respond to reviews within hours, not days. Keep your customers engaged and happy.",
      iconColor: "bg-[#F2416B]",
    },
    {
      icon: "/icon/mike.svg",
      title: "Professional Tone",
      des: "Every response maintains your brand voice—friendly, natural, and professional.",
      iconColor: "bg-[#EDAE09]",
    },
  ];
  return (
    <div className="pt-120">
      <div className="container">
        <FadeInWhenVisible>
          <div className="max-w-[709px] mx-auto space-y-4 text-center">
            <h2 className="title max-w-[562px] mx-auto">
              Everything You Need to Manage Reviews
            </h2>
            <p className="desc">
              Powerful features designed specifically for busy restaurant owners
              who want to maintain excellent customer relationships.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="pt-60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.1}>
              <div
                className="group relative bg-white/70 backdrop-blur-xl rounded-2xl p-5 lg:p-7 
             border border-[#0000000D] overflow-hidden
             transition-all duration-700 ease-out
             hover:bg-white/90 hover:backdrop-blur-2xl
       
             cursor-pointer shadow-[0px 4px 34px 0px #0000000A]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <div
                  className={`flex justify-center items-center h-12 w-12 mb-4 rounded-xl ${item.iconColor}`}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                  />
                </div>

                <h3 className="font-bold text-2xl mb-4">{item.title}</h3>
                <p className="text-gray-700 font-medium">{item.des}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageReviews;
