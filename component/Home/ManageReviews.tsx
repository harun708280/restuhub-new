import Image from "next/image";
import React from "react";

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
        <div className="max-w-[709px] mx-auto space-y-4 text-center">
          <h2 className="title max-w-[562px] mx-auto">
            Everything You Need to Manage Reviews
          </h2>
          <p className="desc">
            Powerful features designed specifically for busy restaurant owners
            who want to maintain excellent customer relationships.
          </p>
        </div>

        <div className="pt-60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white flex-col  rounded-xl py-5 px-3 lg:py-9 lg:px-7.5  flex border border-[#0000000D] "

              style={{ boxShadow: "0px 4px 34px 0px #0000000A" }}
            >
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
              <h3 className="font-semibold text-lg md:text-2xl  mb-2">{item.title}</h3>
              <p className="text-sm text-[#5a6370]">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageReviews;
