"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import hubSpot3 from "../../../../public/images/marquee-imgs/IMG_1632IMG_1631.webp";
import shopify3 from "../../../../public/images/marquee-imgs/65c425bd9305e0c7c8caf958_P2P-PNP-1-1.webp";
import zapier3 from "../../../../public/images/marquee-imgs/paul-sfsr-folder.png";
import jira3 from "../../../../public/images/marquee-imgs/jordanwelch-plugnplay-p-1080.png";
import slack3 from "../../../../public/images/marquee-imgs/Community-Card-min.webp";
import analytics3 from "../../../../public/images/marquee-imgs/e4567890pmngbfgdfdsasd-min.webp";
import notion3 from "../../../../public/images/marquee-imgs/Iman-mastermind.webp";
import paypal3 from "../../../../public/images/marquee-imgs/2-phones_1.webp";
import hotjar3 from "../../../../public/images/marquee-imgs/Dashboard.png";
import mailchimp3 from "../../../../public/images/marquee-imgs/Programs Page.png";
import stripe3 from "../../../../public/images/marquee-imgs/Art of the Deal.png";
import googledrive3 from "../../../../public/images/marquee-imgs/Boxing Fundamentals.png";

import banner_3 from "../../../../public/images/marquee-imgs/Detox101.png";
import banner_4 from "../../../../public/images/marquee-imgs/Digital Don.png";
import banner_5 from "../../../../public/images/marquee-imgs/Digital launchpad.png";
import banner_6 from "../../../../public/images/marquee-imgs/Million Dollar Agency.png";
import banner_7 from "../../../../public/images/marquee-imgs/No Code Saas.png";
import banner_8 from "../../../../public/images/marquee-imgs/P2P.png";
import banner_9 from "../../../../public/images/marquee-imgs/Pathway To Profits.png";
import banner_10 from "../../../../public/images/marquee-imgs/Sfsr.png";
import banner_11 from "../../../../public/images/marquee-imgs/The Perfect Fit.png";
import banner_12 from "../../../../public/images/marquee-imgs/The Winning Store.png";
import banner_13 from "../../../../public/images/marquee-imgs/Web Design Fast Track.png";

const softwareList = [
  {
    id: 1,
    logo: hubSpot3,
    link: "",
  },
  {
    id: 2,
    logo: shopify3,
    link: "",
  },
  {
    id: 3,
    logo: zapier3,
    link: "",
  },
  {
    id: 4,
    logo: jira3,
    link: "",
  },
  {
    id: 5,
    logo: slack3,
    link: "",
  },
  {
    id: 6,
    logo: analytics3,
    link: "",
  },
  {
    id: 7,
    logo: notion3,
    link: "",
  },
  {
    id: 8,
    logo: paypal3,
    link: "",
  },
  {
    id: 9,
    logo: hotjar3,
    link: "",
  },
  {
    id: 10,
    logo: mailchimp3,
    link: "",
  },
  {
    id: 11,
    logo: stripe3,
    link: "",
  },
  {
    id: 12,
    logo: googledrive3,
    link: "",
  },
  {
    id: 13,
    logo: hubSpot3,
    link: "",
  },
  {
    id: 14,
    logo: shopify3,
    link: "",
  },
  {
    id: 15,
    logo: zapier3,
    link: "",
  },
  {
    id: 16,
    logo: jira3,
    link: "",
  },
  {
    id: 17,
    logo: slack3,
    link: "",
  },
  {
    id: 18,
    logo: hotjar3,
    link: "",
  },
  {
    id: 19,
    logo: mailchimp3,
    link: "",
  },
  {
    id: 20,
    logo: stripe3,
    link: "",
  },
  {
    id: 21,
    logo: banner_3,
    link: "",
  },
  {
    id: 22,
    logo: banner_4,
    link: "",
  },
  {
    id: 23,
    logo: banner_5,
    link: "",
  },
  {
    id: 24,
    logo: banner_6,
    link: "",
  },
  {
    id: 25,
    logo: banner_7,
    link: "",
  },
  {
    id: 26,
    logo: banner_8,
    link: "",
  },
  {
    id: 27,
    logo: banner_9,
    link: "",
  },
  {
    id: 28,
    logo: banner_10,
    link: "",
  },
  {
    id: 29,
    logo: banner_11,
    link: "",
  },
  {
    id: 30,
    logo: banner_12,
    link: "",
  },
  {
    id: 31,
    logo: banner_13,
    link: "",
  },
];
const LogoSlide = () => {
  return (
    <div className="flex flex-col gap-y-1">
      <Marquee speed={35} className="py-3">
        {softwareList.map(({ id, link, logo }) => (
          <Link
            href={""}
            key={id}
            className="h-[58px] min-w-[140px] rounded-[10px] bg-transparent shadow-4xl flex justify-center items-center mr-5"
          >
            <Image src={logo} alt="logo" className="cover" width={100} height={100} />
          </Link>
        ))}
      </Marquee>
      <Marquee direction="right" className="py-3" speed={35}>
        {softwareList.map(({ id, link, logo }) => (
          <Link
            href={""}
            key={id}
            className="h-[58px] min-w-[140px] rounded-[10px] bg-transparent shadow-4xl flex justify-center items-center mr-5"
          >
            <Image src={logo} alt="logo" className="cover" width={100} height={100} />
          </Link>
        ))}
      </Marquee>
      <Marquee speed={30} className="py-3">
        {softwareList.map(({ id, link, logo }) => (
          <Link
            href={""}
            key={id}
            className="h-[58px] min-w-[140px] rounded-[10px] bg-transparent shadow-4xl flex justify-center items-center mr-5"
          >
            <Image src={logo} alt="logo" className="cover" width={100} height={100} />
          </Link>
        ))}
      </Marquee>
      <Marquee direction="right" className="py-3" speed={30}>
        {softwareList.map(({ id, link, logo }) => (
          <Link
            href={""}
            key={id}
            className="h-[58px] min-w-[140px] rounded-[10px] bg-transparent shadow-4xl flex justify-center items-center mr-5"
          >
            <Image src={logo} alt="logo" className="cover" width={100} height={100} />
          </Link>
        ))}
      </Marquee>
      <Marquee speed={25} className="py-3">
        {softwareList.map(({ id, link, logo }) => (
          <Link
            href={""}
            key={id}
            className="h-[58px] min-w-[140px] rounded-[10px] bg-transparent shadow-4xl flex justify-center items-center mr-5"
          >
            <Image src={logo} alt="logo" className="cover" width={100} height={100} />
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoSlide;
