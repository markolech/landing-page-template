# Landing Page Template

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and enhanced with [ShadCN UI](https://ui.shadcn.com/) components.

## Features

- ⚡ **Next.js 15** with App Router
- 🎨 **ShadCN UI** - Beautiful, accessible components
- 🎯 **Tailwind CSS v4** - Latest version with modern features
- 🌙 **Dark/Light Mode** - Built-in theme support
- 📱 **Responsive Design** - Mobile-first approach
- 🔧 **TypeScript** - Full type safety
- 🎭 **Lucide Icons** - Beautiful icon library

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## ShadCN UI Components

This template comes with ShadCN UI pre-configured. You can add more components using:

```bash
npx shadcn@latest add [component-name]
```

### Available Components

The following components are already installed:

**Form Components:**
- `Button` - Various button styles and variants
- `Input` - Form input fields
- `Label` - Form labels
- `Form` - Form wrapper with validation support
- `Select` - Dropdown select component
- `Checkbox` - Checkbox input
- `Textarea` - Multi-line text input

**Layout & Navigation:**
- `Card` - Container component with header, content sections
- `Tabs` - Tabbed interface component
- `Accordion` - Collapsible content sections
- `Sheet` - Slide-out panel component
- `Dialog` - Modal dialog component
- `Dropdown Menu` - Context menu component

**Feedback & Display:**
- `Alert` - Alert messages and notifications
- `Badge` - Small status indicators
- `Avatar` - User profile pictures
- `Progress` - Progress bars
- `Skeleton` - Loading placeholders
- `Sonner` - Toast notifications (modern toast replacement)
- `Tooltip` - Hover information
- `Table` - Data tables
- `Separator` - Visual dividers

### Adding New Components

To add more components, visit the [ShadCN UI documentation](https://ui.shadcn.com/docs/components) and use the CLI:

```bash
# Example: Add a dialog component
npx shadcn@latest add dialog

# Example: Add multiple components
npx shadcn@latest add dropdown-menu sheet tabs
```

## Development Tools

This template includes a complete development setup with code formatting, linting, and type checking:

### Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
npm run format       # Format code with Prettier
npm run format:check # Check if code is formatted
npm run type-check   # Run TypeScript type checking
npm run check-all    # Run all checks (type, lint, format)
```

### Code Formatting & Linting

- **Prettier** - Automatic code formatting with Tailwind CSS class sorting
- **ESLint** - Code linting with Next.js and TypeScript rules
- **TypeScript** - Full type safety and IntelliSense

The setup includes:
- Prettier configuration with Tailwind CSS plugin
- ESLint integration with Prettier
- Pre-configured ignore files
- Comprehensive scripts for development workflow

## Customization

### Theme Customization

The theme can be customized in `src/app/globals.css`. ShadCN uses CSS variables for theming:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... more variables */
}
```

### Component Configuration

ShadCN configuration is stored in `components.json`:

```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and ShadCN variables
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page with ShadCN demo
├── components/
│   └── ui/              # ShadCN UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── label.tsx
└── lib/
    └── utils.ts         # Utility functions (cn helper)
```

## Learn More

To learn more about the technologies used in this template:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [ShadCN UI Documentation](https://ui.shadcn.com/docs) - learn about ShadCN components
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
