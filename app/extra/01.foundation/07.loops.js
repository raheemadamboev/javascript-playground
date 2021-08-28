/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Loops");

for(var i = 0; i <= 10; i++) {
    log(i);
}

var persons = [
    {
        name: "Raheem",
        age: 20
    },
    {
        name: "Nargeeza",
        age: 20
    }
];

log("");
for(var i = 0; i < persons.length; i++) {
    log(Object.values(persons[i]));
}

log("");
var number = 0;
while(number < 5) {
    log(number);
    number++;
}

log("");
var i = 0;
do {
    log(i);
    i++;
} while(i < 5);