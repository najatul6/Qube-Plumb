import { motion } from "framer-motion";
import { Phone, MessageSquareMore, Truck } from "lucide-react";

import logo from "@/assets/logo.webp";

export default function TopBar() {
  return (
    <header className="bg-[#4b5161] text-white">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center"
        >
          <img src={logo} alt="2nd City" className="h-14 w-auto" />
        </motion.a>

        {/* Right Side */}
        <div className="hidden items-center divide-x divide-white/20 lg:flex">
          {/* Phone 1 */}
          <motion.a
            whileHover={{ y: -2 }}
            href="tel:08005873136"
            className="flex items-center gap-3 px-8 transition-colors hover:text-yellow-400"
          >
            <Phone
              size={20}
              className="text-yellow-400 animate__animated animate__heartBeat animate__infinite"
            />
            <span className="text-[18px] font-medium">0800 587 3136</span>
          </motion.a>

          {/* Phone 2 */}
          <motion.a
            whileHover={{ y: -2 }}
            href="tel:07773429943"
            className="flex items-center gap-3 px-8 transition-colors hover:text-yellow-400"
          >
            <Phone
              size={20}
              className="text-yellow-400 animate__animated animate__heartBeat animate__infinite"
            />
            <span className="text-[18px] font-medium">07773429943</span>
          </motion.a>

          {/* Contact */}
          <motion.a
            whileHover={{ x: 4 }}
            href="/contact"
            className="flex items-center gap-3 px-8 transition-colors hover:text-yellow-400"
          >
            <MessageSquareMore size={20} className="text-yellow-400" />

            <span className="text-[18px] font-medium">Contact us</span>
          </motion.a>
        </div>

        {/* Mobile */}
        <a href="tel:08005873136" className="flex items-center gap-2 lg:hidden">
          <Phone className="text-yellow-400" />
        </a>
      </div>
    </header>
  );
}
