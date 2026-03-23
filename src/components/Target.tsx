"use client";

import { motion } from "framer-motion";

const targets = [
  {
    emoji: "💼",
    title: "Professionisti",
    description:
      "Vuoi integrare l'AI nel tuo lavoro quotidiano per aumentare la produttività e rimanere competitivo nel tuo settore.",
    highlight: "Marketing, HR, Finance, Legal",
  },
  {
    emoji: "👨‍💻",
    title: "Developer & Tecnici",
    description:
      "Vuoi padroneggiare le API dei modelli AI, costruire applicazioni intelligenti e automatizzare processi complessi.",
    highlight: "Python, API, ML/DL",
  },
  {
    emoji: "🚀",
    title: "Imprenditori & Manager",
    description:
      "Vuoi capire come l'AI può trasformare la tua azienda, prendere decisioni strategiche informate e guidare l'innovazione.",
    highlight: "Strategy, ROI, Leadership",
  },
  {
    emoji: "🎓",
    title: "Studenti & Career Changer",
    description:
      "Vuoi acquisire competenze AI spendibili sul mercato del lavoro e costruire un portfolio di progetti concreti.",
    highlight: "Portfolio, Certificazione, Job-ready",
  },
];

export default function Target() {
  return (
    <section id="target" className="py-32 relative">
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[var(--accent-cyan)] rounded-full blur-[250px] opacity-5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[var(--accent-cyan)] text-sm font-mono uppercase tracking-widest">
            Per chi è
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Questo percorso è per te?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Non serve esperienza di programmazione. Il percorso è pensato per
            chiunque voglia padroneggiare l&apos;AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {targets.map((target, i) => (
            <motion.div
              key={target.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="gradient-border group"
            >
              <div className="bg-[var(--card-bg)] backdrop-blur-sm rounded-2xl p-8 h-full hover:bg-[rgba(15,15,40,0.95)] transition-colors duration-300">
                <span className="text-4xl mb-4 block">{target.emoji}</span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {target.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {target.description}
                </p>
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent-cyan)] text-sm font-mono">
                  {target.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
