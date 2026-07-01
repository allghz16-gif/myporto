import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.link}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="card group flex flex-col justify-between p-6 transition-colors hover:border-flow/50 md:p-7"
    >
      <div>
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-xs text-ink-faint">{project.id}</span>
          <span className="rounded-full border border-base-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-signal">
            {project.status}
          </span>
        </div>
        <p className="eyebrow mb-2">{project.category}</p>
        <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-flow">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-base-surface2 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
