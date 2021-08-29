/* styling */
require('styles/main.scss');

/* imports */
import $ from 'jquery';
import { log, logTitle } from 'logger';

/* code */
logTitle("Function Default Parameters");

const calculatePay = (salary, bonus = {
    teamBonus: 0,
    employeeBonus: 0,
}) => {
    return salary + bonus.teamBonus + bonus.employeeBonus;
};
log(calculatePay(5000, {employeeBonus: 20, teamBonus: 10}));