import SectionHeading from './SectionHeading'
import { projectGroups } from '../data/portfolioData'

function Projects() {
  return (
    <section id="projects" className="border-b border-slate-800 py-16 sm:py-20" aria-labelledby="projects-title">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          titleId="projects-title"
          eyebrow="Projects"
          title="Production projects"
          description="Selected systems covering education workflows, financial operations, and agricultural production management."
        />
        <div className="mt-10 space-y-6">
          {projectGroups.map((project) => (
            <article key={project.name} className="rounded-2xl border border-cyan-400/20 bg-slate-900/90 p-6 shadow-[0_0_0_1px_rgba(34,211,238,0.08)] sm:p-8">
              <h3 className="font-heading text-2xl font-semibold text-white">{project.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.summary}</p>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block rounded-md border border-cyan-300/40 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                >
                  Live Demo
                </a>
              ) : null}
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                <section className="rounded-xl border border-slate-700 bg-slate-950/70 p-4">
                  <h4 className="font-semibold text-cyan-200">Problem</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.problem}</p>
                </section>
                <section className="rounded-xl border border-slate-700 bg-slate-950/70 p-4">
                  <h4 className="font-semibold text-cyan-200">Architecture</h4>
                  <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-300">
                    {project.architecture.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
                <section className="rounded-xl border border-slate-700 bg-slate-950/70 p-4">
                  <h4 className="font-semibold text-cyan-200">Technologies</h4>
                  <ul className="mt-2 space-y-2 text-sm text-slate-300" aria-label={`Technologies used in ${project.name}`}>
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </section>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
