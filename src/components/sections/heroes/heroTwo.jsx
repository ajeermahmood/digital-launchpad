import React from "react";
import Image from "next/image";
import SlotCounter from "react-slot-counter";
import PartnersSlider from "../partnersSlider";
import { partnersData } from "@/lib/fackData/partnersData";
import Title from "@/components/ui/title";
import PlayIcon from "@/components/ui/playIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RightArrow from "../../../../public/icons/rightArrow";
import "./custom-style-header.scss";

const HeroTwo = () => {
  return (
    <section className="sm:pt-20 pt-10 relative after:absolute after:z-[-1] after:left-0 after:top-0 after:w-full after:h-[calc(100vh-120px)] after:bg-background-linear">
      <div className="max-w-[1355px] mx-auto px-[15px]">
        <div className="grid xl:grid-cols-[auto_505px] lg:grid-cols-[auto_48%] items-center justify-between xl:gap-[82px] gap-8">
          <div className="text-center sm:text-start z-[100]">
            <h2 className="text-[#fb4409] sm:text-[30px] text-[20px] mb-2 font-bold">
              IT'S TRUE...
            </h2>
            <Title size={"6xl"} className={"capitalize"}>
              Young millionaire reveals{" "}
              <span
                style={{
                  color: "#ffaf00",
                }}
              >
                Online income system!
              </span>
            </Title>
          </div>
          <div>
            <p className="font-semibold sm:text-xl text-md sm:text-start text-center">
              24-Year-Old Multi-Millionaire Goes Rogue And Reveals His Secret
              "Online Income System" Just To Prove Anyone Can Make Their First
              $1,000 Online With It.
            </p>
            <Image
              className="z-0 absolute bottom-[32rem] left-[30rem] hidden sm:hidden md:hidden lg:block opacity-[25%] blur-[9px]"
              src="/images/shapes/DL ROCKET.webp"
              width={600}
              height={500}
            />
          </div>
        </div>
        <div className="lg:mt-25 mt-10 relative">
          <iframe
            className="sm:w-[50rem] w-[23rem] sm:h-[28.1rem] h-[12.9rem] mx-auto rounded"
            src="https://fast.wistia.net/embed/iframe/5xzmuiwp3e?pageUrl=https%3A%2F%2Flp.digital-launchpad.com%2F"
            allowFullScreen
            title="Hero Video"
            style={{
              boxShadow: "0 0 17px 4px #ac00003d",
            }}
          ></iframe>
          {/* <Image
            src={"/images/banner/hero-img-new.jpg"}
            width={1000}
            height={604}
            alt="background image"
            className="mx-auto lg:rounded-[20px] rounded-xl min-h-[400px] w-auto object-cover"
            style={{
              boxShadow: "0 0 17px 4px #ac00003d",
            }}
          /> */}
          {/* <PlayIcon playOne={true} /> */}
        </div>

        <div className="flex flex-row justify-center w-100 mt-7">
          <Image
            src={"/images/ACC_EC_LP_01-desktop-v1-upd.svg"}
            width={800}
            height={200}
            className={``}
          />
        </div>

        <div className="w-full flex flex-row justify-center mt-10 px-3 sm:px-0">
          <div className="max-w-[33rem] text-center">
            <Button
              asChild
              size={"lg"}
              className="sm:max-h-[64px] max-h-[60px] w-full group button-theme"
            >
              <Link href="/contact-us">
                {" "}
                YES! GIVE ME ACCESS NOW{" "}
                <span className="-rotate-45 group-hover:rotate-0 transition-all duration-75">
                  <RightArrow />
                </span>
              </Link>
            </Button>
            <span
              className="text-center text-[12px] sm:text-[14px]"
              style={{
                fontStyle: "italic",
                lineHeight: "10px",
              }}
            >
              Lock-in access at the discounted price before it goes up
            </span>
          </div>
        </div>

        {/* <PartnersSlider
          data={partnersData.slice(0, 5)}
          className={
            "shadow-[0px_4px_40px_0px_rgba(44,54,109,0.2509803922)] max-w-[1005px] mx-auto lg:mt-8 -mt-6 z-[1] relative dark:bg-white"
          }
        /> */}
      </div>
    </section>
  );
};

export default HeroTwo;
