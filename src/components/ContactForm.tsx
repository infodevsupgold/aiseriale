"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    ruolo: "",
    livello: "",
    messaggio: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with backend/email service
    setSubmitted(true);
  };

  return (
    <section id="contatti" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent)] rounded-full blur-[250px] opacity-5" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent-cyan)] text-sm font-mono uppercase tracking-widest">
            Inizia ora
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Parla con un nostro consulente
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Lascia i tuoi dati per parlare con un nostro consulente e scoprire
            se questo percorso fa per te. Senza impegno.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="gradient-border"
          >
            <div className="bg-[var(--card-bg)] backdrop-blur-sm rounded-2xl p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-cyan)] flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
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
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Richiesta inviata!
              </h3>
              <p className="text-gray-400">
                Ti contatteremo entro 24 ore per fissare la tua consulenza
                gratuita. Controlla anche la cartella spam.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="gradient-border"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[var(--card-bg)] backdrop-blur-sm rounded-2xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(5,5,16,0.8)] border border-[var(--card-border)] text-white placeholder-gray-600 focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Cognome *
                  </label>
                  <input
                    type="text"
                    name="cognome"
                    required
                    value={formData.cognome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(5,5,16,0.8)] border border-[var(--card-border)] text-white placeholder-gray-600 focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                    placeholder="Il tuo cognome"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(5,5,16,0.8)] border border-[var(--card-border)] text-white placeholder-gray-600 focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                    placeholder="la-tua@email.it"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(5,5,16,0.8)] border border-[var(--card-border)] text-white placeholder-gray-600 focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                    placeholder="+39 333 123 4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Ruolo attuale
                  </label>
                  <select
                    name="ruolo"
                    value={formData.ruolo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(5,5,16,0.8)] border border-[var(--card-border)] text-white focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                  >
                    <option value="" className="bg-[#0a0a1a]">
                      Seleziona...
                    </option>
                    <option value="dipendente" className="bg-[#0a0a1a]">
                      Dipendente / Professionista
                    </option>
                    <option value="manager" className="bg-[#0a0a1a]">
                      Manager / Dirigente
                    </option>
                    <option value="imprenditore" className="bg-[#0a0a1a]">
                      Imprenditore / Freelance
                    </option>
                    <option value="developer" className="bg-[#0a0a1a]">
                      Developer / Tecnico
                    </option>
                    <option value="studente" className="bg-[#0a0a1a]">
                      Studente
                    </option>
                    <option value="altro" className="bg-[#0a0a1a]">
                      Altro
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Livello di interesse
                  </label>
                  <select
                    name="livello"
                    value={formData.livello}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[rgba(5,5,16,0.8)] border border-[var(--card-border)] text-white focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                  >
                    <option value="" className="bg-[#0a0a1a]">
                      Seleziona...
                    </option>
                    <option value="base" className="bg-[#0a0a1a]">
                      Livello 1 — Base (€497)
                    </option>
                    <option value="pro" className="bg-[#0a0a1a]">
                      Livello 1+2 — Pro (€997)
                    </option>
                    <option value="expert" className="bg-[#0a0a1a]">
                      Completo — Expert (€1.497)
                    </option>
                    <option value="non-so" className="bg-[#0a0a1a]">
                      Non so ancora, vorrei capire meglio
                    </option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm text-gray-400 mb-2">
                  Messaggio (opzionale)
                </label>
                <textarea
                  name="messaggio"
                  value={formData.messaggio}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(5,5,16,0.8)] border border-[var(--card-border)] text-white placeholder-gray-600 focus:border-[var(--accent-cyan)] focus:outline-none transition-colors resize-none"
                  placeholder="Raccontaci le tue esigenze o fai una domanda..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-cyan)] text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(108,99,255,0.5)] transition-all duration-300"
              >
                Prenota la tua consulenza gratuita
              </button>

              <p className="text-gray-600 text-xs text-center mt-4">
                I tuoi dati sono al sicuro. Non condivideremo le tue
                informazioni con nessuno.
              </p>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
}
