import { motion } from "framer-motion";

import { promoCards } from "@/data/gasSafe";
import PromoCard from "./PromoCard";

export default function PromoGrid() {
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
        mt-14
        grid
        gap-6

        md:grid-cols-2

        xl:grid-cols-3
      "
    >
      {promoCards.map((card) => (
        <PromoCard
          key={card.title}
          {...card}
        />
      ))}
    </motion.div>
  );
}