import React from "react";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import { pricingData } from "@/lib/fackData/pricingData";
import SlideUp from "@/components/animations/slideUp";
import PriceCardOne from "./pricecardOne";

const PriceOne = () => {
  return (
    <section className="lg:py-15 lg:pt-[8rem] py-9">
      <div className="max-w-[1350px] mx-auto px-[15px]">
        <div className="grid 2xl:grid-cols-[533px_1fr] lg:grid-cols-[400px_1fr] grid-cols-1 justify-between items-start gap-7.5">
          <div
            className={`text-center sm:text-start pt-4 lg:sticky top-[var(--header-height)] transition-all duration-300`}
          >
            {/* <Button
              variant="secondary"
              className="uppercase tracking-wider rounded-[8px] bg-[#121213]"
            >
              BETA LAUNCH DISCOUNT – SAVE 40% WITH THE YEARLY PLAN
            </Button> */}
            <Title
              size={"2xl"}
              className="pt-0 max-w-full uppercase tracking-wider text-[#fb4409]"
            >
              BETA LAUNCH DISCOUNT – SAVE 40% WITH THE YEARLY PLAN
            </Title>
            <Title
              size={"4xl"}
              className="pt-6 max-w-full uppercase tracking-wider"
            >
              LOCK IN ACCESS AT A DISCOUNTED PRICE BEFORE OFFICIAL LAUNCH
            </Title>
            <p className="pt-[26px] text-foreground ">
              Join as a King with the yearly plan, unlocking instant access to
              12 months of rewards and saving 40% compared to the monthly plan.
              Or start as an Apprentice with the monthly plan and unlock content
              each month.
            </p>
          </div>
          <div>
            {pricingData.map(
              ({
                additionalAdds,
                id,
                info,
                isTag,
                link,
                plan_name,
                price,
                services,
              }) => (
                <PriceCardOne
                  key={id}
                  id={id}
                  additionalAdds={additionalAdds}
                  info={info}
                  isTag={isTag}
                  link={link}
                  plan_name={plan_name}
                  price={price}
                  services={services}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceOne;
