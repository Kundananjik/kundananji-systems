import SectionHeading from './SectionHeading'

function About() {
  return (
    <section id="about" className="border-b border-slate-800 bg-slate-900/50 py-16 sm:py-20" aria-labelledby="about-title">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          titleId="about-title"
          eyebrow="About"
          title="Architecture-first engineering for dependable systems"
          description="My work focuses on systems architecture, networking, and backend engineering. I prioritize clear interfaces, reliable data flow, and maintainable infrastructure so organizations can scale without operational friction."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
            <h3 className="font-heading text-xl text-cyan-200">Systems Architecture</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">Designing modular system boundaries, service responsibilities, and resilient workflows aligned to real constraints.</p>
          </article>
          <article className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
            <h3 className="font-heading text-xl text-cyan-200">Networking</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">Building and troubleshooting practical network topologies with secure segmentation, routing awareness, and endpoint protection.</p>
          </article>
          <article className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
            <h3 className="font-heading text-xl text-cyan-200">Backend Engineering</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">Implementing backend logic with PHP, JavaScript, and MySQL focused on clean data models, predictable behavior, and long-term maintainability.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
