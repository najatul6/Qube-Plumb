import { motion } from "framer-motion";
import { Globe } from "lucide-react";

import { footerSocial } from "@/data/footer";

export default function FooterSocial() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: 0.2,
      }}
      className="mt-10 flex justify-center lg:justify-start"
    >
      {footerSocial.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-full

            border
            border-white/20

            text-white

            transition-all
            duration-300

            hover:border-[#FFE433]
            hover:bg-[#FFE433]
            hover:text-[#2d3d5b]
            hover:-translate-y-1
          "
        >
          <Globe size={20} />
        </a>
      ))}
    </motion.div>
  );
}
