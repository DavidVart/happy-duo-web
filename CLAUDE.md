# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Happy Duo is a waitlist landing page for an AI-powered relationship coaching app that integrates with WhatsApp. Users sign up via phone number and receive a referral code.

**Stack**: React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui + Airtable backend

## Commands

```bash
npm run dev      # Dev server at http://localhost:8080
npm run build    # Production build
npm run lint     # ESLint check
npm run preview  # Preview production build
```

## Architecture

```
/src
├── /components
│   ├── /ui          # shadcn/ui components (Radix-based)
│   ├── /landing     # Landing page sections (Hero, Features, Pricing, etc.)
│   └── /layout      # Layout wrapper
├── /pages           # Route pages (Index, About, Terms, Privacy, NotFound)
├── /services        # airtable.ts - API integration for waitlist
├── /lib             # utils.ts (cn function), referral.ts (code generation)
└── /hooks           # use-mobile, use-toast, useScrollToTop
```

## Key Patterns

**Import alias**: Use `@/` for src imports (e.g., `@/components/ui/button`)

**Styling**: Tailwind CSS with shadcn/ui components. Design uses thick black borders with offset shadows (`shadow-[4px_4px_0_hsl(var(--foreground))]`). Colors defined in `tailwind.config.ts` and CSS variables in `index.css`.

**Animations**: Framer Motion for entrance animations and interactions.

**Forms**: Phone input with `react-phone-number-input`, stores to Airtable via `addToWaitlist()`.

**Referral system**: `generateReferralLink()` in `/lib/referral.ts` creates deterministic 6-char codes from phone number hash.

## Waitlist Flow

1. User enters phone in Hero or WaitlistModal
2. `addToWaitlist(phoneNumber)` POSTs to Airtable
3. Referral code generated from phone hash
4. Success triggers confetti + shows shareable referral link

## Environment Variables

```
VITE_AIRTABLE_TOKEN=pat...
VITE_AIRTABLE_BASE_ID=app...
```

## Routing

React Router v6 with routes: `/` (landing), `/about`, `/terms`, `/privacy`, `*` (404)

Navigation uses smooth scroll to section anchors on homepage (#features, #pricing, etc.)
