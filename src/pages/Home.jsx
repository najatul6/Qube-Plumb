import AboutSection from "@/components/about/AboutSection";
import AreasSection from "@/components/areas/AreasSection";
import ContactSection from "@/components/contact/ContactSection";
import Hero from "@/components/hero/Hero";
import TrustBar from "@/components/trust/Trustbar";

const Home = () => {
    return (
        <div>
            <Hero/>
            <TrustBar/>
            <AboutSection/>
            <ContactSection/>
            <AreasSection/>
        </div>
    );
};

export default Home;