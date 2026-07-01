import { motion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-3">02 — build log</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Proyek yang saya kerjakan
          </h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            Dari dashboard analitik penjualan sampai laporan analisis data —
            setiap proyek adalah satu titik dalam pipeline belajar saya.
          </p>
        </Reveal>

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
