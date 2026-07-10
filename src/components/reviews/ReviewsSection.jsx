import { motion } from "framer-motion";
import ReviewsSlider from "./ReviewsSlider";

export default function ReviewsSection() {
  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="mx-auto max-w-7xl px-6">
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
        >
          <ReviewsSlider />
        </motion.div>
      </div>
    </section>
  );
}