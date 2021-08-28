/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("If Statement");

var bool = true;

if(bool) {
    log("bool variable was " + bool);
} else {
    log("bool variable was " + bool);
}

var person = {
    name: "Raheem",
    age: 20
};

if (person.age >= 18) {
    log(person.name + " is an adult!");
} else if (person.age == 17) {
    log(person.name + " is about to be an adult!");
} else {
    log(person.name + " is a teenager!");
}