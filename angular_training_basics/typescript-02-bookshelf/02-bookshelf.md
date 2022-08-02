# Bookshelf (könyvespolc)

Készíts TypeScript nyelven egy programot, ami könyveket tud tárolni egy könyvespolcban.
A Bookshelf osztály példányosítását egy külön osztály (pl. `UserInterface`) kezelje.

## Könyv (Book)

Az osztály neve: `Book`

A constructor a következő sorrendben várja a paramétereket:

- cím (title)
- szerző (author)
- kiadási év (releaseYear)
- oldalak száma (numberOfPages)

A könyv tömegét az oldalak tömegének összege és a könyv borító tömegének összege alapján kapjuk meg:
- 1 oldal tömege: 10 gram
- A könyv borító tömege: 100 gram

## Könyvespolc (Bookshelf)

Az osztály neve: `Bookshelf`

- Legyen egy `addBook()` függvénye, aminek segítségével a paraméterben megadott könyvet el lehet tárolni a polcban
- Legyen egy `getBooks()` függvénye, aminek legyen egy year paramétere. Azon könyveket adja vissza egy listában / tömbben, amik a year évében lettek kiadva.
- Legyen egy `getLightestAuthor()` függvénye, ami visszaadja annak a szerzőnek a nevét, aki a legkönnyebb könyvet írta.
- Legyen egy `getAuthorOfMostWrittenPages()` függvénye, ami visszaadja annak a szerzőnek a nevét, aki a legtöbb oldalt írta.
- Legyen egy `printBooks()` függvénye, ami kiírja az összes könyv adatát. Soronként kiírja a könyvek getBookInfo() visszatérési értékét
