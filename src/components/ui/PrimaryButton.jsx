import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function PrimaryButton({
  children,
  to = "/",
  className = "",
}) {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <Link
        to={to}
        className={`
          inline-flex
          items-center
          gap-3
          bg-[#3d4350]
          px-8
          py-4
          font-semibold
          text-white
          transition-colors
          duration-300
          hover:bg-[#2d3340]
          ${className}
        `}
      >
        <motion.span
          variants={{
            rest: { x: 0 },
            hover: { x: 4 },
          }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>

        <motion.div
          variants={{
            rest: { x: 0 },
            hover: { x: 6 },
          }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight size={18} />
        </motion.div>
      </Link>
    </motion.div>
  );
}