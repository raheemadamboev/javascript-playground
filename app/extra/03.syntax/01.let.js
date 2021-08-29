/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Let keyword");

for(let i = 0; i < 10; i++){
    log(i);
}

log(i);