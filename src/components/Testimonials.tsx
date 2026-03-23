"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Questo percorso ha cambiato il mio approccio al lavoro. Ora uso l'AI ogni giorno per automatizzare task che mi richiedevano ore.",
    name: "Marco R.",
    role: "Marketing Manager",
    rating: 5,
  },
  {
    quote:
      "Da sviluppatore, volevo capire come integrare i modelli AI nelle mie app. Il corso è stato pratico e diretto, esattamente quello che cercavo.",
    name: "Laura B.",
    role: "Full Stack Developer",
    rating: 5,
  },
  {
    quote:
      "Ho portato le competenze AI nel mio team e abbiamo triplicato la produttività in 3 mesi. Il ROI del corso si è ripagato in una settimana.",
    name: "Andrea T.",
    role: "CTO Startup",
    rating: 5,
  },
  {
    quote:
      "Partivo da zero con la programmazione. Il percorso guidato e il supporto dei docenti mi hanno permesso di completare tutto senza problemi.",
    name: "Giulia F.",
    role: "Data Analyst",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[var(--accent-cyan)] text-sm font-mono uppercase tracking-widest">
            Testimonianze
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Cosa dicono i nostri studenti
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="gradient-border"
            >
              <div className="bg-[var(--card-bg)] backdrop-blur-sm rounded-2xl p-8 h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg
                      key={j}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed text-lg mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-cyan)] flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {t.name}
                    </p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
