import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceItem({ title, href, last }) {
  return (
    <motion.a
      href={href}
      whileHover="hover"
      initial="rest"
      animate="rest"
      className={`
        group
        flex
        items-center
        justify-between
        py-7

        ${!last ? "border-b border-black/10" : ""}
      `}
    >
      <motion.h3
        variants={{
          rest: { x: 0 },
          hover: { x: 8 },
        }}
        transition={{ duration: .25 }}
        className="
          text-[22px]
          font-semibold
          text-[#2d3d5b]
        "
      >
        {title}
      </motion.h3>

      <motion.div
        variants={{
          rest: { x: 0 },
          hover: { x: 8 },
        }}
        transition={{ duration: .25 }}
      >
        <ArrowRight
          size={24}
          className="text-[#2d3d5b]"
        />
      </motion.div>
    </motion.a>
  );
}