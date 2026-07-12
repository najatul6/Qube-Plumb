import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const overlayColors = {
  dark: "bg-[#3f4655]/90",
  red: "bg-[#c94949]/88",
  yellow: "bg-[#ffe433]/88",
};

const textColors = {
  dark: "text-white",
  red: "text-white",
  yellow: "text-[#2d3d5b]",
};

export default function PromoCard({
  title,
  description,
  image,
  href,
  color = "dark",
}) {
  return (
    <motion.a
      href={href}
      initial="rest"
      whileHover="hover"
      className="group relative block overflow-hidden rounded-md"
    >
      {/* Background Image */}

      <motion.img
        variants={{
          rest: {
            scale: 1,
          },
          hover: {
            scale: 1.08,
          },
        }}
        transition={{
          duration: 0.45,
        }}
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Color Overlay */}

      <div
        className={`absolute inset-0 ${overlayColors[color]} transition-all duration-300`}
      />

      {/* Stripe Pattern */}

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg,transparent,transparent 4px,rgba(255,255,255,.45) 4px,rgba(255,255,255,.45) 8px)",
        }}
      />

      {/* Content */}

      <div className="relative flex min-h-60.5 flex-col justify-between p-8">
        <div>
          <h3
            className={`text-2xl font-bold leading-tight ${textColors[color]}`}
          >
            {title}
          </h3>

          <p
            className={`mt-5 text-md leading-5 ${textColors[color]}`}
          >
            {description}
          </p>
        </div>

        <motion.div
          variants={{
            rest: {
              x: 0,
            },
            hover: {
              x: 8,
            },
          }}
          transition={{
            duration: 0.25,
          }}
          className={`mt-8 flex items-center gap-3 font-semibold ${textColors[color]}`}
        >
          Find out more

          <ArrowRight
            size={18}
            strokeWidth={2.5}
          />
        </motion.div>
      </div>
    </motion.a>
  );
}