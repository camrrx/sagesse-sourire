# React & Vite

**npm install** pour installer les dépendances du projet

**npm run dev** pour lancer l'application

## Design

Rien de particulier, aucune librairie externe utilisée.
**SCSS** -> Pareil que CSS classique mais avec possibilité d'imbriquer les classes pour avoir un schéma identique à ton template HTML.

_exemple_ :

```
HTML
<div class="container-parent">
   <div class="container-enfant">
      <div class="container-petit-enfant"><div>
   </div>
</div> 
```

```
SCSS 
.container-parent {
   // style du parent ici
   .container-enfant {
      // style de l'enfant ici
      .container-petit-enfant {
         // style du petit enfant ici
      }
   }
}
```

## Travail à réaliser

Tout est en place, il faut changer les images (photos) avec des vraies photos (pour les dentistes du cabinet notamment).

Il reste à arranger le style, notamment des paragraphes ou des blocs dans la plupart des pages. Et surtout à mettre à jour les textes comme dans le drive de Eve.

Il faudra aussi gérer la partie responsive sur les autres pages. (Fait sur la page d'accueil).
