# Trackify

A gamified budget tracking application that makes personal finance fun and engaging through Duolingo-inspired mechanics.

## Live Demo

Visit the live application at: **[https://omargad-sys.github.io/trackify/](https://omargad-sys.github.io/trackify/)**

## Overview

Trackify transforms budgeting from a chore into an engaging experience by incorporating:
- **Streak System**: Build daily logging habits with consecutive day tracking
- **Level Progression**: Advance from Budget Beginner to Money Guru
- **XP Rewards**: Earn experience points for every financial action
- **Achievements**: Unlock badges for milestones and consistent behavior

## Tech Stack

- **React 19.2** - Modern React with latest features
- **TypeScript 5.9** - Type-safe development
- **Vite 7.2** - Lightning-fast build tool and dev server
- **Tailwind CSS v4** - Utility-first styling with latest PostCSS architecture
- **GitHub Pages** - Free, reliable hosting with automatic deployment

## Project Status

**Current Phase**: Initial UI Design Complete

The application currently features a beautiful, Apple-inspired interface with custom animations and a playful cat cursor. Core functionality (expense tracking, data persistence, gamification logic) is under active development.

### Completed Features
- Modern, responsive UI with Apple-inspired design aesthetic
- Custom animated cat cursor (desktop only)
- Floating stat elements with gradient animations
- Smooth hover effects and transitions
- Full dark mode support
- Automatic deployment pipeline

### In Development
- Expense entry form and validation
- Local storage data persistence
- Budget setting interface
- Gamification calculation logic
- Data visualization and charts

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/omargad-sys/trackify.git
cd trackify

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/trackify/` to see the app in development mode.

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## Development

### Project Structure

```
trackify/
├── src/
│   ├── components/       # React components
│   ├── lib/             # Utility functions
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── public/              # Static assets
└── dist/                # Production build output
```

### Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint code quality checks

## Deployment

The project uses GitHub Actions for automatic deployment to GitHub Pages. Every push to the `main` branch triggers a new deployment.

## Design Philosophy

Trackify embraces a minimal, spacious aesthetic inspired by Apple's design language:
- Large typography with generous white space
- Subtle animations that enhance rather than distract
- Playful elements (cat cursor, emoji stats) that make finance approachable
- Smooth transitions and hover effects throughout
- Responsive design that works beautifully on all devices

## Contributing

This is a personal project currently under active development. Feature requests and bug reports are welcome via GitHub issues.

## License

This project is open source and available under the MIT License.

## Roadmap

### Phase 1: Core Features
- Expense entry and management
- Budget creation and tracking
- Local storage persistence
- State management setup

### Phase 2: Gamification
- Streak calculation and tracking
- XP system implementation
- Level progression
- Achievement unlock system

### Phase 3: Visualization
- Spending charts and graphs
- Category breakdown analysis
- Budget vs actual comparisons
- Progress indicators

### Phase 4: Polish
- Advanced animations
- PWA capabilities
- Export/import functionality
- Accessibility improvements

## Acknowledgments

- Design inspiration from Apple.com
- Gamification mechanics inspired by Duolingo
- Built with React, Vite, and Tailwind CSS
