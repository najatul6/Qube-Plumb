import { motion } from "framer-motion";

import ServiceCard from "./ServiceCard";

export default function AboutSection() {
  return (
    <section className="bg-white py-24">
      <div
        className="
          mx-auto
          grid
          max-w-360
          gap-20

          px-6

          lg:grid-cols-[1.6fr_.9fr]
        "
      >
        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <h2
            className="
              max-w-[700px]
              font-teko
              text-4xl
              uppercase
              leading-none
              tracking-tight
              text-[#2d3d5b]
              font-bold
            "
          >
            Efficient Local Plumbers in
            <br /> Birmingham
          </h2>

          <p
            className="
              mt-10
              max-w-[680px]

              text-md
              
              leading-6

              text-slate-700
            "
          >
            Since 1998, 2nd City Gas, Plumbing and Heating has been providing a
            dedicated service to Birmingham (West Midlands) residents to a very
            high level that truly sets us apart from other plumbing companies.
            We are committed to providing an efficient, fast and Gas Safe
            service to address all residential and commercial plumbing and gas
            requirements. We are proud to offer competitive prices across a
            range of services. We also offer a well-stocked West Midlands
            showroom, which makes us the first choice for local plumbing
            services. We also offer additional services such as bathroom
            installation and emergency plumbing support.
          </p>

          <motion.img
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.35,
            }}
            viewport={{
              once: true,
            }}
            src={
              "https://2ndcitygasplumbingandheating.co.uk/img/trade-logos-new.png"
            }
            alt="Certifications"
            className="
              mt-12

              w-full

              max-w-[680px]
            "
          />
        </motion.div>

        {/* RIGHT */}

        <div className="flex justify-center lg:justify-end">
          <ServiceCard />
        </div>
      </div>
    </section>
  );
}
