import React from "react";
import Hero from "./Hero";
import ManageReviews from "./ManageReviews";
import CoolFeature from "./CoolFeature";
import Works from "./Works";
import Faq from "./Faq";
import Pricing from "./Priceing";
import WhyLove from "./WhyLove";
import Saying from "./Saying";
import ReviewManagement from "./ReviewManagement";

const HomePage = () => {
  return (
    <>
      <section id="hero" className="scroll-mt-20">
        <Hero />
      </section>

      <ManageReviews />
      <CoolFeature />

      <section id="how-it-works" className="scroll-mt-24">
        <Works />
        <Faq />
      </section>

      <section id="pricing" className="scroll-mt-24">
        <Pricing />
      </section>

      <section id="why-us" className="scroll-mt-24">
        <WhyLove />
        <Saying />
        <ReviewManagement />
      </section>
    </>
  );
};

export default HomePage;