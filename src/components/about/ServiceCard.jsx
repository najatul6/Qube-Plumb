import { motion } from "framer-motion";
import { services } from "@/data/services";
import ServiceItem from "./ServiceItem";

export default function ServiceCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        rounded-md
        bg-[#ffe433]
        p-8
        shadow-xl
        h-fit
        lg:max-w-107.5
      "
    >
      <h2
        className="
          mb-6
          text-[20px]
          font-bold
          text-[#2d3d5b]
        "
      >
        Our services
      </h2>

      {services.map((service, index) => (
        <ServiceItem
          key={service.title}
          {...service}
          last={index === services.length - 1}
        />
      ))}
    </motion.div>
  );
}
