/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Functions");

function printAddition(a, b) {
    var addition = a + b;
    log(a + " + " + b + " = " + addition);
}

printAddition(10, 7);

function subtract(a, b) {
    return a - b;
}

log(subtract(10, 7));