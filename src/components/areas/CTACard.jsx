import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTACard({
  title,
  description,
  image,
  href,
  dark = false,
}) {
  return (
    <motion.a
      href={href}
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="group relative block overflow-hidden rounded-md"
    >
      {/* Background */}

      <motion.img
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.08 },
        }}
        transition={{
          duration: 0.45,
        }}
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}

      <div
        className={`absolute inset-0 transition-all duration-300 ${
          dark
            ? "bg-[#394150]/88 group-hover:bg-[#394150]/80"
            : "bg-[#ffe433]/88 group-hover:bg-[#ffe433]/80"
        }`}
      />

      {/* Pattern */}

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg,transparent,transparent 4px,rgba(255,255,255,.4) 4px,rgba(255,255,255,.4) 8px)",
        }}
      />

      {/* Content */}

      <div className="relative flex min-h-[260px] flex-col justify-between p-8">
        <div>
          <h3
            className={`text-3xl font-bold ${
              dark ? "text-white" : "text-[#2d3d5b]"
            }`}
          >
            {title}
          </h3>

          <p
            className={`mt-6 max-w-md text-lg leading-9 ${
              dark ? "text-white/95" : "text-[#2d3d5b]"
            }`}
          >
            {description}
          </p>
        </div>

        <motion.div
          variants={{
            rest: { x: 0 },
            hover: { x: 8 },
          }}
          transition={{
            duration: 0.25,
          }}
          className={`flex items-center gap-3 font-semibold ${
            dark ? "text-white" : "text-[#2d3d5b]"
          }`}
        >
          Find out more

          <ArrowRight size={18} />
        </motion.div>
      </div>
    </motion.a>
  );
}