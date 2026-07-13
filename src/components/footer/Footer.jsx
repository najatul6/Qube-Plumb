import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterLocations from "./FooterLocations";
import FooterSocial from "./FooterSocial";
import FooterBottom from "./FooterBottom";
import logo from "@/assets/logo.webp";
import { Link } from "react-router";
export default function Footer() {
  return (
    <div className="bg-[#3F4754]">
      <div className="mx-auto max-w-360 px-6 py-20">
        {/* Top */}
        <div>
          {/* Logo */}

          <Link to="/" className="inline-block">
            <img
              src={logo}
              alt="2nd City Gas Plumbing & Heating"
              className="h-15 w-auto"
            />
          </Link>
        </div>

        <div
          className="
            grid
            gap-14
            lg:grid-cols-12
          "
        >
          {/* Brand */}

          <div className="lg:col-span-4">
            <FooterBrand />
            <FooterSocial />
          </div>

          {/* Navigation */}

          <div className="lg:col-span-3">
            <FooterLinks />
          </div>

          {/* Locations */}

          <div className="lg:col-span-5">
            <FooterLocations />
          </div>
        </div>

        {/* Bottom */}

        <FooterBottom />
      </div>
    </div>
  );
}
