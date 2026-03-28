import About from './components/About'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-10 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="font-heading text-base font-semibold tracking-wide text-cyan-300 sm:text-lg">
              Kundananji Systems
            </a>
            <ul className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
              <li><a href="#about" className="hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">About</a></li>
              <li><a href="#projects" className="hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">Projects</a></li>
              <li><a href="#skills" className="hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">Skills</a></li>
              <li><a href="#certifications" className="hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">Certifications</a></li>
              <li><a href="#contact" className="hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">Contact</a></li>
            </ul>
            <details className="relative md:hidden">
              <summary className="cursor-pointer list-none rounded-md border border-slate-700 px-3 py-2 text-sm text-slate-200 marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">
                Menu
              </summary>
              <ul className="absolute right-0 mt-2 w-44 rounded-xl border border-slate-700 bg-slate-900 p-2 text-sm text-slate-200 shadow-xl">
                <li><a href="#about" className="block rounded-md px-3 py-2 hover:bg-slate-800">About</a></li>
                <li><a href="#projects" className="block rounded-md px-3 py-2 hover:bg-slate-800">Projects</a></li>
                <li><a href="#skills" className="block rounded-md px-3 py-2 hover:bg-slate-800">Skills</a></li>
                <li><a href="#certifications" className="block rounded-md px-3 py-2 hover:bg-slate-800">Certifications</a></li>
                <li><a href="#contact" className="block rounded-md px-3 py-2 hover:bg-slate-800">Contact</a></li>
              </ul>
            </details>
          </div>
        </nav>
      </header>
      <main id="home">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-slate-800 bg-gradient-to-t from-slate-950 to-slate-900/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-4 py-8 text-center sm:px-6 lg:px-8">
          <p className="font-heading text-base tracking-wide text-cyan-200">Kundananji Simukonda</p>
          <p className="text-sm text-slate-300">ICT Professional | Systems Architect</p>
          <p className="text-xs text-slate-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p className="text-xs text-slate-500">Built with React, Vite, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
