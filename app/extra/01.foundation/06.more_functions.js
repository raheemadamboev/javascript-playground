/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("More Functions");

var person = {
    name: "Raheem",
    age: 20
};

log(Object.keys(person));
log(Object.values(person));

log(person.name.toLowerCase());
log(person.name.toUpperCase());
log(person.name.endsWith("em"));
log(person.name.startsWith("ah"));