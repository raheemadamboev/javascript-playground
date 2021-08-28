/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Comparison and Logical operators");

// Comparison operators
log(10 == 10);
log(10 < 10);
log(10 <= 10);
log(10 > 10);
log(10 >= 10);
log(10 != 10);

// Logical operators
log(10 == 10 && 5 == 5);
log(10 == 10 && 5 == 4);
log(10 == 9 || 5 == 5);
log(10 != 10 || 5 != 5);