import SectionHeading from './SectionHeading'

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20" aria-labelledby="contact-title">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          titleId="contact-title"
          eyebrow="Contact"
          title="Let’s discuss your next systems project"
          description="Use the contact details below or submit the form. This form is UI-only for static deployment and does not send data."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <article className="rounded-2xl border border-slate-700 bg-slate-900 p-6 lg:col-span-2">
            <h3 className="font-heading text-xl text-cyan-200">Direct Contact</h3>
            <p className="mt-4 text-sm text-slate-300">Email</p>
            <a className="mt-2 inline-block text-base font-semibold text-cyan-300 underline decoration-cyan-500/60 underline-offset-4 hover:text-cyan-200" href="mailto:kundananjisimukonda@gmail.com">
              kundananjisimukonda@gmail.com
            </a>
            <p className="mt-5 text-sm text-slate-300">Phone</p>
            <a className="mt-2 inline-block text-base font-semibold text-cyan-300 underline decoration-cyan-500/60 underline-offset-4 hover:text-cyan-200" href="tel:+260971863462">
              +260971863462
            </a>
            <ul className="mt-6 flex flex-col gap-3" aria-label="Social profiles">
              <li>
                <a
                  href="https://github.com/Kundananjik"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
                    <path d="M12 2a10 10 0 0 0-3.162 19.49c.5.092.683-.217.683-.483 0-.237-.008-.866-.013-1.699-2.782.604-3.37-1.342-3.37-1.342-.455-1.155-1.11-1.463-1.11-1.463-.907-.62.069-.607.069-.607 1.003.07 1.53 1.03 1.53 1.03.892 1.53 2.34 1.088 2.91.832.09-.646.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.944 0-1.091.39-1.985 1.03-2.684-.103-.254-.447-1.273.098-2.654 0 0 .84-.27 2.75 1.025A9.58 9.58 0 0 1 12 6.844c.85.004 1.706.115 2.505.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.381.203 2.4.1 2.654.64.699 1.028 1.593 1.028 2.684 0 3.843-2.338 4.688-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.418-.012 2.747 0 .268.18.58.688.481A10.001 10.001 0 0 0 12 2Z" />
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kundananjisimukonda"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
                    <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-9.5 6.5H7V17h2.5V9.5ZM8.25 7.25a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9ZM17 12.4c0-2.08-1.11-3.05-2.6-3.05-1.2 0-1.74.66-2.04 1.12V9.5H9.87V17h2.5v-3.72c0-.98.19-1.92 1.4-1.92 1.2 0 1.22 1.13 1.22 1.98V17h2.5v-4.6Z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </article>
          <form className="rounded-2xl border border-slate-700 bg-slate-900 p-6 lg:col-span-3" aria-label="Contact form">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-200" htmlFor="name">
                Name
                <input id="name" name="name" type="text" className="mt-1 w-full rounded-md border border-slate-600 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-cyan-300/50 transition focus-visible:ring" />
              </label>
              <label className="text-sm text-slate-200" htmlFor="email">
                Email
                <input id="email" name="email" type="email" className="mt-1 w-full rounded-md border border-slate-600 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-cyan-300/50 transition focus-visible:ring" />
              </label>
            </div>
            <label className="mt-4 block text-sm text-slate-200" htmlFor="message">
              Message
              <textarea id="message" name="message" rows="5" className="mt-1 w-full rounded-md border border-slate-600 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-cyan-300/50 transition focus-visible:ring" />
            </label>
            <button type="button" className="mt-4 rounded-md bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
