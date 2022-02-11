# yavmdb

## Todo :

- Structure interne : data, method, computed
	- Dans tous les composants
- Cycle de vie : Mounted
	- Dans PopularMovies
- Rendu déclaratif
	- {{ }} dans MovieSimple
- Directives pour la génération de code : v-if, v-for, v-bind
	- v-if pour Navbar avec changement de bouton quand on s'est connecté, ajout d'un message pour prévenir que les identifiants ne sont pas bons et afficher une alerte ou une autre en fonction d'une variable.
	- v-for dans PopularMovies
	- v-bind dans les props
- Gestion event : v-on / @
	- v-on click quand recherche de film (bouton ou clavier avec keyup.enter), quand on utilise les boutons de fonctions modales
- Formulaire & liaison bidirectionnelle : v-model
	- v-model quand écrit dans la navbar pour récupérer la valeur de la recherche et quand on se connecte.
- Watch
	- avec les v-rating pour noter un film.
- Gestion évenementielle inter-composants
	- Emit quand on prévient le composant parent qu'on est connecté ou déconnecté.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).