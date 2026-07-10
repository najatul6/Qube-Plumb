import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import PrimaryButton from "@/components/ui/PrimaryButton";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}

      <section className="bg-[#454c5c]">
        <div className="mx-auto flex min-h-[420px] max-w-7xl items-center px-6">

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .6,
            }}
          >
            <h1
              className="
                font-teko
                uppercase
                leading-none
                tracking-tight
                text-white
                text-3xl
                md:text-5xl
                font-bold
              "
            >
              Sorry, this page
              <br />
              cannot be found
            </h1>
          </motion.div>

        </div>
      </section>

      {/* Content */}

      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: .2,
            }}
            className="max-w-4xl"
          >
            <p className="text-lg leading-9 text-slate-700">
              The page you have requested does not exist.
              If you believe this to be an error, or you
              wish to contact us, please email us at
            </p>

            <a
              href="mailto:office@2ndcitygasplumbingandheating.co.uk"
              className="
                mt-3
                inline-flex
                items-center
                gap-2
                text-lg
                font-medium
                text-[#2d3d5b]
                underline
                underline-offset-4
                transition-colors
                hover:text-yellow-500
              "
            >
              <Mail size={18} />

              office@2ndcitygasplumbingandheating.co.uk
            </a>

            <div className="mt-10">
              <PrimaryButton to="/">
                Back to the Homepage
              </PrimaryButton>
            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}