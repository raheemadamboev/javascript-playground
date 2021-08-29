/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Object Destructuring");

const getUser = () => {
    return {
      name: 'John',
      surname: 'Doe',
      gender: 'male',
      address: {
        country: 'United States',
        city: 'California',
        postCode: 'CA',
        fullAddress: {
          doorNumber: 22,
          street: 'LA st'
        }
      },
      age: 29
    }
  };
  
  const user = getUser();
  
  //const name = user.name;
  //const age = user.age;
  //const country = user.address.country;
  //const doorNumber = user.address.fullAddress.doorNumber;

  const {name, age, address: { country : theCountry }} = user;
  const {address : {fullAddress :{ street }}} = user;
  
  log(name);
  log(age);
  log(theCountry);
  log(street);
  