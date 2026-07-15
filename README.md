# Portfolio Terminal — Abdoul Ibrahima Samaké

Portfolio bilingue (FR/EN) sur le thème d'un terminal, implémenté en **React + Vite**.
Port fidèle de la maquette `PortfolioTerminal.dc.html` (Claude Design).

## Fonctionnalités

- **7 sections** : Accueil, À propos, Compétences, Projets, Parcours, Formations, Contact
- **Bilingue** FR/EN avec bascule instantanée (bouton `EN`/`FR` en haut à droite)
- **4 thèmes d'accent** commutables (pastilles en bas à droite) — corail, cyan, vert, violet
- **Graphe de contributions GitHub** en direct (via `ghchart.rshah.org`)
- **Formulaire de contact** qui prépare un e-mail pré-rempli (`mailto:`)
- **Responsive** : carte terminal fixe 1280×832 sur desktop, plein écran adaptatif sur mobile
- Animations : curseur clignotant, avatar flottant, anneau rotatif, apparition des vues
- Respect de `prefers-reduced-motion`

## Démarrage

```bash
npm install
npm run dev      # serveur de dev  → http://localhost:5173
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

## Structure

```
src/
  main.jsx              # point d'entrée React
  App.jsx               # shell terminal, nav, état (vue / langue / accent)
  styles.css            # thème, keyframes, mise en page, responsive
  data/portfolio.js     # tout le contenu bilingue (profil, projets, etc.)
  sections/             # une vue par fichier
    Home.jsx  About.jsx  Skills.jsx  Projects.jsx
    Experience.jsx  Education.jsx  Contact.jsx
public/
  favicon.svg
```

## Personnaliser le contenu

Tout le contenu est centralisé dans `src/data/portfolio.js`. Chaque texte traduit
est un objet `{ fr, en }`. Modifiez ce fichier pour mettre à jour le profil, les
projets, le parcours, etc.

## CV

Le bouton « Télécharger le CV » pointe vers `/cv.pdf`. Placez votre CV dans
`public/cv.pdf` pour activer le téléchargement.
