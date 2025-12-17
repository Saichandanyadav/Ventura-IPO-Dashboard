# Ventura IPO Dashboard

A modern, high-performance IPO tracking dashboard built with **Next.js 15**, **Tailwind CSS**, and **Lucide Icons**. This application allows users to browse current IPOs, view detailed company metrics, and track bidding timelines with full responsive support.

## 🔗 Live Demo

**Deployment URL:** [https://chandan-ventura-ipo-dashboard.vercel.app/](https://chandan-ventura-ipo-dashboard.vercel.app/)

## 🚀 Features

### 1. IPO List Page

* **Comprehensive Table:** Displays Company branding, Issue Date, Size, and Price Range.
* **Interactive UI:** Hover effects on rows and direct navigation to detailed views.
* **Responsive Metrics:** "Min Invest/Qty" optimized for both desktop and mobile layouts.

### 2. IPO Details Page

* **Status Persistence:** "Apply Now" functionality uses `localStorage` to remember your application status across refreshes.
* **Visual Timeline:** A custom-built stepper showing the IPO lifecycle (Automatic orientation: Horizontal for Desktop / Vertical for Mobile).
* **Print/Download:** One-click PDF/Print generation using CSS Media Queries to remove UI clutter (buttons/nav) from the final document.
* **Company Insights:** Expandable "Read More" section for company descriptions.

### 3. Design Excellence

* **Theme Toggle:** Integrated Light/Dark mode with persistent system detection.
* **Typography:** Professional **Sora** font implementation for improved financial readability.
* **Coming Soon:** Robust placeholder pages for Invest, Trade, and Market modules.

## 📂 Directory Layout

```text
ventura-ipo-project/
├── app/
│   ├── coming-soon/
│   │   └── page.tsx          # Feature placeholder page
│   ├── ipo/
│   │   └── [id]/
│   │       └── page.tsx      # Dynamic IPO Details view
│   ├── favicon.ico
│   ├── globals.css           # Tailwind v4 & CSS Variables (Theme)
│   ├── layout.tsx            # ThemeProvider, Navbar, and Footer
│   └── page.tsx              # IPO List (Home) Dashboard
├── data/
│   └── mockData.ts           # Centralized IPO data objects (IPO content)
├── public/
│   ├── next.svg
│   └── [logo-files]          # Company logo assets (.png, .jpg, .jfif)
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json

```

## 🛠️ Installation & Local Setup

1. **Clone the repository:**
```bash
git clone https://github.com/saichandanyadav/ventura-ipo-project.git
cd ventura-ipo-project

```


2. **Install dependencies:**
```bash
npm install

```


3. **Start development server:**
```bash
npm run dev

```


4. **Build for production:**
```bash
npm run build

```


## 👨‍💻 Developer

**Sai Chandan Yadav**

* **Email:** [saichandhanyadav2002@gmail.com](mailto:saichandhanyadav2002@gmail.com)
* **LinkedIn:** [linkedin.com/in/saichandanyadav](https://www.google.com/search?q=https://linkedin.com/in/saichandanyadav)
* **GitHub:** [@saichandanyadav](https://www.google.com/search?q=https://github.com/saichandanyadav)

---
