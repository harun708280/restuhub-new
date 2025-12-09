"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import BrandLogo from "./BrandLogo";

const Hero = () => {
  return (
    <div className="pt-[120px] md:pt-[200px] relative overflow-hidden">
      {/* Background Blur Orbs – স্মুদলি আসবে */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute top-[62%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-80 w-[500px] bg-secondary blur-3xl z-0"
      />
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-80 w-80 bg-secondary blur-3xl z-0"
      />

      <div className="container relative z-20">
        <div className="flex flex-col justify-center items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex gap-3 justify-center items-center bg-secondary/20 rounded-full w-fit py-2.5 px-4 pr-5"
          >
            <div className="relative h-6 w-6">
              <Image src={"/icon/star.svg"} alt="star" fill priority />
            </div>
            <span className="text-sm md:text-[16px] font-medium text-secondary">
              AI-Powered Review Management
            </span>
          </motion.div>

          {/* Main Heading + Description + Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-center max-w-[727px] mx-auto"
          >
            <h1 className="font-bold text-[35px] md:text-[45px] lg:text-[60px] leading-tight lg:leading-[70px] pt-5 lg:pt-8">
              Never Miss a Review,{" "}
              <span className="text-secondary">Never Lose a Customer</span>
            </h1>
            <p className="desc pt-3 lg:pt-5">
              RestruHub uses AI to respond to restaurant reviews within hours
              with clear, natural, and professional replies—so you can focus on
              running your business.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false }}
              className="flex gap-4 justify-center items-center md:flex-row flex-col pt-6 lg:pt-10"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="primary-btn w-full md:w-fit flex items-center justify-center gap-2"
              >
                <span>Start Free Trail</span> <ArrowRight />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#e0e0e0",
                  borderColor: "#000",
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white border px-4 py-2.5 rounded-xl w-full md:w-fit border-[#00000033] cursor-pointer hover:bg-[#f0f0f0] hover:border-[#000000] transition-all duration-300"
              >
                <span>Sign Up Now</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false }}
          className="pt-60 text-center text-[#535862] pb-5 md:pb-[30px]"
        >
          <span>Trusted by 4,000+ companies</span>
        </motion.div>
      </div>

      

      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false }}
          className="pt-60 text-center text-[#535862] pb-5 md:pb-[30px]"
        >
        <BrandLogo />
      </motion.div>
    </div>
  );
};

export default Hero;
