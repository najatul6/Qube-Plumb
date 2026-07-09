import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
    y: -12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.22,
      ease: "easeOut",
      staggerChildren: 0.05,
    },
  },
};

const column = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function MegaMenu({ menu }) {
  if (!menu?.mega) return null;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="absolute left-0 top-full w-full"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-b-xl border border-slate-200 bg-white shadow-[0_25px_60px_rgba(15,23,42,.12)]">
          <div
            className="grid gap-12 px-12 py-10"
            style={{
              gridTemplateColumns: `repeat(${menu.columns.length}, minmax(220px,1fr))`,
            }}
          >
            {menu.columns.map((columnData) => (
              <motion.div key={columnData.title} variants={column}>
                <div className="mb-6">
                  <h3 className="text-lg font-bold tracking-tight text-slate-800">
                    {columnData.title}
                  </h3>

                  <div className="mt-3 h-1 w-14 rounded-full bg-yellow-400" />
                </div>

                <ul className="space-y-3">
                  {columnData.links.map((link) => (
                    <motion.li key={link.label} whileHover={{ x: 6 }}>
                      <a
                        href={link.href}
                        className="group flex items-center text-[15px] font-medium text-slate-600 transition-colors hover:text-yellow-500"
                      >
                        <span className="mr-3 h-[6px] w-[6px] rounded-full bg-slate-300 transition group-hover:bg-yellow-400" />

                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
