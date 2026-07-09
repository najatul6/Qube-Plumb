import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo.webp";
import { ChevronDown, ChevronRight, House, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function MobileNav({ menu, onClose }) {
  const [opened, setOpened] = useState([]);

  const toggle = (id) => {
    setOpened((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  return (
    <>
      {/* Overlay */}
      <motion.div
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 bg-black"
      />

      {/* Drawer */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 28,
        }}
        /* Updated layout rules:
           - Changed `top-0` to standard tracking via fixed layout.
           - Ensured full viewport coverage (`h-full` or `h-screen`) so nothing breaks when scrolling.
        */
        className="fixed left-0 top-0 z-50 h-full w-[320px] overflow-y-auto bg-white shadow-2xl"
      >
        {/* Header */}
        <div className="flex h-18 items-center justify-between border-b px-5">
          <Link to={'/'}>
            <img src={logo} alt="logo of 2nd city" className="w-32 invert" />
          </Link>

          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <div className="py-2">
          {menu.map((item) => {
            const active = opened.includes(item.id);

            return (
              <div key={item.id}>
                {/* Normal Link */}
                {!item.mega && (
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className="flex items-center gap-4 px-6 py-4 text-[17px] font-medium hover:bg-slate-100"
                  >
                    {item.icon && <House size={18} />}
                    {item.title}
                  </Link>
                )}

                {/* Mega Menu Toggle */}
                {item.mega && (
                  <>
                    <button
                      onClick={() => toggle(item.id)}
                      className="flex w-full items-center justify-between px-6 py-4 text-left text-[17px] font-semibold hover:bg-slate-100"
                    >
                      {item.title}
                      <ChevronDown
                        size={18}
                        className={`transition duration-300 ${
                          active ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {active && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden bg-slate-50"
                        >
                          {item.columns.map((column) => (
                            <div key={column.title} className="px-6 py-3">
                              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-500">
                                {column.title}
                              </h3>

                              <div className="space-y-2">
                                {column.links.map((link) => (
                                  <Link
                                    key={link.label}
                                    to={link.href}
                                    onClick={onClose}
                                    className="flex items-center gap-2 rounded-md px-2 py-2 text-[15px] text-slate-700 hover:bg-white hover:text-yellow-500"
                                  >
                                    <ChevronRight size={14} />
                                    {link.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </motion.aside>
    </>
  );
}
