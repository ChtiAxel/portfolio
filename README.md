# Portfolio d’Axel Nave

Portfolio construit avec Vue 3, TypeScript, Vite et Vue Router. Les pages Home, Projets, Compétences et Contact sont des vues distinctes. Le routeur utilise les fragments d’URL (`/#/projets`) pour fonctionner sur GitHub Pages sans configuration serveur.

## Prérequis

- Node.js 20.19+ ou 22.12+
- npm

## Lancer en local

```sh
npm install
npm run dev
```

## Mise en ligne sur GitHub Pages

Le workflow `.github/workflows/deploy.yml` compile le site et le publie automatiquement à chaque push sur `main`. Le dépôt doit utiliser GitHub Pages avec la source **GitHub Actions** (Settings > Pages > Build and deployment > Source).

Pour publier une première fois : envoie les fichiers du projet vers la branche `main`, puis vérifie l’exécution du workflow dans l’onglet Actions. Le site sera disponible à l’adresse <https://chtiaxel.github.io/portfolio/>. La configuration `base: '/portfolio/'` et le routeur avec URL à fragments sont déjà adaptés à cette adresse.

Pour vérifier le build en local :

```sh
npm run build
```

## Personnaliser

- Modifie les contenus des pages dans `src/views/`.
- Modifie la navigation et le pied de page dans `src/App.vue`.
- Modifie les styles dans `src/style.css`.
- Les coordonnées et projets sont dans `src/views/ContactView.vue` et `src/views/ProjectsView.vue`.
- Complète les coordonnées de l’hébergeur dans `public/mentions-legales.html` avant publication.
- Le CV se trouve sous `public/cv/cv_AN.pdf`. Conserve ce nom pour que le bouton de téléchargement et la page de prévisualisation continuent de fonctionner.

## Photos des projets

Les photos sont stockées localement dans `public/images/projects/` et utilisées sous la licence Unsplash. Les crédits et liens vers les photographes sont affichés sous chaque projet. Pour le projet Pokémon, la photo illustre un jeu de cartes générique plutôt qu’une illustration officielle de Pokémon.

- NaturSQL — Nubelson Fernandes : <https://unsplash.com/photos/person-coding-on-laptop-workspace-UcYBL5V0xWQ>
- Jeu de cartes — Katie Mont : <https://unsplash.com/photos/board-game-with-pieces-and-cards-on-blue-table-sBc6WsEQJ6M>
- SAE Socket — Taylor Vick : <https://unsplash.com/photos/server-room-with-network-cabinets-aWslrFhs1w4>
- SAE Graphe — BoliviaInteligente : <https://unsplash.com/photos/an-abstract-image-of-a-network-of-dots-s5C_4tMY8fA>


