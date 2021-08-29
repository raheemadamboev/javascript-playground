/* styling */
require('styles/main.scss');

/* imports */
import $, { data } from 'jquery';
import { log, logTitle } from 'logger';
import { coroutine } from 'bluebird';

/* code */
logTitle("Generators and Promises");

const getRandomUsers = coroutine( function* (n) {
    const fetchRandomUsers = yield fetch(`https://randomuser.me/api/?results=${n}`);
    const data = yield fetchRandomUsers.json();
    return data;
});

getRandomUsers(10).then(response => {
    response.results.forEach((data, index) => {
        log(`${index} ${data.name.first}`);
    })
}).catch(error => {
    log(error);
});