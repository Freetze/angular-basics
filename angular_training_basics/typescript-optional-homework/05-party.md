Hozzunk létre egy egyszerű alkalmazást, amivel egy kalandozó csapat tevékenységeit modellezhetjük.

# Hősök

Minden hősnek van neve (string) és pénze (number).
Emellett minden hős számára elérhetőek az alábbi metódusok:

- `status()`: adja vissza a hős adatait egy Stringben, pl ˛`"Arthur the fat has 42 gold."`, vagy `"Martha has 369 gold."`

- `pay()`: megnöveli a hős pénzének mennyiségét.

##### Fighter

A harcos mindig 0 arannyal kezdi az életútját, viszont szép páncélja van, amivel dicsekedni szeretne.
Van egy saját változója, a páncéljának a színe (String), ezért a státuszát egészítsd ki azzal, hogy a végére odaírod, hogy milyen színű páncélja van, pl: `"Arthur the fat has 42,5 gold and a/an pink armor."`

##### Bard

A bárd az előző előadásaiból már szedett össze 200 aranyat.
Ezen kívül szeret bulizni, ezért amikor fizetést kap, a kapott pénz 20%-át (egész számra lefelé kerekítve) elkölti azonnal, ezért ennyivel kevesebb pénzt kap.

##### Warlock

A boszorkánymester 0 arannyal kezd, és van egy saját változója, a démon neve (string), akivel paktumot kötött az erejéért.
A paktum tartalmazza, hogy akármikor pénzt kap, a démon azt megnöveli 10%-kal (egész számra lefelé kerekítve), cserébe a boszorkánymesternek mindig hirdetni kell a démon nevét.
Ezeknek megfelelően módosítsd a pay, illetve status metódusokat (pl. `"Krewella has 500 gold and works for Gojira."`)

# AdventuringParty

A kalandozó csapatnak az alábbi metódusai vannak:

- `addHero()`, amivel egy hőst lehet hozzáadni a csapathoz

- `retireHeroes()`, ami eltávolít minden olyan hőst a csapatból, aki összegyűjtött 5.000 aranyat, vagyis elég gazdagnak érzi magát a visszavonuláshoz

- `getPayment(amount: number)`, ami a paraméterben megadott arany összeget odaadja csapat minden tagjának

- `getStatus()`, ami visszaadja a hősök státuszát egy String listában
