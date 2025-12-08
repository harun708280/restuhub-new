import {
  Facebook,
  FacebookIcon,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#111827] pt-120 ">
      <div className="container">
        <div className="flex justify-between gap-6 flex-wrap">
          <div className="lg:w-[40%]">
            <div className="flex items-center relative h-[50px] w-[190px]">
              <Image src="/Images/logo.png" alt="Logo" fill priority />
            </div>
            <p className="text-white opacity-80 max-w-[277px] pt-5 lg:pt-5">
              AI-powered review management for busy restaurant owners.
            </p>
          </div>
          <div className="text-white">
            <h6 className="text-lg md:text-xl font-semibold">Company</h6>
            <div className="text-[16px] opacity-80 pt-5 lg:pt-7 space-y-1.5 flex flex-col gap-2">
              <Link href="#">About</Link>
              <Link href="#">How it works</Link>
              <Link href="#">Why us</Link>
            </div>
          </div>
          <div className="text-white">
            <h6 className="text-lg md:text-xl font-semibold">Resources</h6>
            <div className="text-[16px] opacity-80 pt-5 lg:pt-7 space-y-1.5 flex flex-col gap-2">
              <Link href="#">Contact Us</Link>
              <Link href="#">FAQ’s</Link>
            </div>
          </div>
          <div className="text-white">
            <h6 className="text-lg md:text-xl font-semibold">Company</h6>
            <div className="text-[16px] opacity-80 pt-5 lg:pt-7 space-y-1.5 flex flex-col gap-2">
              <Link href="#">Terms & Conditions</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Legal</Link>
            </div>
          </div>
        </div>
        <div className="pt-60 ">
          <div className="border-t border-white/10  p-5  md:py-8 text-white flex gap-6 flex-wrap justify-between">
            <span>© 2025 , All Rights Reserved</span>

            <div className="flex gap-3 items-center">
              <Link href="#" target="_blank">
                <div className="">
                  <Facebook className="h-10 w-10 p-2 rounded-full 
                        bg-[#FFFFFF0D] text-gray-400 
                        hover:bg-secondary hover:text-white 
                        hover:shadow-xl hover:shadow-secondary
                        hover:-translate-y-1 
                        transition-all duration-400 ease-out"/>
                </div>
              </Link>
              <Link href="#" target="_blank">
                <div className="">
                  <Twitter className="h-10 w-10 p-2 rounded-full 
                        bg-[#FFFFFF0D] text-gray-400 
                        hover:bg-secondary hover:text-white 
                        hover:shadow-xl hover:shadow-secondary
                        hover:-translate-y-1 
                        transition-all duration-400 ease-out" />
                </div>
              </Link>
              <Link href="#" target="_blank">
                <div className="">
                  <Instagram className="h-10 w-10 p-2 rounded-full 
                        bg-[#FFFFFF0D] text-gray-400 
                        hover:bg-secondary hover:text-white 
                        hover:shadow-xl hover:shadow-secondary
                        hover:-translate-y-1 
                        transition-all duration-400 ease-out"/>
                </div>
              </Link>
              <Link href="#" target="_blank">
                <div className="group">
                  <Linkedin
                    className="h-10 w-10 p-2 rounded-full 
                        bg-[#FFFFFF0D] text-gray-400 
                        hover:bg-secondary hover:text-white 
                        hover:shadow-xl hover:shadow-secondary
                        hover:-translate-y-1 
                        transition-all duration-400 ease-out"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
