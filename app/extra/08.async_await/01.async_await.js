/* styling */
require('styles/main.scss');

/* imports */
import $, { data } from 'jquery';
import { log, logTitle } from 'logger';
import { coroutine, reject, resolve } from 'bluebird';

/* code */
logTitle("Async and Await");

async function logName(name) {
    log(name);
    // 1. we can yield promises using await
    // 2. returns promise
    const transformName = new Promise((resolve, reject) => {
        
        setTimeout(() => { 
            resolve(name.toUpperCase());
        }, 1000);
    })

    const result = await transformName;

    return result;
}

logName("Raheem").then( response => {
    log(`We got the shit ${response}`);
}).catch(error => {
    log(error);
})