/* styling */
require('styles/main.scss');

import { reject, resolve } from 'bluebird';
/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Promises");

const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        reject("Bad news! Raheem impregnated server");
    }, 2999.999999999999999999999999999999999999);

    setTimeout(() => {
        resolve("Raheem came from server");
    }, 3000);
});

promise.then(response => {
    log(response);
}).catch(error => {
    log(error);
});