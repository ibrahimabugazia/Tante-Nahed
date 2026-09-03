# طنط ناهد — Restaurant Website

A responsive, Arabic RTL, static restaurant website for **طنط ناهد — طعم البيت المصري… على أصوله**.

## What's included

- Home, Menu, About, Gallery and Contact pages
- Mobile-first responsive UI + mobile quick navigation
- Brand logo, favicon and cohesive Egyptian home-style visual identity
- Data-driven menu with 45 dishes, categories, descriptions and proposed launch prices
- WhatsApp inquiry + reservation flows
- Direct phone CTA
- SEO metadata and Restaurant JSON-LD
- Custom 404 page
- `.nojekyll` for static GitHub Pages publishing
- Launch checklist and image credits

## Important launch notes

The business is currently marked **pre-launch**. Address, opening hours, email and social profiles are intentionally presented as coming soon rather than invented.

The prices are planning estimates based on 2026 market benchmarks and are **not final selling prices**. Recalculate them after supplier quotes, recipe yields, portion weights, labor, rent, delivery commissions and target margin are known.

Some food photographs are Wikimedia Commons reference images. They are explicitly identified as reference imagery and should be replaced with original restaurant photography before commercial launch.

## GitHub Pages

This is a plain static site. Keep `index.html` in the repository root. In GitHub go to **Settings → Pages → Build and deployment → Deploy from a branch**, choose `main` and `/(root)`, then Save. GitHub documents this publishing flow here:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

After a push, GitHub says changes can take up to around 10 minutes to publish.

## Content source

All restaurant-specific facts should be maintained in `js/restaurant-data.js`. Do not add invented reviews, awards, address, opening hours, biography or social accounts.
