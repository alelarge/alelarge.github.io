---
title: 'Découvrez le Le Test Driven Developement (TDD)'
date: 2023-01-02 15:00:00
excerpt: Le Test Driven Developement (TDD) ou Developpement Piloté par les Tests en français est une méthode de développement qui vise à produire un code robuste et de qualité. Dans cet article, nous allons en étudier les principes et les illustrer par des exemples en JavaScript à l'aide de Jest, un framework de test.
---

Le Test Driven Developement (TDD) ou Developpement Piloté par les Tests en français est une méthode de développement qui vise à produire un code robuste et de qualité. Dans cet article, nous allons en étudier les principes et les illustrer par des exemples en JavaScript à l'aide de Jest, un framework de test.

## Origine du TDD 

A la fin des années 1990, Kent Beck, un informaticien américain, a inventé le concept d'Extreme Programming (XP) dont le Développement Piloté par les Tests est une brique importante. Dans son livre "[Test Driven Development : By Example](https://books.google.fr/books?id=CUlsAQAAQBAJ&printsec=frontcover&redir_esc=y#v=onepage&q&f=false)", il développe l'idée selon laquelle on ne doit pas seulement réfléchir à l'algorithme pour écrire son code mais que pour implémenter une fonctionnalité, il est également nécessaire se se questionner sur l'objectif : Définir le besoin, définir le comportement attendu, et est-ce que l'implémentation satisfait le besoin utilisateur.

## Les principes

Le TDD se caractérise essentiellement par le fait d'écrire un test qui échoue avant le code de production correspondant. On fixe ainsi l'objectif du besoin le comportement attendu à l'avance.

Une fois le test échouant écrit, le but est d'écrire le moins de code de production possible pour satisfaire le comportement attendu.

Les principes du TDD sont incarnés par trois lois arbitraires qui ne sont qu'un moyens parmis d'autres (comme le "Test && Commit || Revert TCR) pour atteindre les objectifs suivants :
1. Créer une suite de tests fiables et permettant le refactoring : cela permet de déployer le code testé immédiatement en production dans le cas où tous les tests passent.
2. Créer un code suffisement découplé pour être facilement testé et refactorisé.
3. Créet une boucle de feedback rapide soutenant le travail d'écriture du programme à un rythme régulier, offrant une productivité stable.
4. Créer les tests et le code comme deux parties suffisament découplés l'une de l'autre afin de garantir une maintenance et une évolution aisée des deux sans devoir répercuter les évolutions de l'un dans l'autre.

Robert C. Martin formule ainsi les trois lois du TDD :
1. Il faut écrire un test qui échoue avant d'écrire le code de production correspondant.
2. Il faut écrire une seule assertion à la fois, faisant échouer le test ou la compilation.
3. Il faut écrire le minimum de code de production pour que l'assertion du test actuellement en échec soit satisfaite. 

## Avantages du TDD

Avoir du code testé permet d'être plus confiant lors des mises en production, en exécutant les tests avant le déploiement, cela permet égallement de limiter la dette technique et de détecter d'éventuelles régressions. Certes, on mets plus de temps à écrire du code mais on en gagne d'avantage en temps debug et en maintenabilité car les structures fonctionnelles dépendent moins les unes des autres. En résumé, le TDD permet d'écrire du code propre, durable, et maintenable.

## Les étapes

Il y a trois étapes dans le TDD : 
- Rouge (red)
- Vert (green)
- Remaniement (refactor)

Ce processus est répété en cycles, jusqu'à ce que l'on ait implémenté la fonctionalité dans son intégralité. Ces cycles successifs de développement sont appelés des micro-cycles de TDD.

### Etape rouge

On désigne ainsi cette étape car l'IDE adopte la couleur rouge pour les tests qui ont été refusés/failed.

Lorsqu'on débute l'implémentation d'une fonctionnalité avec la méthode TDD, on écrit tout d'abord un seul test qui décrit une partie du problème à résoudre et qui échoue. L'échec d'un test indique qu'il est valide puisque le code de production correspondant n'existe pas.

En écrivant le test avant le code, on s'assure de concentrer nos efforts et de ne pas se disperser. Le plus important dans cette étape est de vérifier que le test échoue pour les bonnes raisons. Par exemple que les données d'entrée et le résultat attendu de notre test sont pertinents et correspondent bien à des cas réels. En cas de doute, il est préférable de s'en assurer avec le métier (la ou les personnes qui ont exprimé le besoin, par exemple le Product Owner).

A cette étape, si le test passe alors que l'on s'attends à ce qu'il échoue, il faut se demander :
- Le test est-il erroné ? : Les valeurs du résultat attendu où les données d'entrée sont-elles fausses ?
- Le comportement attendu a-t-il déjà été implémenté lors d'une précédente itération ?

### Etape verte (green)

La deuxième étape est l'étape verte (green). L'IDE adopte la couleur vert pour les tests qui ont été réussis. Il est nécessaire de garder la simplicité du code.

_L'idée principale de cette phrase est de faire passer le test le plus rapidement possible, avec un minimum d'effort, et le minimum de code pour répondre au besoin. Bien souvent, l'implémentation est très naÏve et se limite à retourner une valeur en dur_.  
_Coder proprement (Robert C. Martin)_

### Etape de refactoring (refactor)

Il s'agit de la dernière étape. Elle permet de rendre le code propre pour une meilleure lisibilité. Par exemple en renommant une variable pour une meilleure compréhension, ou encore en rajoutant une condition ou une fonction afin de diminuer le code.

Pour être efficace, il convient d'adopter le point de vue d'une personne découvrant le code et de se demander s'il comprendrait le besoin auquel il répond.

Pour détecter les cas ou le code retourne une valeur en dur quelque soit la valeur d'entrée, on peut utiliser la technique dite de "triangulation". Elle consiste à écrire au moins deux tests pour la même règle métier, avec des valeurs d'entrée différentes. Si le code retourne une valeur en dur, le nouveau test sera rouge et nous saurons qu'il faut rendre l'implémentation plus générique afin de satisfaire la règle de gestion. Puisque cette technique nécessite plusieurs itérations red/green/refactor. On ne peut pas l'implémenter dès la première.

## Ecrire des tests en JavaScript avec Jest

Afin d'installer Jest, je vous recommande de suivre la documentation officielle [ici](https://jestjs.io/fr/docs/getting-started).

Je vais reprendre l'exemple de test de Jest.

"Commençons par écrire un test pour une hypothétique fonction qui retourne le nombre de lettres d'un mot. Tout d’abord, créez un fichier countLetters.js :
```js
function countLetters(word) {
  return word.length;
}
module.exports = countLetters;
```

Ensuite, créez un fichier nommé countLetters.test.js. Il s'agit de notre test actuel :

```js
test('the word "hello" return 5', () => {
  expect(countLetters('hello')).toBe(5);
});
```

Ajoutez la section suivante à votre package.json :

```js
{
  "scripts": {
    "test": "jest"
  }
}
```

Enfin, lancez yarn test ou npm test et Jest affichera ce message :

```shell
PASS  ./countLetters.test.js
✓ the word "hello" return 5 (2 ms)
```

Vous venez d'écrire votre premier test avec Jest avec succès !

Ce test utilise `expect` et `toBe` pour tester que deux valeurs sont exactement identiques. Vous trouverez dans la documentation d'autres comparateurs qui peuvent être utiles. 

