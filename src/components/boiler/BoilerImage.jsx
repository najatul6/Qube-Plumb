import { motion } from "framer-motion";

export default function BoilerImage({
  image,
  title,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -60,
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
      className="overflow-hidden rounded-md"
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

          min-h-[320px]

          lg:min-h-[500px]
        "
      />
    </motion.div>
  );
}