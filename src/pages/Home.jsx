import AboutSection from "@/components/about/AboutSection";
import AreasSection from "@/components/areas/AreasSection";
import ContactSection from "@/components/contact/ContactSection";
import GasSafeSection from "@/components/gas-safe/GasSafeSection";
import Hero from "@/components/hero/Hero";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import TrustBar from "@/components/trust/Trustbar";

const Home = () => {
    return (
        <div>
            <Hero/>
            <TrustBar/>
            <AboutSection/>
            <ContactSection/>
            <AreasSection/>
            <ReviewsSection/>
            <GasSafeSection/>
        </div>
    );
};

export default Home;