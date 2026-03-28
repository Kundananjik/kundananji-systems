import SectionHeading from './SectionHeading'
import { certificationGroups } from '../data/portfolioData'

function Certifications() {
  return (
    <section id="certifications" className="border-b border-slate-800 py-16 sm:py-20" aria-labelledby="certifications-title">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          titleId="certifications-title"
          eyebrow="Certifications & Technical Training"
          title="Professional learning and lab-based progression"
          description="Training path primarily delivered through Cisco Networking Academy, with additional foundation work in AI and data disciplines."
        />
        <p className="mt-4 text-sm text-slate-300">
          Primary provider: <span className="font-semibold text-cyan-200">Cisco Networking Academy</span>
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {certificationGroups.map((group) => (
            <section key={group.name} className="rounded-2xl border border-slate-700 bg-slate-900 p-6" aria-label={group.name}>
              <h3 className="font-heading text-xl text-white">{group.name}</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {group.certifications.map((certification) => (
                  <li key={certification.title} className="flex items-start justify-between gap-3 rounded-md bg-slate-950/70 px-3 py-2">
                    <span className="text-slate-200">{certification.title}</span>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
                        certification.status === 'Completed'
                          ? 'bg-emerald-500/20 text-emerald-200'
                          : 'bg-amber-500/20 text-amber-200'
                      }`}
                      aria-label={`Status: ${certification.status}`}
                    >
                      {certification.status}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
