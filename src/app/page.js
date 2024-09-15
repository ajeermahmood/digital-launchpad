import Approach from "@/components/sections/approach";
import ContactFormTwo from "@/components/sections/ContactFormTwo";
import Dashboard from "@/components/sections/dashboard";
import FaqTwo from "@/components/sections/faqs/faqTwo";
import FooterFour from "@/components/sections/footers/footerFour";
import HeaderOne from "@/components/sections/headers/headerOne";
import HeroTwo from "@/components/sections/heroes/heroTwo";
import PriceOne from "@/components/sections/pricing/priceOne";
import ProvideTwo from "@/components/sections/provides/provideTwo";
import TeamSlider from "@/components/sections/teams/teamSlider";

export const metadata = {
  title: "Digital Launchpad",
  description: "",
};

const Home = () => {
  return (
    <main>
      <HeaderOne />
      <HeroTwo />
      {/* <ServiceTwo/> */}
      <Approach />
      <TeamSlider />
      <ProvideTwo />
      <Dashboard />
      <PriceOne />
      <FaqTwo />
      {/* <StoryTwo />
      <Dashboard />
      <ProvideOne />
      <Strategy/>
      <TestimonialOne/>
      <Solutions/>
      <PriceTwo />
      <FaqOne />
      <BlogOne/>
      <SubscribeTwo/> */}
      <ContactFormTwo />
      <FooterFour />
    </main>
  );
};

export default Home;
