import { motion } from "framer-motion";

import { footerLocations } from "@/data/footer";

export default function FooterLocations() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: 0.2,
      }}
      className="
        grid
        grid-cols-2
        gap-x-12
        gap-y-6
        lg:gap-x-16
      "
    >
      {footerLocations.map((location) => (
        <div key={location.city}>
          {/* City */}

          <h4
            className="
              text-sm
              font-semibold
              tracking-wide
              text-[#FFE433]
            "
          >
            {location.city}
          </h4>

          {/* Phone */}

          <a
            href={`tel:${location.phone.replace(/\s/g, "")}`}
            className="
              mt-1
              block
              text-sm
              font-bold
              text-white
              transition
              duration-300

              hover:text-[#FFE433]
            "
          >
            {location.phone}
          </a>
        </div>
      ))}
    </motion.div>
  );
}