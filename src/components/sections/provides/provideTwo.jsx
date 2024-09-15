import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Highlight from "@/components/ui/highlight";
import Title from "@/components/ui/title";
import SlideRight from "@/components/animations/slideRight";
import RightArrow from "../../../../public/icons/rightArrow";
import LogoSlide from "./logoSlide";
import SlideUp from "@/components/animations/slideUp";

const ProvideTwo = ({ order_1, order_0 }) => {
  // order props from home page 5
  return (
    <section className="lg:py-15 lg:pt-40 py-9">
      <div className="max-w-[1350px] mx-auto px-[15px]">
        <div className="grid xl:grid-cols-[48%_52%] lg:grid-cols-2 grid-cols-1 justify-between xl:gap-10 gap-5">
          <div className={`${order_1} text-center sm:text-start`}>
            <SlideUp>
              <div>
                <Title
                  size={"2xl"}
                  className="pt-0 max-w-full uppercase tracking-wider text-[#fb4409]"
                >
                  THE BReakdown
                </Title>
                <Title size={"4xl"} className="uppercase pt-6 lg:max-w-[620px]">
                  Digital Launchpad:
                  <Highlight>Your Path to $1K and Beyond</Highlight>
                </Title>
                <p className="font-semibold lg:pt-7.5 pt-5">
                  {" "}
                  Digital Launchpad is Iman Gadzhi’s program designed to set you
                  up for success by breaking bad habits. You’ll learn from
                  experts like Paul Daley on how to become a remote sales rep,
                  Luis on writing profitable texts using AI, and Jordan Welch on
                  building a Shopify store from scratch. You’ll also join a
                  supportive mastermind community, attend live monthly calls
                  with 8- and 9-figure entrepreneurs, and gain exclusive access
                  to meet-ups with Iman. With ongoing updates, a custom app, and
                  high-value coaching, you’ll always be equipped to make your
                  first $1,000 online and beyond.
                </p>
              </div>
              <div className="lg:pt-[74px] pt-10">
                <div className="flex flex-wrap md:flex-nowrap xl:gap-20 gap-10 justify-center sm:justify-start">
                  <div>
                    <div className="flex flex-row w-full justify-center sm:justify-start">
                      <Image
                        src={"/images/shapes/learning.png"}
                        width={62}
                        height={40}
                        alt="connectivity"
                      />
                    </div>
                    <p className="font-semibold text-1xl pt-4 lg:max-w-[255px]">
                      $4,500+ Programs
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-row w-full justify-center sm:justify-start">
                      <Image
                        src={"/images/shapes/badge.png"}
                        width={62}
                        height={40}
                        alt="connectivity"
                      />
                    </div>

                    <p className="font-semibold text-1xl pt-4 lg:max-w-[255px]">
                      Unlockable Rewards
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className={"sm:px-20 px-15 lg:mt-13 mt-7 mb-6 sm:mb-0"}
                >
                  <Link className="uppercase tracking-wider" href={"/services"}>
                    {" "}
                    Yes, I want to join{" "}
                  </Link>
                </Button>
              </div>
            </SlideUp>
          </div>
          <div className={order_0}>
            <SlideUp>
              <div className="bg-[rgba(226,231,255,0.22)] dark:bg-[#121213] rounded-[30px] relative after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[linear-gradient(90deg,_#F4F6FF_0%,_rgba(244,246,255,0.00)_20.2%,_rgba(244,_246,_255,_0.00)_72.88%,_#F4F6FF_100%)] after:dark:bg-[linear-gradient(90deg,_#150101_0%,_#fc450b0f_16.2%,_#fc450b0f_76.88%,_#150101_100%)] after:z-10 after:rounded-[30px]">
                <div
                  className="bg-contain bg-bottom bg-no-repeat h-full max-h-[400px] w-full absolute bottom-7 left-0"
                  style={{
                    backgroundImage: `url(/images/shapes/provide-bg3-1.png)`,
                  }}
                ></div>
                <div className="lg:px-14 px-5 lg:pt-[58px] pt-8 relative z-[15]">
                  <Title size={"4xl"} className={"uppercase text-center"}>
                    HERE'S ThE BONUSES YOU GET WITH digital launchpad...
                  </Title>
                </div>
                <div className="lg:mt-[89px] mt-12 pb-6">
                  <LogoSlide />
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvideTwo;
