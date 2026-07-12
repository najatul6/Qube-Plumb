import { motion } from "framer-motion";

import { extraPromoCards } from "@/data/extraPromo";
import PromoCard from "../gas-safe/PromoCard";

export default function ExtraPromoGrid() {
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
      }}
      transition={{
        duration: .6,
      }}
      className="
        mt-10

        grid

        gap-6

        lg:grid-cols-2
      "
    >
      {extraPromoCards.map((card) => (
        <PromoCard
          key={card.title}
          {...card}
        />
      ))}
    </motion.div>
  );
}