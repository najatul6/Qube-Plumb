import { Star } from "lucide-react";

export default function ReviewCard({ review }) {
  return (
    <article
  className="
    flex
    h-full
    min-h-[320px]
    flex-col
    justify-between
    rounded-sm
    bg-white
    p-8
    shadow-sm
    transition
    duration-300
    hover:-translate-y-1
    hover:shadow-xl
  "
>
      <div>
        <div className="mb-6 flex gap-1">
          {Array.from({ length: review.rating }).map((_, index) => (
            <Star
              key={index}
              size={24}
              fill="#FFD600"
              className="text-[#FFD600]"
            />
          ))}
        </div>

        <p className="text-[18px] leading-9 text-slate-700">
          {review.review}
        </p>
      </div>

      <div className="mt-10 flex items-end justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[#2d3d5b]">
            {review.author}
          </h3>

          <p className="mt-1 text-base text-slate-500">
            {review.date}
          </p>
        </div>

        <img
          src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Search_logo.width-500.format-webp.webp"
          alt="Google"
          className="h-10 w-10 object-contain"
        />
      </div>
    </article>
  );
}