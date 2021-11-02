---
title: "Reservia"
subtitle: "HTML/CSS"
date: 2021-08-17 00:00:00
featured_image: "/images/projects/2021-08-17-reservia-project/reservia_illu.jpg"
excerpt: Il s'agit d'un projet d'intégration front-end d'un site web responsive en HTML5 / CSS3.
---

[Voir une démo du site]({{ site.url }}/sub_pages/reservia/){:target="\_blank"}

Il s'agit d'un projet d'intégration front-end d'un site web responsive en HTML5 / CSS3.  
Je suis partie de deux maquettes, une représentant le site en navigation desktop et l'autre en version mobile. Libre à moi de réaliser les adaptations nécessaires pour la mise en page des états intermédiaires.

## Contexte

Reservia est une entreprise fictive, proposant un outil de planification de vacances. Leur site permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix. Les hébergements peuvent également être filtrés par thématique, par exemple leur budget ou leur ambiance.

Le design est basé sur les principes du Material Design. Durant la phase de prototypage, la première étape consiste à intégrer la maquette responsive en HTML et CSS. C'est cette tâche que j'ai réalisé.

## Fonctionalités

- Le champ de recherche est un champ de saisie, dont le texte peut être édité par l’utilisateur.
- Les filtres doivent changer d’apparence au survol.
- Dans le menu, les liens “Hébergements” et “Activités” sont des ancres qui doivent mener aux sections de la page.

## Contraintes techniques

- Aucun élément n’est coupé et le texte a une taille suffisante quelque soit la taille du support.
- Les icônes proviennent de la bibliothèque [Font Awesome](https://fontawesome.com/). Les couleurs de la charte sont le bleu `#0065FC`, et sa version plus claire `#DEEBFF` ainsi que le gris pour le fond `#F2F2F2`.
- La police du site est [Raleway](https://fonts.google.com/specimen/Raleway).
- Le site doit être compatible avec les dernières versions de Chrome et Firefox.

## Environnement de développement

J'ai choisi d'utiliser Visual Studio Code, ainsi que les plugins [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) et [Prettier](https://prettier.io/) afin de faciliter le développement.  
J'ai également versionné mon code avec Git et GitHub. Vous trouverez le repository [ici](https://github.com/alelarge/Transformez-une-maquette-en-site-web).

## Les étapes de la réalisation

1. Découpage des maquettes avec Photoshop
2. Rassembler les ressources (images, icones, polices de caractères)
3. Définition de la structure HTML du site afin qu'elle soit propre et cohérente
4. Intégration des différentes parties : Header, footer
5. Ecriture du CSS (utilisation de flexbox) et implémentation des breakpoints
6. Validation au W3C du HTML et du CSS

## Ma rétrospective sur le projet

Ce projet a été complexe pour moi du fait de mon manque d'expérience. J'ai mis du temps à découper la maquette et à définir une structure HTML cohérente. Arrivé à la moitiée de l'intégration, mon CSS n'étant pas correctement organisé j'ai du le reprendre avec l'aide de mon mentor sous peine de devoir repartir de zéro. Cela m'a permis de comprendre l'importance d'avoir un CSS propre et organisé, d'autant plus dans le cadre d'un site responsive. J'ai également pu monter en compétence sur l'usage de Flexbox, crucial pour ce projet.

### Retrospective speedboat

La rétrospective speedboat s'utilise en agile avec la méthole Scrum. Il est organisé par le Scrum Master ou Product Owner. Il permet de se réunir en équipe pour parler du projet selon différents axes:

- un bateau à voile ou à moteur qui vogue sur la mer : il s'agit de l'équipe.
- des ancres attachées au bateau : ce qui nous freine, ce qui nous a encombrés et compliqués la tâche
- l'île de rêve : les objectifs atteints par soi même ou l'équipe, qu'avons nous réussis ensemble?
- le soleil : ce qui s'est bien passé, a été facile
- le vent : ce qui nous a poussés à avancer, ce qui nous motive, les moteurs
- l'affreux monstre : les dangers, qu'estce qui aurait pu nous faire échouer? Quelles étaient nos craintes? Quels étaient les pièges et obstacles?

![](/images/projects/2021-08-17-reservia-project/retrospective_reservia.png)

## Les maquettes originales

![](/images/projects/2021-08-17-reservia-project/desktop.png)

<img
    src="/images/projects/2021-08-17-reservia-project/mobile.png"
    style="max-width:300px;"
/>
