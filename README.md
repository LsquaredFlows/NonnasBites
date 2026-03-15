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

## Deploy to GitHub & Vercel

1. **Create a new repo on GitHub**  
   - Go to [github.com/new](https://github.com/new).  
   - Name it e.g. `nonna` (or `nonna-website`).  
   - Do **not** add a README or .gitignore (they already exist).  
   - Create the repository.

2. **Push this project**
   ```bash
   cd /Users/lukakraljevic/Desktop/NONNA
   git remote add origin https://github.com/YOUR_USERNAME/nonna.git
   git branch -M main
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username and `nonna` with the repo name if different.

3. **Deploy on Vercel**  
   - Go to [vercel.com](https://vercel.com) and sign in (e.g. with GitHub).  
   - **Add New Project** → **Import** your `nonna` repo.  
   - Leave build settings as default (Vercel will treat it as a static site).  
   - Deploy. Your site will get a URL like `nonna-xxx.vercel.app`.

## Structure

- `index.html` — single scrolling page (Nav, Hero, Photo Band, About, Menu, Gallery, Hours, Footer)
- `styles.css` — layout and brand styles; 8px grid, max width 1280px, mobile breakpoints
- `main.js` — nav scroll state and hide-on-scroll
- `vercel.json` — minimal config for Vercel static deploy
