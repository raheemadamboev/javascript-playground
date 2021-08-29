/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

import {add, multiply, PI} from './Math';

/* code */
logTitle("Named Exports / Imports");

log(add(5, 6));
log(multiply(5, 6));
log(PI);