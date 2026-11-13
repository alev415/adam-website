# Adam Levinson · Product Leadership Portfolio

[View the website](https://adamrlevinson.com/) · [Explore selected work](https://adamrlevinson.com/#/work) · [LinkedIn](https://www.linkedin.com/in/alevinson/)

A personal portfolio connecting product strategy, measurable outcomes, and hands-on execution across Hinge Health, Roo, and Udemy. The interface takes inspiration from GoldenEye 007: an interactive safe opens into a personnel dossier with experience, case studies, and writing.

## Start here

- **[Selected work](https://adamrlevinson.com/#/work):** Case studies covering growth experiments, referral programs, AI-assisted implementation, and learner engagement.
- **[Experience](https://adamrlevinson.com/#/experience):** Career history and product leadership roles.
- **[Writing](https://adamrlevinson.com/#/writing):** Reflections on growth strategy and building reusable experimentation capabilities.

The portfolio route opens directly so interviewers can get to the work immediately. On the homepage, visitors can solve the safe puzzle or skip it.

## Experience and implementation

- Interactive safe with keyboard support, status announcements, and a skip option.
- Dossier-style navigation and responsive layouts for experience, work, and writing.
- Case studies organized by company, with context, outcomes, screenshots, and lessons learned.
- Optional soundtrack with explicit playback controls; audio is not preloaded.
- Lazy-loaded portfolio images, shared layout components, and Framer Motion interactions.
- Social sharing metadata, branded favicons, and a custom domain.

## Architecture

A static React application written in TypeScript, built with Vite, and styled with Tailwind CSS and custom CSS. React Router uses hash routes so links work on GitHub Pages without server-side routing rules.

Content lives in the source components; there is no CMS, backend, authentication, or database in this repository. The safe is an introductory game, not an access control mechanism. All published content and assets are public.

```text
src/
  App.tsx                       Routes and introductory safe behavior
  components/
    LoadingScreen.tsx           Safe puzzle and skip interaction
    MainMenu.tsx                Profile and homepage
    FolderLayout.tsx            Shared dossier layout
    FolderNavigation.tsx        Navigation
    Experience.tsx              Career history
    Work.tsx                    Portfolio content and case studies
    Writing.tsx                 Writing index and essay
    Soundtrack.tsx              Audio playback controls
  index.css                     Shared styles and responsive layouts
public/
  images/                       Public portfolio screenshots
  CNAME                         Custom domain for GitHub Pages
  mission-soundtrack.m4a         Optional audio
index.html                      Page metadata and entry point
vite.config.ts                  React plugin and relative asset base
```

## Run locally

Use a maintained Node.js LTS release and npm. No environment variables or API keys are required.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite.

### Build and preview

```bash
npm run build
npm run preview
```

The build runs TypeScript checks and generates the static site in `dist/`. Preview serves that build locally. Development and preview servers are for local use.

### Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build, then publish `dist/` to the `gh-pages` branch |

`npm run lint` is declared, but an ESLint configuration is not currently checked in. There is no automated test suite configured.

## Deployment

The repository uses GitHub Pages with the custom domain defined in `public/CNAME`. Publishing requires Git push access and GitHub Pages configured to serve the `gh-pages` branch.

```bash
npm run deploy
```

Vite copies public assets, including `CNAME`, into the build output. Hash-based routes such as `/#/work` remain on the static entry page. When reusing this project, update the domain, canonical URL, social metadata, and personal content before publishing.

## Updating content

- Edit career history in `src/components/Experience.tsx`.
- Update case studies, outcomes, and image references in `src/components/Work.tsx`.
- Edit essays in `src/components/Writing.tsx`; register new routes in `src/App.tsx`.
- Place approved screenshots in `public/images/` and reference them using `import.meta.env.BASE_URL`.
- Adjust the theme in `src/index.css`, component CSS, and `tailwind.config.js`.
- Update page titles, descriptions, and sharing images in `index.html`.

## Public content and secrets

Everything bundled into the site or committed to this public repository can be downloaded. Never put private credentials in frontend code or `VITE_*` variables. Use only screenshots and business information approved for public sharing, and redact the actual image file before committing; a visual crop does not remove the underlying pixels.

If a credential is ever committed, revoke or rotate it first. Deleting the current file does not remove prior Git history.
