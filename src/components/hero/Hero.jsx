import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import QuoteCard from "./QuoteCard";

export default function Hero() {
  return (
    <section
      className="relative min-h-162.5 overflow-hidden"
      style={{
        backgroundImage: `url('https://2ndcitygasplumbingandheating.co.uk/imager/images/737/Homepage-banner-1_76efd509985fb9de4285726b480fe0c5.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/15" />

      <div className="relative mx-auto flex min-h-162.5 max-w-360 items-center px-6">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="w-full lg:w-1/2"
        >
          <HeroContent />
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="hidden justify-end lg:flex lg:w-1/2"
        >
          <QuoteCard />
        </motion.div>
      </div>
    </section>
  );
}
