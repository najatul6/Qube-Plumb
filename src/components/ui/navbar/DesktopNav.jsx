import { House } from "lucide-react";
import DesktopNavItem from "./DesktopNavItem";

export default function DesktopNav({
  navigation,
  activeMenu,
  openMenu,
  closeMenu,
}) {
  return (
    <nav className="hidden flex-1 items-stretch lg:flex">

      {/* Home */}

      <a
        href="/"
        className="flex w-16 items-center justify-center border-r border-white/10 text-white transition-all duration-300 hover:bg-white hover:text-[#3f4551]"
      >
        <House
          size={18}
          fill="currentColor"
        />
      </a>

      {navigation
        .filter((item) => item.id !== "home")
        .map((item) => (
          <DesktopNavItem
            key={item.id}
            item={item}
            active={activeMenu === item.id}
            openMenu={openMenu}
            closeMenu={closeMenu}
          />
        ))}
    </nav>
  );
}