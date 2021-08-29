/* styling */
require('styles/main.scss');

import { name } from 'file-loader';
/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Array Destructuring");

const names = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt'];

//const anna = names[0];
//const mariam = names[1];
//const joe = names[2];

const [a, , joe, ...others] = names;

log(`${a} ${joe}`);
log(others);