import { ShoppingCart, Lock, Server, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    icon: Server,
    title: 'POS Management System',
    description:
      'Enterprise-grade point of sale with inventory, multi-store support, and real-time analytics.',
    stack: ['React', 'FastAPI', 'MongoDB', 'Tailwind'],
  },
  {
    icon: ShoppingCart,
    title: 'E‑commerce Platform & Apps',
    description:
      'Full-stack storefront, payments, order tracking, and mobile companion apps.',
    stack: ['React', 'Node', 'Stripe', 'React Native'],
  },
  {
    icon: Lock,
    title: 'Single Sign‑On Portal',
    description:
      'Centralized auth with OAuth2/OpenID, role-based access, and audit logging.',
    stack: ['SSO', 'OAuth2', 'Next.js', 'Redis'],
  },
  {
    icon: Code,
    title: 'And more…',
    description:
      'Dashboards, internal tools, APIs, and performance overhauls tailored to business needs.',
    stack: ['TypeScript', 'CI/CD', 'Cloud'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 bg-gradient-to-b from-white to-slate-50 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected Projects</h2>
          <p className="mt-3 text-gray-600">A few things I’ve shipped recently.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ icon: Icon, title, description, stack }, idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-11 w-11 rounded-xl grid place-items-center bg-blue-50 text-blue-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span key={s} className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
