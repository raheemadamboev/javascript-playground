/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Const keyword");

let name = "Raheem";
name = {};
name = 2;
log(name);

const surname = "Adam";
log(surname);

/* you declare variable without initializing it
const age;
age = 15;
log(age);
*/

const person = {};
person["name"] = "Raheem";
log(person.name);

const water = [];
water.push("Family");
log(water[0]);