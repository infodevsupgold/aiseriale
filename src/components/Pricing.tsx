"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Livello 1 — Base",
    subtitle: "Da zero a utilizzatore consapevole",
    price: "497",
    period: "una tantum",
    description:
      "Perfetto per chi vuole iniziare a usare l'AI in modo efficace nel proprio lavoro quotidiano.",
    features: [
      "4 moduli (30 ore di formazione)",
      "Fondamenti di AI e Prompt Engineering",
      "AI per la produttività e il tuo settore",
      "Esercizi pratici e quiz",
      "Accesso alla community",
      "Certificato Livello Base",
    ],
    cta: "Scopri di più",
    highlighted: false,
    color: "var(--accent-cyan)",
  },
  {
    name: "Livello 1 + 2 — Pro",
    subtitle: "Da zero a builder",
    price: "997",
    period: "una tantum",
    description:
      "Per chi vuole andare oltre e costruire automazioni e applicazioni AI personalizzate.",
    features: [
      "8 moduli (72 ore di formazione)",
      "Tutto del Livello Base",
      "Automazione AI no-code e con Python",
      "API dei modelli AI e RAG",
      "Costruisci chatbot e assistenti AI",
      "Certificato Livello Pro",
      "Supporto prioritario",
    ],
    cta: "Scopri di più",
    highlighted: true,
    color: "var(--accent)",
  },
  {
    name: "Completo — Expert",
    subtitle: "Da zero a esperto AI",
    price: "1.497",
    period: "una tantum",
    description:
      "Il percorso completo per diventare un professionista AI a 360°, dal machine learning al deploy.",
    features: [
      "12 moduli (120+ ore di formazione)",
      "Tutto dei Livelli Base e Pro",
      "Machine Learning e Agenti AI",
      "Fine-tuning e modelli custom",
      "AI in produzione e MLOps",
      "Progetto finale + certificazione completa",
      "Mentoring personalizzato",
      "Aggiornamenti a vita",
    ],
    cta: "Scopri di più",
    highlighted: false,
    color: "var(--accent-pink)",
  },
];

export default function Pricing() {
  return (
    <section id="prezzi" className="py-32 relative bg-grid overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[var(--accent)] rounded-full blur-[300px] opacity-5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[var(--accent-cyan)] text-sm font-mono uppercase tracking-widest">
            Prezzi
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Scegli il tuo livello
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ogni livello include il precedente. Parti da dove vuoi e sali
            quando sei pronto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`gradient-border ${plan.highlighted ? "md:-mt-4 md:mb-[-16px]" : ""}`}
            >
              <div
                className={`rounded-2xl p-8 h-full flex flex-col ${
                  plan.highlighted
                    ? "bg-[rgba(108,99,255,0.08)] backdrop-blur-sm"
                    : "bg-[var(--card-bg)] backdrop-blur-sm"
                }`}
              >
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-cyan)] text-white text-xs font-bold uppercase tracking-wider">
                      Più scelto
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-white mb-1">
                  {plan.name}
                </h3>
                <p
                  className="text-sm font-mono mb-4"
                  style={{ color: plan.color }}
                >
                  {plan.subtitle}
                </p>
                <p className="text-gray-400 text-sm mb-6">
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-white">
                    &euro;{plan.price}
                  </span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 mt-0.5 shrink-0"
                        style={{ color: plan.color }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contatti"
                  className={`block text-center py-4 rounded-full font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-[var(--accent)] to-[var(--accent-cyan)] text-white hover:shadow-[0_0_40px_rgba(108,99,255,0.5)]"
                      : "border border-[var(--card-border)] text-gray-300 hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 text-gray-500 text-sm"
        >
          <p>
            Possibilità di pagamento in 3 o 6 rate senza interessi. Parla con
            un consulente per i dettagli.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
