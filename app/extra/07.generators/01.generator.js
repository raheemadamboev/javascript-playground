/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Generators");

const getData = function* () {
    yield 1;
    yield "Hello";
    yield true;
    yield { name: "Raheem"}
};

const data = getData();

var nextData = data.next();
while(!nextData.done) {
    if(typeof nextData.value === "object") {
        log(JSON.stringify(nextData.value));
    } else {
        log(nextData.value);
    }
    nextData = data.next();
}
