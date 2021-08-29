/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

import Animal from './Animal';

/* code */
logTitle("Default Exports / Imports");

var animal = new Animal();
log(animal.getClasType());