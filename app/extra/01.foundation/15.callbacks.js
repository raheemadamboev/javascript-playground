/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Callbacks");

function callbackExample(name, callback) {
    log(callback(name));
}

var callback = function(name) {
    return "Hola " + name;
};
callbackExample("Raheem", callback);