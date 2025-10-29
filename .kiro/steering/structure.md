# Project Structure

## Directory Organization

```
/app                    # Next.js App Router pages and layouts
  layout.tsx           # Root layout with Navbar/Footer
  page.tsx             # Home page
  globals.css          # Global styles and Tailwind directives

/components            # React components
  /home                # Page-specific components (home page)
  /layout              # Layout components (Navbar, Footer)
  /ui                  # shadcn/ui components (when added)

/lib                   # Utility functions
  utils.ts             # Helper functions (cn utility)

/public                # Static assets (images, SVGs)
```

## Component Conventions

- Use default exports for page and component files
- Functional components with arrow function syntax
- Component names match file names (PascalCase)
- Page components use lowercase `page` variable name

## Styling Conventions

- Tailwind utility classes for all styling
- Responsive design: mobile-first with `md:` and `lg:` breakpoints
- Primary brand color: `#112C41` (dark blue) - use for text or backgrounds
- Secondary background: `gray-100`
- Use Next.js `Image` component for images with `fill` prop and responsive sizing

## Component Structure

- Semantic HTML5 elements (`<section>`, `<nav>`, etc.)
- Consistent spacing with Tailwind utilities
- Max-width containers: `max-w-7xl mx-auto px-6 md:px-8`
- Responsive padding: `py-16 md:py-20 lg:py-24`

## Import Conventions

- Use `@/` path alias for all internal imports
- Next.js built-ins imported from their respective packages
- Component imports before utility imports
