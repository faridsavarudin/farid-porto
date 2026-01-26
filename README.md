# Portfolio Website - Farid Savarudin

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing my work as an Android Developer.

## 🚀 Features

- ✨ Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Smooth animations with Framer Motion
- 🌙 Dark theme optimized
- ⚡ Fast performance with Next.js 15
- 📧 Contact form
- 🎯 SEO optimized

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Deployment:** Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/faridsavarudin/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy to Vercel

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## 📝 Customization

### Update Personal Information

Edit the following files to customize with your information:

1. **Hero Section:** `src/components/Hero.tsx`
   - Update name, title, and social links

2. **About Section:** `src/components/About.tsx`
   - Modify your bio and highlights

3. **Skills Section:** `src/components/Skills.tsx`
   - Add or remove your skills

4. **Projects Section:** `src/components/Projects.tsx`
   - Update with your actual projects

5. **Contact Section:** `src/components/Contact.tsx`
   - Change contact information

### Update Meta Tags

Edit `src/app/layout.tsx` to update SEO meta tags.

## 📂 Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

Farid Savarudin - farid.savarudin@example.com

Portfolio: [https://faridsavarudin.vercel.app](https://faridsavarudin.vercel.app)

GitHub: [@faridsavarudin](https://github.com/faridsavarudin)

---

Made with ❤️ by Farid Savarudin
