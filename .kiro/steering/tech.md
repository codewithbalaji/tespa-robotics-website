# Technology Stack

## Framework & Core

- **Next.js 16.0.0** (App Router)
- **React 19.2.0**
- **TypeScript 5**
- Node.js target: ES2017

## Styling

- **Tailwind CSS v4** with PostCSS
- **shadcn/ui** components (New York style)
- CSS variables enabled
- Neutral base color scheme
- **Poppins** font family (weights: 300, 400, 500, 600, 700)

## UI Libraries

- **lucide-react** for icons
- **class-variance-authority** for component variants
- **clsx** and **tailwind-merge** for className utilities
- **tw-animate-css** for animations

## Path Aliases

- `@/*` maps to project root
- Configured in both `tsconfig.json` and `components.json`

## Common Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## TypeScript Configuration

- Strict mode enabled
- JSX: react-jsx
- Module resolution: bundler
- No emit (Next.js handles compilation)
