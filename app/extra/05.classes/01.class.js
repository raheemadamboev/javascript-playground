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

const bobby = new Animal("Bobby", 25);
bobby.eat();
bobby.sleep();
bobby.wakeUp();
bobby.logAge();