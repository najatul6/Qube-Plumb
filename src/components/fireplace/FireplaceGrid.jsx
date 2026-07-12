import { motion } from "framer-motion";

import { fireplaceCards } from "@/data/fireplace";
import FireplaceCard from "./FireplaceCard";

export default function FireplaceGrid() {
  return (
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
      className="
        mt-8

        grid
        gap-6

        sm:grid-cols-2

        xl:grid-cols-4
      "
    >
      {fireplaceCards.map((card, index) => (
        <motion.div
          key={card.title}
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
            duration: 0.45,
            delay: index * 0.08,
          }}
        >
          <FireplaceCard {...card} />
        </motion.div>
      ))}
    </motion.div>
  );
}