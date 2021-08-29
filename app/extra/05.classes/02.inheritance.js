/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Classes");

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

    logBreed() {
        log(`${this.name} is a ${this.breed}`);
    }

    logAgeFromDog() {
        super.logAge();
    }
}

const mike = new Dog("bulldog", 15, "dick");
mike.logBreed();
mike.logAgeFromDog();
mike.logAge();
mike.sleep();

Animal.staticMethod();