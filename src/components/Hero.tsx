"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const words = [
  "Prompt Engineering",
  "Automazione AI",
  "Machine Learning",
  "AI per il Business",
  "Agenti AI",
];

function TypeWriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const timeout = deleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <span className="text-[var(--accent-cyan)]">
      {text}
      <span className="cursor-blink text-[var(--accent-cyan)]">|</span>
    </span>
  );
}

function ParticleField() {
  const [particles, setParticles] = useState<
    { x: number; y: number; size: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 50 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[var(--accent)]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: 0.3,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden">
      <ParticleField />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--accent)] rounded-full blur-[150px] opacity-20 pulse-ring" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--accent-cyan)] rounded-full blur-[150px] opacity-15 pulse-ring" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-pink)] rounded-full blur-[200px] opacity-5" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/images/favicon.png"
            alt="AI Seriale"
            width={80}
            height={80}
            className="w-20 h-20"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-400">
              Iscrizioni aperte — Posti limitati
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-6"
        >
          <span className="text-white">Diventa esperto di</span>
          <br />
          <span className="glow-text bg-gradient-to-r from-[var(--accent)] via-[var(--accent-cyan)] to-[var(--accent-pink)] bg-clip-text text-transparent">
            Intelligenza Artificiale
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-4 h-10"
        >
          Impara <TypeWriter />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg text-gray-500 max-w-2xl mx-auto mb-10"
        >
          Il percorso formativo completo per padroneggiare l&apos;AI e
          trasformare la tua carriera. Dalle basi all&apos;implementazione
          avanzata, con 3 livelli di specializzazione.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contatti"
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-cyan)] text-white font-semibold text-lg hover:shadow-[0_0_40px_rgba(108,99,255,0.5)] transition-all duration-300"
          >
            Prenota una consulenza gratuita
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </a>
          <a
            href="#programma"
            className="px-8 py-4 rounded-full border border-[var(--card-border)] text-gray-300 font-semibold text-lg hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all duration-300"
          >
            Scopri il programma
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "120+", label: "Ore di formazione" },
            { value: "3", label: "Livelli di percorso" },
            { value: "100%", label: "Pratico e applicato" },
            { value: "1:1", label: "Consulenza personalizzata" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white glow-cyan">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gray-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
