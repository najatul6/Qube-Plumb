import { motion } from "framer-motion";

import {
  footerCopyright,
  footerPolicies,
} from "@/data/footer";

export default function FooterBottom() {
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
        delay: 0.3,
      }}
      className="
        mt-20

        border-t
        border-white/10

        pt-10
      "
    >
      {/* Copyright */}

      <p
        className="
          text-sm
          leading-5
          text-white/80
        "
      >
        {footerCopyright.copyright}
      </p>

      {/* Disclaimer */}

      <p
        className="
          mx-auto
          text-sm
          leading-5
          text-white/60
        "
      >
        {footerCopyright.disclaimer}
      </p>

      {/* Policy Links */}

      <div
        className="
          mt-8
          flex
          flex-wrap
          gap-x-8
          gap-y-3
        "
      >
        {footerPolicies.map((policy) => (
          <a
            key={policy.label}
            href={policy.href}
            className="
              text-sm
              text-white
              transition
              duration-300
              hover:text-[#FFE433]
            "
          >
            {policy.label}
          </a>
        ))}
      </div>
    </motion.div>
  );
}