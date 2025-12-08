import CoolFeature from "@/component/Home/CoolFeature";
import Faq from "@/component/Home/Faq";
import Hero from "@/component/Home/Hero";
import ManageReviews from "@/component/Home/ManageReviews";
import Pricing from "@/component/Home/Priceing";
import ReviewManagement from "@/component/Home/ReviewManagement";
import Saying from "@/component/Home/Saying";
import WhyLove from "@/component/Home/WhyLove";
import Works from "@/component/Home/Works";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <ManageReviews/>
      <CoolFeature/>
      <Works/>
      <Faq/>
      <Pricing/>
      <WhyLove/>
      <Saying/>
      <ReviewManagement/>
    </div>
  );
}
