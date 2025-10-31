# PDF Signer
# Author - Tonmoy Mistry
A modern, responsive web application for signing PDF documents with a beautiful Material Design interface.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository and navigate to the project directory

2. Install dependencies:
```bash
npm install
```

## Available Scripts

### Development

```bash
npm run dev
```
Starts the development server on port 3000 with hot module replacement (HMR). The app will be available at `http://localhost:3000`.
- Uses `cross-env` to set `APP_ENV=DEV`
- Enables development mode optimizations
- Provides detailed error messages and debugging tools

### Build for Production

```bash
npm run build
```
Creates an optimized production build in the `dist` folder.
- Runs TypeScript compiler (`tsc -b`) to check for type errors
- Bundles and minifies the application with Vite
- Optimizes assets for production deployment

### Build Variants

```bash
npm run build:dev
```
Creates a development build with `APP_ENV=DEV` environment variable.

```bash
npm run build:prod
```
Creates a production build with `APP_ENV=PROD` environment variable.

### Preview Production Build

```bash
npm run preview
```
Locally preview the production build before deployment.

### Linting

```bash
npm run lint
```
Runs ESLint to check for code quality issues and enforce coding standards.

## 🎨 Best Practices Followed

### 1. **TypeScript**
- Strong typing for improved code quality and IDE support
- Type safety across all components and utilities
- Enhanced developer experience with auto-completion

### 2. **Component Architecture**
- Modular, reusable components
- Clear separation of concerns
- Functional components with React Hooks

### 3. **Styling**
- **SCSS Modules** for scoped, maintainable styles
- **Centralized variables** (`_variables.scss`) for consistent theming
- **Mobile-first responsive design** with media queries
- **Material-UI (MUI)** for consistent UI components and theming

### 5. **Responsive Design**
- Mobile-first approach
- Optimized layouts for mobile, tablet, and desktop
- Touch-friendly UI elements
- Adaptive spacing and typography

### 6. **Performance**
- Code splitting with React Router
- Optimized bundle size
- Lazy loading for better performance
- Efficient re-renders with React best practices

### 7. **Developer Experience**
- ESLint for code quality
- Consistent code formatting
- Environment-based configurations
- Fast development with Vite and HMR

### 8. **Modern React Patterns**
- Functional components
- React Hooks (`useState`, `useMemo`, `useMediaQuery`)
- Component composition
- Props typing with TypeScript

### 9. **Design System**
- Custom Material-UI theme with Gupshup-inspired colors
- Consistent color palette and typography
- Reusable design tokens
- Glassmorphism and modern UI patterns

### 10. **Accessibility**
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Screen reader friendly

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material-UI v7** - Component library
- **React Router v7** - Client-side routing
- **SCSS/Sass** - Styling
- **Axios** - HTTP client
- **ESLint** - Code linting

## Features

- Upload PDF files
- Sign PDF documents
- Preview signed PDFs
- Download signed documents
- Responsive design (mobile, tablet, desktop)
- Modern, animated UI
- Progress indicators

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Built with ❤️ using React(vite) + TypeScript + Material-UI**

