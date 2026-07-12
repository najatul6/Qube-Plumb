import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function DesktopNavItem({
  item,
  active,
  openMenu,
  closeMenu,
}) {
  return (
    <motion.div
      layout
      onMouseEnter={() => openMenu(item.id)}
      onMouseLeave={closeMenu}
      className="relative"
    >
      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        className={`
          flex
          h-16
          items-center
          gap-2
          px-8
          text-sm
          font-semibold
          transition-all
          duration-300
          ${
            active
              ? "bg-white text-[#3f4551]"
              : "text-white hover:bg-white hover:text-[#3f4551]"
          }
        `}
      >
        {item.title}

        {item.mega && (
          <motion.div
            animate={{
              rotate: active ? 180 : 0,
            }}
            transition={{
              duration: .25,
            }}
          >
            <ChevronDown size={16} />
          </motion.div>
        )}
      </motion.button>
    </motion.div>
  );
}