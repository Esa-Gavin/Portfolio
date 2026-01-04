# Gavin Kariuki - Portfolio Website

A modern, responsive portfolio website built with React 18, showcasing my skills, projects, and professional experience as a Frontend Developer specializing in React and modern web technologies.

## 🚀 Live Demo

[View Live Portfolio](#) <!-- Add your deployed URL here -->

## ✨ Features

### Design & User Experience
- **Cyberpunk Theme**: Modern dark theme with neon cyan accents and glassmorphism effects
- **Smooth Animations**: Powered by Framer Motion for fluid, engaging interactions
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Scrolling**: Seamless navigation between sections using React Scroll
- **Interactive Elements**: Hover effects, modals, and dynamic content filtering

### Sections
1. **Hero Section**: Eye-catching introduction with animated greeting and call-to-action buttons
2. **About Me**: Professional bio with experience highlights and statistics
3. **Skills & Technologies**: Categorized display of technical skills with icons
4. **Featured Projects**: Filterable project showcase with detailed modals
5. **Contact Form**: Functional contact form with validation (EmailJS integration ready)
6. **Footer**: Quick links, social media, and back-to-top functionality

### Technical Highlights
- React 18 with modern hooks (useState, useEffect)
- Framer Motion for animations
- React Scroll for smooth navigation
- React Icons for comprehensive icon library
- Modular component architecture
- Clean, maintainable code structure
- SEO-optimized with meta tags
- Accessibility features (ARIA labels, keyboard navigation)

## 🛠️ Technologies Used

### Core
- **React 18** - JavaScript library for building user interfaces
- **React DOM** - React rendering for web
- **JavaScript (ES6+)** - Modern JavaScript features

### Libraries & Tools
- **Framer Motion** - Animation library for React
- **React Scroll** - Smooth scrolling navigation
- **React Icons** - Popular icon library (Font Awesome, Simple Icons)
- **EmailJS** - Email service integration (ready for configuration)

### Development
- **Create React App** - React application setup and build tool
- **npm** - Package manager
- **Git** - Version control

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Clone the Repository
```bash
git clone https://github.com/Esa-Gavin/Portfolio.git
cd Portfolio
```

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm start
```

The application will open at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

Creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── index.html          # HTML template
│   ├── favicon.ico         # Favicon
│   └── ...
├── src/
│   ├── components/         # React components
│   │   ├── Navbar/
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   │   ├── Hero.js
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.js
│   │   │   └── About.css
│   │   ├── Skills/
│   │   │   ├── Skills.js
│   │   │   └── Skills.css
│   │   ├── Projects/
│   │   │   ├── Projects.js
│   │   │   └── Projects.css
│   │   ├── Contact/
│   │   │   ├── Contact.js
│   │   │   └── Contact.css
│   │   └── Footer/
│   │       ├── Footer.js
│   │       └── Footer.css
│   ├── assets/
│   │   └── data/
│   │       └── portfolioData.js  # Centralized data
│   ├── images/
│   │   └── IMG_1490.JPG          # Profile image
│   ├── App.js              # Main App component
│   ├── App.css             # Global App styles
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

## 🎨 Customization

### Update Personal Information

Edit `src/assets/data/portfolioData.js` to customize:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  subtitle: "Your Subtitle",
  location: "Your Location",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourprofile/",
  bio: {
    intro: "Your introduction...",
    detail: "Your detailed description...",
    passion: "Your passion statement..."
  },
  resumeUrl: "/path/to/your/resume.pdf"
};
```

### Add/Modify Skills

Update the `skills` object in `portfolioData.js`:

```javascript
export const skills = {
  frontend: [
    { name: "React", icon: "FaReact" },
    // Add more skills...
  ],
  // Add more categories...
};
```

### Add/Modify Projects

Update the `projects` array in `portfolioData.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Short description",
    longDescription: "Detailed description",
    technologies: ["React", "Node.js"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://project-demo.com",
    category: "Full-Stack",
    featured: true
  },
  // Add more projects...
];
```

### Configure Contact Form (EmailJS)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update `src/components/Contact/Contact.js`:

```javascript
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

4. Uncomment the `emailjs.send()` call in the `handleSubmit` function

### Change Color Scheme

Edit CSS files to customize colors:

**Primary Cyan**: `#00d9ff`
**Dark Background**: `#0a0a1e`
**Secondary Blue**: `#0f4c75`

Search and replace these values across CSS files to change the theme.

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

Or deploy via [Vercel Dashboard](https://vercel.com/):
- Import your GitHub repository
- Configure build settings (auto-detected)
- Deploy

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://app.netlify.com/)

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/Portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Deploy: `npm run deploy`

## 📝 Available Scripts

- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

## 🐛 Known Issues & Future Enhancements

### Current Limitations
- Contact form requires EmailJS configuration
- Project images use placeholder gradients (add actual screenshots)
- Resume download link needs actual PDF file

### Planned Features
- [ ] Blog section for technical articles
- [ ] Testimonials section
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Advanced animations and transitions
- [ ] Project detail pages with case studies
- [ ] Performance optimizations (lazy loading, code splitting)

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m 'Add YourFeature'`
4. Push to branch: `git push origin feature/YourFeature`
5. Open a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Gavin Kariuki**
- GitHub: [@Esa-Gavin](https://github.com/Esa-Gavin)
- LinkedIn: [Gavin Kariuki](https://www.linkedin.com/in/gavin-kariuki/)
- Email: esa.dev@icloud.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Built with [Create React App](https://create-react-app.dev/)

---

⭐ If you found this portfolio helpful, please consider giving it a star!

**Made with ❤️ using React**
