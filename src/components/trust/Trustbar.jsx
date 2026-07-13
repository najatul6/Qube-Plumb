import TrustCard from "./TrustItem";
import { trustData } from "@/data/TrustData";

export default function TrustBar() {
  return (
    <section className="bg-[#E8E8E8] border-y border-slate-200">
      <div className="mx-auto max-w-360">
        {/* Desktop */}

        <div className="hidden lg:flex">
          {trustData.map((item, index) => (
            <div
              key={index}
              style={{
                width: item.width,
              }}
              className="
                border-r
                border-slate-300
                last:border-r-0
              "
            >
              <TrustCard {...item} />
            </div>
          ))}
        </div>

        {/* Tablet */}

        <div className="hidden md:grid grid-cols-2 lg:hidden">
          {trustData.map((item, index) => (
            <div
              key={index}
              className="
                border
                border-slate-200
              "
            >
              <TrustCard {...item} />
            </div>
          ))}
        </div>

        {/* Mobile */}

        <div className="grid grid-cols-1 md:hidden">
          {trustData.map((item, index) => (
            <div key={index} className="border-b border-slate-200">
              <TrustCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
