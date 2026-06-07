# Astrawork Website Jasa Profesional

> Website company profile untuk Astrawork, penyedia jasa pengembangan digital dan arsitektur & sipil. Solusi Tepat, Layanan Bersahabat.

🌐 **Live:** [astrawork-frontend.vercel.app](https://astrawork-frontend.vercel.app)

---

## Tentang Proyek

Astrawork adalah website company profile yang dibangun sebagai platform pemasaran jasa secara online. Website ini menampilkan layanan yang ditawarkan, informasi tim, dan jalur kontak langsung via WhatsApp — memudahkan calon klien untuk berkonsultasi dan memesan layanan.

Yang membuat Astrawork unik adalah kombinasi layanan yang tidak biasa: **jasa digital (website, aplikasi, sistem bisnis)** sekaligus **jasa arsitektur & sipil (desain rumah, bangunan komersial, perencanaan konstruksi)** dalam satu platform.

---

## Halaman

| Halaman | URL | Deskripsi |
|---|---|---|
| Beranda | `/` | Hero section + ringkasan layanan |
| Layanan | `/Layanan` | Detail lengkap semua layanan |
| Tentang Kami | `/TentangKami` | Profil tim dan perusahaan |
| Kontak | `/Kontak` | Form & info kontak |
| FAQ | `/FAQ` | Pertanyaan yang sering diajukan |

---

## Layanan yang Ditawarkan

**Digital:**
- **Website** — Company profile, e-commerce, landing page
- **Aplikasi** — Mobile apps (iOS & Android), desktop apps
- **Sistem Bisnis** — POS system, ERP sederhana, manajemen inventaris, team work system

**Konstruksi:**
- **Arsitektur & Sipil** — Desain rumah, bangunan komersial, perencanaan konstruksi

---

## Tech Stack

| Teknologi | Versi | Fungsi |
|---|---|---|
| [Next.js](https://nextjs.org) | 15.5.2 | Framework |
| [React](https://react.dev) | 19.1.0 | UI library |
| [Framer Motion](https://www.framer.com/motion) | ^12.23.12 | Animasi & transisi |
| [Lucide React](https://lucide.dev) | ^0.544.0 | Icon library |
| [Tailwind CSS](https://tailwindcss.com) | ^4 | Styling |
| [TypeScript](https://www.typescriptlang.org) | ^5 | Type safety (99.1% codebase) |
| [Turbopack](https://turbo.build/pack) | (via Next.js) | Build tool |

---

## Struktur Proyek

```
astrawork-frontend/
├── src/
│   └── app/
│       ├── page.tsx          # Halaman Beranda
│       ├── Layanan/          # Halaman Layanan
│       ├── TentangKami/      # Halaman Tentang Kami
│       ├── Kontak/           # Halaman Kontak
│       └── FAQ/              # Halaman FAQ
├── public/                   # Aset statis (logo, gambar)
├── next.config.ts
└── package.json
```

---

## Memulai (Development)

### Prasyarat

- Node.js >= 18
- npm

### Instalasi

```bash
# Clone repository
git clone https://github.com/ElImam21/AstraworkFrontend.git
cd AstraworkFrontend

# Install dependencies
npm install
```

### Menjalankan Dev Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## Scripts

| Script | Fungsi |
|---|---|
| `npm run dev` | Dev server dengan Turbopack |
| `npm run build` | Build production dengan Turbopack |
| `npm run start` | Menjalankan production server |
| `npm run lint` | Menjalankan ESLint |

---

## Deploy

Di-deploy menggunakan **[Vercel](https://vercel.com)**. Setiap push ke branch `main` otomatis ter-deploy ke [astrawork-frontend.vercel.app](https://astrawork-frontend.vercel.app).

---

## Kontak

Untuk konsultasi layanan, hubungi langsung via WhatsApp:
📱 [+62 895-3222-76944](https://wa.me/62895322276944)

---

## Lisensi

Private — Hak cipta © 2025 Astrawork. Semua hak dilindungi.
