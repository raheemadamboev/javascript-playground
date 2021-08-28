/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Arrays");

var name = "Raheem";
var names = ["Nargeeza", "Jahongir", "Islam", "Moohammed"];

log(name);

log("");
log(names);
log(names[2]);
log(names.length);

log("")
for(var n of names) {
    log(n);
}

log("")
names.forEach(function(name, index){
    log(index + " -> " + name);
});

log("")
for(var letter of name) {
    log(letter);
}