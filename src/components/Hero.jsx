function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/30" aria-labelledby="hero-title">
      <div className="absolute inset-0 opacity-40" aria-hidden="true">
        <div className="absolute -top-10 left-10 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
      </div>
      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
          ICT Portfolio
        </p>
        <h1 id="hero-title" className="max-w-4xl font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Kundananji Simukonda
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-200 sm:text-xl">
          ICT Professional | Systems Architect
        </p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300">
          I design resilient digital systems that connect business goals to practical engineering outcomes, from network architecture through backend delivery and security hardening.
        </p>
      </div>
    </section>
  )
}

export default Hero
