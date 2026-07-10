# Project Details Logic Implementation Plan

> For agentic workers: use this plan task-by-task. Steps use checkbox syntax for tracking.

Goal: Add logic so visitors can select any featured project and open localized project details from the existing portfolio card without adding a backend, database, or new visual design system.

Architecture: Keep project details in the existing static portfolio content layer. Projects owns the selected project slug and renders a reusable ProjectDetails component; ProjectCard emits an explicit callback. The detail component handles close, Escape, focus return, body-scroll locking, and accessible dialog semantics while reusing existing classes.

Tech Stack: Next.js 16, JavaScript, React 19, Tailwind CSS 4, Jest, Testing Library; Laravel backend unchanged.

## Global Constraints

- Logic and content wiring only; do not redesign cards, modal styling, typography, colors, or animations.
- Do not add API routes, database tables, CMS, runtime GitHub scraping, or dependencies.
- Preserve hospital-app, InvestingNew, and investerBack.
- Preserve existing GitHub and live-demo links.
- Support th and en with local static data.
- Do not claim repository capabilities unless verified from repository metadata or the provided SRS.
- Label HAMS details as requirements from SoftDeath-SRS-HAMS.md, not as independently verified implementation facts.
- Keep keyboard focus visible, use dialog semantics, and allow Escape to close.
- Keep Laravel and POST /api/contact unchanged.
- Final commit subject: feat: add project details logic.

## Current File Map

- front/lib/content/portfolio-content.js: project records and locale composition.
- front/lib/i18n/en.js and th.js: localized copy.
- front/components/sections/Projects.js: project-grid state owner.
- front/components/ui/ProjectCard.js: card and external links.
- front/components/ui/ProjectDetails.js: new detail dialog.
- front/tests: content and interaction coverage.

---

### Task 1: Define localized detail data and lookup

Files:
- Modify: E:\portfolio\front\lib\content\portfolio-content.js
- Modify: E:\portfolio\front\lib\i18n\en.js
- Modify: E:\portfolio\front\lib\i18n\th.js
- Modify: E:\portfolio\front\__tests__\lib\content.test.js

Interfaces:

~~~js
details = {
  sourceType: 'verified' | 'provided-srs',
  sourceLabel: String,
  overview: String,
  modules: Array<{ title: String, description: String }>,
  roles: Array<{ title: String, description: String }>,
  businessRules: Array<{ code: String, description: String }>,
  nonFunctionalRequirements: Array<{ code: String, description: String }>
}

getProjectBySlug(slug, locale = 'en') -> localized project | undefined
~~~

- [ ] Step 1: Add failing content assertions

~~~js
const content = getLocaleContent('en');
expect(content.projects.map((project) => project.slug)).toEqual([
  'hospital-app', 'InvestingNew', 'investerBack',
]);
expect(content.projects.find((project) => project.slug === 'hospital-app').details.sourceType)
  .toBe('provided-srs');
expect(content.projects.find((project) => project.slug === 'hospital-app').details.modules)
  .toHaveLength(6);
expect(getProjectBySlug('missing-slug', 'en')).toBeUndefined();
~~~

Expected before implementation: the new assertions fail because the details contract is absent.

- [ ] Step 2: Add localized labels

Add these keys to both locale dictionaries under the existing common/UI copy:

~~~js
viewDetails
closeDetails
detailsOverview
detailsModules
detailsRoles
detailsBusinessRules
detailsNonFunctional
detailsSource
~~~

English values are View Details, Close Details, Overview, System Modules, User Roles, Business Rules, Non-functional Requirements, and Source. Thai values must be natural equivalents.

- [ ] Step 3: Add HAMS SRS-backed data

Attach sourceType provided-srs and sourceLabel SoftDeath-SRS-HAMS.md to hospital-app. Add exactly these six module groups from the supplied SRS:

~~~js
Asset Management
Borrow & Return
Spare Part Management
Maintenance Management
Depreciation Management
Reporting & Analytics
~~~

Add the four SRS roles: System Administrator, Asset Officer, Maintenance Staff, and Medical Staff. Add BR-01 through BR-04 and NF-01 through NF-04 as concise paraphrases of the supplied document. NF-01 must retain the search/read target of no more than three seconds. Do not label these as verified GitHub implementation features.

- [ ] Step 4: Add conservative data for the other projects

InvestingNew details may state only that it is a public Next.js/TypeScript repository with a linked Vercel deployment. investerBack details may state only that it is a public PHP backend repository. Do not invent finance workflows, endpoints, authentication, or database capabilities. Mark both sourceType verified and use their repository URL as sourceLabel.

- [ ] Step 5: Implement localized lookup

Add:

~~~js
export function getProjectBySlug(slug, locale = 'en') {
  return getLocaleContent(locale).projects.find((project) => project.slug === slug);
}
~~~

Expected: content tests pass, unknown locale still falls back to English, and all three projects expose safe details data.

### Task 2: Add project selection and close logic

Files:
- Modify: E:\portfolio\front\components\sections\Projects.js
- Modify: E:\portfolio\front\components\ui\ProjectCard.js
- Create: E:\portfolio\front\components\ui\ProjectDetails.js
- Create: E:\portfolio\front\__tests__\components\ProjectDetails.test.js

Interfaces:

~~~js
Projects({ projects, content })
ProjectCard({ project, content, onViewDetails })
ProjectDetails({ project, content, onClose })
~~~

Projects owns selectedProjectSlug. ProjectCard emits project.slug. ProjectDetails renders nothing for an undefined project and otherwise renders an accessible dialog.

- [ ] Step 1: Write failing interaction tests

~~~js
render(<Projects projects={content.projects} content={content} />);
expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
await user.click(screen.getByRole('button', { name: /view details/i }));
expect(screen.getByRole('dialog')).toBeVisible();
expect(screen.getByText(/system modules/i)).toBeVisible();
await user.keyboard('{Escape}');
expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
~~~

Expected before implementation: the details button and dialog are absent.

- [ ] Step 2: Add the card callback

Add one button that calls onViewDetails(project.slug) and uses the localized viewDetails label. Keep GitHub and Live Demo as separate anchors with unchanged href, target, and rel behavior. Do not make the whole card clickable.

- [ ] Step 3: Add selected state to Projects

Use:

~~~js
const [selectedProjectSlug, setSelectedProjectSlug] = useState(null);
const selectedProject = projects.find((project) => project.slug === selectedProjectSlug);
const closeDetails = () => setSelectedProjectSlug(null);
~~~

Pass the selected project and closeDetails to ProjectDetails after the grid. Selecting another card replaces the current project.

- [ ] Step 4: Implement dialog lifecycle logic

ProjectDetails must:

- return null when project is undefined;
- expose role dialog, aria-modal true, and an accessible name based on the project title;
- focus the close button when opened;
- close through the close button, Escape, and backdrop click;
- ignore backdrop close when the inner detail surface is clicked;
- lock body scrolling while open and restore the previous overflow value on cleanup;
- return focus to the triggering View Details button after close;
- keep all essential content in normal DOM text.

Use refs and useEffect cleanup for the keydown listener, body style, and focus restoration. Do not add a new animation library.

### Task 3: Render localized detail sections

Files:
- Modify: E:\portfolio\front\components\ui\ProjectDetails.js
- Modify: E:\portfolio\front\__tests__\components\ProjectDetails.test.js

Interfaces:

- Consumes the details object from Task 1.
- Produces deterministic sections for overview, source, modules, roles, business rules, and non-functional requirements.

- [ ] Step 1: Render shared fields

Always render title, overview, stack names, and source label using localized labels.

- [ ] Step 2: Render optional arrays

Render a section only when its array has items. Each module, role, business rule, and NF item must show its title/code and description as DOM text. Never infer missing content.

- [ ] Step 3: Test locale switching

Assert that English and Thai dialogs use different labels/overview text while the project slug and source label remain stable.

Expected: focused detail and content tests pass in both locales.

### Task 4: Full verification and logic-only commit

Files:
- Verify all files from Tasks 1–3.
- Modify only files with a verified failure.

- [ ] Step 1: Run focused tests

~~~powershell
cd E:\portfolio\front
npm test -- --runInBand __tests__/lib/content.test.js __tests__/components/ProjectDetails.test.js __tests__/components/PortfolioTabs.test.js
~~~

Expected: focused tests pass.

- [ ] Step 2: Run all frontend checks

~~~powershell
cd E:\portfolio\front
npm run lint
npm test -- --runInBand
npm run build
git diff --check
~~~

Expected: lint, all Jest suites, production build, and diff check pass.

- [ ] Step 3: Run logic acceptance checks

Verify that all three cards have one details action, existing external links are unchanged, selecting a second project replaces the first, Escape/button/backdrop close the dialog, focus and body overflow are restored, both locales work, and opening details makes no Laravel or GitHub request.

- [ ] Step 4: Review and commit

~~~powershell
cd E:\portfolio\front
git status --short
git diff --stat
git add components lib __tests__
git commit -m "feat: add project details logic"
~~~

Expected: only local details data, localized copy, interaction logic, and tests are staged. No CSS redesign, backend change, or dependency change is staged.

## Self-Review

- SRS coverage: six HAMS modules, four roles, BR-01 through BR-04, and NF-01 through NF-04 are mapped.
- Content safety: HAMS data is labeled provided-SRS; other projects use only verified current facts.
- Logic coverage: lookup, selection, dialog lifecycle, Escape, backdrop, focus, scroll lock, locale, and regressions are covered.
- Scope check: only project-detail logic and content wiring are included; visual design and backend are out of scope.
- Placeholder scan: no TBD, TODO, or unspecified implementation step is used.
