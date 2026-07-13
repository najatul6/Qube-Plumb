import { fireplaceHero } from "@/data/fireplace";

import FireplaceHero from "./FireplaceHero";
import FireplaceGrid from "./FireplaceGrid";

export default function FireplaceSection() {
  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="mx-auto max-w-360 px-6">
        {/* Hero */}

        <FireplaceHero
          title={fireplaceHero.title}
          description={fireplaceHero.description}
          button={fireplaceHero.button}
          href={fireplaceHero.href}
          image={fireplaceHero.image}
        />

        {/* Cards */}

        <FireplaceGrid />
      </div>
    </section>
  );
}
