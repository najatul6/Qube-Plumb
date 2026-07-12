import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BoilerContent({
  title,
  description,
  highlight,
  button,
  href,
}) {
  const parts = description.split(highlight);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
      }}
      className="flex h-full flex-col justify-center"
    >
      {/* Heading */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.15,
        }}
        className="
          font-['Teko']
          text-5xl
          font-semibold
          uppercase
          leading-none
          tracking-tight
          text-[#2d3d5b]
        "
      >
        {title}
      </motion.h2>

      {/* Description */}

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.25,
        }}
        className="
          mt-8
          text-lg
          leading-5
          text-slate-700
        "
      >
        {parts[0]}

        <a
          href="/"
          className="
            font-semibold
            underline
            underline-offset-4
            transition
            hover:text-yellow-500
          "
        >
          {highlight}
        </a>

        {parts[1]}
      </motion.p>

      {/* Button */}

      <motion.a
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.4,
        }}
        whileHover="hover"
        href={href}
        className="
          group
          mt-10
          inline-flex
          w-fit
          items-center
          gap-3
          bg-[#FFE433]
          px-8
          py-4
          font-semibold
          text-[#2d3d5b]
          transition
          hover:bg-yellow-300
        "
      >
        <span>{button}</span>

        <motion.div
          variants={{
            hover: {
              x: 6,
            },
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <ArrowRight
            size={18}
            strokeWidth={2.5}
          />
        </motion.div>
      </motion.a>
    </motion.div>
  );
}