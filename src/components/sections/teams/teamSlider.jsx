"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

import SlideUp from "@/components/animations/slideUp";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import { teamData } from "@/lib/fackData/teamData";
import TeamCard from "./teamCard";
import Highlight from "@/components/ui/highlight";

const TeamSlider = () => {
  const pagination = {
    clickable: true,
    el: ".team-pagination",
    renderBullet: function (index, className) {
      return `<span class='${className} w-2 h-2 bg-muted rounded-full'></span>`;
    },
  };
  return (
    <section className="lg:py-5 py-5">
      <div className="max-w-[1350px] mx-auto px-[15px]">
        <SlideUp>
          <div className="flex flex-col items-center">
            {/* <Title
              size={"2xl"}
              className="max-w-[872px] pt-6 text-center text-sm text-[#fb4409]"
            >
              some of the content you get inside...
            </Title> */}
            <Title size={"4xl"} className="max-w-[872px] pt-6 text-center uppercase">
              <span className="text-[#fb4409] uppercase">
                Master Your Path:
              </span>{" "}
              Tailored Courses for Every Niche and Ambition!
            </Title>
          </div>
        </SlideUp>
        <div className="lg:pt-20 pt-10 relative">
          <Swiper
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={1000}
            spaceBetween={30}
            // slidesPerView={3}
            breakpoints={{
              100: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              997: {
                slidesPerView: 4,
              },
            }}
            slidesPerGroup={2}
            pagination={pagination}
            loop={true}
            effect={"fade"}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {teamData.map(({ id, name, position, src }) => {
              return (
                <SwiperSlide key={id}>
                  {" "}
                  <TeamCard
                    key={id}
                    id={id}
                    name={name}
                    position={position}
                    src={src}
                    bgColor={"bg-[rgba(0,31,63,0.35)]"}
                    link={"/team-details"}
                  />{" "}
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="team-pagination flex items-center gap-2 absolute -bottom-6 sm:-bottom-12 left-1/2 -translate-x-1/2 z-10 [&_.swiper-pagination-bullet-active]:bg-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default TeamSlider;
