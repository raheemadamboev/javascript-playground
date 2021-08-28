/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Switch");

var person = {
    name: "Raheem",
    sex: 0,
    networth: 100000
};

switch(person.sex) {
    case 0:
        log(person.name + " is a male");
        break;
    case 1:
        log(person.name + " is a female");
        break;
    default:
        log(person.name + " is some kinda transsexual");
}

log("");
switch(true) {
    case (person.networth <= 1000):
        log(person.name + " is a poor");
        break;
    case (person.networth <= 10000):
        log(person.name + " is a middle class");
        break;
    default:
        log(person.name + " is a rich");
}

log("");
switch(new Date().getDay()) {
    case 0:
        log("Today is Sunday");
        break;
    default:
        log("I don't know today");
}