/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Spread Operator Objects");

const address = {
    city: "LA",
    country: "USA",
    street: "San Jose"
};

const name = {
    firstName: "Raheem",
    lastName: "Adamboev"
};

const person = {
    ...address,
    ...name
};

log(JSON.stringify(person));