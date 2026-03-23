"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] bg-[#030308]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="AI Seriale"
              width={160}
              height={40}
              className="h-9 w-auto mb-4"
            />
            <p className="text-gray-500 leading-relaxed max-w-sm">
              Il percorso di formazione AI di Serial Srl. Impara
              l&apos;intelligenza artificiale con un approccio pratico e
              orientato al risultato.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Percorso</h4>
            <ul className="space-y-3">
              {[
                { label: "Programma", href: "#programma" },
                { label: "Per chi è", href: "#target" },
                { label: "Prezzi", href: "#prezzi" },
                { label: "FAQ", href: "#faq" },
                { label: "Contatti", href: "#contatti" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[var(--accent-cyan)] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contatti</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a
                  href="mailto:info@aiseriale.it"
                  className="hover:text-[var(--accent-cyan)] transition-colors"
                >
                  info@aiseriale.it
                </a>
              </li>
              <li>Via Gualtiero Serafino 20</li>
              <li>Roma (RM)</li>
              <li className="pt-2">
                <span className="text-gray-600">
                  Serial S.r.l.
                  <br />
                  C.F. e P.IVA 18246331005
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-[var(--card-border)] flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Serial S.r.l. Tutti i diritti
            riservati.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-400 transition-colors"
            >
              Termini di Servizio
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-400 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
