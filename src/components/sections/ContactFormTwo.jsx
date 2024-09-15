import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import Input from "../ui/input";
import Textarea from "../ui/textarea";
import Title from "../ui/title";

const ContactFormTwo = () => {
  return (
    <section className="container lg:mt-15 mt-9">
      <div
        className={cn(
          `max-w-[1320px] mx-auto lg:pt-20 pt-12 lg:pb-12.5 pb-10 rounded-[15px] bg-[#121213] drop-shadow-3xl -mb-28 lg:px-12.5 px-6 relative z-[1]`
        )}
      >
        <div className="flex lg:flex-row flex-col justify-between items-center gap-12.5 ">
          <div className="lg:w-[40%] w-full lg:pb-11">
            <div className="w-full flex flex-row justify-center sm:justify-start">
              <div
                className={`border border-[#fb4409] w-[100px] h-[80px] rounded-lg flex justify-center items-center drop-shadow-3xl bg-[#121213] mb-3`}
              >
                <Image
                  src={"/images/shapes/email.png"}
                  width={45}
                  height={50}
                  alt="map arrwo"
                />
              </div>
            </div>
            <Title size={"4xl"} className={`uppercase text-center sm:text-start md:leading-[140%]`}>
              Get in Touch with Us
            </Title>
            <p className={`text-center sm:text-start font-semibold mt-4 max-w-[449px]`}>
              Got questions or need help? Fill out the form below, and our team
              will get back to you shortly. We&apos;re here to assist you!
            </p>
          </div>
          <div className="lg:w-[54%] w-full">
            <form>
              <div className="flex sm:flex-row flex-col items-center gap-4 mb-3">
                <div className="w-full">
                  <Input
                    type={"text"}
                    placeholder={"Your Name"}
                    className={`w-full border-2 border-[#C0C0C0]`}
                  />
                </div>
                <div className="w-full">
                  <Input
                    type={"email"}
                    placeholder={"Email"}
                    className={`w-full border-2 border-[#C0C0C0]`}
                  />
                </div>
              </div>
              <div className="flex sm:flex-row flex-col items-center gap-4 mb-3">
                <div className="w-full">
                  <Input
                    type={"text"}
                    placeholder={"Mobile Number"}
                    className={`w-full border-2 border-[#C0C0C0]`}
                  />
                </div>
                {/* <div className="w-full">
                  <Select>
                    <SelectTrigger
                      className={`border-2 border-[#C0C0C0] h-12.5 py-[18px] px-[25px] text-lg`}
                    >
                      <SelectValue placeholder="Select a Service" />
                    </SelectTrigger>
                    <SelectContent className={` bg-white text-black`}>
                      <SelectItem
                        value="Search Engine Optimization"
                        className="text-lg focus:bg-primary focus:text-white pl-5"
                      >
                        Search Engine Optimization
                      </SelectItem>
                      <SelectItem
                        value="Social Media Marketing"
                        className="text-lg focus:bg-primary focus:text-white pl-5"
                      >
                        Social Media Marketing
                      </SelectItem>
                      <SelectItem
                        value="Content Writing"
                        className="text-lg focus:bg-primary focus:text-white pl-5"
                      >
                        Content Writing
                      </SelectItem>
                      <SelectItem
                        value="Affiliate Marketing"
                        className="text-lg focus:bg-primary focus:text-white pl-5"
                      >
                        Affiliate Marketing
                      </SelectItem>
                      <SelectItem
                        value="Email Marketing"
                        className="text-lg focus:bg-primary focus:text-white pl-5"
                      >
                        Email Marketing
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div> */}
              </div>
              <div className="mb-3">
                <Textarea name={"massage"} placeholder={"Massage"} />
              </div>
              <div className="flex justify-center sm:justify-end w-full mt-8">
                <Button className="uppercase">Send request</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormTwo;
