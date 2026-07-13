import { motion } from "framer-motion";

import ContactForm from "./ContactForm";
import ReviewCard from "./ReviewCard";
import HiringBanner from "./HiringBanner";

export default function ContactSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-360 px-6">
        {/* Top */}

        <div
          className="
            overflow-hidden
            shadow-xl
            lg:grid
            lg:grid-cols-[2fr_1fr]
          "
        >
          {/* Form */}

          <ContactForm />

          {/* Review */}

          <ReviewCard />
        </div>

        {/* Bottom */}

        <HiringBanner />
      </div>
    </section>
  );
}
