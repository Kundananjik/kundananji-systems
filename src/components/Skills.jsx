import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/portfolioData'

function Skills() {
  return (
    <section id="skills" className="border-b border-slate-800 bg-slate-900/50 py-16 sm:py-20" aria-labelledby="skills-title">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          titleId="skills-title"
          eyebrow="Skills"
          title="Applied technical capability"
          description="Practical skills used across architecture planning, implementation, and systems operations."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.name} className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
              <h3 className="font-heading text-xl text-cyan-200">{group.name}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {group.items.map((item) => (
                  <li key={item} className="rounded-md bg-slate-950/70 px-3 py-2">{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
