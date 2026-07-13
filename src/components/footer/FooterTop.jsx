import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  footerBrand,
  footerLinks,
  footerLocations,
} from "@/data/footer";

import logo from "@/assets/logo.webp";

export default function FooterTop() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        grid
        gap-16

        lg:grid-cols-[320px_160px_160px_1fr]
      "
    >
      {/* ================= BRAND ================= */}

      <div>
        <a href="/">
          <img
            src={logo}
            alt="2nd City"
            className="w-56"
          />
        </a>

        <h3 className="mt-8 font-['Teko'] text-5xl text-white">
          Head office
        </h3>

        <div className="mt-2 space-y-1 text-[17px] leading-8 text-white">
          {footerBrand.address.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          <a
            href={footerBrand.map.href}
            className="flex items-center gap-3 text-white transition hover:text-[#FFE433]"
          >
            <MapPin
              size={18}
              className="text-[#FFE433]"
            />

            <span className="font-semibold">
              {footerBrand.map.text}
            </span>
          </a>

          <a
            href={footerBrand.phone.href}
            className="flex items-center gap-3 text-white transition hover:text-[#FFE433]"
          >
            <Phone
              size={18}
              className="text-[#FFE433]"
            />

            <span className="text-2xl font-bold">
              {footerBrand.phone.text}
            </span>
          </a>

          <a
            href={footerBrand.email.href}
            className="flex items-center gap-3 break-all text-white transition hover:text-[#FFE433]"
          >
            <Mail
              size={18}
              className="text-[#FFE433]"
            />

            <span className="font-semibold">
              {footerBrand.email.text}
            </span>
          </a>
        </div>
      </div>

      {/* ================= LINKS ================= */}

      {footerLinks.map((column) => (
        <div key={column.title}>
          <ul className="space-y-4 pt-16">
            {column.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="
                    text-2xl
                    font-bold
                    text-white

                    transition

                    hover:text-[#FFE433]
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* ================= LOCATIONS ================= */}

      <div
        className="
          grid
          grid-cols-2
          gap-x-14
          gap-y-7

          pt-8
        "
      >
        {footerLocations.map((location) => (
          <div key={location.city}>
            <p className="text-[#FFE433]">
              {location.city}
            </p>

            <a
              href={`tel:${location.phone.replace(/\s/g, "")}`}
              className="
                mt-1
                block

                text-[34px]
                font-bold
                leading-none
                text-white

                transition

                hover:text-[#FFE433]
              "
            >
              {location.phone}
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
}