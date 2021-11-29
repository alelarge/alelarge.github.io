---
title: "Tester l'accessibilité web"
date: 2021-11-17 00:00:00
featured_image: '/images/posts/2021-11-17-les-outils-accessibilite-web/featured_image.jpg'
excerpt: Lorsque l'on développe un site web accessible, il nous faut un moyen de tester qu'il répond aux critères WCAG (les Web Content Accessibility Guidelines). Pour cela nous disposons d'une palette d'outils et de méthodes manuels et automatisés même s'il reste encore beaucoup de progrès à faire dans ce domaine.
---

Avant de parler des outils permettant de tester l'accessibilité d'un site, il est bon d'évoquer les outils d'accessibilité, utilisés par ceux qui en ont besoin afin de naviguer sur le web, afin de mieux comprendre en quoi notre travail sur ces problématiques impactera directement leur expérience.

## Les outils d'accessibilité

### La navigation alternative avec un clavier

Comme vous le savez sans doute, on peut utiliser la touche `TAB` pour naviguer entre différents éléments et `Maj + TAB` pour revenir en arrière. La navigation au clavier est le mode le plus utilisé par les personnes déficientes visuellement, pour qui la souris n'est pas vraiment pratique.

Pour l'essentiel, nous devons nous assurer que :

- Toutes les fonctions sont accessibles avec un clavier ([WACG SC 2.1.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html)).
- Le focus reste bloqué quelque part sur la page ([WACG SC 2.1.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html)).
- Un lien d'accès direct au contenu vous permet de passer rapidement des blocs de navigation qui se répètent ([WACG SC 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)).
- L'ordre de focus des éléments est logique ([SC 2.4.3](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html)).
- Un indicateur de focus est visible ([SC 2.4.7](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html)).

### Les lecteurs d'écran

#### Naviguer sur une page ou un PDF avec NVDA

NVDA signifie NonVisual desktop Access ou Accès au bureau non visuel.
Il s'agit d'un lecteur d'écran, qui guide les personnes déficientes visuelles grâce à une voix synthétique et/ou en braille afin de restituer les informations à l'écran et actuellement capable de traduire au moins 20 langues. Il s'agit d'un outil open source et gratuit disponible sur MAC et PC.

Il donne des indications sur différents points dont les principaux sont : nom et taille de la police, fautes d'orthographe, la position de la souris. De plus, il privilégie la sécurité avec le contrôle du compte utilisateur.

Cette documentation permet d'installer NYDA et présente les différents paramètres disponibles : [Documentation NYDA](https://blog.atalan.fr/tester-accessibilite-web-pdf-lecteur-ecran-nvda/).

#### VoiceOver

Disponible uniquement sur MAC et IOS, VoiceOver est installé par défaut. Pour l'activer / désactiver sur MAC, utilisez le raccourci `Commande + F5`.

Pour d'autres paramètres, ces documents sont utiles :

- [Guide VoiceOver](https://www.apple.com/fr/voiceover/info/guide/_1124.html#mchlp2683)
- [Référence des gestes de VoiceOver sous iOS](https://blog.atalan.fr/reference-gestes-voiceover-ios/)

#### TalkBack

Côté Android, Google propose un lecteur d'écran préinstallé. Il permet principalement aux personnes malvoyantes, malentendantes et aux personnes à dextérité réduite d'utiliser leur périphérique.

Cette documentation est utile pour l'installer et comprendre les différents paramètres : [Référence des gestes sous Android](https://blog.atalan.fr/reference-des-gestes-de-talkback-sous-android-4-1-4-2-et-4-3/)

## Test d'accessibilité

Lorsque l'on développe un site web accessible, il nous faut un moyen de tester qu'il répond aux critères WCAG (les Web Content Accessibility Guidelines). Pour cela nous disposons d'une palette d'outils et de méthodes manuels et automatisés même s'il reste encore beaucoup de progrès à faire dans ce domaine.

### W3C Link checker

Le Link Checker du W3C cherche les problèmes au niveau des liens, des ancres et de tout objet référencé dans une page web, une feuille de style CSS, ou récursivement sur tout un site.  
Pour de meilleurs résultats, il est recommandé d'avoir au préalable validé le HTML ou le CSS.

[validator.w3.org/checklink](https://validator.w3.org/checklink).

### WAVE Evaluation Tool ou vérificateur d'accessibilité automatisé

Il s'agit d'une extension pour navigateur disponible sur Chrome et Firefox. Contrairement au W3C Link Checker, cet outil gratuit permet de tester l'accessibilité d'un site web directement sur le navigateur, ce qui est très utile dans le cas d'un site dynamique ou pour tester une page se basant sur des données stockées localement.

Une fois installée, vous pouvez l'ouvrir pour voir s'afficher dans un panneau latéral les informations d'accessibilité comme des problèmes de structure du document HTML, d'ARIA ainsi que d'autres détails dont l'importance est représentée par un code couleur :

![](/images/posts/2021-11-17-les-outils-accessibilite-web/wave_interface.png)

#### Styles

Vous pouvez activer/désactiver le CSS. Le désactiver est un bon moyen de se rendre compte des problèmes de structuration du contenu tandis que l'activer vous donnera des informations sur l'accessibilité visuelle telle que les problèmes de contraste ou de chevauchement d'éléments.

CSS ou non, sur la page web elle même, vous trouverez également de nombreuses icônes vous informant sur la structure ou sur d'éventuels soucis. Ici par exemple, Wave nous informe de la présence d'un lien redondant, ce qui rend la navigation par synthèse vocale moins agréable car dans ce mode l'utilisateur peut choisir d'écouter la liste des liens présents sur la page et celui-ci sera donc lu deux fois.

![](/images/posts/2021-11-17-les-outils-accessibilite-web/redundant_link.png)

Ces icônes sont un outil très intéressant pour comprendre les causes et les solutions que l'on peut mettre en place.

#### Summary

Dans cet onglet, on retrouve un résumé de l'évaluation du site :

- en rouge : les erreurs qui ont un impact important sur l'accessibilité, et sont contraires aux exigences du WCAG
- en jaune : les erreurs qui ne respectent pas l'accessibilité
- en vert : les axes d'amélioration. Par exemple lorsqu'un texte alternatif est trop long il est préférable de le réduire
- en bleu : les éléments structurels sont des éléments qui sont corrects par exemple des listes non ordonnées
- en violet : Les attributs ARIA (Accessible Rich Internet Applications) présents sur la page.

#### Détails

![](/images/posts/2021-11-17-les-outils-accessibilite-web/wave_details_tab.png)

Ici vous trouverez davantage de détails sur les éléments présentés dans la section Summary. Vous pouvez cliquer sur chacun d'entre eux afin de défiler la page et d'aller directement à la position concernée mais aussi masquer / afficher les icônes correspondantes sur la page à l'aide de la case à cocher.

#### Référence

![](/images/posts/2021-11-17-les-outils-accessibilite-web/wave_reference_tab.png)

Dans l'onglet `Détails`, si vous cliquez sur l'icône d'information grise à droite de la liste de chaque type d'élément, vous serez redirigés dans l'onglet `Référence` ou vous trouverez des détails précieux sur ce que cette icône signifie, pourquoi c'est important, comment le corriger et comment l'algorithme qui l'a détecté fonctionne ainsi que des liens vers la norme de standardisation définissant ce critère et les bonnes pratiques associées.

#### Structure

![](/images/posts/2021-11-17-les-outils-accessibilite-web/wave_structure_tab.png)

L'onglet structure permet de visualiser sous forme de liste la structure HTML sémantique du contenu de la page : header, main, footer, navigation, h1, h2... Les balises non sémantiques ne seront pas affichées afin de vous donner une idée plus précise de la façon dont votre document sera interprété par un outil d'assistance à la navigation tel qu'une synthèse vocale.

#### Contrast

![](/images/posts/2021-11-17-les-outils-accessibilite-web/wave_contrast_tab.png)

Ce dernier onglet vous présente les problèmes de contraste détectés sur la page web. En cliquant sur l'une des icônes rouge (contrast icon) la page défilera à l'endroit ou se trouve le problème et les valeurs des couleurs de premier plan et de fond seront mise à jour en conséquence. Vous pourrez alors les modifier interactivement afin de trouver des valeurs qui offrent un ratio de contraste suffisant pour toutes les tailles de texte présentes.

Pour en savoir plus sur cet outil, rendez-vous sur le site
[wave.webaim.org](https://wave.webaim.org).

### Axe DevTools - Web Accessibility Testing

Il s'agit d'une extension Chrome développée par [Deque Systems](https://www.deque.com/), une société qui se positionne comme un leader de l'accessibilité proposant des outils et des services d'audit.

Une fois installé, redémarrez votre navigateur puis inspectez la page web. Vous trouverez un nouvel onglet "axe DevToolls".

![](/images/posts/2021-11-17-les-outils-accessibilite-web/axe_devtools_tab.png)

D'ici vous pouvez choisir de scanner tout votre document ou seulement une partie. Un rapport s'affiche ensuite, listant les problèmes détectés dans la partie de gauche, dans la section "All issues". Cliquer sur l'un des type de problème vous affichera les détails dans la partie de droite, d'où vous pouvez utiliser la navigation afin d'en parcourir les occurrences. Juste en dessous, vous avez des options afin de mettre l'endroit en évidence, inspecter le code et, très pratique, obtenir plus d'informations, ce qui vous redirige sur le site de Deque qui est très bien fait :

![](/images/posts/2021-11-17-les-outils-accessibilite-web/axe_rule_website_page.png)

Vous y trouverez notamment (en plus de l'explication), l'impact sur l'expérience utilisateur, les handicaps concernés et la référence vers le standard pour encore plus de détails si vraiment vous y tenez !

### TPG Color Contrast Analyzer

Ce logiciel gratuit (disponible sur Mac et PC) permet d'analyser le contraste entre deux couleurs sur l'écran à l'aide d'un outil pipette, on peut donc l'utiliser pour travailler sur un site web mais aussi sur n'importe quoi d'autre, comme une maquette.

Nous pouvons voir les couleurs et leur code HEX associé ainsi à la notation pour les critères d'accessibilité.

Quelques autres outils pour les mesures de contraste :

- [Tanaguru contrast finder](https://contrast-finder.tanaguru.com/) (outil en ligne)
- [Contrast Finder](https://app.contrast-finder.org/) (outil en ligne)

### Des outils de test payant

Il existe également une grande variété d'outils de test performants mais payants dont voici un échantillon :

- [Dyno Mapper](https://dynomapper.com/) : Permet de créer visuellement et afficher l'architecture d'un site web avec l'ensemble du contenu : vidéos, images, documents...
- [Tenon.io](https://tenon.io/) : Leur outil s'intègre directement dans la phase de développement en testant directement le code afin de prévenir les soucis en amont.
- [tota11y](https://khan.github.io/tota11y/) : Aide à visualiser les performance en termes d'accessibilité d'un site et facilitant l'interprétation des résultats pour les développeurs non familiers avec ces problématiques.
