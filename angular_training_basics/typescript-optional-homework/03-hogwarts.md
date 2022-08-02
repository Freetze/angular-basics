Segítsünk Dumbledore professzornak nyilvántartást vezetni a diákokról!

# Diákok

Minden diáknak van neve, és tudja, hogy melyik házba tartozik.
Ezen kívül minden diák be tud mutatkozni, amihez az `introduce()` metódusukat használják.
Például:

"`Hi! I am Ernie Macmillan from House Hufflepuff`"

#### Gryffindor

A griffendéles (eredeti angolban Gryffindor) diákok a fentieken felül tudják, hogy ki a legjobb barátjuk, és ezt hozzá is teszik a bemutatkozásukhoz. Például:

"`Hi! I am Harry Potter from House Gryffindor, and my best friend is Ron Weasley`"

#### Slytherin

A mardekáros diákok a fentieken felül tudják, hogy mi a kedvenc átkuk.

"`Hi! I am Draco Malfoy from House Slytherin, and my favourite curse is serpensortia`"

#### Ravenclaw

A hollóháti diákoknak az ész az igazán fontos, ezért mindenki rögtön úgy mutatkozik be, hogy megmondja az IQ-ját is.

"`Hi! I am Padma Patil from House Ravenclaw, and my IQ is 124`"

#### Hufflepuff

A hugrabugos diákok... hát, azért ne feledkezzünk meg róluk sem!

"`Hi! I'm Cedric Diggory from House Hufflepuff`"

# Iskola

Hozd létre a Hogwarts osztályt, ami el tudja tárolni az iskolába járó diákokat.
Az osztály az alábbi metódusokkal rendelkezik:

- `addStudent(student: Student)`: hozzáadja a paraméterben kapott diákot az iskolai nyilvántartáshoz
- `getImportantStudents()`: adja vissza a történet szempontjából fontos (azaz a griffendéles és a mardekáros) diákok neveit, ABC sorrendben
- `getStudents()`: visszaadja a diákok listáját, a beiratkozásuk sorrendjében

#### Bónusz feladat
- `doSortingHat()`: visszaadja az iskolába járó diákokat a házaik szerint csoportosítva, minden ház nevéhez tartozzon egy lista az oda járó diákokkal, a listán belül a beiratkozás sorrendjében
