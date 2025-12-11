"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Hero from "./Hero";
import ManageReviews from "./ManageReviews";
import CoolFeature from "./CoolFeature";
import Works from "./Works";
import Faq from "./Faq";
import Pricing from "./Priceing";
import WhyLove from "./WhyLove";
import Saying from "./Saying";
import ReviewManagement from "./ReviewManagement";
import CookieBanner from "../shared/CookieBanner";

const HomePage = () => {
  const searchParams = useSearchParams();
  const scrollToId = searchParams.get("scrollTo");

  useEffect(() => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToId]);

  return (
    <>
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>

      <ManageReviews />
      <CoolFeature />

      <section id="how-it-works" className="scroll-mt-24">
        <Works />
    
      </section>
      <section id="faq" className="scroll-mt-24">
        
        <Faq />
      </section>

      <section id="pricing" className="scroll-mt-24">
        <Pricing />
      </section>

      <section id="why-us" className="scroll-mt-24">
        <WhyLove />
        <Saying />
       
      </section>

      <section id="contact" className="scroll-mt-24">
        <ReviewManagement />
      </section>

      <CookieBanner />
    </>
  );
};

export default HomePage;
