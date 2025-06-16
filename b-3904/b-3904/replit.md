# replit.md

## Overview

This is a modern full-stack web application built with React and Express.js, featuring a personal portfolio website with multilingual support. The project implements a clean architecture with TypeScript throughout, using modern tools and frameworks for both frontend and backend development.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: React Router for client-side navigation
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL support
- **Database Provider**: Neon serverless PostgreSQL (@neondatabase/serverless)
- **Session Management**: connect-pg-simple for PostgreSQL session store
- **Development**: tsx for TypeScript execution in development

### Shared Components
- **Schema**: Shared database schema and validation using Drizzle and Zod
- **Type Safety**: End-to-end TypeScript with shared types between client and server

## Key Components

### Frontend Components
1. **Layout Components**: Header with language switcher, responsive grid layout
2. **Content Cards**: Modular card system for About, Projects, Services, Skills, Testimonials, Contact
3. **Interactive Elements**: 3D avatar section, animated testimonials, skill tags with tooltips
4. **Internationalization**: Multi-language support (English, Ukrainian, Norwegian)
5. **UI Library**: Comprehensive component library including dialogs, carousels, forms, and navigation

### Backend Components
1. **Storage Interface**: Abstracted storage layer with in-memory implementation (ready for PostgreSQL)
2. **User Management**: Basic user schema with authentication scaffolding
3. **Route Structure**: Organized API routing with Express middleware
4. **Development Server**: Vite integration for seamless full-stack development

### Database Schema
- **Users Table**: Basic user entity with username and password fields
- **Extensible Design**: Schema structure ready for additional entities
- **Type Generation**: Automatic TypeScript type generation from database schema

## Data Flow

1. **Client Requests**: React components make API calls using React Query
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Database Operations**: Drizzle ORM manages database interactions with type safety
4. **Response Handling**: Type-safe responses flow back through the storage interface
5. **UI Updates**: React Query manages cache invalidation and UI state updates

## External Dependencies

### Development Tools
- **TypeScript**: Full type safety across the stack
- **ESLint/Prettier**: Code quality and formatting (implicit from project structure)
- **Vite**: Fast development server with HMR
- **Drizzle Kit**: Database migrations and schema management

### Runtime Dependencies
- **UI Components**: Extensive Radix UI component library
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation
- **Validation**: Zod for runtime type validation
- **Utilities**: clsx and tailwind-merge for conditional styling

### External Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Replit Infrastructure**: Development environment and deployment platform

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` starts both client and server with HMR
- **Type Checking**: `npm run check` for TypeScript validation
- **Database Management**: `npm run db:push` for schema synchronization

### Production Build
- **Client Build**: Vite builds optimized React application to `dist/public`
- **Server Build**: esbuild bundles Express server to `dist/index.js`
- **Single Artifact**: Combined build creates deployable package

### Replit Deployment
- **Auto-scaling**: Configured for automatic scaling based on demand
- **Port Configuration**: Express server runs on port 5000, exposed as port 80
- **Environment**: Production builds automatically triggered on deployment

### Database Strategy
- **Development**: In-memory storage for rapid prototyping
- **Production**: PostgreSQL via Neon with connection pooling
- **Migrations**: Drizzle Kit manages schema changes and versioning

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 15, 2025. Initial setup
- June 15, 2025. Implemented individual project animation - each project now slides up individually with smooth scaling animation every 2.5 seconds, replacing the previous group-based display
- June 15, 2025. Enhanced vertical project carousel with continuous scrolling animation - projects now move smoothly from bottom to top with proper spacing and slower speed (12s duration, 8s intervals)
- June 15, 2025. Added dynamic profile photo to AboutMeCard with scaling animation - photo scales inversely with text length (larger when text is shorter, smaller when text is longer)
- June 15, 2025. Enhanced AboutMeCard with bottom-right corner photo growth effect - photo grows from corner based on text progress, shortened display text while keeping full content in modal, updated translations for all languages
- June 16, 2025. Redesigned contact section with QR codes and social media integration - implemented 10 social platforms with logos, QR code modals, and email form
- June 16, 2025. Added interactive social media functionality - left click opens profile link, right click shows QR code modal, hover displays animated username with fire effect
- June 16, 2025. Implemented comprehensive color customization system - added color palette tool with eyedropper support, allowing users to personalize all 6 cards and background with custom colors, gradients, and presets. Integrated ColorThemeProvider context and dynamic CSS variables for real-time theme updates.