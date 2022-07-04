'use strict';

///// Default Parameters

/* const bookings = [];

const createBooking = function (
  //ES 6
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
 */

// /////// VALUES VS REFERENCE

const flight = 'LH123';
const tako = {
  name: 'Tako GIO',
  passport: 125484564,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 125484564) {
    alert('Check in');
  } else {
    alert('wrong passport!');
  }
};

checkIn(flight, tako);
console.log(flight);
console.log(tako);
