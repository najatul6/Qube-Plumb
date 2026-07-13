import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, House, Menu, X } from "lucide-react";
import logo from "@/assets/logo.webp";
import { navigation } from "@/data/navigation";
import MegaMenu from "./MegaMenu";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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

  // Track scrolling uniformly across all screen sizes
  useEffect(() => {
    const handleScroll = () => {
      // Switches state exact moment the 74px TopBar passes out of the viewport bounds
      setIsSticky(window.scrollY > 74);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className={`fixed left-0 right-0 z-50 bg-[#3d434f] shadow-lg transition-all duration-200 ${
          isSticky ? "top-0" : "lg:top-18.5"
        }`}
      >
        <div className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
          <div className="flex h-16 items-center">
            {/* Desktop Navigation */}
            <DesktopNav
              navigation={navigation}
              activeMenu={activeMenu}
              openMenu={openMenu}
              closeMenu={closeMenu}
            />

            {/* Mobile / Tablet Navigation */}
            <div className="flex items-center justify-between w-full lg:hidden">
              <motion.a
                href="/"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center"
              >
                <img
                  src={logo}
                  alt="2nd City"
                  className="h-12 sm:h-14 w-auto"
                />
              </motion.a>
              <button
                onClick={() => setMobileOpen(true)}
                className="ml-auto p-1 text-white focus:outline-none"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {activeMenu && (
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
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
