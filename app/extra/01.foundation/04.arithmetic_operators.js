/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Arithmetic Operators");

/*
     + - / % *
*/

var addition = 2 + 2;
var subtraction = 3 - 19;
var division = 10 / 5;
var multipication = 2 * 30;
var remainder = 9 % 5;

log("2 + 2 = " + addition);
log("3 - 19 = " + subtraction);
log("10 / 5  = " + division);
log("2 * 30 = " + multipication);
log("9 % 5 = " + remainder);