import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, House, Menu, X } from "lucide-react";

import { navigation } from "@/data/navigation";
import MegaMenu from "./MegaMenu";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeTimeout = useRef();

  const navbarRef = useRef(null);

  const openMenu = (id) => {
    clearTimeout(closeTimeout.current);
    setActiveMenu(id);
  };

  const closeMenu = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (!navbarRef.current?.contains(e.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <header
        ref={navbarRef}
        className="sticky top-0 z-50 bg-[#3d434f] shadow-lg"
      >
        <div className="relative mx-auto max-w-7xl">
          <div className="flex h-16 items-center">
            {/* Desktop */}

            <DesktopNav
              navigation={navigation}
              activeMenu={activeMenu}
              openMenu={openMenu}
              closeMenu={closeMenu}
            />

            {/* Mobile */}

            <button
              onClick={() => setMobileOpen(true)}
              className="ml-auto mr-4 lg:hidden"
            >
              <Menu size={28} color="white" />
            </button>
          </div>

          <AnimatePresence>
            {activeMenu && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.22,
                }}
                onMouseEnter={() => clearTimeout(closeTimeout.current)}
                onMouseLeave={closeMenu}
              >
                <MegaMenu menu={navigation.find((m) => m.id === activeMenu)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <MobileNav menu={navigation} onClose={() => setMobileOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
