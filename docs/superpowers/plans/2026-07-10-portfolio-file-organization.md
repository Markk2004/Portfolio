# Portfolio File Organization Implementation Plan

> For agentic workers: use the approved file-organization spec and track each step with checkboxes.

Goal: Reorganize the Next.js portfolio frontend into clear component, content, locale, form, and asset boundaries without changing runtime behavior.

Architecture: Keep front/app as the App Router entrypoint and keep Laravel's back repository in its standard structure. Group frontend modules by responsibility, preserve the @/* alias rooted at front, and update imports mechanically. Delete only files proven unused by reference checks.

Tech Stack: Next.js 16, JavaScript, React 19, Tailwind CSS 4, Jest, ESLint, Three.js, React Three Fiber, @react-three/drei; Laravel/PHP backend unchanged.

## Global Constraints

- Preserve separate Git repositories at E:\portfolio\front and E:\portfolio\back.
- Do not move or delete either .git directory.
- Do not change component props, exports, locale keys, project slugs, CSS classes, API URLs, or runtime behavior.
- Preserve hospital-app, InvestingNew, and investerBack.
- Preserve /images/profile/profile-1.jfif and /images/profile/profile-2.jfif.
- Keep app/favicon.ico, placeholders, docs, configs, AGENTS.md, and CLAUDE.md.
- Do not restructure E:\portfolio\back.
- Delete files only after rg proves they have no source/documentation reference.
- Do not add barrel files, dependencies, aliases, or abstractions.
- Final commit subject: refactor: organize portfolio frontend files.

---

### Task 1: Baseline and reference inventory

Files:
- Read: E:\portfolio\front\jsconfig.json, app\page.js, README.md
- Read: E:\portfolio\front\__tests__

Interfaces:
- Input: current frontend tree and @/* alias.
- Output: safe move map and passing baseline.

- [ ] Step 1: Confirm alias and worktree state

~~~powershell
cd E:\portfolio\front
Get-Content -Raw .\jsconfig.json
git status --short
~~~

Expected: @/* resolves from E:\portfolio\front; pre-existing changes are recorded before moves.

- [ ] Step 2: Inventory imports and asset references

~~~powershell
cd E:\portfolio\front
rg -n "@/components|@/lib|/images/profile|file\.svg|globe\.svg|next\.svg|vercel\.svg|window\.svg" app components hooks lib __tests__ README.md docs
~~~

Expected: every import and default-asset reference that may need updating is visible.

- [ ] Step 3: Run baseline checks

~~~powershell
cd E:\portfolio\front
npm run lint
npm test -- --runInBand
npm run build
~~~

Expected: lint, all Jest suites, and the static production build pass before filesystem changes.

### Task 2: Move modules into responsibility-based folders

Files:
- Create: front/components/3d, layout, sections, ui
- Create: front/lib/content, i18n, forms
- Move: approved components and library modules from the design spec

Interfaces:
- Consumes: Task 1 move map.
- Produces: identical modules at the target paths.

- [ ] Step 1: Create directories

~~~powershell
cd E:\portfolio\front
New-Item -ItemType Directory -Force components\3d, components\layout, components\sections, components\ui, lib\content, lib\i18n, lib\forms | Out-Null
~~~

- [ ] Step 2: Move components

~~~powershell
cd E:\portfolio\front
Move-Item components\InteractiveIdCard.js components\3d\InteractiveIdCard.js
Move-Item components\IdCardScene.js components\3d\IdCardScene.js
Move-Item components\IdCardFallback.js components\3d\IdCardFallback.js
Move-Item components\Header.js components\layout\Header.js
Move-Item components\Footer.js components\layout\Footer.js
Move-Item components\LanguageSwitcher.js components\layout\LanguageSwitcher.js
Move-Item components\CustomCursor.js components\layout\CustomCursor.js
Move-Item components\WelcomeIntro.js components\layout\WelcomeIntro.js
Move-Item components\Hero.js components\sections\Hero.js
Move-Item components\About.js components\sections\About.js
Move-Item components\Contact.js components\sections\Contact.js
Move-Item components\PortfolioTabs.js components\sections\PortfolioTabs.js
Move-Item components\Projects.js components\sections\Projects.js
Move-Item components\Skills.js components\sections\Skills.js
Move-Item components\CertificatesEmptyState.js components\sections\CertificatesEmptyState.js
Move-Item components\ContactForm.js components\ui\ContactForm.js
Move-Item components\ProjectCard.js components\ui\ProjectCard.js
Move-Item components\SkillBadge.js components\ui\SkillBadge.js
Move-Item components\Reveal.js components\ui\Reveal.js
Move-Item components\TypingRole.js components\ui\TypingRole.js
~~~

Expected: each source file exists exactly once in its target folder.

- [ ] Step 3: Move data modules

~~~powershell
cd E:\portfolio\front
Move-Item lib\portfolio-content.js lib\content\portfolio-content.js
Move-Item lib\roles.js lib\content\roles.js
Move-Item lib\tech-icons.js lib\content\tech-icons.js
Move-Item lib\locales\en.js lib\i18n\en.js
Move-Item lib\locales\th.js lib\i18n\th.js
Move-Item lib\validation.js lib\forms\validation.js
~~~

Expected: content, locale, and validation files exist at the target paths.

### Task 3: Update imports without behavior changes

Files:
- Modify: front/app/page.js
- Modify: all moved files under front/components and front/lib
- Modify: front/__tests__

Interfaces:
- Consumes: Task 2 paths.
- Produces: resolving imports with unchanged exports and props.

- [ ] Step 1: Apply the approved path mappings

~~~text
components/Header                 -> components/layout/Header
components/Footer                 -> components/layout/Footer
components/LanguageSwitcher       -> components/layout/LanguageSwitcher
components/CustomCursor           -> components/layout/CustomCursor
components/WelcomeIntro           -> components/layout/WelcomeIntro
components/Hero                   -> components/sections/Hero
components/About                  -> components/sections/About
components/Contact                -> components/sections/Contact
components/PortfolioTabs          -> components/sections/PortfolioTabs
components/Projects               -> components/sections/Projects
components/Skills                 -> components/sections/Skills
components/CertificatesEmptyState -> components/sections/CertificatesEmptyState
components/ContactForm            -> components/ui/ContactForm
components/ProjectCard             -> components/ui/ProjectCard
components/SkillBadge             -> components/ui/SkillBadge
components/Reveal                 -> components/ui/Reveal
components/TypingRole              -> components/ui/TypingRole
components/InteractiveIdCard      -> components/3d/InteractiveIdCard
components/IdCardScene            -> components/3d/IdCardScene
components/IdCardFallback         -> components/3d/IdCardFallback
lib/portfolio-content              -> lib/content/portfolio-content
lib/roles                          -> lib/content/roles
lib/tech-icons                     -> lib/content/tech-icons
lib/locales/en                     -> lib/i18n/en
lib/locales/th                     -> lib/i18n/th
lib/validation                     -> lib/forms/validation
~~~

Expected: no source or test imports a deleted old path.

- [ ] Step 2: Fix relative imports inside moved files

~~~text
sections/Projects.js       -> ../ui/ProjectCard
sections/Skills.js         -> ../ui/SkillBadge
sections/Contact.js        -> ../ui/ContactForm
sections/Hero.js           -> ../3d/InteractiveIdCard, ../ui/TypingRole
layout/Header.js           -> ./LanguageSwitcher
3d/InteractiveIdCard.js   -> ./IdCardFallback
~~~

PortfolioTabs.js keeps same-folder imports for CertificatesEmptyState, Projects, and Skills.

- [ ] Step 3: Verify stale paths and tests

~~~powershell
cd E:\portfolio\front
rg -n "@/components/(Header|Footer|LanguageSwitcher|CustomCursor|WelcomeIntro|Hero|About|Contact|PortfolioTabs|Projects|Skills|CertificatesEmptyState|ContactForm|ProjectCard|SkillBadge|Reveal|TypingRole|InteractiveIdCard|IdCardScene|IdCardFallback)|@/lib/(portfolio-content|roles|tech-icons|locales|validation)" app components hooks lib __tests__
npm test -- --runInBand
~~~

Expected: stale-path search returns no result and all existing tests pass.

### Task 4: Remove confirmed duplicate and unused assets

Files:
- Delete: E:\portfolio\52b6ec24-2fd2-4dbe-8c54-826d173e42bf.jfif
- Delete: E:\portfolio\8c16cfe9-7b6c-4e85-9702-bd5e1e4320b0.jfif
- Delete only if unreferenced: front/public/file.svg, globe.svg, next.svg, vercel.svg, window.svg
- Keep: profile images, placeholders, and favicon

Interfaces:
- Consumes: reference inventory and updated imports.
- Produces: canonical profile assets and no unreferenced default assets.

- [ ] Step 1: Reconfirm deletion safety

~~~powershell
cd E:\portfolio
rg -n "52b6ec24-2fd2-4dbe-8c54-826d173e42bf|8c16cfe9-7b6c-4e85-9702-bd5e1e4320b0|file\.svg|globe\.svg|next\.svg|vercel\.svg|window\.svg" . -g '!front/node_modules/**' -g '!front/.next/**' -g '!back/vendor/**'
~~~

Expected: no application or documentation reference requires a deleted asset.

- [ ] Step 2: Delete exact confirmed files

~~~powershell
Remove-Item -LiteralPath 'E:\portfolio\52b6ec24-2fd2-4dbe-8c54-826d173e42bf.jfif','E:\portfolio\8c16cfe9-7b6c-4e85-9702-bd5e1e4320b0.jfif'
~~~

Delete the five default SVGs only if Step 1 found no application/documentation reference. Do not recursively delete any directory.

### Task 5: Document the final frontend structure

Files:
- Modify: E:\portfolio\front\README.md

Interfaces:
- Consumes: final tree from Tasks 2–4.
- Produces: a README structure section with stable commands and folder responsibilities.

- [ ] Step 1: Document these responsibilities

~~~text
app/                  App Router shell and page composition
components/3d         desktop R3F card and mobile fallback
components/layout     header, footer, locale control, cursor, intro
components/sections   page sections and portfolio tabs
components/ui         reusable cards, form, reveal, and typing UI
hooks/                browser capability and reveal hooks
lib/content           portfolio data, roles, and technology icons
lib/i18n              Thai/English dictionaries
lib/forms             client validation
public/               canonical image assets and placeholders
~~~

Expected: a new developer can locate a component or data module without reading implementation details.

- [ ] Step 2: Verify README paths and commands

~~~powershell
cd E:\portfolio\front
rg -n "components/(3d|layout|sections|ui)|lib/(content|i18n|forms)|npm run dev|npm run lint|npm test|npm run build" README.md
~~~

Expected: all target folders and existing commands are documented.

### Task 6: Full verification and commit

Files:
- Verify: all frontend files changed by Tasks 1–5
- Modify: only files with a verified failure

Interfaces:
- Consumes: organized frontend tree and README.
- Produces: clean checks and the required refactor commit.

- [ ] Step 1: Verify final tree and stale paths

~~~powershell
cd E:\portfolio\front
rg --files components lib public/images | Sort-Object
rg -n "@/components/(Header|Footer|Hero|About|Contact|PortfolioTabs|Projects|Skills|ContactForm|ProjectCard|SkillBadge|Reveal|TypingRole|InteractiveIdCard)|@/lib/(locales|portfolio-content|roles|tech-icons|validation)" app components hooks lib __tests__ README.md
~~~

Expected: target tree is present and stale-path search returns no result.

- [ ] Step 2: Run final checks

~~~powershell
cd E:\portfolio\front
git diff --check
npm run lint
npm test -- --runInBand
npm run build
~~~

Expected: all commands pass and Next.js produces a static production build.

- [ ] Step 3: Review and commit only organization changes

~~~powershell
cd E:\portfolio\front
git status --short
git diff --stat
git diff --name-status
git add app components hooks lib public README.md
git commit -m "refactor: organize portfolio frontend files"
~~~

Expected: only moves/import updates, confirmed asset cleanup, and README structure documentation are committed; no backend or unrelated visual/content change is staged.

- [ ] Step 4: Verify clean handoff

~~~powershell
cd E:\portfolio\front
git status --short
git log -1 --oneline
~~~

Expected: the worktree is clean and the latest subject is refactor: organize portfolio frontend files.

## Self-Review

- Spec coverage: approved moves, cleanup, import safety, docs, verification, commit boundary, and out-of-scope rules are covered.
- Placeholder scan: no TBD, TODO, or vague implementation step is used.
- Interface consistency: all paths use components/3d, layout, sections, ui, lib/content, lib/i18n, and lib/forms consistently.
- Scope check: only frontend organization and documentation are included; Laravel behavior remains unchanged.
