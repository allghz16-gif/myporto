import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import socials from "../data/socials";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const SOCIAL_LINKS = [
  { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: socials.github, icon: Github, label: "GitHub" },
  { href: socials.instagram, icon: Instagram, label: "Instagram" },
];

const GREETING = "// halo, saya";

function useTypewriter(
  text,
  {
    typeSpeed = 65,
    typeSpeedVariance = 25, // variasi acak biar terasa natural, bukan robotic
    deleteSpeed = 28,
    pauseAfterType = 1800,
    pauseAfterDelete = 500,
    startDelay = 400,
  } = {}
) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let raf;
    let i = 0;
    let phase = "typing"; // typing -> pausing -> deleting -> waiting -> typing...
    let last = performance.now();
    let interval = startDelay;

    const randomSpeed = (base, variance) => base + (Math.random() * variance - variance / 2);

    const loop = (now) => {
      const elapsed = now - last;

      if (elapsed >= interval) {
        last = now;

        if (phase === "typing") {
          i += 1;
          setDisplayed(text.slice(0, i));
          if (i >= text.length) {
            phase = "pausing";
            interval = pauseAfterType;
          } else {
            interval = randomSpeed(typeSpeed, typeSpeedVariance);
          }
        } else if (phase === "pausing") {
          phase = "deleting";
          interval = deleteSpeed;
        } else if (phase === "deleting") {
          i -= 1;
          setDisplayed(text.slice(0, i));
          if (i <= 0) {
            phase = "waiting";
            interval = pauseAfterDelete;
          } else {
            interval = randomSpeed(deleteSpeed, 10);
          }
        } else if (phase === "waiting") {
          phase = "typing";
          interval = typeSpeed;
        }
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [text, typeSpeed, typeSpeedVariance, deleteSpeed, pauseAfterType, pauseAfterDelete, startDelay]);

  return displayed;
}

export default function Hero() {
  const typed = useTypewriter(GREETING);

  return (
    <section id="home" className="relative overflow-hidden bg-grid-fade pt-20 pb-24 md:pt-28">
      <motion.div
        className="container-page grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div>
          <motion.p variants={item} className="eyebrow mb-5 flex min-h-[1em] items-center gap-1">
            {typed}
            <motion.span
              className="inline-block h-3.5 w-[7px] bg-flow align-middle"
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 0.5, 1] }}
            />
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl"
          >
            Andhika Ahmad
            <br />
            Ghazali.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 bg-gradient-to-r from-flow via-signal to-flow bg-[length:200%_auto] bg-clip-text font-mono text-sm uppercase tracking-[0.15em] text-transparent animate-gradientX sm:text-base"
          >
            IT Student · Full-Stack Developer · Event Organizer
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-md text-base leading-relaxed text-ink-muted">
            Mahasiswa Teknologi Informasi di{" "}
            <span className="text-ink">Universitas Brawijaya</span> yang senang
            berpindah dari satu dunia ke dunia lain — merapikan kode di satu
            sisi, merapikan rundown acara di sisi lain. Sama-sama soal
            membangun sesuatu yang bisa diandalkan orang lain.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-flow px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-base-bg transition-transform hover:-translate-y-0.5"
            >
              Lihat Proyek
            </a>
            <a
              href="/cv-andhika-ahmad-ghazali.pdf"
              download
              className="rounded-full border border-base-border px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:border-ink-muted"
            >
              Unduh CV
            </a>
          </motion.div>

          {/* Social icons — ganti URL di src/data/socials.js */}
          <motion.div variants={item} className="mt-8 flex items-center gap-5">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-ink-muted transition-colors hover:text-flow"
              >
                <Icon size={20} strokeWidth={1.75} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative mx-auto w-full max-w-sm animate-float"
        >
          {/* Signature glow — pulses gently behind the photo */}
          <motion.div
            className="absolute inset-0 -z-10 scale-110 rounded-full bg-gradient-to-br from-flow/25 via-flow/10 to-signal/20 blur-3xl"
            animate={{ opacity: [0.6, 1, 0.6], scale: [1.05, 1.15, 1.05] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="card overflow-hidden p-2"
            whileHover={{ scale: 1.02, rotate: -0.5 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <img
              src="/andhika-photo.jpg"
              alt="Foto Andhika Ahmad Ghazali"
              className="aspect-[4/5] w-full rounded-xl object-cover"
            />
          </motion.div>

          <div className="absolute -bottom-2 -left-6 flex items-center gap-2 rounded-full bg-base-surface/90 px-4 py-2 font-mono text-[11px] text-ink-muted shadow-xl backdrop-blur">
            <span className="h-2 w-2 animate-pulseDot rounded-full bg-signal" />
            Andhika Ahmad Ghazali
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}