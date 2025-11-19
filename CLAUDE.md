# Trackify - Gamified Budget Tracker

## Project Overview
Trackify is a gamified budget tracking application inspired by Duolingo's engagement mechanics. The app makes budgeting fun and motivating through streaks, levels, achievements, and XP points.

**Live Site**: https://omargad-sys.github.io/trackify/
**Repository**: https://github.com/omargad-sys/trackify

## Tech Stack
- **Framework**: React 19.2.0 + TypeScript 5.9.3
- **Build Tool**: Vite 7.2.2
- **Styling**: Tailwind CSS v4 (@tailwindcss/postcss)
- **UI Components**: Custom components + shadcn/ui utilities
- **Hosting**: GitHub Pages
- **Deployment**: GitHub Actions (automatic on push to main)

## Project Structure
```
trackify/
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions deployment workflow
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── orb-background.tsx  # Animated gradient background
│   ├── lib/
│   │   └── utils.ts         # Utility functions (cn for className merging)
│   ├── App.tsx              # Main application component
│   ├── App.css              # App-specific styles (minimal)
│   ├── index.css            # Tailwind imports
│   └── main.tsx             # Application entry point
├── components.json          # shadcn/ui configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.ts           # Vite configuration (base: '/trackify/')
└── CLAUDE.md               # This file

```

## Key Architectural Decisions

### 1. CSS-Based Background Instead of Canvas
**Decision**: Replaced canvas-based orb animation with CSS gradients
**Reason**: Better browser compatibility, simpler code, better performance
**Implementation**: Multiple radial gradients with CSS animations
**Commit**: `eff52b8` - "Replace canvas background with CSS gradient animation"

### 2. Tailwind CSS v4
**Decision**: Use Tailwind CSS v4 with @tailwindcss/postcss
**Reason**: Latest version with better performance and @import syntax
**Note**: Requires `@import "tailwindcss"` instead of @tailwind directives
**Setup**: Configured in postcss.config.js and tailwind.config.js

### 3. GitHub Pages Deployment
**Decision**: Automatic deployment via GitHub Actions
**Configuration**:
- Base path set to `/trackify/` in vite.config.ts
- Workflow deploys dist folder on push to main
- Uses GitHub Actions for build and deployment

### 4. Component Architecture
**Decision**: Functional components with TypeScript
**Pattern**: Props interfaces, hooks for state management
**Styling**: Tailwind utility classes with cn() helper for conditional classes

## Current Features (Completed)

### ✅ Apple-Inspired UI Design
- **Hero Layout**: Full-screen centered hero with generous vertical spacing
- **Custom Cursor**: Animated cat emoji (🐱) that follows mouse with subtle bounce
- **Typography**: Large-scale minimal text (8xl/9xl) with gradient effects
- **Floating Stats**: Three stat elements with staggered floating animations
  - Streak (🔥): Orange to red gradient
  - Level (⭐): Yellow to orange gradient
  - XP (💎): Blue to purple gradient
- **Interactive Elements**: Hover effects with scale transforms (110%) and emoji growth (125%)
- **Action Buttons**: Apple-style rounded pills with gradient backgrounds and arrow animations
- **Background**: Subtle layered gradients with mesh overlay and 25s float animation
- **Animations**: Fade-in, fade-in-up, gradient shift, float, and bounce effects
- **Responsive**: Mobile-first design with column stacking on small screens
- **Dark Mode**: Full dark mode support with adjusted color palettes

### ✅ Development Infrastructure
- TypeScript configuration with strict mode
- ESLint configuration for code quality
- Path aliases (@/* for src/*)
- Hot module replacement (HMR) via Vite
- Automatic deployment pipeline

## Gamification System Design (Planned)

### Streak System
- Track consecutive days of budget logging
- Daily check-in rewards
- Streak freeze feature (like Duolingo)
- Visual streak fire icon (🔥)

### Level System
**Levels**: Budget Beginner → Budget Pro → Finance Master → Money Guru
**XP Sources**:
- Log expense: +10 XP
- Stay under budget: +50 XP
- Complete weekly goal: +100 XP
- Maintain 7-day streak: +200 XP

### Achievements/Badges
- First expense logged
- 7-day streak
- 30-day streak
- 100 expenses tracked
- Under budget for a month
- Category master (100 entries in one category)

## Data Structure (Planned)

### User Profile
```typescript
interface UserProfile {
  streak: number;
  lastActiveDate: string;
  level: number;
  xp: number;
  totalXP: number;
  achievements: string[];
}
```

### Expense
```typescript
interface Expense {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
  createdAt: string;
}
```

### Budget
```typescript
interface Budget {
  id: string;
  category: string;
  amount: number;
  period: 'weekly' | 'monthly';
  startDate: string;
}
```

## Storage Strategy
**Decision**: LocalStorage for MVP
**Reason**: Simple, no backend needed, works offline
**Future**: Consider IndexedDB for larger datasets or backend sync

## Git Commit History

### Initial Setup
- `cd9c85f` - Initial commit: Set up React + TypeScript with Vite
- `c32f232` - Add Orb background, Tailwind CSS, and GitHub Pages deployment

### Bug Fixes & Improvements
- `09f2615` - Fix layout issues by removing conflicting App.css styles
- `eff52b8` - Replace canvas background with CSS gradient animation for better browser compatibility

### Documentation
- `34f44df` - Add comprehensive CLAUDE.md documentation for project context

### Major UI Redesign (Apple-Inspired)
- `12d4339` - Redesign UI with Apple-inspired aesthetic and custom cat cursor
  - **Removed**: Boxy cards with borders and shadows
  - **Added**: Flowing hero layout with generous spacing
  - **Added**: Custom animated cat emoji cursor (🐱) that follows mouse movement
  - **Added**: Floating stat elements with staggered animations (3s float cycle)
  - **Added**: Gradient text animations on main title (3s cycle)
  - **Added**: Smooth hover effects with scale transforms
  - **Added**: Apple-style rounded pill buttons with arrow animations
  - **Updated**: Subtle mesh gradient background overlay
  - **Updated**: Large, minimal typography (8xl/9xl titles)
  - **Design Philosophy**: Minimalist, spacious, elegant - inspired by Apple.com

## Next Steps (Priority Order)

### Phase 1: Core Budget Features
1. **Expense Entry Form**
   - Modal/dialog component
   - Amount, category, description inputs
   - Date picker
   - Form validation

2. **Budget Setting Interface**
   - Category selection
   - Amount input
   - Period selection (weekly/monthly)
   - Multiple budget support

3. **Data Persistence**
   - LocalStorage implementation
   - State management (Context API or Zustand)
   - Data hydration on app load

### Phase 2: Gamification Logic
1. **Streak Tracking**
   - Daily check-in detection
   - Streak calculation
   - Visual feedback for streak milestones

2. **XP System**
   - Award XP for actions
   - Level progression calculation
   - Level-up animations

3. **Achievement System**
   - Achievement unlock logic
   - Badge display
   - Notification system

### Phase 3: Data Visualization
1. **Expense Dashboard**
   - Category breakdown (pie chart)
   - Spending trends (line chart)
   - Budget vs actual comparison

2. **Progress Tracking**
   - Weekly/monthly spending
   - Budget remaining indicators
   - Category-specific progress bars

### Phase 4: Enhanced UX
1. **Animations**
   - Level-up celebrations
   - XP gain animations
   - Achievement unlock effects

2. **Responsive Improvements**
   - Mobile-first refinements
   - Touch-friendly interactions
   - PWA capabilities

## Development Commands

```bash
# Development
npm run dev              # Start dev server at http://localhost:5173/trackify/

# Build
npm run build            # Build for production (outputs to dist/)

# Deploy
git push                 # Automatic deployment via GitHub Actions

# Preview production build
npm run preview          # Preview built app locally
```

## Known Issues & Considerations

### Browser Compatibility
- CSS gradient animations work in all modern browsers
- Dark mode respects system preferences
- Tested in Chrome, Firefox, Safari

### Performance
- Tailwind CSS purges unused styles in production
- Vite uses code splitting automatically
- Lazy loading can be added for routes if needed

### Accessibility
- Need to add ARIA labels to buttons
- Keyboard navigation should be tested
- Color contrast meets WCAG AA standards

## Design Tokens

### Colors
- **Primary Purple**: `rgb(139, 92, 246)` - oklch(62.7% .265 303.9)
- **Primary Pink**: `rgb(236, 72, 153)` - oklch(65.6% .241 354.308)
- **Primary Blue**: `rgb(59, 130, 246)` - oklch(62.3% .214 259.815)
- **Gray Scale**: Tailwind default grays (200, 300, 400, 600, 700, 800)

### Typography
- **Title**: 3rem (48px), font-bold
- **Subtitle**: 1.125rem (18px)
- **Card Header**: 1.5rem (24px), font-bold
- **Body**: 0.875rem (14px)

### Spacing
- **Card Padding**: 1.5rem (24px)
- **Section Gap**: 1.5rem (24px)
- **Button Padding**: 1rem 1.5rem (16px 24px)

## Deployment Notes

### GitHub Pages Setup
1. Repository settings → Pages → Source: GitHub Actions
2. Workflow runs automatically on push to main
3. Build artifacts uploaded from dist/ folder
4. Deployment takes ~30-40 seconds

### Base Path Configuration
- All routes must account for `/trackify/` base path
- Vite config: `base: '/trackify/'`
- Asset paths automatically prefixed

---

**Last Updated**: 2025-11-19
**Status**: Apple-inspired UI redesign complete with custom cat cursor and flowing animations
**Next Session**: Implement expense entry form and data persistence, continue building gamification features
