import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { areaCards } from "@/data/areas";
import AreaCard from "./AreaCard";
import CTASection from "./CTASection";

export default function AreasSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-360 px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl"
        >
          {/* Yellow Line */}
          <div className="flex gap-2">
            <div className="h-10 w-1 rounded-full bg-[#FFE433] " />

            <h2
              className="
              text-3xl
              font-black
              uppercase
              leading-tight
              tracking-tight
              text-[#2d3d5b]

            "
            >
              TOP RATED GAS AND PLUMBING EXPERTS
            </h2>
          </div>

          <p
            className="
              mt-4
              max-w-4xl
              text-lg
              leading-5
              text-slate-600
            "
          >
            We proudly provide plumbing, heating and gas services throughout
            Birmingham and the surrounding areas. Our experienced engineers are
            available for emergency callouts, boiler installations, repairs and
            general plumbing work. Select your local area below to learn more
            about our services.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
          }}
          className="
            mt-14

            grid

            gap-8

            md:grid-cols-2

            xl:grid-cols-4
          "
        >
          {areaCards.map((card) => (
            <AreaCard key={card.title} {...card} />
          ))}
        </motion.div>

        {/* View More */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.35,
          }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <button
            className="
              flex
              items-center
              gap-3

              bg-[#FFE433]

              px-8
              py-4

              font-semibold
              text-[#2d3d5b]

              transition

              hover:bg-yellow-300
              cursor-pointer
            "
          >
            View all locations
            <ArrowRight size={18} />
          </button>
        </motion.div>

        {/* Bottom CTA */}

        <CTASection />
      </div>
    </section>
  );
}
