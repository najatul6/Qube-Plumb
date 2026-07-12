import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TeamContent({
  title,
  paragraphs,
  button,
  href,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
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
        duration: 0.6,
      }}
      className="flex h-full items-center"
    >
      <div>
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
            delay: 0.1,
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

        {/* Paragraphs */}

        <div className="mt-8 space-y-6">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
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
                delay: 0.2 + index * 0.1,
              }}
              className="
                text-lg
                leading-5
                text-slate-700
              "
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Button */}

        <motion.a
          href={href}
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
            delay: 0.5,
          }}
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            group
            mt-10
            inline-flex
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
            className="flex items-center"
            whileHover={{
              x: 6,
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
      </div>
    </motion.div>
  );
}