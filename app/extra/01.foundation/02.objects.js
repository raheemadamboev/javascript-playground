/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Objects");

var person = {
  name: "Raheem Adamboev",
  age: 20,
  hasDriverLicence: true,
  dateOfBirth: "24/12/2000",
  address: {
      street: "Yoshlik",
      postCode: "220500",
      country: "Uzbekistan"
  }
};

log(JSON.stringify(person));
log(JSON.stringify(person.address));

log("");

log(person.name);
log(person.age);
log(person.hasDriverLicence);
log(person.address.country);

log("");

log(Object.values(person));
log(Object.values(person.address));