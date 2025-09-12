import Header from "./components/Header";
import CoupleSection from "./home/components/CoupleSection";
import DonateSection from "./home/components/DonateSection";
import EventSection from "./home/components/EventSection";
import Footer from "./home/components/Footer";
import GallerySection from "./home/components/GallerySection";
import HeroSection from "./home/components/HeroSection";
import InvitationSection from "./home/components/InvitationSection";
import Snowfall from "./home/components/Snowfall";
import StorySection from "./home/components/StorySection";
import WishesSection from "./home/components/WishesSection";

export default function Home() {
  return (
    <>
      <Snowfall />
      <Header />
      <main className="font-comfortaa">
        {/* <HeaderSection /> */}
        <HeroSection />
        <InvitationSection />
        <CoupleSection />
        <StorySection />
        <EventSection />
        <GallerySection />
        <WishesSection />
        <DonateSection />
      </main>
      <Footer />
    </>
  );
}
