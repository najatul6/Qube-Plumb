import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="max-w-xl">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: .3,
        }}
        className="font-black uppercase leading-none tracking-tight text-white drop-shadow-xl"
      >
        <span className="block text-4xl  md:text-6xl">
          Reliable
        </span>

        <span className="block text-4xl  md:text-6xl">
          Plumbers
        </span>

        <span className="block text-4xl  md:text-6xl">
          In Birmingham
        </span>
      </motion.h1>

      <motion.button
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: .55,
        }}
        className="mt-10 flex items-center gap-3 bg-[#ffe033] px-7 py-4 font-semibold transition hover:bg-yellow-300 cursor-pointer"
      >
        Contact us here

        <ArrowRight size={18} />
      </motion.button>

    </div>
  );
}