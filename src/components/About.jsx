export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">About me</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I’m a software engineer with 3+ years of hands-on experience building web and mobile applications. I value clarity, performance, and playful interactions that make products feel alive. My work spans POS platforms, e‑commerce ecosystems, SSO portals, and internal tooling.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I partner with teams end-to-end: from product discovery and architecture to implementation, testing, and delivery. I’m comfortable shipping quickly while keeping code quality and DX in focus.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-4">
          {[
            { title: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind'] },
            { title: 'Backend', items: ['FastAPI', 'Node', 'MongoDB', 'PostgreSQL'] },
            { title: 'Infra', items: ['Docker', 'CI/CD', 'Vercel', 'Railway'] },
            { title: 'Practices', items: ['Testing', 'Code Review', 'Docs', 'Accessibility'] },
          ].map((g) => (
            <li key={g.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900">{g.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-medium">
                    {i}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
