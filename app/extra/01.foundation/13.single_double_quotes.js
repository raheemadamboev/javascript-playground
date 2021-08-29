/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Single vs Double quotes and Semi Column");

// you can use single quote even
var name = 'raheem';
log(name);

// you can create same name variables even
// you can use without semi-colons
var name = "raheema"
log(name)