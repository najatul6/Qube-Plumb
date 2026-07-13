import { motion } from "framer-motion";

import { gasSafeCards } from "@/data/gasSafe";

import GasSafeCard from "./GasSafeCard";
import PromoGrid from "./PromoGrid";

export default function GasSafeSection() {
  return (
    <section className="bg-[#f7f7f7] py-24">
      <div className="mx-auto max-w-360 px-6">
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="max-w-5xl"
        >
          <div className="flex gap-2">
            <div className="mb-6 h-8 w-1 rounded-full bg-[#FFE433]" />

            <h2
              className="
              font-['Teko']
              text-4xl
              font-semibold
              uppercase
              leading-none
              tracking-tight
              text-[#2d3d5b]
            "
            >
              GAS SAFE REGISTERED HEATING ENGINEERS
            </h2>
          </div>

          <p
            className="
              mt-5
              max-w-4xl
              text-lg
              leading-6
              text-slate-600
            "
          >
            If you're looking for a Gas Safe registered engineer, you've come to
            the right place. We provide professional gas installation,
            servicing, maintenance and emergency repair services across
            Birmingham and the surrounding areas. Browse some of the areas we
            cover below.
          </p>
        </motion.div>

        {/* Location Cards */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
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
          {gasSafeCards.map((card) => (
            <GasSafeCard key={card.title} {...card} />
          ))}
        </motion.div>

        {/* Bottom Promotional Cards */}

        <PromoGrid />
      </div>
    </section>
  );
}
