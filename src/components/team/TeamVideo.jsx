import { motion } from "framer-motion";

export default function TeamVideo({
  youtube,
  title,
}) {
  return (
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
        overflow-hidden
        rounded-md
        bg-white
        shadow-sm
      "
    >
      <div className="relative aspect-video">
        <iframe
          src={youtube}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="
            absolute
            inset-0
            h-full
            w-full
            border-0
          "
        />
      </div>
    </motion.div>
  );
}