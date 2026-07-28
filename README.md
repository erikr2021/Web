# Rapid Pest & Wildlife Solutions — Website

A complete, production-ready, responsive website for **Rapid Pest & Wildlife
Solutions**, a pest control and wildlife removal company serving Delaware and
Pennsylvania. Built with plain HTML5, CSS3 and vanilla JavaScript — no
frameworks, no build step. Save the files to any web host and it runs.

## Structure

```
rapid-pest-website/   (site root — upload the contents to your web host)
  index.html      Home
  about.html      About / mission / values / service area
  services.html   8 detailed service sections
  gallery.html    Filterable image gallery (placeholders)
  faq.html        Accordion FAQ (+ FAQ schema)
  contact.html    Contact details + validated form + map placeholder
  robots.txt      Crawler rules
  sitemap.xml     XML sitemap
  favicon.ico     Site icon
  /css/style.css  All styles (design tokens, components, responsive)
  /js/script.js   Nav, accordion, gallery filter, form validation, scroll reveal, back-to-top
  /images/        Logo + place your own photos here
```

## Company details

- **Phone:** 302-332-5600
- **Email:** rapidpestandwildlife@yahoo.com
- **Service area:** Delaware & Pennsylvania

## Going live — a short checklist

1. **Domain:** the pages use `https://www.rapidpestandwildlife.com/` in
   canonical/Open Graph tags, `robots.txt` and `sitemap.xml`. Find-and-replace
   that URL if your real domain differs.
2. **Photos:** the gallery and service sections use lightweight SVG
   placeholders. Drop real JPG/WebP photos into `/images` and swap the
   placeholder blocks for `<img loading="lazy" …>` tags.
3. **Contact form:** validation is front-end only. Wire the form up to your
   email service, a form endpoint (e.g. Formspree), or a small backend to
   actually receive submissions.
4. **Google Map:** replace the map placeholder on `contact.html` (and the one
   on `about.html`) with a real Google Maps `<iframe>` embed.
5. **Favicon:** `favicon.ico` is currently the logo PNG; replace with a proper
   multi-size `.ico` for best results if you like.

## Notes

- Fully responsive across desktop, tablet and mobile with a floating mobile
  "Call" button and large tap targets.
- SEO: per-page meta descriptions, Open Graph tags, and Schema.org
  `LocalBusiness` / `FAQPage` JSON-LD.
- Accessible: skip link, ARIA on nav/accordion/form, keyboard focus styles,
  and `prefers-reduced-motion` support.
- Clean, commented source that is minify-ready.

## Claude Code plugins

This repository enables several plugin marketplaces at the project level via
`.claude/settings.json`. When you open the repo in Claude Code and trust the
folder, Claude Code prompts you to install them; run `/reload-plugins` to
activate.
