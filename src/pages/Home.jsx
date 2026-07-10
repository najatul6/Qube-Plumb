import AboutSection from "@/components/about/AboutSection";
import Hero from "@/components/hero/Hero";
import TrustBar from "@/components/trust/Trustbar";

const Home = () => {
    return (
        <div>
            <Hero/>
            <TrustBar/>
            <AboutSection/>
        </div>
    );
};

export default Home;