# afiq@portfolio:

A production-ready cybersecurity and networking portfolio for **Muhammad Afiq Hakiki bin Adnan**. The interface combines a restrained security-operations feel, network visual language, clear student positioning, and recruiter-friendly content.

## Overview

The site is designed for internship applications, recruiter review, academic discussions, and project sharing. It includes an interactive safe terminal, a searchable project explorer, dedicated project case files, dark and light themes, accessible navigation, and a Netlify-compatible contact form.

## Features

- Responsive homepage with recruiter-focused content hierarchy
- Dark theme by default with a persistent light-theme preference
- Keyboard-accessible desktop and mobile navigation
- Safe predefined terminal commands and a professional Easter egg
- Searchable, filterable, data-driven project explorer
- Static project detail routes with project-specific SEO metadata
- Restrained public project status labels: Completed, Active, Prototype, and Academic
- Planned and internal project records retained in data but excluded from public routes, counts, search, and sitemaps
- Research spotlight for MCP tool-poisoning detection preparation
- Education, certification, experience, leadership, volunteering, and learning timeline sections
- Netlify Forms contact flow with validation and a honeypot
- Custom 404, loading state, sitemap, robots file, structured data, favicon, and social card
- Reduced-motion support, focus indicators, skip navigation, and semantic structure
- Security headers configured in `netlify.toml`
- Lightweight Vitest coverage for project discovery and contact validation

## Tech stack

- Next.js 16 App Router
- React 19 and strict TypeScript
- Tailwind CSS 4 design tokens and custom CSS
- Framer Motion
- Lucide React
- Vitest
- pnpm

## Project structure

```text
app/
  projects/[slug]/        Project case-file pages
  globals.css             Main design system
  routes.css              Route and responsive styles
components/
  home/                   Homepage sections and contact form
  layout/                 Navigation, footer, scroll utilities
  projects/               Project cards, visuals, explorer
  terminal/               Safe interactive portfolio terminal
  ui/                     Shared interface components
data/                     Editable portfolio content
lib/                      Search and validation helpers
public/
  projects/               Project screenshots
  __forms.html            Netlify form-detection blueprint
  og.png                  Social sharing card
tests/                    Lightweight unit tests
types/                    Shared TypeScript models
```

## Requirements

- Node.js 22 LTS recommended (minimum supported by the project: Node.js 20.9)
- pnpm 11
- Git

On Windows, install Node.js from [nodejs.org](https://nodejs.org/), then enable pnpm:

```powershell
corepack enable
corepack prepare pnpm@11.19.0 --activate
```

The same commands work in Command Prompt when run without PowerShell-specific syntax.

## Installation and development

```bash
git clone <repository-url>
cd <repository-folder>
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

To run the production server locally after building:

```bash
pnpm start
```

## Editing portfolio content

Content is separated from component logic:

- Personal details and social links: `data/site.ts`
- Navigation: `data/navigation.ts`
- Projects: `data/projects.ts`
- Skills and currently learning: `data/skills.ts`
- Education: `data/education.ts`
- Certifications: `data/certifications.ts`
- Work experience and highlights: `data/experience.ts`
- Leadership and journey: `data/leadership.ts`
- Volunteering: `data/volunteering.ts`

### Change email, GitHub, LinkedIn, or canonical URL

Edit `data/site.ts`; metadata, structured data, sitemap entries, and social links use this config.

### Add a project

Add a typed object in `data/projects.ts`. Every project needs a unique `slug`, summary, description, categories, technologies, truthful status, explicit `visibility`, and `featured` flag. Optional fields such as `problem`, `solution`, `features`, `architecture`, `concepts`, `lessons`, `challenges`, `future`, and `whyItMatters` are rendered only when present. Keep future ideas `Internal`; only verified work should be `Public`.

Do not add a placeholder GitHub or demo URL. Omit the property until the destination exists.

### Add project screenshots

1. Create `public/projects/<project-slug>/`.
2. Place optimised `.webp`, `.png`, or `.jpg` files there.
3. Add paths to the project object:

```ts
screenshots: ["/projects/subnet-vlsm-calculator/dashboard.webp", "/projects/subnet-vlsm-calculator/results.webp"];
```

Projects without screenshots use a generated code-native technical placeholder; broken image frames are never shown.

### Replace the resume

Place the latest file at:

```text
public/resume.pdf
```

The current interface deliberately shows “Resume · available on request” as disabled so it cannot lead to a broken link. After adding the PDF, replace the disabled button in `components/home/home-sections.tsx` with a link to `/resume.pdf`.

### Add a certification

Add an entry to `data/certifications.ts`. Leave `credentialUrl` and `image` undefined until real assets exist.

## Terminal commands

The terminal is a UI simulation and never executes operating-system commands, JavaScript, or user input. Supported commands include:

```text
help
whoami
skills
projects
education
certifications
contact
github
linkedin
ping afiq
sudo hire afiq
clear
```

## Netlify deployment

Netlify supports modern Next.js through its maintained OpenNext integration and automatically detects this project. No manual legacy runtime plugin is pinned.

### Method 1: Git provider

1. Create a GitHub repository.
2. Commit and push this project.
3. In Netlify, choose **Add new project → Import an existing project**.
4. Select the repository.
5. Confirm build command `pnpm build` and publish directory `.next`.
6. Deploy.
7. In **Forms**, enable form detection, then redeploy once so the contact form blueprint is scanned.
8. Update `data/site.ts` with the production URL and deploy again.

Example Git commands:

```bash
git init
git add .
git commit -m "Initial cybersecurity portfolio"
git branch -M main
git remote add origin <YOUR_REPOSITORY_URL>
git push -u origin main
```

### Method 2: Netlify CLI

```bash
pnpm add -g netlify-cli
netlify login
netlify init
netlify deploy
netlify deploy --prod
```

After the first deployment, enable form detection in the Netlify dashboard and redeploy.

## Security considerations

- No secrets or client-side credentials are required.
- External links use `noopener noreferrer`.
- Terminal input is matched only against a static command map.
- Contact input is validated and encoded before submission.
- Netlify security headers include content-type protection, frame denial, a restrictive permissions policy, a referrer policy, and a Content Security Policy.
- The Content Security Policy allows Next.js inline bootstrap scripts and inline styles. Test it again if adding analytics, external fonts, embeds, or third-party scripts.
- Keep Next.js and other dependencies patched; run `pnpm outdated` and review security releases before production updates.

## Accessibility and responsive QA

The design includes semantic landmarks, visible focus states, keyboard navigation, a focus-managed mobile drawer, reduced-motion behaviour, a skip link, accessible form errors, and colour-aware themes.

Before launch, manually inspect at 320, 375, 390, 430, 768, 1024, 1280, 1440, and 1920 pixels. Tab through navigation, theme control, terminal, filters, project links, contact fields, and footer links.

## Troubleshooting

- **Port 3000 is busy:** Next.js will select another port and print the local URL.
- **Contact form does not appear in Netlify:** enable form detection, confirm `public/__forms.html` is deployed, and redeploy.
- **Social links or metadata use the wrong production domain:** update `data/site.ts`.
- **A screenshot does not load:** use a leading slash and confirm the file exists under `public/projects/`.
- **pnpm blocks native builds:** review the requested packages and run `pnpm approve-builds`; the workspace currently allows the expected Next.js tooling dependencies.
