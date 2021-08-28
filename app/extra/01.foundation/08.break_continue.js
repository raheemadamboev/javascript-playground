/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Break and Continue");


var number = -1;
while(number < 5) {
    number++;
    if(number == 4) break;
    if(number == 2) continue;
    log(number);
}