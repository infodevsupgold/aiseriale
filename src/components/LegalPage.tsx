"use client";

import Image from "next/image";

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <nav className="border-b border-[var(--card-border)] bg-[#050510]/90 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="AI Seriale"
              width={140}
              height={35}
              className="h-8 w-auto"
            />
          </a>
          <a
            href="/"
            className="text-sm text-gray-400 hover:text-[var(--accent-cyan)] transition-colors"
          >
            &larr; Torna al sito
          </a>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-10">
          {title}
        </h1>
        <div className="prose prose-invert prose-gray max-w-none text-gray-400 leading-relaxed [&_h2]:text-white [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-white [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2 [&_a]:text-[var(--accent-cyan)] [&_a]:underline [&_strong]:text-gray-300">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--card-border)] bg-[#030308]">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-gray-600 text-sm">
          &copy; 2025 Serial S.r.l. — C.F. e P.IVA 18246331005 — Via Gualtiero
          Serafino 20, Roma (RM)
        </div>
      </footer>
    </div>
  );
}
