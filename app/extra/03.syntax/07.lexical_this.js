/* styling */
require('styles/main.scss');

import { name } from 'file-loader';
/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Lexical this");

const person = {
    name: "Raheem",
    cars: ["malibu", "gentra"],
    toString: function() {
       
        // log(`${this.name} has ${this.cars}`)
       
        /*
        this.cars.forEach(function(car){
            log(`${this.name} has ${car}`);
        }.bind(this));
        */

        /*
        const that = this;
        this.cars.forEach(function(car){
            log(`${that.name} has ${car}`);
        });
        */

        this.cars.forEach( (car) => log(`${this.name} has ${car}`));
    }
};

person.toString();