import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FireplaceCard({
  title,
  image,
  href,
}) {
  return (
    <motion.a
      href={href}
      initial="rest"
      whileHover="hover"
      className="
        group
        block
        overflow-hidden
        rounded-md
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Image */}

      <div className="relative aspect-[16/9] overflow-hidden">
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
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/5 transition duration-300 group-hover:bg-black/20" />
      </div>

      {/* Content */}

      <div className="border-b-2 border-[#31466b] bg-white p-6">
        <h3
          className="
            min-h-14
            text-xl
            font-semibold
            leading-tight
            text-[#2d3d5b]
            md:text-2xl
          "
        >
          {title}
        </h3>

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
          className="
            mt-5
            flex
            items-center
            gap-3
            text-lg
            font-semibold
            text-[#2d3d5b]
          "
        >
          <span>Find out more</span>

          <ArrowRight
            size={18}
            strokeWidth={2.5}
          />
        </motion.div>
      </div>
    </motion.a>
  );
}