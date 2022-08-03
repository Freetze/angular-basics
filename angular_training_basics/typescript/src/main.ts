import { Person } from './person';

const newPerson: Person = new Person ('Tibi', 40);

console.log(newPerson.getname());
console.log(newPerson.getAge());

class User {
    public username: string;

    public static ip_address: string = '192.168.1.1';

    private _email: string;
    private _password: string;

    constructor (username: string, email: string, password: string) {
        this.username = username
        this._email = email;
        this._password = password
    }

}

const user1 = new User('Lacika', 'a@b.com', 'asdasd');