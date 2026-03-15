# NONNA — Restaurant & Bar

Single-page website for NONNA brunch restaurant. Warm linen and forest green brand, sticky nav, hero, photo band (Eat / Drink / Visit), about, menu preview, gallery, hours & location, footer.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .
```

Then open `http://localhost:8000` (or the port you chose).

## Assets

- **Logo:** `nonna-logo.jpeg` — replace or keep as is.
- **Photos:** Hero band and menu/gallery use Unsplash placeholders. Replace with your own images (e.g. exported from `Nonna - Logo.pdf` or your photo set):
  - `styles.css`: search for `background-image: url(` to find each placeholder and point it to your files (e.g. `url('images/eat.jpg')`).

## Brand tokens

- Background: `#EDE8DC`
- Primary: `#1D4D35`
- Accent: `#2A6347`
- Heading font: Bebas Neue (Akira Expanded–style)
- Body: Helvetica Neue / system

## Structure

- `index.html` — single scrolling page (Nav, Hero, Photo Band, About, Menu, Gallery, Hours, Footer)
- `styles.css` — layout and brand styles; 8px grid, max width 1280px, mobile breakpoints
- `main.js` — nav scroll state (adds `.scrolled` when page is scrolled)
