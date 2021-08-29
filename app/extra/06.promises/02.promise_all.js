/* styling */
require('styles/main.scss');

import { reject, resolve } from 'bluebird';
/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Promises");

const name = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(["Raheem", "Nargeeza", "Islam"]);
    }, 3000);

    setTimeout(() => {
        reject("Bad news! Name fucked up");
    }, 3000);
});

const surname = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(["Adamboev", "Adamboev", "Adamboev"]);
    }, 3000);

    setTimeout(() => {
        reject("Bad news! Surname fucked up!")
    }, 3000);
});

Promise.all([name, surname]).then(response => {
    const[names, surnames] = response;
    if(names.length === surnames.length) {
        for(let i = 0; i < names.length; i++) {
            log(`${names[i]} ${surnames[i]}`);
        }
    }
}).catch(error => {
    log(error);
});