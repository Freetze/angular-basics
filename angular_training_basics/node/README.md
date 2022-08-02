## A NodeJS legfontosabb jellemzői


* futtatási környezet (nem a böngészőben futtatjuk a kódokat, hanem a NodeJS segítségével - Runtime Environment)
* nem programozási nyelv
* nem keretrendszer
* nincs böngésző, nincs DOM
* browser API-k nem lesznek elérhetőek, saját beépített API-ja van
* szinte minden művelet aszinkron, ennek az I/O-nak a megvalósítására a libuv-t használja (ez egy olyan, lib, amely a NodeJS egyik legfontosabb függősége a Google V8 engine mellett)
* nincs window object, csak global
* amikor a NodeJS kijött, nem volt a JS-nek modulrendszere, ezért a commonjs-t használja alapértelmezetten

## Alapfogalmak
* aszinkronitás (egy fő szál van, a V8 engine-t használja; ügyeljünk rá, hogy ne legyen blokkoló a kódunk)
* nem blokkoló I/O (ezen az egy szálon végezzünk minél több műveletet; real-time application-ök fejlesztésére kiváló)
* egy szálas
* eseményvezérelt


## Az egyes elemek szerepe
A V8 futtatja és értelmezi a kódot.

A NodeJS C++-ban megírt feature-öket használ, hív meg (JS-tel sok mindent nem tudunk megcsinálni, ezért azok a műveletek, amelyekre a C++ alkalmas, össze vannak kötve a NodeJS-szel).

A libuv a tényleges aszinkron I/O-t valósítja meg (hasonló az architektúra, mint a frontenden: event queue, event loop, worker threads - minden aszinkron művelethez tartozik 4, max. 128 szál, amellyel a libuv dolgozik, és amikor végzett, a callback meghívódik).



## Előnyök

* npm-mel a függőségeket tudjuk kezelni, több millió előre megírt modul létezik, de sajátot is készíthetünk, publikálhatjuk
* sok kérést tud kezelni egyszerre
* könnyen skálázható
* a cache-elés egyszerű
* gyors
* nem kell egy új nyelvet megtanulni hozzá
* support, nagy közössége van

## Hátrányok

* a relációs adatbázisokhoz nem ideális (vannak ORM-ek, SQL adatbázisok kezelésére jók, de nem kiforrott, nincs elég tapasztalat mögötte)
* időigényes karbantartás a külső csomagok miatt (ráadásul visszafelé ritkán kompatibilis)
* inkonzisztens a kód a callback és a promise miatt (utóbbi használatára törekedjünk)

## Mire használható?

* API szerver készítése
* streaming
* microservice-ek írása
* real-time alkalmazások írása
* weboldalak kiszolgálása
* CLI alkalmazások írása
* keresztplatformos mobil/asztali alkalmazások készítése
* Használói között találjuk a Netflixet és a NASA-t is

## Szükséges programok

* [Visual Studio Code](https://code.visualstudio.com/download)
* [NodeJS (LTS)](https://nodejs.org/en/download/)
* [Chocolatey](https://chocolatey.org/install) (opcionális)
* Visual Studio Code extensions
    * JavaScript (ES6) code snippets
    * Path Intellisense
    * Path Autocomplete

### Verziók ellenőrzése

```
node -v
npm -v
```

## Új NodeJS projekt létrehozása


```
npm init (--yes)
```

Létrejön a package.json fájl, ez tartalmazza majd a projekt során használt függőségeket.

### Opcionális: ESLint


```
npx eslint --init
```

Függőségek telepítése `npm i` paranccsal. A **node_modules** mappát nem tesszük verziókezelőbe, helyette:

* Felvesszük a **.gitignore** fájlba
* Generálunk **.gitgnore** fájlt: (CTRL + SHIFT + P: Add gitignore, Node.gitignore)

## NodeJS fájlok futtatása


```
node index.js
npm run start
```
