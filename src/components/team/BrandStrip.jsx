import { motion } from "framer-motion";

import { brands } from "@/data/team";

export default function BrandStrip() {
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        mt-16

        flex
        flex-wrap
        items-center
        justify-center

        gap-x-8
        gap-y-8

        lg:justify-between
      "
    >
      {brands.map((brand, index) => (
        <motion.a
          key={brand.name}
          href={brand.href}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.4,
            delay: index * 0.05,
          }}
          whileHover={{
            y: -3,
          }}
          className="
            flex
            items-center
            justify-center
          "
        >
          <img
            src={brand.image}
            alt={brand.name}
            className="
              h-10
              w-auto
              object-contain
              opacity-70
              grayscale
              transition-all
              duration-300
              hover:opacity-100
              hover:grayscale-0
              md:h-12
              lg:h-14
            "
          />
        </motion.a>
      ))}
    </motion.div>
  );
}