type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
          {eyebrow}
        </p>
      )}

      <h2
        className={`font-[family-name:var(--font-dm-serif)] text-4xl leading-tight tracking-tight text-slate-100 sm:text-5xl ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-7 text-slate-400 sm:text-lg ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}