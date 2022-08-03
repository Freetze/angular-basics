/* ELSŐ feladat */
/*  Hozz létre egy Video classt title, uploader és seconds fieldekkel.
    Legyen egy watch metódusa is, ami kiírja a film címét és a perceket.
    Hozz létre két példányt a classból és hívd meg mindkettőnek a watch metódusát. */



    class Video {
        private title: string;
        private uploader: string;
        private seconds: number;

        constructor(title: string, uploader: string, seconds: number) {
            this.title = title;
            this.uploader = uploader;
            this.seconds = seconds;

        }
    
            public watch(): string {
                return`title: ${this.title}, length: ${Math.floor(this.seconds / 60)} min`
            }
    }

    const movie1 = new Video('Lord of the rings', 'Tibi', 7200);
    const movie2 = new Video('Jurassic park', 'James Cameron', 4000);

    console.log (movie1.watch());
    console.log (movie2.watch());
    
    
    
    /* MÁSODIK feladat */
    /*  Hozz létre egy Person classt, name és age fieldekkel.
        Legyen egy describe metódusa, ami visszaadja a fieldek értékét.
        Hozz létre két példányt, majd hívd meg mindkettőn a describe metódust. */
    
    class Person {

    }

    
    
    /* HARMADIK feladat*/
    /*  Hozz létre egy User interface-t, name, age és position (feltételes) fieldekkel.
        Hozz létre egy tömböt ami két user konkrét user objektumot tartalmaz, 
        majd egy függvény segítségével írd ki a userek nevét és a korukat.  
        
        Hozz létre egy Role enumot, Admin és User értékekkel, majd definiáld az interface-ben, és implementáld a classban.
        */
    
    enum Role {
        Admin,
        User,
    }


    interface User {
        name: string;
        age: number;
        position?: string;
        role?: Role;

    }
    
    
    const users: Array<User> = [
        {
            name: 'Réka',
            age: 28,
            role: Role.Admin
        },
        {
            name: 'Gergő',
            age: 30,
            role: Role.User,
            position: 'developer'
        }
    ]

    const printuserNameAndAge = (userArr: User[]) => {
        userArr.forEach(user => console.log(user.name, user.age));
    }
    printuserNameAndAge(users);
