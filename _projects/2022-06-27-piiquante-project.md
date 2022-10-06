---
title: "Piiquante"
subtitle: "Node.js, Express et MongoDB"
date: 2022-06-27 00:00:00
featured_image: "/images/projects/2022-06-27-piiquante-project/piiquante_cover.jpg"
excerpt: "Piiquante est une aplication web de sauces épicées dans laquelle les utilisateurs peuvent ajouter leurs sauces préférées et liker ou disliker les sauces ajoutées par les autres."
---

<div class="gallery" data-columns="2">
  <img
    src="/images/projects/2022-06-27-piiquante-project/piquante_homepage.png"
    style="border: 1px solid grey"
  />
  <img
    src="/images/projects/2022-06-27-piiquante-project/piquante_details.png"
    style="border: 1px solid grey"
  />
</div>

## Contexte

Piiquante est une aplication web pour les fans de sauces épicées. Les utilisateurs peuvent ajouter leurs sauces préférées et liker ou disliker les sauces ajoutées par les autres.

## Travail réalisé

Le front-end étant déjà réalisé, je me suis occupée de développer le back-end, qui consiste en une API Rest. Piiquante a été récemment été victimes d'attaques, l'API de cette application doit être construite selon des pratiques de code sécurisées.

## Fonctionalitées

- Création de compte
- Login / Logout
- Ajout, modification et suppression de sauce
- Upload d'image
- Seul l'auteur doit être autorisé à effectuer les actions de modificaiton et suppression sur une sauce
- Like / unlike et dislike. Un utilisateur ne peut pas liker, unliker ou disliker une sauce plus d'une fois

## Exigences de sécurité

1. Le mot de passe de l'utilisateur doit être haché
2. L'authentification via un Bearer token doit être implémentée sur toutes les routes concernées
3. Deux comptes ne peuvent pas avoir la même adresse email (contrainte d'unicité)
4. Un plugin Mongoose doit assurer la remontée des erreurs issues de la base de données.
5. Les variables d'environnement sont gérées dans un fichier .env

## Compétences et technologies mises en oeuvre

- Node.js
- Express
- MongoDB
- Utilisation de Postman (plateforme API pour la création et l'utilisation d'API) afin de tester les routes
- Stocker des données de manière sécurisée.
- Implémenter un modèle logique de données conformément à la réglementation.
- Mettre en oeuvre des opérations CRUD de manière sécurisée.

## Environnement de développement

J'ai choisi d'utiliser Visual Studio Code, ainsi que les plugins [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) et [Prettier](https://prettier.io/) afin de faciliter le développement local.  
J'ai également versionné mon code avec Git et GitHub. Vous trouverez le repository [ici](https://github.com/alelarge/piiquante).

## Les étapes de la réalisation

1. Initialiser un serveur Node (j’ai créé un fichier server.js. Il sert à mettre en place le serveur via le module http, qui sert l’application définie dans app.js)
2. Installation des dépendances (Express, Mongoose, Express-rate-limit, Bcrypt, Jsonwebtoken, Multer)
3. Création des models (user et sauce)
4. Implémentation du Middleware d’authentification
5. Controller sauce et user.js
6. Création des routes sauce et user.js
7. Implémentation du Middleware d'upload d'image (multer)

## Ma rétrospective sur le projet

La conception et le développement d'une API Rest avec Express a été une expérience enrichissante. J'ai pu monter en compétence avec MongoDB, Express et Node.js ainsi que sur Postman, qui s'est révélé être un outil précieux pour tester et documenter les routes.

Grâce à l'OWASP (Open Web Application Security Project), j'ai pu être sensibilisée aux exigences de sécurité (importance du fichier .env, mot de passe crypté, mail unique, authentification...)
