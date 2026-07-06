# DemoSite

A tiny static website (plain HTML, CSS, and JavaScript — no build tools or
frameworks required) used as a sandbox for demos and experiments.

## Project structure

```
DemoSite/
├── index.html   # Page markup/content
├── style.css    # Page styling
├── script.js    # Page behavior
└── README.md    # This file
```

## Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari, etc.).
- (Optional, for the local-server option) [Python 3](https://www.python.org/)
  or [Node.js](https://nodejs.org/), if you don't already have a way to serve
  static files.

No package manager, build step, or compilation is required — this project is
plain static HTML/CSS/JS.

## Running the project locally

You have two options:

### Option 1: Open the file directly

Simply open `index.html` in your browser:

- **macOS**: `open index.html`
- **Windows**: `start index.html`
- **Linux**: `xdg-open index.html`

Or double-click `index.html` in your file explorer.

This works for this simple demo, but for projects that grow to load data via
`fetch`/`XMLHttpRequest`, browsers may block requests from `file://` URLs due
to CORS restrictions. In that case, use Option 2.

### Option 2: Serve it with a local web server

From the project's root directory, run one of the following, then open
<http://localhost:8000> in your browser:

```bash
# Using Python 3
python3 -m http.server 8000
```

```bash
# Using Node.js (no install required)
npx http-server -p 8000
```

Press `Ctrl+C` in the terminal to stop the server when you're done.

## Editing the project

1. Clone the repository and create a new branch for your change:
   ```bash
   git clone https://github.com/caldanayabur/DemoSite.git
   cd DemoSite
   git checkout -b my-change
   ```
2. Make your edits:
   - **Content/structure** — edit `index.html`.
   - **Styling** — edit `style.css`.
   - **Behavior/interactivity** — edit `script.js`.
3. Preview your changes using either running option above, and refresh the
   browser after each edit (no build/watch step is needed).
4. Commit your changes and open a pull request:
   ```bash
   git add .
   git commit -m "Describe your change"
   git push origin my-change
   ```

## Contributing

Issues and pull requests are welcome. Please open an issue describing the
change you'd like to make before submitting large pull requests.
