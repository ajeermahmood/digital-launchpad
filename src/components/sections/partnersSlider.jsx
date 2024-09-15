"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { cn } from "@/lib/utils";
import Title from "../ui/title";
import SlotCounter from "react-slot-counter";

const PartnersSlider = ({ className, data }) => {
  return (
    <div
      className={cn(
        `flex flex-row justify-center bg-background lg:px-25 sm:px-14 px-10 lg:py-9 py-5 lg:rounded-[42px] rounded-3xl ${className}`
      )}
    >
      <Image
        src={"/images/ACC_EC_LP_01-desktop-v1-upd.svg"}
        width={200}
        height={200}
        className={``}
      />
    </div>
  );
};

export default PartnersSlider;
