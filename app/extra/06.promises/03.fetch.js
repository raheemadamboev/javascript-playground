/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Promises and Fetch API");

const getRandomUsers = n => {
    const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`);
    fetchRandomUsers.then(response => {
        response.json().then(response => {
            log(response.results.length);
            response.results.forEach(user => {
                log(user.name.first);
            });
        })
    }).catch(error => {
        log(error);
    });
}

getRandomUsers(100);