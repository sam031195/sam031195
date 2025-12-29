# Portfolio

A modern, production-ready portfolio website built with React 18, Vite, TypeScript, and deployed to GitHub Pages using GitHub Actions.

## ✨ Features

- ⚡️ Built with Vite for fast development and optimized builds
- ⚛️ React 18 with TypeScript for type-safe development
- 🎨 Modern, responsive design with CSS
- 🚀 Automatic deployment to GitHub Pages via GitHub Actions
- 📱 Fully responsive layout
- 🌓 Supports light/dark mode (via system preference)
- 🛡️ Error boundaries for graceful error handling
- 🔒 Production-ready security practices

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React Icons** - Icon library
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Hosting

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-main
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your values
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🔧 Configuration

### Environment Variables

This project uses environment variables for configuration. Create a `.env` file in the root directory:

```env
# Application Configuration
VITE_APP_TITLE=Portfolio
VITE_APP_DESCRIPTION=Modern portfolio website

# Add other variables as needed
```

**Important:** Never commit `.env` files to version control. The `.env.example` file shows which variables are needed.

### Update Personal Information

Edit `src/data/index.ts` to update:
- Personal information (name, title, email, location, bio, social links)
- Projects
- Skills
- Work experience
- Education
- Research projects
- Blog posts

All data is stored as static TypeScript objects, making it easy to customize without touching the component code.

### Update Repository Name

If your repository has a different name, update the `base` property in `vite.config.ts`:

```typescript
base: "/your-repo-name/",
```

## 🏗️ Project Structure

```
portfolio-main/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/                      # Static assets
├── src/
│   ├── components/             # React components
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   ├── Header.tsx
│   │   ├── Lifestyle.tsx
│   │   ├── Projects.tsx
│   │   ├── Research.tsx
│   │   ├── ErrorBoundary.tsx  # Error handling
│   │   └── ui/                 # Reusable UI components
│   ├── data/
│   │   └── index.ts            # Static data (edit this!)
│   ├── types/
│   │   └── index.ts            # TypeScript type definitions
│   ├── styles/
│   │   ├── theme.css           # Theme variables
│   │   └── typography.css      # Typography styles
│   ├── assets/
│   │   └── images/             # Image assets
│   ├── App.tsx                 # Main App component
│   ├── App.css                 # App styles
│   ├── index.css               # Global styles
│   └── main.tsx                # Entry point
├── .env.example                 # Environment variables template
├── .gitignore                  # Git ignore rules
├── index.html                  # HTML template
├── package.json
├── tsconfig.json               # TypeScript config
├── vite.config.ts              # Vite config
└── README.md
```

## 🔒 Security

### Security Best Practices

1. **Environment Variables**: Never commit `.env` files. Use `.env.example` as a template.
2. **No Hardcoded Secrets**: All sensitive data should use environment variables.
3. **Error Handling**: Error boundaries prevent sensitive information from leaking in error messages.
4. **Type Safety**: TypeScript helps catch errors at compile time.

### Production Checklist

- ✅ `.env` is in `.gitignore`
- ✅ No hardcoded API keys or secrets
- ✅ Error boundaries implemented
- ✅ Console logs only in development mode
- ✅ TypeScript strict mode enabled

## 🐛 Error Handling

The project includes an `ErrorBoundary` component that:
- Catches React component errors
- Prevents the entire app from crashing
- Shows user-friendly error messages
- Logs errors appropriately (dev vs production)

Error handling is also implemented in:
- Clipboard operations (with fallbacks)
- Scroll handlers
- Navigation functions

## 📝 Code Quality

### Linting

Run the linter:
```bash
npm run lint
```

### TypeScript

The project uses strict TypeScript configuration:
- `strict: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `noFallthroughCasesInSwitch: true`

### Code Style

- Components use PascalCase
- Functions and variables use camelCase
- CSS classes use kebab-case
- JSDoc comments on complex functions

## 🚀 Deployment

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Setup GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"

### Manual Deployment

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at `https://yourusername.github.io/portfolio-main/`

## 📚 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Components

1. Create component file in `src/components/`
2. Add corresponding CSS file
3. Import and use in `App.tsx` or parent component
4. Add TypeScript types if needed in `src/types/index.ts`

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

MIT

## 🙏 Acknowledgments

Built with modern web technologies and best practices for a production-ready portfolio website.
