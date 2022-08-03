"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        throw new Error('Method not implemented.');
    }
    getname() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
exports.Person = Person;
