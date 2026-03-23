"use client";

import { motion } from "framer-motion";

const instructors = [
  {
    name: "Da definire",
    role: "AI Engineer & Prompt Specialist",
    bio: "Esperto di prompt engineering e automazione AI con anni di esperienza nello sviluppo di soluzioni basate su LLM.",
    skills: ["Prompt Engineering", "LLM", "Automazione"],
  },
  {
    name: "Da definire",
    role: "Data Scientist & ML Engineer",
    bio: "Specialista in Machine Learning e Deep Learning con esperienza in progetti enterprise di computer vision e NLP.",
    skills: ["Machine Learning", "Python", "Deep Learning"],
  },
  {
    name: "Da definire",
    role: "AI Strategy Consultant",
    bio: "Consulente strategico per l'adozione di AI in azienda. Aiuta le imprese a trasformare i processi con l'intelligenza artificiale.",
    skills: ["AI Strategy", "Business", "Change Management"],
  },
];

export default function Instructors() {
  return (
    <section id="docenti" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[var(--accent-cyan)] text-sm font-mono uppercase tracking-widest">
            I docenti
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Impara dai migliori
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professionisti del settore che lavorano quotidianamente con l&apos;AI
            e condividono la loro esperienza pratica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {instructors.map((instructor, i) => (
            <motion.div
              key={instructor.name + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="gradient-border"
            >
              <div className="bg-[var(--card-bg)] backdrop-blur-sm rounded-2xl p-8 text-center h-full">
                {/* Avatar placeholder */}
                <div className="w-24 h-24 rounded-full mx-auto mb-6 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-cyan)] flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white/80"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {instructor.name}
                </h3>
                <p className="text-[var(--accent-cyan)] text-sm font-mono mb-4">
                  {instructor.role}
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {instructor.bio}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {instructor.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-gray-300 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
