import { motion } from "framer-motion";
import { ctaCards } from "@/data/areas";
import CTACard from "./CTACard";

export default function CTASection() {
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
        duration: 0.6,
      }}
      className="
        mt-14
        grid
        gap-6

        lg:grid-cols-2
      "
    >
      {ctaCards.map((card) => (
        <CTACard
          key={card.title}
          {...card}
        />
      ))}
    </motion.div>
  );
}