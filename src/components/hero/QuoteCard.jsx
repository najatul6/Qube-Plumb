import { motion } from "framer-motion";

export default function QuoteCard() {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="w-112.5 rounded-sm bg-white p-12 shadow-2xl"
    >
      <h2 className="text-center text-3xl font-bold leading-tight text-slate-800">
        Get a boiler
        <br />
        installation quote
      </h2>

      <p className="mt-8 text-center text-lg leading-9 text-slate-600">
        To get an idea of how much it will cost to install a new boiler, just
        answer a few quick questions...
      </p>

      <button className="mx-auto mt-10 block bg-[#ffe033] px-12 py-5 text-xl cursor-pointer font-semibold transition hover:bg-yellow-300">
        Get a quote
      </button>

      <div className="mt-12 flex justify-center gap-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <span key={i} className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        ))}
      </div>
    </motion.div>
  );
}
