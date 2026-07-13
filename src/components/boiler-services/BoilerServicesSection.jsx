import { motion } from "framer-motion";

import { boilerServicesContent } from "@/data/boilerServices";

import BoilerServicesGrid from "./BoilerServicesGrid";
import ExtraPromoGrid from "./ExtraPromoGrid";

export default function BoilerServicesSection() {
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
          {/* Yellow Accent */}

          <div className="mb-6 flex items-start gap-4">
            <div className="h-10 w-1 bg-[#FFE433]" />

            <h2
              className="
                font-['Teko']
                text-5xl
                font-semibold
                uppercase
                leading-none
                tracking-tight
                text-[#2d3d5b]
              "
            >
              {boilerServicesContent.title}
            </h2>
          </div>

          {/* Description */}

          <p
            className="
              text-lg
              leading-5
              text-slate-700
              max-w-3xl
            "
          >
            Most homes in the UK rely on their boiler daily to provide hot water
            and central heating. Employers need heating systems to ensure
            employees remain productive, comfortable, and focused. When your
            boiler fails, don't delay replacing it, as repairs will only become
            more expensive. Contact our team to learn more about{" "}
            <strong>boiler installation</strong>,{" "}
            <strong>boiler breakdowns</strong>, and repairs that are available
            to you. We guarantee an efficient service with minimal disruption to
            your home or business. If you need a new boiler in the West
            Midlands, trust 2nd City Gas, Plumbing & Heating to provide an
            efficient and cost-effective service.
          </p>
        </motion.div>

        {/* Cards */}

        <BoilerServicesGrid />
        <ExtraPromoGrid />
      </div>
    </section>
  );
}
