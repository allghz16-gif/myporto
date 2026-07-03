import { motion } from "framer-motion";

const LINKS = [
  { id: "projects", label: "Proyek" },
  { id: "journey", label: "Perjalanan" },
  { id: "skills", label: "Skill" },
  { id: "contact", label: "Kontak" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-base-border/80 bg-base-bg/80 backdrop-blur"
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight">
          Andhika<span className="text-flow">.</span>dev
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted transition-colors hover:text-flow"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full border border-flow/40 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-flow transition-colors hover:bg-flow hover:text-base-bg md:inline-block"
        >
          Hubungi Saya
        </a>
      </nav>
    </motion.header>
  );
}
