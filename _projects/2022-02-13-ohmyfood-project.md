---
title: "Ohmyfood"
subtitle: "HTML/CSS (SASS)"
date: 2022-02-13 00:00:00
featured_image: ""
excerpt: "Mon retour d'expérience sur le développement de Ohmyfood, un site mobile first qui répertorie les menus de restaurants gastronomiques"
---

[Voir une démo du site]({{ site.url }}/sub_pages/ohmyfood/){:target="\_blank"}  
[Voir le code sur GitHub](https://github.com/alelarge/Lelarge_3_03_01_2021){:target="\_blank"}

<div class="gallery" data-columns="2">
  <img
    src="/images/projects/2022-02-13-ohmyfood-project/homepage.png"
    style="border: 1px solid grey"
  />
  <img
    src="/images/projects/2022-02-13-ohmyfood-project/restaurant.png"
    style="border: 1px solid grey"
  />
</div>

## Contexte

Ohmyfood est une startup qui a pour objectif de développer un site mobile first qui répertorie les menus de restaurants gastronomiques. En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas pour que les plats soient prêts à leur arrivée. Finis, les temps d'attente au restaurant !

## Compétences et technologies mises en oeuvre

- HTML 
- CSS (SASS)
- Conception responsive
- Animations CSS avancés
- Assurer la cohérence graphique d'un site web
- Mettre en place une structure de navigation pour un site web

## Fonctionalités

- Champ de saisie de la zone géographique de recherche
- Affichage de la liste des restaurants
- Page restaurant contenant une image de couverture et une section contenant les 4 menus sous forme de cartes
- Un footer identique sur toutes les pages.
- Au clic sur “Contact”, un renvoi vers une adresse mail est effectué.
- Header: Présent sur toutes les pages
  - Sur la page d’accueil, il contient le logo du site.
  - Sur les pages de menu, il contient en plus un bouton de retour vers la page d’accueil

## Effets graphiques et animations

Page d'acceuil :  
- Au survol, la couleur de fond des boutons principaux s’éclaircit légèrement et l’ombre portée est accentuée
- Un bouton "J’aime" en forme de cœur se remplit progressivement au survol
- Un “loading spinner” couvrant l'intégralité de l'écran s'affiche lorsqu'on on arrive sur la page d'accueil

Pages de menu :  
- À l’arrivée sur la page, les plats apparaîssent progressivement avec un léger décalage dans le temps
- Survoler un plat fait apparaître une petite coche à droite du plat. Cette coche devra coulisser de la droite vers la gauche. Pour cette première version, l’effet peut apparaître au survol sur desktop au lieu du clic. Si l’intitulé du plat est trop long, il devra être rogné avec
des points de suspension. Un exemple de l’effet attendu est fourni

## Contraintes

- Logo et titres: Shrikhand
- Texte: Roboto
- Identité graphique données
- Tout le code doit être versionné sur GitHub et le site devra être accessible sur
Github Pages une fois terminé
- L'utilisation de javaScript n'est pas autorisé ni aucun framework
- Aucun code CSS ne devra être appliqué via un attribut style dans une balise HTML.
- Les animations ou transitions CSS ne devront pas utiliser de JavaScript ni de librairie.

## Environnement de développement

J'ai choisi d'utiliser Visual Studio Code, ainsi que les plugins [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) et [Prettier](https://prettier.io/) afin de faciliter le développement local.  
J'ai également versionné mon code avec Git et GitHub. Vous trouverez le repository [ici]().

## Les étapes de la réalisation

1. Découpage des maquettes avec Photoshop (logiciel de retouche, de traitement et dessin, pour découper les blocs de page) outil règle (mesurer tailles) et outil pipette (récupérer les couleurs)
2. Rassembler les ressources (images, icônes, polices de caractères)
3. Définition de la structure HTML du site afin qu'elle soit propre et cohérente
4. Intégration des différentes parties : Header,  main et footer
5. Ecriture du CSS (SASS). Utilisation de flexbox et implémentation des breakpoints
6. Développer les animations 
7. Validation au W3C du HTML et du CSS


## Ma rétrospective sur le projet

Ce que j'ai appris avec ce projet est de savoir découper la maquette, l’importance de la structure HTML (faire une page HTML correctement avant de faires les trois autres pages), de pratiquer du SASS, 
des animations CSS. 