import useActiveSection from "../hooks/useActiveSection";

const STAGES = [
  { id: "home", label: "profile" },
  { id: "projects", label: "projects" },
  { id: "journey", label: "journey" },
  { id: "skills", label: "stack" },
  { id: "contact", label: "contact" },
];

export default function PipelineRail() {
  const active = useActiveSection(STAGES.map((s) => s.id));
  const activeIndex = STAGES.findIndex((s) => s.id === active);

  return (
    <div className="fixed left-2 top-1/2 z-40 hidden -translate-y-1/2 xl:block 2xl:left-14">
      <div className="relative flex flex-col items-center gap-10 py-2">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-base-border" />
        <div
          className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-flow to-signal transition-all duration-500"
          style={{
            height:
              activeIndex >= 0
                ? `${(activeIndex / (STAGES.length - 1)) * 100}%`
                : "0%",
          }}
        />
        {STAGES.map((stage, i) => {
          const isActive = stage.id === active;
          return (
            <a
              key={stage.id}
              href={`#${stage.id}`}
              className="group relative flex items-center"
              aria-label={`Ke bagian ${stage.label}`}
            >
              <span
                className={`relative z-10 block h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
                  isActive
                    ? "node-dot border-flow bg-flow animate-pulseDot"
                    : "border-base-border bg-base-bg group-hover:border-ink-muted"
                }`}
              />
              <span
                className={`pointer-events-none absolute left-5 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive
                    ? "translate-x-0 text-flow opacity-100"
                    : "-translate-x-1 text-ink-faint opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                }`}
              >
                {stage.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
