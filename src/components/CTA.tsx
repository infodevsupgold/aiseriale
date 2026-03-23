"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[var(--accent)] rounded-full blur-[300px] opacity-10" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-[var(--accent-cyan)] rounded-full blur-[200px] opacity-5" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-[var(--accent-pink)] rounded-full blur-[200px] opacity-5" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Il futuro è AI.
            <br />
            <span className="bg-gradient-to-r from-[var(--accent)] via-[var(--accent-cyan)] to-[var(--accent-pink)] bg-clip-text text-transparent">
              Tu sarai pronto?
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            Non aspettare che l&apos;AI cambi il tuo settore. Preparati oggi per
            guidare il cambiamento di domani.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contatti"
              className="group px-10 py-5 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-cyan)] text-white font-bold text-lg hover:shadow-[0_0_60px_rgba(108,99,255,0.5)] transition-all duration-300"
            >
              Prenota una consulenza gratuita
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
