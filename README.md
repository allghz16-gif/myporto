# Andhika — Portfolio Website

Portfolio pribadi dibangun dengan **React (Vite) + Tailwind CSS**, terinspirasi
dari struktur portfolio referensi, dengan tambahan bagian **Pengalaman
Organisasi** semasa kuliah.

## Struktur Proyek

```
andhika-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/                 # taruh file statis (CV, favicon, foto profil) di sini
└── src/
    ├── main.jsx             # entry point React
    ├── App.jsx               # merangkai semua section
    ├── index.css              # tailwind base + utility kustom
    ├── data/                   # konten portfolio (edit di sini, bukan di komponen)
    │   ├── projects.js
    │   ├── experience.js         # organisasi, proyek, pendidikan
    │   └── skills.js
    ├── hooks/
    │   └── useActiveSection.js    # scroll-spy untuk pipeline rail
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Projects.jsx
        ├── ProjectCard.jsx
        ├── Journey.jsx             # tab: Organisasi / Proyek / Pendidikan
        ├── Skills.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── PipelineRail.jsx         # elemen "data flow" khas — signature visual
```

## Cara Menjalankan di VS Code

1. Buka folder `andhika-portfolio` di VS Code.
2. Buka terminal (`` Ctrl+` ``), lalu install dependencies:

   ```bash
   npm install
   ```

3. Jalankan development server:

   ```bash
   npm run dev
   ```

4. Buka link yang muncul di terminal (biasanya `http://localhost:5173`).

## Cara Edit Konten

- **Ganti nama, deskripsi, kontak** → edit langsung di `src/components/Hero.jsx` dan `src/components/Contact.jsx`.
- **Tambah/edit proyek** → edit array di `src/data/projects.js`.
- **Tambah/edit pengalaman organisasi, proyek, atau pendidikan** → edit `src/data/experience.js`.
- **Tambah/edit skill & tools** → edit `src/data/skills.js`.
- **Ganti foto profil / CV** → taruh file di folder `public/`, lalu referensikan misalnya `/cv-andhika.pdf`.

## Build untuk Production

```bash
npm run build
```

Hasil build akan ada di folder `dist/`, siap di-deploy ke Vercel, Netlify, atau GitHub Pages.

## Konsep Desain

- **Warna**: dasar navy-hitam (`#0B0D12`) dengan aksen oranye "data flow" (`#FF8A4C`) dan hijau "signal" (`#34D399`) — terinspirasi tampilan dashboard/terminal, selaras dengan proyek Pipelytcs.
- **Tipografi**: Space Grotesk (judul), Inter (body), JetBrains Mono (label & data).
- **Signature element**: rel pipeline vertikal di sisi kiri layar (desktop) yang menyala mengikuti scroll — merepresentasikan alur data, senada dengan konsep "Pipelytcs".
