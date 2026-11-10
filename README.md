# Juan Bueno-Pardo — academic website (draft v1)

A fully free, responsive, static personal research website. It is ready for GitHub Pages and requires no server, account, database, paid theme, or build step.

## Preview locally

Double-click `index.html` (or serve the folder using `python -m http.server 8000`). All core graphics are original SVGs included in `assets/`, so the site is viewable offline. The optional Google Fonts load when online; fallback fonts are included via the browser.

## Publish on GitHub Pages

1. Create a free GitHub account if you don't already have one.
2. Create a **public** repository named `YOUR-GITHUB-USERNAME.github.io`.
3. Upload **the contents** of this folder (not the outer folder) to the root of the repository. `index.html` must be in the repository root.
4. On GitHub go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then `main` and `/ (root)`, and save.
5. Once GitHub deploys it, visit `https://YOUR-GITHUB-USERNAME.github.io`.

Note: it can take several minutes for the first deployment. Detailed official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Easy edits

- `index.html` holds all written content, links and your selected publications. Use Ctrl+F to find any title or phrase and edit it.
- `styles.css` holds colors and styles; change the color variables at the top.
- `script.js` handles the mobile menu, publication filters, and footer year.
- `assets/*.svg` contain the original scientific illustrations; these are standalone and may be replaced with your own research diagrams or photos.
- To add a publication: duplicate an `<a class="pub-item" ...>` block in `index.html`, update year, title, journal, href DOI, and the space-delimited `data-categories` (`risk`, `fisheries`, or `nbs`).
- To replace the hero illustration with a photo, upload a `.jpg` into `assets/`, then change `background-image:url('assets/ocean-bathymetry.svg')` in `styles.css` to that new filename. Use an image you own or are licensed to reuse.
- To replace the decorative monogram with a portrait, change the `about-art` block in `index.html` and add CSS for a photo.

## Review before public launch

- **Ramón y Cajal status:** Website currently says 'incoming 2027'. Confirm exact timing, host institution and title when the contract is finalized. It intentionally does not claim an appointment has started.
- **Research direction:** The three research themes were drafted editorially from prior discussions and are not a formal committed programme. Rewrite to match your final research objectives.
- **Projects:** ACTNOW and FutureMARES descriptions are deliberately broad; check wording of leadership/contributions.
- **Publications:** Four papers verified against academic publisher pages, not your full output list. Add additional selected items as needed.
- **Contact:** Currently uses the public official UVigo email address and publicly verifiable Google Scholar link.
- **Visual identity:** The ocean artwork is an original abstract SVG, not a real photograph or a map of a specific coastline. You can replace it with your own photographs if preferred.

## Information checked against public sources (as of November 2026)

- UVigo profile: https://portalcientifico.uvigo.gal/investigadores/875214/detalle?lang=en
- UVigo publications: https://portalcientifico.uvigo.gal/investigadores/875214/publicaciones?lang=en
- Future Oceans Lab biography: https://futureoceanslab.org/team/juan-bueno/
- 2026 Dada et al.: https://doi.org/10.1007/s10113-026-02575-1
- 2026 Pinto et al.: https://doi.org/10.1016/j.jenvman.2026.129644
- 2024 Bueno-Pardo et al.: https://doi.org/10.1111/gcb.17296
- 2023 Pinto et al.: https://doi.org/10.1016/j.ecolecon.2023.107928

## License

Original design and artwork generated for this personal website. Publication titles and links refer to the publishers' sites. No third-party photographs, university logos or protected font files have been bundled.
