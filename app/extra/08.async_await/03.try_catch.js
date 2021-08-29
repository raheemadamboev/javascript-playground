/* styling */
require('styles/main.scss');

/* imports */
import $, { data } from 'jquery';
import { log, logTitle } from 'logger';
import { coroutine, reject, resolve } from 'bluebird';

/* code */
logTitle("Async and Await");

const getRandomUsers = async number => {
    try {
        const fetchRandomUsers = await fetch(`https://randomuser.me/api/?results=${number}`);
        const data = await fetchRandomUsers.json();
    
        data.results.forEach((name, index) => {
            log(`${index} - ${name.name.first}`);
        })
    
        return data;
    } catch(error) {
        log(error);
    }
}
getRandomUsers(100);