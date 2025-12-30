# 🌟 Personal Portfolio Website

<div align="center">

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**A modern, responsive, and feature-rich personal portfolio website with RTL support**

[View Demo](https://thismohamed.github.io/Personal-Portfolio) 

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running Locally](#running-locally)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
- [Performance Optimization](#-performance-optimization)
- [Browser Support](#-browser-support)
- [Accessibility](#-accessibility)
- [SEO Features](#-seo-features)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Overview

A professional, fully responsive personal portfolio website built with modern web technologies. Features Arabic (RTL) language support, dark/light theme toggle, customizable color themes, and smooth animations. Designed for front-end developers to showcase their skills, projects, and professional experience.

### ✨ Key Highlights

- 🌙 **Dark/Light Mode**: Seamless theme switching with persistent preferences
- 🎨 **6 Color Themes**: Multiple pre-built color schemes to match your style
- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop
- ♿ **Accessible**: WCAG 2.1 compliant with keyboard navigation support
- 🚀 **Performance**: Optimized assets and lazy loading for fast page loads
- 🌐 **RTL Support**: Full right-to-left language support for Arabic
- 📊 **SEO Ready**: Meta tags, Open Graph, and Twitter Card integration
- 🎭 **Smooth Animations**: Engaging transitions and scroll effects

---

## 🚀 Features

### 🎨 Theme Customization
- **Dark/Light Mode Toggle**: Switch between dark and light themes with smooth transitions
- **6 Pre-defined Color Themes**:
  - Purple Blue (Default)
  - Pink Orange
  - Green Emerald
  - Blue Cyan
  - Red Rose
  - Amber Orange
- **Font Family Options**: Multiple Arabic font choices (Alexandria, Cairo, Tajawal)
- **Persistent Settings**: Theme preferences saved in localStorage

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints for all device sizes
- Touch-optimized navigation
- Adaptive layouts and components

### 🎯 Sections
1. **Hero Section**: Animated introduction with gradient text
2. **About**: Professional bio with profile image
3. **Skills**: Tech stack with animated icons
4. **Experience**: Timeline-based work history
5. **Portfolio**: Filterable project gallery
6. **Contact**: Form with validation

### 🔧 Interactive Features
- Smooth scroll navigation with active section highlighting
- Mobile hamburger menu with slide animation
- Scroll-to-top button with visibility toggle
- Project filtering system
- Form validation
- Custom dropdown selects
- Animated skill progress bars

### 🌐 Internationalization
- Full RTL (Right-to-Left) support for Arabic
- Arabic font families optimized for web
- Localized content and UI elements

---

## 🛠 Technologies Used

### Core Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Vanilla JS for interactivity

### Frameworks & Libraries
- **TailwindCSS v4.1.17**: Utility-first CSS framework
- **Font Awesome 7.0.1**: Icon library for UI elements
- **Google Fonts**: Alexandria, Cairo, and Tajawal Arabic fonts

### Tools & Practices
- **Responsive Design**: Mobile-first approach
- **CSS Custom Properties**: For theme customization
- **LocalStorage API**: For persistent settings
- **Intersection Observer**: For scroll animations
- **Resource Hints**: Preconnect, preload for performance

---

## 📥 Getting Started

### Prerequisites

To run this project, you only need a modern web browser. No build tools or package managers are required!

- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.) for customization
- Basic knowledge of HTML, CSS, and JavaScript (for modifications)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ThisMohamed/Personal-Portfolio.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd personal-portfolio
   ```

3. **Open the project**
   - Simply open `index.html` in your browser, or
   - Use a local development server (recommended)

### Running Locally

#### Method 1: Direct File Opening
Double-click on `index.html` to open it in your default browser.

#### Method 2: Using Python (Recommended)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then visit `http://localhost:8000`

#### Method 3: Using Node.js
```bash
npx serve
```

#### Method 4: Using VS Code Live Server
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

---

## 📂 Project Structure

```
personal-portfolio/
│
├── index.html                 # Main HTML file
│
├── assets/
│   ├── css/
│   │   └── style.css         # TailwindCSS compiled styles + custom CSS
│   │
│   ├── js/
│   │   └── index.js          # Main JavaScript file
│   │
│   └── imgs/                 # Image assets
│       ├── favicon.png       # Website favicon
│       ├── profile.jpg       # Profile picture
│       ├── og-image.png      # Open Graph preview image
│       └── projects/         # Project screenshots
│
├── README.md                 # Project documentation (you are here)
└── LICENSE                   # License file
```

### File Descriptions

- **index.html**: Contains all HTML structure and content
- **assets/css/style.css**: Combined TailwindCSS utilities and custom styles
- **assets/js/index.js**: All JavaScript functionality including:
  - Theme switching
  - Navigation handling
  - Form validation
  - Scroll effects
  - Settings management
- **assets/imgs/**: All images and graphics used in the portfolio

---

## ⚙️ Configuration

### Changing Personal Information

Edit the content directly in `index.html`:

```html
<!-- Update title and meta tags -->
<title>Your Name | Frontend Developer</title>
<meta name="author" content="Your Name" />

<!-- Update hero section -->
<h1>Your Name</h1>
<p>Your professional title and description</p>
```

### Customizing Colors

#### Method 1: Using Built-in Theme Selector
Click the settings icon on the website and choose from 6 pre-defined themes.

#### Method 2: Custom CSS Variables
Edit in `assets/css/style.css`:

```css
:root {
  --color-primary: #6366f1;
  --color-secondary: #8b5cf6;
  --color-accent: #a855f7;
}
```

#### Method 3: Adding New Themes
In `assets/js/index.js`, add to the `colorThemes` array:

```javascript
{
  title: 'Your Theme Name',
  primary: '#yourcolor',
  secondary: '#yourcolor',
  accent: '#yourcolor',
  gradient: 'linear-gradient(135deg, color1, color2)'
}
```

### Modifying Fonts

Change font families in `index.html` head section:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@200..900&display=swap" rel="stylesheet" />
```

Then update in CSS:

```css
.font-yourfont {
  font-family: 'Your Font', sans-serif;
}
```

---

## 🎨 Customization

### Adding New Sections

1. Add HTML structure in `index.html`:
```html
<section id="new-section" class="py-24">
  <div class="container mx-auto px-4">
    <!-- Your content -->
  </div>
</section>
```

2. Add navigation link:
```html
<a href="#new-section" role="menuitem">New Section</a>
```

### Updating Skills

Edit the skills section in `index.html`:

```html
<div class="group p-8 bg-white dark:bg-slate-800...">
  <i class="fab fa-your-icon text-5xl..."></i>
  <h3>Skill Name</h3>
</div>
```

### Adding Projects

Add project cards in the portfolio section:

```html
<div class="portfolio-item" data-category="web">
  <img src="assets/imgs/projects/project.jpg" alt="Project Name" />
  <h3>Project Title</h3>
  <p>Project description...</p>
</div>
```

### Modifying Contact Form

Update form fields in the contact section:

```html
<input 
  type="text" 
  id="field-name"
  placeholder="Your placeholder"
  required 
/>
```

Add validation in `assets/js/index.js`:

```javascript
// Add validation logic in submit event handler
```

---

## ⚡ Performance Optimization

### Implemented Optimizations

1. **Resource Hints**
   - Preconnect to external domains (fonts, CDNs)
   - Preload critical fonts and stylesheets
   - DNS prefetch for third-party resources

2. **Font Loading**
   - Non-render-blocking font loading
   - WOFF2 format for better compression
   - Font-display: swap for faster text rendering

3. **Image Optimization**
   - Recommended formats: WebP with JPG fallback
   - Lazy loading for below-the-fold images
   - Proper sizing and compression

4. **CSS Optimization**
   - Minified TailwindCSS
   - Critical CSS inline (recommended)
   - Unused CSS purged in production

5. **JavaScript**
   - Vanilla JS (no heavy frameworks)
   - Event delegation for better performance
   - Debounced scroll events

### Further Optimization Tips

```bash
# Minify HTML
npm install -g html-minifier
html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html

# Optimize images
npm install -g imagemin-cli
imagemin assets/imgs/*.{jpg,png} --out-dir=assets/imgs/optimized

# Generate WebP images
cwebp -q 80 image.jpg -o image.webp
```

---

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 90+     | ✅ Full |
| Firefox | 88+     | ✅ Full |
| Safari  | 14+     | ✅ Full |
| Edge    | 90+     | ✅ Full |
| Opera   | 76+     | ✅ Full |

### Progressive Enhancement
- Graceful degradation for older browsers
- Feature detection with fallbacks
- Core functionality works without JavaScript

---

## ♿ Accessibility

### WCAG 2.1 AA Compliance

- ✅ Semantic HTML5 elements
- ✅ Proper heading hierarchy (h1-h6)
- ✅ Alt text for all images
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus indicators visible
- ✅ Color contrast ratios meet standards
- ✅ Skip navigation link
- ✅ Screen reader friendly
- ✅ Reduced motion support

### Keyboard Navigation
- `Tab` / `Shift+Tab`: Navigate through elements
- `Enter` / `Space`: Activate buttons and links
- `Esc`: Close modals and menus
- `Arrow keys`: Navigate custom selects

### Testing Accessibility
```bash
# Using axe DevTools (Chrome extension)
# Using WAVE (Web Accessibility Evaluation Tool)
# Using Lighthouse (Chrome DevTools)
```

---

## 🔍 SEO Features

### Meta Tags
- Title and description optimization
- Open Graph tags for social media
- Twitter Card integration
- Canonical URLs
- Language and locale tags

### Structured Data
Consider adding JSON-LD schema:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Frontend Developer",
  "url": "https://yourwebsite.com"
}
</script>
```

### Performance
- Fast loading times (< 3s)
- Mobile-friendly design
- HTTPS ready
- Sitemap ready

### Best Practices
- Semantic HTML
- Proper heading structure
- Descriptive alt texts
- Clean URLs
- No broken links

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### How to Contribute

1. **Fork the Project**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Test your changes thoroughly
- Update documentation as needed
- Ensure accessibility standards are met

### Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and beginners
- Focus on constructive feedback
- Help maintain a positive community

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

```
MIT License

Copyright (c) 2025 Mohamed Ahmed

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 📞 Contact

**Mohamed Ahmed** - Frontend Developer

- 📧 Email: m77md.107@gmail.com
- 💼 LinkedIn: [linkedin.com/in/m77md](https://www.linkedin.com/in/m77md/)
- 💻 GitHub: [ThisMohamed](https://github.com/ThisMohamed)

**Project Link**: [https://github.com/ThisMohamed/Personal-Portfolio](https://github.com/ThisMohamed/Personal-Portfolio)

---

## 🙏 Acknowledgments

- [TailwindCSS](https://tailwindcss.com/) - For the amazing utility-first CSS framework
- [Font Awesome](https://fontawesome.com/) - For the comprehensive icon library
- [Google Fonts](https://fonts.google.com/) - For beautiful Arabic typography
- Design inspiration from various portfolio websites
- The open-source community for continuous support

---

<div align="center">

**Made with ❤️ by [Mohamed Ahmed]**

⭐ Star this repository if you found it helpful!

</div>
