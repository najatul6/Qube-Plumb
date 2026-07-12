import { boilerContent } from "@/data/boiler";

import BoilerImage from "./BoilerImage";
import BoilerContent from "./BoilerContent";

export default function BoilerSection() {
  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            overflow-hidden
            rounded-sm
            bg-white
            shadow-sm
            lg:grid
            lg:grid-cols-2
          "
        >
          {/* Left Image */}

          <BoilerImage
            image={boilerContent.image}
            title={boilerContent.title}
          />

          {/* Right Content */}

          <div
            className="
              flex
              items-center

              p-8

              md:p-12

              xl:p-16
            "
          >
            <BoilerContent
              title={boilerContent.title}
              description={boilerContent.description}
              highlight={boilerContent.highlight}
              button={boilerContent.button}
              href={boilerContent.href}
            />
          </div>
        </div>
      </div>
    </section>
  );
}