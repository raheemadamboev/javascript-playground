/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Map | Filter | Reduce");

var numbers = [1, 2, 3, 4, 5].map(function(n) {
    return n * 2;
});
log(numbers);

var numbers = [1, 2, 3, 4, 5, 6].filter(function(n) {
    return n % 2 === 0;
});
log(numbers);

var numbers = [1, 2, 3, 4, 5, 6].reduce(function(accumulator, current) {
    return accumulator + current;
});
log(numbers);