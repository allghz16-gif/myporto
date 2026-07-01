import { motion } from "framer-motion";
import { skills, softSkills, tools } from "../data/skills";
import Reveal from "./Reveal";

const tagContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const tagItem = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function TagGroup({ title, items, variant = "outline" }) {
  return (
    <div className="card p-7">
      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
        {title}
      </h3>
      <motion.div
        className="mt-5 flex flex-wrap gap-2"
        variants={tagContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {items.map((tag) => (
          <motion.span
            key={tag}
            variants={tagItem}
            whileHover={{ y: -2 }}
            className={
              variant === "outline"
                ? "rounded-full border border-base-border px-4 py-2 text-sm text-ink transition-colors hover:border-flow/50"
                : "rounded-full bg-base-surface2 px-4 py-2 text-sm text-ink-muted"
            }
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-3">04 — stack</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Skill & tools
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal delay={0.05}>
            <TagGroup title="Kemampuan Teknis" items={skills} variant="outline" />
          </Reveal>
          <Reveal delay={0.1}>
            <TagGroup title="Soft Skills" items={softSkills} variant="outline" />
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-2">
            <TagGroup title="Tools Sehari-hari" items={tools} variant="muted" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
