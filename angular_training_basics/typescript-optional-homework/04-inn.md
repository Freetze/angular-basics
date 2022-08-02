Hozzunk létre egy egyszerű alkalmazást, amivel egy fogadó tevékenységeit modellezhetjük.


# Emberek (People)

Minden embernek van neve(string), súlya(number) és pénze(number).
Emellett minden ember számára elérhetőek az alábbi metódusok:

- `status()`: adja vissza az ember adatait egy Stringben, pl "`Arthur, weight: 90, gold: 50.`"

- `pay()`: csökkenti az ember pénzét a paramtéreben kapott mennyiséggel. A pénz tartozás miatt mehet 0 alá is.

- `eat()`: növeli az ember súlyát, a konkrét implementáció az ember szakmájától függ.


##### Adventurer

A kalandor, amikor eszik, mivel szeret nagy lábon élni, hízik 3 kilót.


##### Merchant

A kereskedő ügyesen alkudozik a fogadóssal, ezért akármikor fizetnie kéne, 10%-kal kevesebbet (lefelé kerekítve) kell csak fizetnie.

Nagyon figyel az alakjára, ezért amikor eszik, csak 1 kilót hízik, és mivel összeszervezi egy üzleti ebéddel, ezért még kap is 10 aranyat.


##### Farmer

A parasztnak van egy saját változója, méghozzá a termelt zöldsége(String), amit szintén kiír a státuszba a nevéhez az alábbi formában: "`John the carrot farmer, weight: 85, gold:40.`"

Amikor eszik, 2 kilót hízik, mert kell az energia a farmra.

# Inn

A fogadó tudja magáról, hogy kik a vendégei, és az alábbi metódusai vannak:

- `addGuest()`, amivel egy embert lehet hozzáadni a vendégekhez.

- `rent()`, amivel az éjszakára a szobák árát, 80 aranyat kifizettet minden vendéggel. Ha valakinek nincs ennyi, akkor miután felírta a tartozást, kidobja a fogadóból.

- `giveFood()`, megeteti az összes vendéget, majd elveszi tőlük az étel árát, 20 aranyat, végül ha valakinek nincs ennyi, akkor miután felírta a tartozást, kidobja a fogadóból.

- `getStatus()`, ami visszaadja a vendégek státuszait egy String listában.
