export default function Footer() {
  return (
    <footer className="border-t border-base-border py-8">
      <div className="container-page flex flex-col items-center justify-center gap-3 text-xs text-ink-faint md:flex-row">
        <p className="font-mono">© {new Date().getFullYear()} Andhika. All rights reserved.</p>
      </div>
    </footer>
  );
}