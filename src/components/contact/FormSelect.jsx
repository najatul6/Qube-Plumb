import { ChevronDown } from "lucide-react";

export default function FormSelect({
  label,
  options = [],
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-white">
        {label}
      </label>

      <div className="relative">
        <select
          className="
            h-12
            w-full
            appearance-none
            bg-white
            px-4
            pr-12
            text-[16px]
            outline-none

            focus:ring-2
            focus:ring-yellow-400
          "
        >
          <option>Please select...</option>

          {options.map((item) => (
            <option
              key={item}
            >
              {item}
            </option>
          ))}
        </select>

        <ChevronDown
          className="
            pointer-events-none
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-slate-500
          "
        />
      </div>
    </div>
  );
}