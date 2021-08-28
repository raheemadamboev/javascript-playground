/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Variables");

var name = "Raheem Adamboev";
var age = 20.5;
var hasDriverLicence = true;
var empty = undefined;

log(name + " -> type: " + typeof name);
log(age + " -> type: " + typeof age);
log(hasDriverLicence + " -> type: " + typeof hasDriverLicence);
log(empty + " -> type: " + typeof empty);
