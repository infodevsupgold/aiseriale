"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const levels = [
  {
    id: "base",
    label: "Livello 1 — Base",
    subtitle: "Da zero a utilizzatore consapevole",
    color: "var(--accent-cyan)",
    modules: [
      {
        number: "01",
        title: "Cos'è l'Intelligenza Artificiale",
        duration: "6 ore",
        topics: [
          "AI, Machine Learning, Deep Learning: differenze e relazioni",
          "Come funzionano i modelli di linguaggio (LLM)",
          "Panorama attuale: ChatGPT, Claude, Gemini, Llama",
          "Cosa può e cosa non può fare l'AI oggi",
        ],
      },
      {
        number: "02",
        title: "Prompt Engineering Fondamentale",
        duration: "8 ore",
        topics: [
          "Anatomia di un prompt efficace",
          "Tecniche: zero-shot, few-shot, chain-of-thought",
          "Prompt per scrivere, analizzare, riassumere e tradurre",
          "Errori comuni e come evitarli",
        ],
      },
      {
        number: "03",
        title: "AI per la Produttività Quotidiana",
        duration: "8 ore",
        topics: [
          "ChatGPT, Claude, Gemini: quando usare cosa",
          "AI per email, documenti, presentazioni",
          "Ricerca e analisi dati con AI",
          "Generazione immagini: Midjourney, DALL-E, Stable Diffusion",
        ],
      },
      {
        number: "04",
        title: "AI per il Tuo Settore",
        duration: "8 ore",
        topics: [
          "AI nel marketing: copywriting, SEO, social media",
          "AI nelle vendite: lead scoring, email outreach",
          "AI nell'HR: screening CV, onboarding",
          "AI nella finanza, legale e operations",
        ],
      },
    ],
  },
  {
    id: "intermedio",
    label: "Livello 2 — Intermedio",
    subtitle: "Da utilizzatore a builder",
    color: "var(--accent)",
    modules: [
      {
        number: "05",
        title: "Automazione con AI (No-Code)",
        duration: "10 ore",
        topics: [
          "Workflow automatizzati con Make, Zapier e n8n",
          "Integrare ChatGPT e Claude nei tuoi processi",
          "Automazioni per email, CRM, social media",
          "Costruire il tuo primo agente AI no-code",
        ],
      },
      {
        number: "06",
        title: "Python per l'AI — Le Basi",
        duration: "12 ore",
        topics: [
          "Python da zero: variabili, funzioni, strutture dati",
          "Jupyter Notebooks e Google Colab",
          "Librerie essenziali: Pandas, NumPy",
          "Leggere, pulire e analizzare dataset reali",
        ],
      },
      {
        number: "07",
        title: "API dei Modelli AI",
        duration: "10 ore",
        topics: [
          "Come funzionano le API di OpenAI, Anthropic, Google",
          "Costruire applicazioni con le API degli LLM",
          "Gestire contesto, token e costi",
          "Creare chatbot e assistenti personalizzati",
        ],
      },
      {
        number: "08",
        title: "RAG e Knowledge Base",
        duration: "10 ore",
        topics: [
          "Embeddings e database vettoriali",
          "Retrieval-Augmented Generation (RAG)",
          "Costruire un chatbot che risponde sui tuoi documenti",
          "LangChain e LlamaIndex in pratica",
        ],
      },
    ],
  },
  {
    id: "avanzato",
    label: "Livello 3 — Avanzato",
    subtitle: "Da builder a esperto AI",
    color: "var(--accent-pink)",
    modules: [
      {
        number: "09",
        title: "Machine Learning Applicato",
        duration: "12 ore",
        topics: [
          "Supervised Learning: regressione e classificazione",
          "Unsupervised Learning: clustering e anomaly detection",
          "Scikit-learn: costruire e valutare modelli",
          "Feature engineering e selezione modelli",
        ],
      },
      {
        number: "10",
        title: "Agenti AI Autonomi",
        duration: "10 ore",
        topics: [
          "Architettura degli agenti AI",
          "Tool use, planning e reasoning",
          "Costruire agenti con LangGraph e CrewAI",
          "Multi-agent systems e orchestrazione",
        ],
      },
      {
        number: "11",
        title: "Fine-tuning e Modelli Custom",
        duration: "8 ore",
        topics: [
          "Quando e perché fare fine-tuning",
          "Preparare dataset di training",
          "Fine-tuning di GPT e modelli open source",
          "Valutare le performance del modello",
        ],
      },
      {
        number: "12",
        title: "AI in Produzione e Progetto Finale",
        duration: "8 ore",
        topics: [
          "Deploy di applicazioni AI",
          "Costi, scalabilità e monitoring",
          "Etica, bias e AI Act europeo",
          "Progetto finale end-to-end + certificazione",
        ],
      },
    ],
  },
];

export default function Curriculum() {
  const [activeLevel, setActiveLevel] = useState(0);
  const [openModule, setOpenModule] = useState<number | null>(0);

  const currentLevel = levels[activeLevel];

  return (
    <section className="py-32 relative bg-grid">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent-cyan)] text-sm font-mono uppercase tracking-widest">
            Il percorso
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            3 livelli, 12 moduli, 120+ ore
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un percorso progressivo che ti porta da zero a esperto AI. Ogni
            modulo include lezioni, esercizi pratici e un progetto.
          </p>
        </motion.div>

        {/* Level tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 mb-12"
        >
          {levels.map((level, i) => (
            <button
              key={level.id}
              onClick={() => {
                setActiveLevel(i);
                setOpenModule(0);
              }}
              className={`flex-1 px-5 py-4 rounded-xl border text-left transition-all duration-300 ${
                activeLevel === i
                  ? "border-[var(--accent)] bg-[var(--card-bg)] glow-box"
                  : "border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--accent)]/50"
              }`}
            >
              <div
                className="text-sm font-bold mb-1"
                style={{ color: level.color }}
              >
                {level.label}
              </div>
              <div className="text-gray-500 text-xs">{level.subtitle}</div>
            </button>
          ))}
        </motion.div>

        {/* Modules */}
        <div className="space-y-3">
          {currentLevel.modules.map((mod, i) => (
            <motion.div
              key={mod.number}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenModule(openModule === i ? null : i)}
                className="w-full text-left"
              >
                <div
                  className={`flex items-center gap-6 p-5 rounded-xl border transition-all duration-300 ${
                    openModule === i
                      ? "border-[var(--accent)] bg-[var(--card-bg)] glow-box"
                      : "border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--accent)]/50"
                  }`}
                >
                  <span
                    className="font-mono text-sm font-bold min-w-[36px]"
                    style={{ color: currentLevel.color }}
                  >
                    {mod.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg">
                      {mod.title}
                    </h3>
                  </div>
                  <span className="text-gray-500 text-sm hidden sm:block">
                    {mod.duration}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      openModule === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {openModule === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-5 pb-4 ml-[60px]"
                >
                  <ul className="space-y-2 pt-4">
                    {mod.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-gray-400"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: currentLevel.color }}
                        />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
