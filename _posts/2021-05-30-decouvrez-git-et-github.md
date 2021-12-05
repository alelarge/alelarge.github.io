---
title: 'Découvrez git et GitHub'
date: 2021-05-30 00:00:00
excerpt: En suivant un cours d'Openclassrooms, "Débutez avec React", je me suis trompée sur l'exercice et quand je m'en suis rendue compte, trop de choses avaient changées pour revenir en arrière. Je travaillais en local, et je n'avais pas versionné mon code...
---

En suivant un cours d'Openclassrooms, "Débutez avec React", je me suis trompée sur l'exercice et quand je m'en suis rendue compte, trop de choses avaient changées pour revenir en arrière. Je travaillais en local, et je n'avais pas versionné mon code. J'ai donc dû reprendre tout le code écrit lors du cours pour le projet. Si j'avais créé un repository avec git et Github, j'aurais pu facilement revenir en arrière tout en conservant les parties fonctionnelles. Cette erreur m'a permis de me rendre compte que Github est indispensable pour développer sereinement et de façon organisée.

En cas de besoin, on a donc une sauvegarde du projet, ce qui est essentiel dans la vie du développeur. C'est en faisant des erreurs, que l'on apprends.

## Quelle est la différence entre Git et GitHub ?

### Git

Git est outil en ligne de commande qui permet de gérer des versions pour le code: à chaque fois que l'on rajoute des versions, du code, on en crée des nouvelles. On l'utilise pour créer un dépôt local et gérer les versions de nos fichiers au fil du temps. Il est généralement plus adapté à un usage individuel.

Lorsqu'on travaille en équipe, nous travaillons sur la même base de code, on peut suivre les modifications au fur et à mesure des versions, savoir qui a fait quoi, mettre à jour sa base de code avec les dernières versions. Ainsi, "on n'écrase pas le code" d'un autre.

Ce qui est pratique, c'est que l'on peut travailler seul ou en équipe, il garde l'historique de nos modifications, permettant de revenir aux versions précédentes.

Un dépôt local est une base de code présente sur la machine d'un utilisateur. Il permet d'enregistrer les versions de notre code et d'y accéder si besoin. Prenons l'exemple d'un repas. Pour la réaliser, on doit suivre les étapes suivantes :

- choisir une recette
- regarder la liste des ingrédients
- acheter les ingrédients
- suivre les instructions de préparation
- rectifier et assaisonner si besoin
- déguster

Chaque étape représente une version différente de notre projet de repas, qui est stockée au fur et à mesure dans le dépôt local.

"Avec Git, l’historique complet du code n’est pas conservé dans un unique emplacement. Chaque copie du code effectué correspond à un nouveau dépôt dans lequel est conservé l’historique des modifications".
Git permet donc de sauvegarder notre travail, en cas d'erreur, on peut revenir dessus sans avoir peur de le perdre".

### GitHub

GitHub est un service en ligne qui va héberger votre dépôt de code. Ce dépôt est distant puisqu’il n’est pas stocké sur notre machine mais sur des serveurs. Il facilite la collaboration car plusieurs développeurs peuvent travailler en parallèle sur un même projet et accéder aux modifications des autres en temps réel. C'est aussi un allié puissant en gestion de projets, si l'on suit quelques règles, car il facilite la gestion des tâches et le suivi de leur avancement. On peut également y gérer les droits sur nos dépôts, par exemple écriture, lecture seule...

## Principales commandes sur Github

Pour gérer vos dépôts, voici les principales commandes :

- git add : indexez des fichiers
- git merge : fusionner deux branches
- git pull : se synchroniser avec la version la plus récente de la branche
- git push : Envoyez votre commit sur le dépôt distant
- git commit : Créez une nouvelle version

Il y en a encore beaucoup d'autres pour des usages plus ou moins avancés.

## Les alternatives à GitHub

### Gitlab

A la différence de GitHub, Gitlab est une plateforme Open Source qui permet également de gérer du code source, et de faciliter la gestion de projet Agile.

[about.gitlab.com](https://about.gitlab.com/fr-fr/)

### Bitbucket

Edité par Atlassian il est surtout adapté aux équipes professionnelles car les fonctionalités gratuites sont limitées. Il propose de base une intégration avec Jira et Trello.

[bitbucket.org](https://bitbucket.org/)

En conclusion, même si vous travaillez sur un projet personnel uniquement en local, versionner son code est une bonne pratique qui peut faire gagner beaucoup de temps !
