<div align="center">
  <h1>🚀 Farid Savarudin - Portfolio Website</h1>
  <p><strong>Modern & Interactive Portfolio Showcasing Android Development Excellence</strong></p>
  
  <p>
    <a href="https://farid-porto.vercel.app"><img src="https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=vercel" alt="Live Demo"></a>
    <a href="https://github.com/faridsavarudin/farid-porto"><img src="https://img.shields.io/badge/GitHub-Repo-181717?style=for-the-badge&logo=github" alt="GitHub"></a>
  </p>
</div>

---

## 📋 About

A cutting-edge portfolio website featuring a sleek, responsive design that highlights my professional journey as an Android Developer. Built with modern web technologies and optimized for performance, this portfolio showcases 8+ years of mobile development experience across various industries.

### ✨ Key Highlights

- 🎨 **Modern UI/UX** - Clean, intuitive design with smooth animations
- 📱 **Fully Responsive** - Seamless experience across all devices
- 🎯 **Interactive Projects** - Click-to-view detailed project modals
- ⚡ **Blazing Fast** - Optimized performance with Next.js 15
- 🌙 **Dark Theme** - Eye-friendly dark mode interface
- 🔍 **SEO Optimized** - Enhanced discoverability
- ♿ **Accessible** - WCAG compliant design

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Framework** | ![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=flat&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React_19-61DAFB?style=flat&logo=react&logoColor=black) |
| **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) |
| **Styling** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) |
| **Animation** | ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white) |
| **Icons** | ![React Icons](https://img.shields.io/badge/React_Icons-E91E63?style=flat&logo=react&logoColor=white) |
| **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) |

</div>

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/faridsavarudin/farid-porto.git
   cd farid-porto
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Lint & Type Check

```bash
# Run ESLint
npm run lint

# Type check with TypeScript
npx tsc --noEmit
```

---

## 📂 Project Structure

```
farid-porto/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with metadata
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── Navbar.tsx        # Navigation bar
│       ├── Hero.tsx          # Hero section
│       ├── About.tsx         # About section
│       ├── Skills.tsx        # Skills showcase
│       ├── Projects.tsx      # Projects with modal
│       ├── Contact.tsx       # Contact form
│       └── Footer.tsx        # Footer section
├── public/                   # Static assets
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS config
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies
```

---

## 🎨 Features Breakdown

### 🏠 Hero Section
- Eye-catching introduction
- Animated text effects
- Social media links
- Call-to-action buttons

### 👨‍💻 About Section
- Professional background
- Key highlights & achievements
- Download CV functionality
- Statistics display

### 🛠️ Skills Section
- Categorized skill display
- Technology icons
- Interactive hover effects
- Skill proficiency indicators

### 💼 Projects Section
- **8 Featured Projects** from 2017-Present
- Interactive project cards
- Click-to-view detailed modals
- Each project includes:
  - Company & date range
  - Key highlights & achievements
  - Technical challenges
  - Impact & results
  - Technology stack
  - Project duration & role

### 📧 Contact Section
- Contact form integration
- Social media links
- Location information
- Email & phone details

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/faridsavarudin/farid-porto)

**Via Dashboard:**
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy" (Vercel auto-detects Next.js)

**Via CLI:**
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Deploy to Other Platforms

<details>
<summary>Netlify</summary>

```bash
npm run build
# Deploy the .next folder
```
</details>

<details>
<summary>Railway</summary>

```bash
# Use railway.app dashboard
# Connect GitHub repo and deploy
```
</details>

---

## 🎯 Performance

- ⚡ **Lighthouse Score:** 95+
- 🚀 **First Contentful Paint:** < 1.5s
- 📦 **Bundle Size:** Optimized with Next.js
- 🖼️ **Image Optimization:** Automatic with Next.js Image
- 📱 **Mobile-First:** Responsive design

---

## 🛠️ Customization Guide

### Update Personal Information

1. **Hero Section** - [src/components/Hero.tsx](src/components/Hero.tsx)
   ```typescript
   // Update name, title, description, and social links
   ```

2. **About Section** - [src/components/About.tsx](src/components/About.tsx)
   ```typescript
   // Modify bio, highlights, and statistics
   ```

3. **Skills** - [src/components/Skills.tsx](src/components/Skills.tsx)
   ```typescript
   // Add/remove skills in each category
   ```

4. **Projects** - [src/components/Projects.tsx](src/components/Projects.tsx)
   ```typescript
   // Update projects array with your projects
   const projects = [
     {
       title: "Your Project",
       dateRange: "Jan 2024 - Present",
       company: "Your Company",
       // ... more details
     }
   ];
   ```

5. **Contact Info** - [src/components/Contact.tsx](src/components/Contact.tsx)
   ```typescript
   // Update email, phone, and location
   ```

### Customize Colors

Edit [tailwind.config.ts](tailwind.config.ts):
```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      // ... more colors
    }
  }
}
```

---

## 📱 Sections Overview

| Section | Description | Features |
|---------|-------------|----------|
| **Hero** | Landing page with introduction | Animated text, social links, CTA |
| **About** | Professional background | Bio, highlights, download CV |
| **Skills** | Technical expertise | Categorized skills, icons |
| **Projects** | Portfolio showcase | 8 projects with detailed modals |
| **Contact** | Get in touch | Contact form, social links |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Farid Savarudin**

- 🌐 Portfolio: [farid-porto.vercel.app](https://farid-porto.vercel.app)
- 💼 LinkedIn: [linkedin.com/in/faridsavarudin](https://linkedin.com/in/faridsavarudin)
- 📧 Email: faridsavarudin@gmail.com
- 🐙 GitHub: [@faridsavarudin](https://github.com/faridsavarudin)

---

## 🌟 Show Your Support

Give a ⭐️ if you like this project!

---

<div align="center">
  <p>Made with ❤️ by Farid Savarudin</p>
  <p>© 2025 All rights reserved</p>
</div>

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
