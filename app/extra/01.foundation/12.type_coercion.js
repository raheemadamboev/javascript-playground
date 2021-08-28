/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Equality without type coercion and 3 type equals sign");

log("With type coercion");
log(typeof 0 + " " + typeof false);
log(0 == false);

log(typeof "0" + " " + typeof false);
log("0" == false);

log(typeof 1 + " " + typeof "1");
log(1 == "1");

log("Without type coercion");
log(typeof 0 + " " + typeof false);
log(0 === false);

log(typeof "0" + " " + typeof false);
log("0" === false);

log(typeof 1 + " " + typeof "1");
log(1 === "1");
