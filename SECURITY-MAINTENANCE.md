# Static site security

October 29, 2026: GitHub Pages HTTPS enforcement is enabled. Tailwind's browser
development compiler was replaced with precompiled CSS. Existing colors and
fonts are preserved in tailwind.config.cjs. Font Awesome CSS and webfonts are
vendored locally with their license. Client behavior is in assets/home-0.js;
image fallbacks and the copy-phone button use event listeners instead of inline
handlers.

The Content Security Policy permits this site's scripts, local assets, Google
Fonts CSS/fonts, and the existing Unsplash/placehold image fallbacks. Executable
inline JavaScript and external scripts are blocked. Inline styles remain allowed
for existing design rules and toast fading. This static site has no form backend.

Build and verify:

```powershell
npm ci --ignore-scripts
npm run build
npm test
npm audit --audit-level=moderate
```

Commit assets/site.css and vendor/ after updates; GitHub Pages serves them without
running npm at request time. CI checks for build drift, known dependency issues,
external scripts and inline handlers. Browser regression checks cover desktop and
mobile layout, image loading, and mobile-menu open/close. Google Fonts and remote
hero images remain permitted external resources, not executable scripts.

GitHub Pages does not support custom response headers. A meta CSP cannot enforce
frame-ancestors; a configurable hosting proxy would be needed for that header.
