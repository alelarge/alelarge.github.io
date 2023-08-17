---
title: "Création d'un réseau social d'entreprise"
subtitle: "Node.js Express.js PostgreSQL React.Js"
date: 2023-01-02 00:00:00
featured_image: "/images/projects/2023-01-02-groupomania/gropomania_illu.png"
excerpt: "Groupomania permet de faciliter les interactions entre collègues et vise à améliorer l'ambiance de l'équipe. Les personnes vont pouvoir créer un compte, se connecter, partager un post et pouvoir le liker"
---

[Voir le code sur GitHub](https://github.com/alelarge/groupamania){:target="\_blank"}

## Contexte

Groupomania permet de faciliter les interactions entre collègues et vise à améliorer l'ambiance de l'équipe. Les personnes vont pouvoir créer un compte, se connecter, partager un post et pouvoir le liker. 

## Travail réalisé

Dans ce projet, j'ai réalisé le front, le back (une API REST) ainsi que la base de donnée.

## Fonctionalitées

**Compte utilisateur**  
![](/images/projects/2023-01-02-groupomania/gropomania_screen_login.png)

L’utilisateur peut se connecter ou créer un compte s’il n’en a pas. Le formulaire de connexion requiert le mail et le mot de passe.
- Un utilisateur doit avoir la possibilité de se déconnecter. 
- La session de l’utilisateur persiste tant qu’il est connecté.
- Les données de connexion doivent être sécurisées.  

**Page d’accueil**  
![](/images/projects/2023-01-02-groupomania/gropomania_screen_flux.png)

On y trouve la liste des posts créés par les différents utilisateurs. On souhaite que les posts soient listés du plus récent au plus ancien.  

**Création d’un post**
![](/images/projects/2023-01-02-groupomania/gropomania_screen_update_post.png)

Un utilisateur doit pouvoir créer un post. 
- Un post doit pouvoir contenir du texte et une image. 
- Un utilisateur doit aussi pouvoir modifier et supprimer ses posts.  

**Système de like**  
Un utilisateur doit pouvoir liker un post, une seule fois pour chaque post.  

**Rôle administrateur**  
Dans le but de pouvoir faire de la modération si nécessaire, il faudra créer un utilisateur “administrateur” ; celui-ci aura les droits de modification / suppression sur tous les posts du réseau social. vous avez les identifiants de l’administrateur.  

## Compétences et technologies mises en oeuvre

- Intégration dans le respect de la charte graphique
- Mettre en place le front, le back et la base de données 
- React.js, Express.js
- PostgreSQL pour la base de donnée
- Authentifier un utilisateur et maintenir sa session

## Environnement de développement

J'ai choisi d'utiliser Visual Studio Code, ainsi que les plugins [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), [Prettier](https://prettier.io/) et Docker afin de faciliter le développement local.  
J'ai également versionné mon code avec Git et GitHub. Vous trouverez le repository [ici](https://github.com/alelarge/groupamania).


## Ma rétrospective sur le projet

Ce projet était intéressant car il fallait créer le projet à partir de zéro : base de données, back et front. J'ai pu voir React.js avec l'utilisation de react-hook-form pour les formulaires ainsi que le react-router-dom.

J'ai pu utiliser Docker également pour faciliter le développement de l'application et éviter d'éventuels conflits de version pour Node et la base de donnée.  


