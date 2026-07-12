import { teamContent } from "@/data/team";

import TeamVideo from "./TeamVideo";
import TeamContent from "./TeamContent";
import BrandStrip from "./BrandStrip";

export default function TeamSection() {
  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top */}

        <div
          className="
            grid
            gap-10

            lg:grid-cols-2
            lg:items-center
          "
        >
          {/* Video */}

          <TeamVideo
            youtube={teamContent.youtube}
            title={teamContent.title}
          />

          {/* Content */}

          <TeamContent
            title={teamContent.title}
            paragraphs={teamContent.paragraphs}
            button={teamContent.button}
            href={teamContent.href}
          />
        </div>

        {/* Brand Logos */}

        <BrandStrip />
      </div>
    </section>
  );
}