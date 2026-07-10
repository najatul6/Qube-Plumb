import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ReviewHeader({
  previous,
  next,
}) {
  return (
    <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}

      <div className="flex items-center gap-4">
        <div className="h-12 w-1 bg-[#FFE433]" />

        <h2
          className="
            font-['Teko']
            text-4xl
            font-semibold
            uppercase
            leading-none
            tracking-tight
            text-[#2d3d5b]
          "
        >
          Read Our Reviews
        </h2>
      </div>

      {/* Right */}

      <div className="flex items-center gap-2">
        {/* Previous */}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .95 }}
          onClick={() => {
  previous();
}}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center

            bg-white

            transition

            hover:bg-slate-100
          "
        >
          <ArrowLeft size={20} />
        </motion.button>

        {/* Next */}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .95 }}
          onClick={() => {
  next();
}}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center

            bg-white

            transition

            hover:bg-slate-100
          "
        >
          <ArrowRight size={20} />
        </motion.button>

        {/* Read Reviews */}

        <motion.a
          whileHover={{
            x: 2,
          }}
          href="https://www.google.com/search?q=2nd+city+gas+plumbing+and+heating+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="
            ml-2

            flex
            items-center
            gap-3

            bg-[#3d4350]

            px-8
            py-3

            font-semibold
            text-white

            transition

            hover:bg-[#313642]
          "
        >
          Read reviews

          <ArrowRight size={18} />
        </motion.a>
      </div>
    </div>
  );
}