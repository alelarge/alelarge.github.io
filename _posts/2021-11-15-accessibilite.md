---
title: "L'accessibilité web"
date: 2021-11-17 00:00:00
excerpt: Dans mon ancienne vie d'infirmière, j'ai été confrontée à différentes formes de handicap ainsi qu'à des applications métiers tout sauf accessibles. Forte de cette expérience, je conçois tout à fait l'importance de l'accessibilité. En tant que professionnelle du web, je pense qu'il est essentiel de maîtriser ce sujet.
---

## Qu'est-ce-que l'accessibilité ?

Lorsque l'on démarre un projet et que l'on définit les personas, on doit prendre compte la personne dans sa globalité : sexe, âge, culture... Mais on oublie souvent les handicaps, qu'ils soient permanents ou temporaires (personne aveugle, sourde, muette, daltonien, etc). L'accessibilité doit également permettre de s'adapter aux moyens matériels d'accès : débit internet, appareil (ordinateur, tablette, téléphone).

Lorsque l'on prend en compte ces différents paramètres à la conception, on parle de design inclusif. Le but est simple : rendre accessible un site web au plus grand nombre.

## Les solutions d'accessibilité ?

Les technologies d'assistances (TA) sont des équipements spécialisés pour permettre de résoudre un problème adéquat. Nous pouvons avoir deux possibilités :

- L'affichage alternatif : on peut changer le contraste, inverser les couleurs avec la colorimétrie, avoir des écrans en braille.
- La saisie alternative : Dans le cas d'une personne atteinte de la maladie de Parkinson, qui provoque des tremblements, nous pouvons mettre en place une variation de vitesse pour les touches ou utiliser des touches rémanentes.

## Les règles à suivre

Pour guider les développeurs dans l'implémentation de solutions accessibles, le W3C a édité un ensemble de règles : les Web Content Accessibility Guidelines (WCAG).

Ces règles d'accessibilité reposent sur quatre principes : Perceptible, Utilisable, Compréhensible, Robuste. On évalue le niveau de respect de ces principes suivant la notation suivante :

- A : Les exigences d'accessibilité de base sont atteintes.
- AA : Conforme à la législation au niveau international.
- AAA : Tous les principes sont respectés au niveau optimal. Il s'agit de l'objectif à atteindre bien que cela nécessite beaucoup de travail.

Le W3C faisant évoluer ces règles avec les technologies, nous en sommes actuellement à la troisième version. Les plus grandes différences par rapport à la précédente concernent l'accessibilité mobile et l'accessibilité aux utilisateurs aveugles ou malvoyants et celles et ceux avec des problèmes cognitifs.

A l'inverse être inaccessible c'est :

- Des images sans attribut d'information : titres, description.
- Un texte écrit avec des couleurs et sur un fond qui pourrait le rendre illisible.
- Aller dans un autre pays et ne pas parler la langue.

## HTML et accessibilité

Bien que le CSS et JavaScript ont leur rôle dans l'accessibilité d'un site web, l'HTML a le plus grand impact. Le balisage d'un document HTML sémantique étant critique, il est important de comprendre comment il rend le Web plus accessible.

Les balises HTML sémantiques permettent d'indiquer le rôle et le type de contenu présenté. De plus, elles ont leur importance pour le développement, elles doivent être responsives et compte dans le SEO (Search Engine Optimization ou référencement naturel). Si le HTML sémantique est si important pour garantir l'accessibilité du Web, c'est parce que les technologies d'assistance permettant la navigation Web en dépendent. En se basant sur la structure sémantique, elles transmettent des informations à leurs utilisateurs.

Par exemple, pour lire une vidéo, on mettra : `<button>Lire la vidéo</button>`

Voici un exemple de code :

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Mon parcours</title>
  </head>

  <body>
    <h1>Ma formation</h1>
    <p>
      Je commence ma formation développeuse web et je fais mon alternance avec
      Wecare@work
    </p>

    <p>Je travaille sur l'accessibilité puis je vais voir les tests !</p>
  </body>
</html>
```

Vous trouverez d'avantage d'exemples HTML concernant l'accessibilité ici :
[developer.mozilla.org/fr/docs/Learn/Accessibility/HTML](https://developer.mozilla.org/fr/docs/Learn/Accessibility/HTML)

Pour voir la différence entre du HTML sémantique ou non, je vous partage cet article qui me semble pertinent, et mets en valeur les différences entre les deux :
[ichi.pro/fr/html-semantique-le-fondement-de-l-accessibilite-web](https://ichi.pro/fr/html-semantique-le-fondement-de-l-accessibilite-web-252595292437527)

## CSS

Il est nécessaire de respecter la sémantique du CSS également.

```css
h1 {
  font-size: 10rem;
  font-weight: bold;
}

p,
li {
  background-color: #0000ff;
  font-size: 1.8rem;
}
```

## JavaScript

Il est nécessaire de respecter la sémantique de JavaScript sinon il pourrait compromettre l'accessibilité également.

Pour le CSS ou JavaScript, des éléments concernant l'accessibilité :
[developer.mozilla.org/fr/docs/Learn/Accessibility/CSS_and_JavaScript](https://developer.mozilla.org/fr/docs/Learn/Accessibility/CSS_and_JavaScript)

## Conclusion

Rendre accessible les sites et applications que nous développons fait partie de notre travail :

- S'adapter aux différents écrans, être responsive, mettre des sous-titres, une description.
- Ne pas provoquer de crises comme les personnes souffrant d'épilepsie pas plus de trois flashs par seconde.
- Avoir des informations pour les formulaires.
- Pouvoir choisir de mettre à jour ou non les mises à jour.
- La structure page : la respecter.
- La colorimétrie : faire attention aux couleurs et les contrastes.

Nous allons voir dans un prochain article, les tests d'accessibilité.
