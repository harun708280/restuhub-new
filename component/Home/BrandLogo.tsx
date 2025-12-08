"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const BrandLogo = () => {
  const logos = [
    "/icon/c-1.svg",
    "/icon/c-2.svg",
    "/icon/c-3.svg",
    "/icon/c-4.svg",
    "/icon/c-1.svg",
    "/icon/c-2.svg",
    "/icon/c-3.svg",
    "/icon/c-4.svg",
    "/icon/c-1.svg",
    "/icon/c-2.svg",
    "/icon/c-3.svg",
    "/icon/c-4.svg",
    
    
  ];

  return (
    <div className="">
      <div className="">
        

        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover={true}
          direction="left"
          className="overflow-hidden"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-8 lg:mx-12 flex items-center justify-center"
            >
              <div className="relative opacity-100 
                              transition-all duration-500 hover:scale-110">
                <Image
                  src={logo}
                  alt={`Brand logo ${index + 1}`}
                  width={160}
                  height={80}
                  className="object-contain"
                  style={{ maxHeight: "70px", width: "auto" }}
                />
              </div>
            </div>
          ))}
        </Marquee>

        
      </div>
    </div>
  );
};

export default BrandLogo;