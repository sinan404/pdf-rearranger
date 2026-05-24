# PDF Rearranger

A client-side web app that rearranges and microsizes PDF pages — fully in the browser. No server. No uploads. Your files never leave your device.

![PDF Rearranger](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react) ![Vite](https://img.shields.io/badge/Vite-5-purple?style=flat-square&logo=vite) ![TailwindCSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss) ![pdf-lib](https://img.shields.io/badge/pdf--lib-1.17-red?style=flat-square)

---

## Features

- **Rearrange pages** — applies a fixed odd/even stream algorithm to reorder pages
- **Microsize** — compresses 9 pages into 1 page (3×3 portrait grid)
- **Both combined** — rearrange first, then microsize
- **Live preview** — 4-column page grid preview before download
- **Download & Print** — export reordered PDF or print directly
- **100% client-side** — no server, no data sent anywhere
- **Gravity stars background** — interactive animated background

---

## Algorithm

Pages are split into odd and even streams, then grouped into 9-element sets:

- **Odd sets** — pages pulled in ascending order, padded with blank pages
- **Even sets** — processed in reversed 3-element sub-blocks

**Example (N = 22):**
```
Set 1 (Odd):  [1, 3, 5, 7, 9, 11, 13, 15, 17]
Set 2 (Even): [6, 4, 2, 12, 10, 8, 18, 16, 14]
Set 3 (Odd):  [19, 21, 0, 0, 0, 0, 0, 0, 0]
Set 4 (Even): [0, 22, 20, 0, 0, 0, 0, 0, 0]
```

`0` = blank page inserted in output.

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS v4 |
| PDF Read/Write | pdf-lib |
| PDF Preview/Render | pdfjs-dist (PDF.js) |
| Font | Poppins (Google Fonts) |
| Hosting | Vercel |

---

## Getting Started

### Prerequisites
- Node.js v18+
- npm

### Install & Run

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/pdf-rearranger.git
cd pdf-rearranger

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

Output goes to `/dist` — ready to deploy on any static host.

---

## Project Structure

```
src/
├── components/
│   ├── EditorHero.jsx        # Hero section
│   ├── Header.jsx            # Navbar
│   ├── DashboardCards.jsx    # Feature cards
│   ├── OptionSelector.jsx    # Rearrange/microsize checkboxes
│   ├── PreviewGrid.jsx       # 4-column page preview
│   └── GravityStars.jsx      # Animated stars background
├── engine/
│   └── algorithm.js          # Odd/even stream algorithm
├── pdf/
│   ├── parser.js             # Read PDF via pdf-lib
│   ├── builder.js            # Build reordered PDF
│   └── microsize.js          # 9-per-page compression
└── App.jsx                   # Root component + state
```

---

## How to Use

1. Open the app
2. Upload a PDF (drag & drop or click Browse)
3. Select what to do:
   - ☑ Rearrange pages
   - ☑ Convert to microsized
   - ☑ Both
4. Click **Confirm & Process**
5. Preview the result
6. Click **Download PDF** or **Print**

---

## License

MIT — free to use and modify.