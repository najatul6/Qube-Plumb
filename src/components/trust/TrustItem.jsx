export default function TrustCard({
  type,
  image,
  imageClass,
  title,
  description,
}) {
  if (type === "imageOnly") {
    return (
      <div className="flex h-full items-center justify-center px-8 py-8">
        <img
          src={image}
          alt="Award"
          className="
            h-auto
            w-full
            max-w-[230px]
            object-contain
          "
        />
      </div>
    );
  }

  return (
    <div className="flex h-full items-center gap-5 px-8 py-8">

      <img
        src={image}
        alt={title}
        className={`
          ${imageClass}
          h-auto
          shrink-0
          object-contain
        `}
      />

      <div className="min-w-0">

        <h3 className="text-[18px] font-bold text-slate-800 leading-tight">
          {title}
        </h3>

        <p className="mt-2 text-[15px] leading-7 text-slate-600">
          {description}
        </p>

      </div>

    </div>
  );
}