import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import Checkbox from "./Checkbox";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#444a58] p-8 lg:p-10"
    >
      <h2 className="mb-8 text-4xl font-bold text-white">
        Want to know more? We're here to help...
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        <FormInput
          label="Name*"
          placeholder="Your name"
        />

        <FormInput
          label="Contact number*"
          placeholder="Your contact number"
        />
      </div>

      <div className="mt-5">
        <FormInput
          label="Email address"
          placeholder="Your email address"
          type="email"
        />
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-[220px_1fr]">
        <div>
          <label className="mb-2 block text-sm font-semibold text-white">
            Postcode
          </label>

          <div className="relative">
            <MapPin
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              placeholder="Your postcode"
              className="h-12 w-full bg-white pl-11 pr-4 outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>

        <FormSelect
          label="Which service can we help with?"
          options={[
            "Plumbing",
            "Boiler installation",
            "Gas repairs",
            "Heating",
          ]}
        />
      </div>

      <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <Checkbox />
        </div>

        <button
          className="
            flex
            h-14
            items-center
            justify-center
            gap-3
            bg-[#ffe433]
            px-8
            font-semibold
            text-[#2d3d5b]
            transition
            hover:bg-yellow-300
          "
        >
          Send enquiry
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}