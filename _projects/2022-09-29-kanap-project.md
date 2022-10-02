---
title: "Kanap"
subtitle: "HTML/CSS"
date: 2022-09-29 00:00:00
featured_image: "/images/projects/2022-09-29-kanap-project/kanap-cover.jpg"
excerpt: Il s'agit de construire un site e-commerce en JavaScript .
---

[Voir une démo du site]({{ site.url }}/sub_pages/kanap/html/){:target="\_blank"}


## Contexte

Le client, Kanap, est une marque de canapés. Il souhaite avoir une plateforme de e-commerce en plus de sa boutique physique pour vendre ses produits sur Internet.  

## Travail réalisé
Le backend est déjà réalisé, ainsi que l'intégration web. Mon travail sur ce projet à donc consisté à consommer cette API pour rendre dynamiques les pages et à développer la gestion du panier.

L’application web est composée de 4 pages :
- **Une page d’accueil** montrant (de manière dynamique) tous les articles disponibles à la vente.
- **Une page “produit”** qui affiche (de manière dynamique) les détails du produit sur lequel l'utilisateur a cliqué depuis la page d’accueil. Depuis cette page, l’utilisateur peut sélectionner une quantité, une couleur, et ajouter le produit à son panier.
- **Une page “panier”**. Celle-ci contient plusieurs parties :
    - **Un résumé des produits dans le panier**, le prix total et la possibilité de modifier la quantité d’un produit sélectionné ou bien de supprimer celui-ci.
    - **Un formulaire permettant de passer une commande**. Les données du formulaire doivent être correctes et bien formatées avant d'être renvoyées au back-end. Par exemple, pas de chiffre dans un champ prénom.
- **Une page “confirmation”** : Un message de confirmation de commande, remerciant l'utilisateur pour sa commande, et indiquant l'identifiant de commande envoyé par l’API.

## Technologies utilisées

- HTML
- CSS
- JavaScript

## Environnement de développement

J'ai choisi d'utiliser Visual Studio Code, ainsi que les plugins [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) et [Prettier](https://prettier.io/) afin de faciliter le développement.  
J'ai également versionné mon code avec Git et GitHub. Vous trouverez le repository [ici](https://github.com/alelarge/P5-Lelarge-Armelle-Kanap).

## Les étapes de la réalisation

1. Prendre en main les maquettes HTML / CSS
2. Manipuler l’API (lire le ReadMe du repo GitHub fourni,  )
3. Insérer les produits dans la page d’accueil
4. Faire le lien entre un produit de la page d’accueil et la page Produit
5. Récupérer l’id du produit à afficher
6. Insérer un produit et ses détails dans la page Produit
7. Ajouter des produits dans le panier
8. Afficher un tableau récapitulatif des achats dans la page Panier
9. Gérer la modification et la suppression de produits dans la page Panier
10. Passer la commande
11. Afficher le numéro de commande
12. Mettre en place le plan de test d’acceptation

## Ma rétrospective sur le projet

Ce projet a été l'occassion pour moi de mettre en pratique mes conaissances en JavaScript. J'y ai appris : 
- Rendre un site dynamique
- Consommer une API
- Manipuler le DOM en JavaScript
- Utiliser `URLSearchParams`
- Manipuler le local storage en JavaScript

J'ai également appris à réaliser un plan de test d’acceptation.

|     | Fonctionnalité                                                                                | Action                                                                                                                   | Résultat attendu                                                                                                       | Résultat observé |
| --- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | ------------------ |
| 1   | Une page d’accueil montrant (de manière dynamique) tous les articles disponibles à la vente. | Ouvrir sur la page d'accueil du site web dans un navigateur                                                              | Affichage de l'ensemble des produits                                                                                    | OK                 |
| 2   | Une page produit affichant de manière dynamique les détails d’un produit                     | Ouvrir sur la page d’un produit du site web dans un navigateur                                                           | Affichage des détails d’un produit                                                                                     | OK                 |
| 3   | Ajout d’un produit au panier                                                                   | Choisir une quantité, une couleur et cliquez sur le bouton « ajouter au panier »                                        | Rediriger vers la page panier                                                                                           | OK                 |
| 4   | Une page panier montrant (de manière dynamique) tous les articles présents dans le panier    | Ouvrir sur la page panier du site web dans un navigateur                                                                 | Affichage de l'ensemble des produits                                                                                    | OK                 |
| 5   | Modifier la quantité d’un article du panier                                                   | Modifier la quantité d’un article dans le panier                                                                        | La quantité est mise à jour ainsi que le total du nombre d’article et du prix est mis à jour                         | OK                 |
| .6. | Supprimer la quantité d’un article du panier                                                  | Supprimer un article du panier                                                                                           | Le produit disparait de la page et le total du nombre d’article et du prix est mis à jour                              | OK                 |
| 7   | Passer commande                                                                                | Remplir le formulaire depuis la page panier et cliquer sur « Commander ! »                                               | Redirection vers la page de confirmation ou un message de confirmation est affiché ainsi que le numéro de la commande | OK                 |
| 8   | Passer commande                                                                                | Remplir le formulaire depuis la page panier et saisir une adresse email invalide avant de cliquer sur<br>« Commander ! » | Un message d’erreur s’affiche sous le champ email                                                                       | OK                 |
