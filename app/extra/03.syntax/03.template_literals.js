/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Template Literals");

const name = "Raheem";
const country = "Uzbekistan";
const age = 20;

log("Name: " + name + " Country: " + country + " Age: " + age);
log(`Name -> ${name} Country -> ${country} Age -> ${age}`);