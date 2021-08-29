/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Spread Operator Arrays");

const arrayOne = ["Raheem", "Islam", "Jakhongir"];
const arrayTwo = ["Nargeeza", "Arthur"];

const concatArray = [...arrayOne, ...arrayTwo];
log(concatArray);

const name = "Raheem";
const nameToArray = [...name];
nameToArray.forEach(function(i){
    log(i);
});

const numbers = [5, 6, 7];
function add(a, b, c) {
    return a + b + c;
}
log(add(...numbers));