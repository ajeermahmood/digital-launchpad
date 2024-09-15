"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Highlight from "../ui/highlight";
import Title from "../ui/title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import icon_1 from "../../../public/images/shapes/shopping-cart.png";
import icon_2 from "../../../public/images/shapes/copywriting.png";
import icon_3 from "../../../public/images/shapes/shopping-bag.png";
import SlideUp from "../animations/slideUp";

const tabList = [
  {
    id: "development",
    tab_name: "E-Commerce",
    tab_icon: icon_1,
    tab_content: {
      title: "The Winning Store",
      name: "By Jordan Welch",
      description: `Inside The Winning Store, Jordan Welch, #1 Ecom
                          influencer, will teach you how to put together a
                          Shopify store from scratch. You'll literally see him
                          building a store live from scratch and getting his
                          first sales in the program.`,
      frame_src:
        "https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Ffast.wistia.net%2Fembed%2Fiframe%2Fzya7c5c63r&display_name=Wistia%2C+Inc.&url=https%3A%2F%2Fiman-gadzhi.wistia.com%2Fmedias%2Fzya7c5c63r&image=https%3A%2F%2Fembed-ssl.wistia.com%2Fdeliveries%2F6e288c877a6b909d88784bfac6d6a74d.jpg%3Fimage_crop_resized%3D960x540&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=wistia",
      frame_title: "The Winning Store Trailer (Regular Sales Page)",
    },
  },
  {
    id: "partnership",
    tab_name: "Copy Writing",
    tab_icon: icon_2,
    tab_content: {
      title: "Pen To Profit",
      name: "By Luis Berger",
      description: `Inside Pen To Profit, my own CMO, Luis, will teach you how to write texts that make people take action… Even if you suck at writing. All of it using AI and proven fill-in-the-blank structures that Luis shares with you.`,
      frame_src:
        "https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Ffast.wistia.net%2Fembed%2Fiframe%2Fe9zuco2gzu&display_name=Wistia%2C+Inc.&url=https%3A%2F%2Fiman-gadzhi.wistia.com%2Fmedias%2Fe9zuco2gzu&image=https%3A%2F%2Fembed-ssl.wistia.com%2Fdeliveries%2F05d1f250d2f06d6da72de1d9546e6c8d.jpg%3Fimage_crop_resized%3D960x540&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=wistia",
      frame_title: "Pen To Profit Trailer",
    },
  },
  {
    id: "decisions",
    tab_name: "Online Sales",
    tab_icon: icon_3,
    tab_content: {
      title: "Six-Figure Sales Rep",
      name: "By Paul Daley",
      description: `Inside of Six-Figure Sales Rep, Paul Daley will teach you how to become a Remote Sales Rep for companies that sell high-ticket products and services online.`,
      frame_src:
        "https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Ffast.wistia.net%2Fembed%2Fiframe%2Fz8stl7zb0g&display_name=Wistia%2C+Inc.&url=https%3A%2F%2Fiman-gadzhi.wistia.com%2Fmedias%2Fz8stl7zb0g&image=https%3A%2F%2Fembed-ssl.wistia.com%2Fdeliveries%2F716434f4d9aa58d32f208db3858be58f.jpg%3Fimage_crop_resized%3D960x540&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=wistia",
      frame_title: "The Winning Store Trailer (Regular Sales Page)",
    },
  },
];
const Approach = () => {
  const [tab, setTab] = useState("development");
  const onTabChange = (value) => {
    setTab(value);
  };

  return (
    <section className="sm:py-15 py-8">
      <div className="max-w-[1350px] mx-auto px-[15px]">
        <SlideUp>
          <div className="flex flex-col items-center uppercase">
            {/* <Button variant="secondary" className="rounded">
              <span className="uppercase">
                some of the content you get inside...
              </span>
            </Button> */}
            <Title
              size={"2xl"}
              className="max-w-[872px] pt-6 text-center text-sm text-[#fb4409]"
            >
              some of the content you get inside...
            </Title>
            <Title size={"4xl"} className="max-w-[872px] pt-6 text-center">
              the{" "}
              <span className="text-[#fb4409] sm:text-[4rem] text-[2.5rem]">
                3
              </span>{" "}
              best paths to launch your <Highlight>online career</Highlight>{" "}
            </Title>
          </div>
        </SlideUp>
        <div className="lg:pt-20 pt-8">
          <Tabs onValueChange={onTabChange} defaultValue="development">
            <TabsList className="bg-transparent justify-between lg:flex-nowrap flex-wrap xl:gap-5 gap-3 w-full">
              {tabList.map(({ id, tab_icon, tab_name }) => {
                return (
                  <TabsTrigger
                    key={id}
                    value={id}
                    className={
                      "dark:data-[state=active]:border-[#fb4409] sm:min-h-20 min-h-15 border border-[#2a2a2a] bg-[#F4F6FF] dark:bg-[#121213] rounded-[10px] lg:basis-[20%] md:basis-[25%] sm:basis-[33%] basis-1/2 grow xl:px-6 px-2 xl:py-4 py-4 whitespace-normal text-start xl:gap-5 gap-2 data-[state=active]:bg-primary dark:data-[state=active]:bg-[#121213] data-[state=active]:text-white overflow-hidden"
                    }
                  >
                    <Image
                      src={tab_icon}
                      alt="icon"
                      width={30}
                      className={`${
                        id === tab
                          ? "brightness-0 invert"
                          : "brightness-0 invert"
                      } mr-3 xl:mr-0`}
                    />
                    <span className="max-w-[125px] font-semibold sm:text-lg text-md">
                      {tab_name}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {tabList.map(({ id, tab_content }) => {
              return (
                <TabsContent
                  key={id}
                  value={id}
                  className={"lg:pt-7.5 md:pt-[110px] sm:pt-[190px] pt-[175px]"}
                >
                  <SlideUp>
                    <div className="flex lg:flex-row flex-col justify-between bg-[#F4F6FF] dark:bg-[#121213] sm:py-10 py-6 sm:px-10 px-6 rounded-[15px] border border-[#2a2a2a]">
                      <div className="lg:pl-[0px] lg:pr-0 xl:max-w-[660px] lg:max-w-[550px] text-center sm:text-start">
                        <Title size={"4xl"}>{tab_content.title}</Title>
                        <p className="text-[#fb4409] font-semibold">
                          {tab_content.name}
                        </p>
                        <p className="pt-5 pb-7.5">{tab_content.description}</p>
                        <Button asChild variant="outline" className={"sm:px-20 px-12"}>
                          <Link
                            className="uppercase tracking-wider"
                            href={"/"}
                          >
                            {" "}
                            Yes, I want to join{" "}
                          </Link>
                        </Button>

                        <p
                          className="sm:text-start text-center sm:text-[12px] text-[9px] mt-1"
                          style={{
                            fontStyle: "italic",
                          }}
                        >
                          You'll get redirected to our student platform to
                          complete your checkout.
                        </p>
                      </div>
                      <div className="lg:max-w-[33rem] w-full pt-7.5 lg:pt-0">
                        {/* <Image
                          src={tab_content}
                          width={540}
                          height={361}
                          alt="bg"
                          style={{ width: "100%" }}
                          className="rounded-2.5xl"
                        /> */}
                        <iframe
                          className="border border-[#ba350a] rounded sm:w-[33rem] w-[19.5rem] sm:h-[20rem] h-[10.5rem]"
                          src={tab_content.frame_src}
                          allowFullScreen
                          title={tab_content.frame_title}
                        ></iframe>
                      </div>
                    </div>
                  </SlideUp>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Approach;
