import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container-page">
        <Reveal>
          <div className="card overflow-hidden p-10 md:p-14">
            <p className="eyebrow mb-3">05 — kontak</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Ada proyek atau ide?
              <br />
              <span className="text-flow">Ceritakan ke saya.</span>
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
                  Email
                </p>
                <a
                  href="mailto:andhikaahmad789@gmail.com"
                  className="mt-2 block text-ink transition-colors hover:text-flow"
                >
                  andhikaahmad789@gmail.com
                </a>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
                  Telepon
                </p>
                <a
                  href="tel:089677511261"
                  className="mt-2 block text-ink transition-colors hover:text-flow"
                >
                  0896-7751-1261
                </a>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
                  Lokasi
                </p>
                <p className="mt-2 text-ink">Malang, Jawa Timur, Indonesia</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
