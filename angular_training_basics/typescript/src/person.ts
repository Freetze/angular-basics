
import { PersonInterface } from './person.interface';

export class Person implements PersonInterface {

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;

    }
    getName(): string {
        throw new Error('Method not implemented.');
    }

    getname(): string {
        return this.name;

    }

    getAge(): number {
        return this.age;
    }
}