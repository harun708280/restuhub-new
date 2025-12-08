import Image from "next/image";
import React from "react";

const CoolFeature = () => {
  return (
    <div className="pt-120">
      <div className="bg-[#006543] pt-100 pb-100">
        <div className="container">
          <div className="max-w-[600px] text-center mx-auto">
            <h2 className="title text-white">Let’s know our cool feature</h2>
            <p className="desc text-white! pt-2 lg:pt-4">
              From smart tools to seamless design, explore what makes our
              platform powerful, user-friendly, and built for real impact.
            </p>
          </div>

          <div className="pt-60">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 ">
              <div className="bg-[#F5F5F5] rounded-xl md:rounded-3xl px-4 py-4 md:py-10 md:px-8">
                <h4 className="sub-title">
                  {" "}
                  Manage Every single Reviews In one platform
                </h4>
                <p className="sub-desc text-[#181818CC] pt-2 pb-8 ">
                  Respond smarter with AI or manually — always review, approve,
                  or edit before hitting. Respond smarter with AI or manually —
                  always review, approve, or edit before hitting.
                </p>

                <div className="overflow-hidden h-[200px] md:h-[301px] max-w-[588px] w-full relative  rounded-xl">
                  <Image
                    src="/Images/manage-review.png"
                    alt="manage-review"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="bg-[#F5F5F5] rounded-xl md:rounded-3xl px-4 py-4 md:py-10 md:px-8">
                <h4 className="sub-title"> Effortless Review Replies</h4>
                <p className="sub-desc text-[#181818CC] pt-2 pb-8 ">
                  Respond smarter with AI or manually — always review, approve,
                  or edit before hitting. Respond smarter with AI or manually —
                  always review, approve, or edit before hitting.
                </p>

                <div className="overflow-hidden h-[200px] md:h-[301px] max-w-[588px] w-full relative  rounded-xl">
                  <Image
                    src="/Images/review-replies.png"
                    alt="manage-review"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="pt-5 md:pt-6 lg:pt-8 overflow-hidden">
              <div className="bg-[#F5F5F5] rounded-xl md:rounded-3xl px-4 pt-4 md:pt-3 md:px-8 flex gap-3 flex-col md:flex-row justify-between items-center">
                <div className="">
                  <h4 className="sub-title"> No Random Reply</h4>

                  <p className="sub-desc text-[#181818CC] pt-2  max-w-[517px]">
                    Respond smarter with AI or manually — always review,
                    approve, or edit before hitting. Respond smarter with AI or
                    manually — always review, approve, or edit before hitting.
                  </p>

                  <div className="flex gap-4  items-center md:flex-row flex-col pt-6 lg:pt-8">
                    <button className="primary-btn w-full md:w-fit">
                      <span>Get Started</span>
                    </button>
                    <button className="bg-white border px-4 py-2.5 rounded-xl w-full md:w-fit border-[#00000033] cursor-pointer hover:bg-[#f0f0f0] hover:border-[#000000] transition-colors duration-300">
                      <span>Request A Demo</span>
                    </button>
                  </div>
                </div>

                <div className="overflow-hidden h-[200px] md:h-[301px] max-w-[588px] w-full relative  rounded-xl  border-b-red-500">
                  <Image
                    src="/Images/random-reply.png"
                    alt="manage-review"
                    fill
                    
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoolFeature;
