import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import { footerBrand } from "@/data/footer";

export default function FooterBrand() {
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
      }}
    >
      {/* Address */}

      <h3 className="mt-4 text-2xl font-teko font-semibold text-white">
        Head office
      </h3>

      <div className="mt-2 space-y-0.5 text-sm text-white/90">
        {footerBrand.address.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      {/* Contact */}

      <div className="mt-8 space-y-4">
        <a
          href={footerBrand.map.href}
          className="group flex items-center gap-3 text-white transition hover:text-yellow-400"
        >
          <MapPin
            size={18}
            className="text-yellow-400"
          />

          <span className="font-semibold">
            {footerBrand.map.text}
          </span>
        </a>

        <a
          href={footerBrand.phone.href}
          className="group flex items-center gap-3 text-white transition hover:text-yellow-400"
        >
          <Phone
            size={18}
            className="text-yellow-400"
          />

          <span className="font-semibold">
            {footerBrand.phone.text}
          </span>
        </a>

        <a
          href={footerBrand.email.href}
          className="group flex items-center gap-3 break-all text-white transition hover:text-yellow-400"
        >
          <Mail
            size={18}
            className="text-yellow-400"
          />

          <span className="font-semibold">
            {footerBrand.email.text}
          </span>
        </a>
      </div>
    </motion.div>
  );
}