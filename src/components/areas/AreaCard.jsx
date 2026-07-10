import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AreaCard({
  title,
  image,
  href,
}) {
  return (
    <motion.a
      href={href}
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="
        group
        overflow-hidden
        rounded-md
        bg-white
        shadow-md
        transition-shadow
        hover:shadow-xl
      "
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        <motion.img
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.08 },
          }}
          transition={{
            duration: 0.4,
          }}
          src={image}
          alt={title}
          className="
            h-52
            w-full
            object-cover
          "
        />

        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors" />
      </div>

      {/* Content */}

      <div className="border-b-2 border-[#2d3d5b] p-6">

        <h3
          className="
            text-xl
            font-bold
            text-[#2d3d5b]
          "
        >
          {title}
        </h3>

        <motion.div
          variants={{
            rest: { x: 0 },
            hover: { x: 8 },
          }}
          transition={{
            duration: .25,
          }}
          className="
            mt-5
            flex
            items-center
            gap-3
            font-semibold
            text-[#2d3d5b]
          "
        >
          Find out more

          <ArrowRight size={18} />
        </motion.div>

      </div>
    </motion.a>
  );
}