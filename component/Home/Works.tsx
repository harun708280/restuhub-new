import Image from "next/image";
import React from "react";

const Works = () => {
  const data = [
    {
      icon: "/icon/home.svg",
      title: "Connect Your Platforms",
      des: "Advanced AI generates natural, contextual replies that sound authentically human.",
      iconColor: "bg-[#359ACD]",
    },
    {
      icon: "/icon/paper.svg",
      title: "AI Analyzes Reviews",
      des: "Respond to reviews within hours, not days. Keep your customers engaged and happy.",
      iconColor: "bg-[#099250]",
    },
    {
      icon: "/icon/chat.svg",
      title: "Generate Smart Replies",
      des: "Every response maintains your brand voice—friendly, natural, and professional.",
      iconColor: "bg-[#FFA448]",
    },
    {
      icon: "/icon/verify.svg",
      title: "Review & Publish",
      des: "Timely responses improve ratings and show customers you care about their feedback.",
      iconColor: "bg-[#7435CD]",
    },
  ];
  return (
    <div className="pt-120">
      <div className="container">
        <div className="max-w-[709px] mx-auto space-y-3 text-center">
          <h2 className="title max-w-[562px] mx-auto">How RestruHub Works</h2>
          <p className="desc">
            Four simple steps to transform your review management process
          </p>
        </div>

        <div className="pt-60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white group flex-col  rounded-xl py-5 px-3 lg:py-8 lg:px-6  flex border border-[#0000000D] overflow-hidden
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
              <span className="border rounded-full py-0.5 px-4 w-fit mb-4 mt-2">
                step {index + 1}
              </span>
              <h3 className="font-semibold text-lg md:text-xl  mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#5a6370]">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
