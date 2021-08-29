/* styling */
require('styles/main.scss');

import { name } from 'file-loader';
/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Enhanced Object Properties");

const pricePropName = "PRICE";

const calculator = (name, price) => {
   return {
        name,
        add(a, b) {
            return a +b;
        },
        [pricePropName.toLowerCase()]: price
   }
}

const cal = calculator("Raheem", 15.15);

log(cal.name);
log(cal.add(15, 25));
log(cal.price);