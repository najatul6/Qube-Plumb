import { motion } from "framer-motion";

import { footerLinks } from "@/data/footer";

export default function FooterLinks() {
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
        delay: 0.1,
      }}
      className="
        grid
        grid-cols-2
        gap-12
        lg:gap-20
      "
    >
      {footerLinks.map((group) => (
        <div key={group.title}>
          {/* Links */}
          <ul className="space-y-3">
            {group.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-yellow-400
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
}