import { motion } from "framer-motion";

export default function FormInput({
  label,
  placeholder,
  type = "text",
  className = "",
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-sm font-semibold text-white">
        {label}
      </label>

      <motion.input
        whileFocus={{
          scale: 1.01,
        }}
        type={type}
        placeholder={placeholder}
        className="
          h-12
          w-full
          border-0
          bg-white
          px-4
          text-[16px]
          outline-none

          placeholder:text-slate-400

          focus:ring-2
          focus:ring-yellow-400
        "
      />
    </div>
  );
}