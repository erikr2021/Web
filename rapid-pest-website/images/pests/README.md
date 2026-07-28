# Pest & wildlife photos

Each pest card loads its image in this priority order (first one that works wins):

1. **Your own photo** in this folder, using the exact filename below.
2. **A public Wikimedia Commons photo** (wired in as a fallback via `data-fallback`),
   which loads in a normal browser on the deployed site.
3. **An on-brand placeholder icon** if neither is available — so a card never
   shows a broken image.

Dropping a file here (option 1) always overrides the Wikimedia photo. That's the
recommended path: use your own photos, or properly licensed stock, so you control
quality and licensing.

> **Note on the Wikimedia fallbacks:** they were added without being able to
> verify each image from this build environment (the network blocks image hosts),
> so review them on the live site — some filenames may not resolve (those cards
> just show the placeholder), and any that do load are subject to that image's
> Wikimedia Commons license, which may require attribution. Replacing them with
> your own photos removes all of that.

| Filename            | Shows on card      |
| ------------------- | ------------------ |
| `ants.jpg`          | Ants               |
| `cockroaches.jpg`   | Cockroaches        |
| `termites.jpg`      | Termites           |
| `mosquitoes.jpg`    | Mosquitoes         |
| `spiders.jpg`       | Spiders            |
| `wasps.jpg`         | Wasps & Hornets    |
| `raccoons.jpg`      | Raccoons           |
| `bats.jpg`          | Bats               |
| `squirrels.jpg`     | Squirrels          |
| `opossums.jpg`      | Opossums           |
| `rodents.jpg`       | Rats & Mice        |
| `snakes.jpg`        | Snakes             |

## Recommended specs

- **Format:** JPG (or WebP)
- **Size:** ~1200 × 900 px (4:3), landscape. They're displayed in a 4:3 frame
  and cropped to fill, so keep the subject centered.
- **Weight:** compress to roughly 150–250 KB each for fast loading.
- **Licensing:** use your own photos, or images you have a license to use
  (e.g. a paid stock account, or public-domain sources such as CDC PHIL,
  USDA, USFWS, or Wikimedia Commons — check each image's license and keep
  attribution where required).

Once the files are here, commit them and the photos go live.
