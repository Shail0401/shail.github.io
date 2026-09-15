# shail.github.io

This repository hosts my personal portfolio website, built with Angular and published through GitHub Pages.

## Overview

This project is the source code for my portfolio site, showcasing my work, experience, projects, and contact information. The app is built using Angular and is designed to be lightweight, responsive, and easy to deploy to GitHub Pages.

## Repository structure

- `shail-portfolio-app/` - Angular application source code
- `README.md` - repository overview and deployment notes

## Tech stack

- Angular
- TypeScript
- SCSS
- Angular Material
- GitHub Pages

## Local development

```bash
cd shail-portfolio-app
npm install
npm start
```

The app will run locally in the browser, usually at `http://localhost:4200/`.

## Production build

```bash
cd shail-portfolio-app
npm run build
```

This generates a production build that can be published to GitHub Pages.

## GitHub Pages deployment

The portfolio is intended to be deployed as a static site via GitHub Pages. After building the Angular app, publish the generated output from the build directory to the GitHub Pages branch or use a GitHub Actions workflow to automate deployment.

Typical workflow:

1. Install dependencies
2. Run the production build
3. Publish the generated app output to the GitHub Pages branch/site

## Notes

This repository is intended to serve as the public portfolio website for my work and professional profile.

