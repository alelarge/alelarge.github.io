---
title: 'Les boucles en JavaScript'
date: 2021-06-06 00:00:00
featured_image: '/images/demo/demo-square.jpg'
excerpt: En programmation, nous avons besoin de faire des boucles. Par exemple, pour faire des courses, il faut sortir nos achats de notre chariot, et les mettre sur le tapis roulant. iL faut répéter ces actions en boucle jusqu'à ce qu'il n'y ait plus d'article...
---

En programmation, nous avons besoin de faire des boucles. Par exemple, pour faire des courses, il faut sortir nos achats de notre chariot, et les mettre sur le tapis roulant. iL faut répéter ces actions en boucle jusqu'à ce qu'il n'y ait plus d'article. 

Il y a deux grands types de boucles : 
- `for` : répéte un bloc de code un certain nombre de fois. Par exemple : L'action de prendre un produit et le mettre sur le tapis, autant de fois qu'il y a de produits dans le panier.
- `while` : continue d'exécuter le bloc de code tant que la condition est remplie. Par exemple : Tant que le panier est rempli, on recommence.

L'implémentation diffère selon le langage de programmation. Ici, nous allons voir la syntaxe en JavaScript.

## La boucle `for`

Ex : mettre une variable avec le nombre de passagers ici il y en a 40
ensuite mettre une boucle for, il faut l'initier à 0 puis on ajoute 1 passager jusqu'à temps qu'il y en a 40.
A chaque passager, la boucle mets "passager embarqué". 

```javascript 
const numberOfPassengers = 40;
for (let i = 0; i < numberOfPassengers; i++) {
    console.log("Passager embarqué !");
}
```

On peut aussi utiliser cette boucle pour itérer sur un tableau, en utilisant sa propriété `length`. Par exemple, avec un tableau appelé `passengers` :

```javascript 
const passengers = [
    "Alexandre Dumas",
    "Victor Hugo",
    "Jean de la Fontaine",
    "Charles Baudelaire"
];

for (let i = 0; i < passengers.length; i++) {
   console.log("Passager embarqué !");
}
```

## La boucle `for...in`

Cette boucle permet d'itérer sur les propriétés énumérables d'un objet (sauf les symboles).

```javascript 
const passengers = {
    a: "Alexandre Dumas",
    b: "Victor Hugo",
    c: "Jean de la Fontaine",
    d: "Charles Baudelaire"
}
for (let property in passengers) {
   console.log("Embarquement du passager " + passengers[property]);
}
```

Ici, `passengers` est un objet. Il contient une clef par passager et la valeur est une string, le nom du passager. 

Si on veut Jean de la fontaine, il faut donc mettre passager['c'].

Pour résumer, la syntaxe est donc :

```javascript
 for (variable in objet) {
  instructions
}
```

## La boucle `for…of`

Cette boucle est la manière à privilégier pour parcourir un `Array` mais on peut aussi l'utiliser pour parcourir tout objet irétable (`Map`, `Set`, `String`, `TypedArray`).

```javascript
const passengers = [
    "Alexandre Dumas",
    "Victor Hugo'",
    "Jean de la Fontaine",
    "Charles Baudelaire"
];

for (let passenger of passengers) {
   console.log("Embarquement du passager " + passenger);
}
```

Il s'agit du même exemple mais là on rajoute un passager, on ne se soucie pas des indices, de compter les passagers; 

La syntaxe est donc :
```javascript
for (variable of iterable) {
  // instruction
}
```

## La boucle `while`  

La boucle while vérifie qu'une condition est vraie. Tant qu'elle la remplit, la boucle continue. Et quand elle est fausse, elle s'arrête.

```javascript
const passengers = [
    "Alexandre Dumas",
    "Victor Hugo'",
    "Jean de la Fontaine",
    "Charles Baudelaire"
];

let n = 0;
while (n < passengers.length) {
    console.log("Embarquement du passager " + passengers[n]);
    n++;
}
```

Dans cet exemple `n` commence à `0`, et la condition stipule que `n` doit être inférieure à la longeur du tableau. Elle acceptera donc les chiffes 0, 1, 2 et 3. A partir de 4, la condition ne sera pas remplie et la boucle se termine.  

On peut résumer la syntaxe ainsi : `while (condition) instruction`.  


## Cas pratique

Prenon un tableau d'objet ou chacun représente une personnes avec son nom et son age :  

```javascript
const personnes = [
    { name: 'John', age: 18 },
    { name: 'John', age: 42 },
    { name: 'John', age: 12 },
    { name: 'John', age: 38 }
];
```

Si nous voulons utiliser une boucle pour filter ce tableau et ne retourner que les personnes de plus de 18 ans nous pouvons utiliser ce nous avons l'embarras du choix :

**Avec la boucle `for' classique :**  

```javascript
let result = [];
for (let i = 0; i < personnes.length; i++) {
    if (personne.age >= 18) {
        result.push(personnes[i]);
    };
}

console.log(result);
```

**Avec la boucle `for...of`** :  

```javascript
let result = [];
for (personne of personnes) {
    if (personne.age >= 18) {
        result.push(personne);
    };
}

console.log(result);
```

**Avec la boucle `for...in`** :  

```javascript
let result = [];
for (i in personnes) {
    if (personnes[i].age >= 18) {
        result.push(personnes[i]);
    };
}

console.log(result);
```

**Avec la boucle while** :  
```javascript
let n = 0;
let result = [];
while (n < personnes.lenght) {
    if (personnes[n].age >= 18) {
        result.push(personnes[n]);
    };
}

console.log(result);
```