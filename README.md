# Nova Motion Physiotherapy

A modern, responsive website for Nova Motion Physiotherapy clinic built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS 4
- **Routing**: Wouter
- **UI Components**: Radix UI (Tooltip), Sonner (Toasts)
- **Package Manager**: pnpm

## Development

### Prerequisites

- Node.js 18+ 
- pnpm (install with `npm install -g pnpm` or `corepack enable`)

### Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at `http://localhost:3000`

### Build

```bash
# Build for production
pnpm build

# Preview production build locally
pnpm preview
```

## Deployment to Vercel

This project is configured for Vercel deployment.

### Quick Deploy

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect the configuration and deploy

### Configuration

The project includes:
- `vercel.json` - Vercel configuration with SPA routing and security headers
- `.vercelignore` - Files to exclude from deployment

### Build Settings

Vercel will automatically use:
- **Build Command**: `pnpm build`
- **Output Directory**: `dist/public`
- **Install Command**: `pnpm install`

### Environment Variables

No environment variables are required for basic deployment. If you need to add analytics or other services later, configure them in the Vercel dashboard under Project Settings > Environment Variables.

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities
│   │   └── contexts/       # React contexts
│   └── index.html          # HTML entry point
├── server/                  # Express server (for local dev/preview)
├── dist/                    # Build output
├── vercel.json             # Vercel configuration
└── package.json            # Dependencies and scripts
```

## Features

- Responsive design for all devices
- Client-side routing with Wouter
- Form validation and submission handling
- Toast notifications
- Modern UI with Tailwind CSS
- Production-ready build configuration

## License

MIT
