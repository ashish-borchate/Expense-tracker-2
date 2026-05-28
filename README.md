# Cinematic Financial OS - Clean Source Code

This is the **CLEAN EXTRACTED SOURCE CODE** from the original project, with all unnecessary files and dependencies removed.

## 🎯 What's Included

### Essential Source Files Only
- ✅ **src/** - Complete React application source code
- ✅ **public/** - Static assets (sounds, images, icons)
- ✅ **lib/api-client/** - API client utilities
- ✅ **package.json** - Cleaned dependencies (no workspace references)
- ✅ **vite.config.ts** - Simplified Vite configuration (no Replit plugins)
- ✅ **tsconfig.json** - TypeScript configuration
- ✅ **components.json** - UI components configuration

### 🎬 Key Features Identified

#### 1. **Cinematic Lifecycle System**
Located in: `src/hooks/useCinematicLifecycle.ts`
- Airport-inspired lifecycle management
- State transitions and animations

#### 2. **Sound System**
Located in: `src/hooks/useSoundSystem.ts`
- Audio feedback system
- Chime sound effects (`public/chime.mp3`)

#### 3. **Financial Dashboard**
Main components:
- `src/pages/Dashboard.tsx` - Main dashboard page
- `src/components/SummaryCards.tsx` - Financial summary cards
- `src/components/MonthlyChart.tsx` - Monthly financial charts
- `src/components/TransactionList.tsx` - Transaction management
- `src/components/CategoryChart.tsx` - Category-wise breakdown

#### 4. **Animation & Motion**
- Framer Motion integration for smooth animations
- Custom Tailwind animations (`tw-animate-css`)
- Cinematic transitions throughout the UI

#### 5. **UI Components**
Located in: `src/components/ui/`
- Full Radix UI component library
- Shadcn/ui styled components
- Custom styled cards, buttons, dialogs, etc.

## 📦 What Was Removed

❌ **node_modules** (437MB) - Replit package cache in `.local/`
❌ **.git** (2.6MB) - Git history
❌ **dist/** - Build artifacts
❌ **artifacts/** - Extra workspace artifacts
❌ **scripts/** - Build scripts
❌ **.replit** files - Replit-specific configuration
❌ **pnpm-lock.yaml** - Lockfile (regenerate with your package manager)
❌ **Workspace dependencies** - Converted to standalone project

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The app will start on `http://localhost:5173`

### Build for Production
```bash
npm run build
# or
yarn build
```

### Type Check
```bash
npm run typecheck
```

## 🏗️ Project Structure

```
cinematic-financial-os/
├── src/
│   ├── App.tsx                    # Main app component
│   ├── main.tsx                   # Entry point
│   ├── index.css                  # Global styles
│   ├── components/                # React components
│   │   ├── ui/                    # UI library components
│   │   ├── SummaryCards.tsx       # Financial summaries
│   │   ├── MonthlyChart.tsx       # Charts
│   │   ├── TransactionList.tsx    # Transactions
│   │   └── CategoryChart.tsx      # Categories
│   ├── pages/                     # Page components
│   │   ├── Dashboard.tsx          # Main dashboard
│   │   └── not-found.tsx          # 404 page
│   ├── hooks/                     # Custom React hooks
│   │   ├── useCinematicLifecycle.ts  # 🎬 Lifecycle system
│   │   ├── useSoundSystem.ts         # 🔊 Sound system
│   │   ├── use-toast.ts              # Toast notifications
│   │   └── use-mobile.tsx            # Mobile detection
│   └── lib/                       # Utilities
│       └── utils.ts               # Helper functions
├── lib/
│   └── api-client/                # API client (generated)
│       ├── custom-fetch.ts        # Fetch wrapper
│       ├── generated/             # Generated API hooks
│       └── index.ts               # Exports
├── public/
│   ├── chime.mp3                  # 🔊 Sound effect
│   ├── favicon.svg                # Icon
│   ├── opengraph.jpg              # Social preview
│   └── robots.txt                 # SEO
├── package.json                   # Dependencies
├── vite.config.ts                 # Vite configuration
├── tsconfig.json                  # TypeScript config
└── components.json                # UI components config
```

## 🎨 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4 (beta)
- **UI Components**: Radix UI + Shadcn/ui
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Forms**: React Hook Form + Zod
- **Routing**: Wouter
- **State**: TanStack Query

## 🎯 Entry Points

- **Main Entry**: `src/main.tsx`
- **App Root**: `src/App.tsx`
- **Primary Page**: `src/pages/Dashboard.tsx`
- **Cinematic System**: `src/hooks/useCinematicLifecycle.ts`
- **Sound System**: `src/hooks/useSoundSystem.ts`

## 📝 Notes

- This is a **standalone, portable** version of the project
- All Replit-specific dependencies have been removed
- The project uses standard Vite configuration
- No backend server included (API client is present but points to external API)
- All workspace references converted to local imports

## 🎬 Cinematic Features

The app includes an "Airport-inspired" cinematic experience:

1. **Lifecycle Phases**: Boarding, Taxiing, Takeoff, Cruising states
2. **Sound Effects**: Chime sounds for state transitions
3. **Smooth Animations**: Framer Motion powered transitions
4. **Visual Polish**: Custom Tailwind animations and effects

---

**Total Size**: ~15MB (source only, excluding node_modules)
**Original Size**: ~450MB (with cache and artifacts)

This clean extraction contains **ONLY** the essential source code needed to run and develop the application.
