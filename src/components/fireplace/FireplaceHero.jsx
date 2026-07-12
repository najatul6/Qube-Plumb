import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FireplaceHero({
  title,
  description,
  button,
  href,
  image,
}) {
  return (
    <div
      className="
        overflow-hidden
        rounded-md
        bg-white
        shadow-sm

        lg:grid
        lg:grid-cols-2
      "
    >
      {/* Left Content */}

      <motion.div
        initial={{
          opacity: 0,
          x: -40,
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
        className="
          flex
          items-center

          p-8

          md:p-12

          xl:p-16
        "
      >
        <div>
          {/* Heading */}

          <h2
            className="
              font-['Teko']
              text-4xl
              font-semibold
              uppercase
              leading-none
              tracking-tight
              text-[#2d3d5b]
            "
          >
            {title}
          </h2>

          {/* Description */}

          <p
            className="
              mt-6
              text-lg
              leading-5
              text-slate-700
            "
          >
            {description[0]}

            <br />
            <br />

            {description[1]}{" "}

            <a
              href="/gas-fireplaces"
              className="
                font-semibold
                underline
                underline-offset-4
                transition
                hover:text-yellow-500
              "
            >
              {description[2]}
            </a>{" "}

            {description[3]}{" "}

            <a
              href="/wood-burners"
              className="
                font-semibold
                underline
                underline-offset-4
                transition
                hover:text-yellow-500
              "
            >
              {description[4]}
            </a>{" "}

            {description[5]}
          </p>

          {/* Button */}

          <motion.a
            href={href}
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

      {/* Right Image */}

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
        className="overflow-hidden"
      >
        <motion.img
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.45,
          }}
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
            min-h-80
            lg:min-h-140
          "
        />
      </motion.div>
    </div>
  );
}