import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { organisasi, pengalamanProyek, pendidikan } from "../data/experience";
import Reveal from "./Reveal";

const TABS = [
  { key: "organisasi", label: "Organisasi", data: organisasi },
  { key: "proyek", label: "Pengalaman Proyek", data: pengalamanProyek },
  { key: "pendidikan", label: "Pendidikan", data: pendidikan },
];

export default function Journey() {
  const [activeTab, setActiveTab] = useState(TABS[0].key);
  const current = TABS.find((t) => t.key === activeTab);

  return (
    <section id="journey" className="py-24">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-3">03 — timeline</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Perjalanan saya
          </h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            Bukan cuma soal kode — di kampus, saya juga aktif di berbagai
            organisasi dan kepanitiaan.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative rounded-full px-5 py-2 font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                activeTab === tab.key
                  ? "text-base-bg"
                  : "border border-base-border text-ink-muted hover:border-ink-muted"
              }`}
            >
              {activeTab === tab.key && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-flow"
                  transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </Reveal>

        <div className="mt-10 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              {current.data.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="card grid gap-4 p-6 md:grid-cols-[200px_1fr] md:p-8"
                >
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-flow">
                      {item.period}
                    </p>
                    <p className="mt-1 text-sm text-ink-muted">{item.place}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {item.desc}
                    </p>
                    {item.highlights && (
                      <ul className="mt-4 space-y-2">
                        {item.highlights.map((h, j) => (
                          <li
                            key={j}
                            className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
