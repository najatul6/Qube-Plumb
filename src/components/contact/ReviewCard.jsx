import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Star,
} from "lucide-react";

import { reviews } from "@/data/review";

const variants = {
  enter: {
    opacity: 0,
    x: 40,
  },
  center: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -40,
  },
};

export default function ReviewCard() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);

    return () => clearInterval(timer);
  }, []);

  const review = reviews[current];

  return (
    <div className="flex h-full flex-col justify-between bg-[#f7f7f7] p-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={review.id}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.35,
          }}
        >
          <div className="mb-6 flex gap-1">
            {Array.from({
              length: review.rating,
            }).map((_, i) => (
              <Star
                key={i}
                size={22}
                fill="#FACC15"
                className="text-yellow-400"
              />
            ))}
          </div>

          <p className="min-h-[140px] text-lg leading-9 text-slate-700">
            {review.review}
          </p>

          <div className="mt-10 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">
                {review.author}
              </h3>

              <p className="text-sm text-slate-500">
                {review.date}
              </p>
            </div>

            <img
              src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Search_logo.width-500.format-webp.webp"
              alt="Google"
              className="h-10 w-10"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 flex items-center">
        <button
          onClick={previous}
          className="flex h-12 w-12 items-center justify-center border transition hover:bg-white"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          onClick={next}
          className="ml-2 flex h-12 w-12 items-center justify-center border transition hover:bg-white"
        >
          <ArrowRight size={18} />
        </button>

        <button className="ml-auto flex items-center gap-3 bg-[#FFE433] px-7 py-4 font-semibold transition hover:bg-yellow-300">
          Read reviews

          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}