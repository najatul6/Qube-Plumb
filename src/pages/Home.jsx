import AboutSection from "@/components/about/AboutSection";
import AreasSection from "@/components/areas/AreasSection";
import BoilerServicesSection from "@/components/boiler-services/BoilerServicesSection";
import BoilerSection from "@/components/boiler/BoilerSection";
import ContactBanner from "@/components/contact/ContactBanner";
import ContactSection from "@/components/contact/ContactSection";
import FireplaceSection from "@/components/fireplace/FireplaceSection";
import GasSafeSection from "@/components/gas-safe/GasSafeSection";
import Hero from "@/components/hero/Hero";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import TeamSection from "@/components/team/TeamSection";
import TrustBar from "@/components/trust/Trustbar";

const Home = () => {
  return (
    <div>
      <Hero />
      <TrustBar />
      <AboutSection />
      <ContactSection />
      <AreasSection />
      <ReviewsSection />
      <GasSafeSection />
      <div className="bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-6 bg-[#F7F7F7]">
          {/* contact banner */}
          <ContactBanner />
        </div>
      </div>
      <BoilerSection/>
      <BoilerServicesSection/>
      <FireplaceSection/>
      <TeamSection/>
    </div>
  );
};

export default Home;
