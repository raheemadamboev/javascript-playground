/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

import * as Math from './Math';

/* code */
logTitle("Named Exports / Imports");

log(Math.add(5, 6));
log(Math.subtract(5 ,6));
log(Math.multiply(5, 6));
log(Math.divide(5, 6));
log(Math.PI);