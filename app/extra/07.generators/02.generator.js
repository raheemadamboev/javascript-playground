/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Generators");

const getNumbers = function* (numbers) {
    for (let i = 0; i < numbers.length; i++) {
        yield numbers[i];
    }
}

const data = getNumbers([1, 2, 3, 4, 5]);

const interval = setInterval(() => {
    const next = data.next();
    if (next.done) {
        log("Generator is done");
        clearInterval(interval);
    } else {
        const number = next.value;
        log(number);
    }
}, 1000);