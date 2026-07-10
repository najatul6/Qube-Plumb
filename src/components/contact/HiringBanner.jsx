import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HiringBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-8 overflow-hidden rounded-md bg-[#444a58]"
    >
      <div className="flex flex-col items-center gap-6 p-6 lg:flex-row lg:justify-between lg:px-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <h3 className="text-center text-2xl font-bold text-white lg:text-left">
            WE ARE HIRING ENGINEERS
          </h3>

          <span className="hidden h-8 w-px bg-white/20 lg:block" />

          <p className="text-center text-xl font-semibold text-white lg:text-left">
            fantastic opportunities
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 lg:flex-row">
          <h4 className="text-2xl font-bold text-white">
            Call us on 0800 587 3136
          </h4>

          <button className="flex items-center gap-3 bg-[#ffe433] px-7 py-4 font-semibold text-[#2d3d5b] transition hover:bg-yellow-300">
            Find out more

            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}