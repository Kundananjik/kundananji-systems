function SectionHeading({ eyebrow, title, description, titleId }) {
  return (
    <header className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p>
      <h2 id={titleId} className="mt-2 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-slate-300">{description}</p>
    </header>
  )
}

export default SectionHeading
