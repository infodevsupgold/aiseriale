"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "Ho bisogno di saper programmare per seguire il corso?",
    a: "No, il percorso parte dalle basi. I primi moduli sono pensati per chi non ha mai programmato. Ti insegneremo Python da zero e ti guideremo passo passo.",
  },
  {
    q: "Quanto tempo devo dedicare al corso?",
    a: "Il corso è completamente on-demand, quindi puoi seguirlo ai tuoi ritmi. Consigliamo circa 8-10 ore a settimana per completarlo in 3-4 mesi.",
  },
  {
    q: "Per quanto tempo avrò accesso ai contenuti?",
    a: "Con il piano Base hai accesso per 1 anno con aggiornamenti inclusi. Con il piano Pro l'accesso e gli aggiornamenti sono a vita.",
  },
  {
    q: "Ci sono prerequisiti?",
    a: "Nessun prerequisito tecnico. Serve solo un computer, una connessione internet e la voglia di imparare. Forniamo tutto il necessario per partire.",
  },
  {
    q: "Riceverò un certificato?",
    a: "Sì, al completamento del corso e del progetto finale riceverai un certificato di completamento rilasciato da Serial Srl.",
  },
  {
    q: "Posso pagare a rate?",
    a: "Sì, offriamo la possibilità di pagare in 3 o 6 rate mensili senza interessi. Contattaci per i dettagli.",
  },
  {
    q: "Il corso viene aggiornato?",
    a: "Assolutamente sì. L'AI evolve rapidamente e noi aggiorniamo costantemente i contenuti con le ultime novità, modelli e best practice.",
  },
  {
    q: "Come funziona la garanzia soddisfatti o rimborsati?",
    a: "Hai 14 giorni di tempo per provare il corso. Se non sei soddisfatto, ti rimborsiamo il 100% senza domande.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 relative bg-grid">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[var(--accent-cyan)] text-sm font-mono uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Domande frequenti
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left"
              >
                <div
                  className={`flex items-center justify-between gap-4 p-5 rounded-xl border transition-all duration-300 ${
                    openIndex === i
                      ? "border-[var(--accent)] bg-[var(--card-bg)] glow-box"
                      : "border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--accent)]/50"
                  }`}
                >
                  <h3 className="text-white font-medium pr-4">{faq.q}</h3>
                  <svg
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="px-5 pb-2"
                >
                  <p className="text-gray-400 leading-relaxed pt-3 pb-2">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
