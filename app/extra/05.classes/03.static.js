/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Static Methods");

class Animal {

    constructor(name, age) {
        log(`${name} was created!`)
        this.name = name;
        this.age = age;
    }

    static staticMethod() {
        log("Static method!")
    }

    eat() {
        log(`${this.name} is eating!`);
    }

    sleep() {
        log(`${this.name} is sleeping!`);
    }

    wakeUp() {
        log(`${this.name} is waking up!`);
    }

    logAge() {
        log(`${this.name} is ${this.age}`);
    }
}

class Dog extends Animal {
    
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    static staticMethod() {
        log("Dog has static method override bitch");
    }

    logBreed() {
        log(`${this.name} is a ${this.breed}`);
    }

    logAgeFromDog() {
        super.logAge();
    }
}

Animal.staticMethod();
Dog.staticMethod();