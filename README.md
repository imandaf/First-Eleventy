# 🌐 Eleventy Personal Portfolio

A clean and customizable personal portfolio website built with [Eleventy (11ty)](https://www.11ty.dev/), [Tailwind CSS](https://tailwindcss.com/), and [Nunjucks](https://mozilla.github.io/nunjucks/). Ideal for showcasing your bio, projects, and contact info with a minimal, fast-loading static site.

---

## 🚀 Features

- ⚡ Fast static site built with Eleventy (11ty)
- 🎨 Styled with Tailwind CSS
- 🧠 Template-driven with Nunjucks
- 🌘 Dark mode toggle (Alpine.js)
- 📁 Markdown-based project entries
- 📱 Fully responsive design
- 🛠 Easy to deploy (Netlify, Vercel, GitHub Pages)

---

## 📁 Project Structure

```

eleventy-portfolio/
├── .eleventy.js               # Eleventy config
├── tailwind.config.js         # Tailwind setup
├── postcss.config.js          # PostCSS pipeline
├── package.json
└── src/
├── index.njk              # Homepage
├── about.njk              # About page
├── contact.njk            # Contact page
├── projects.njk           # Projects listing
├── \_data/
│   └── site.json          # Site-wide data (title, author, social links)
├── \_includes/
│   ├── layouts/
│   │   └── base.njk       # Base layout
│   └── components/        # Reusable UI parts
│       ├── header.njk
│       ├── footer.njk
│       └── project-card.njk
├── styles/
│   └── tailwind.css       # Tailwind entrypoint
├── img/                   # Static assets
└── projects/
└── project-1.md       # Example project in markdown

````

---

## 🛠 Installation

```bash
git clone https://github.com/yourusername/eleventy-portfolio.git
cd eleventy-portfolio
npm install
````

---

## 🧪 Development

```bash
npm run dev
```

* Starts Tailwind CSS in watch mode
* Runs Eleventy local dev server at: `http://localhost:8080`

---

## 🏗 Build for Production

```bash
npm run build
```

* Builds the Tailwind CSS and compiles Eleventy templates into `dist/`.

---

## 🧰 Customize

Edit content in:

* `src/index.njk` — homepage greeting
* `src/_data/site.json` — name, title, social links
* `src/projects/*.md` — your project entries

---

## 📦 Deployment

Deploy the contents of `dist/` to any static hosting service:

* [Netlify](https://netlify.com)
* GitHub Pages
* Cloudflare Pages

---

## 📄 License

MIT — free to use and customize

---

## 🙋‍♂️ Author

Created by **Imanda Fachruddin**
Feel free to connect via [LinkedIn](https://www.linkedin.com/in/imanda-fachruddin-072182105) or [GitHub](https://github.com/imandaf).
