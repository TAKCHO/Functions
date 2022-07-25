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

/* const flight = 'LH123';
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

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(tako);
checkIn(flight, tako); */

/* ///////////// Accepting callback functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//////Higher-order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transform string: ${fn(str)}`);

  console.log(`Transofrmed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);
 */

//////////// functions returning functions
/* 
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('tako');
greeterHey('Jonas');

greet('Hello')('Tako');

//Challenge writing with arrows
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Tako');
 */

///////The Call and Apply Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(455, 'Tako Giorgobiani');
lufthansa.book(125, 'John Smith');
console.log(lufthansa);

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does not work
// book(23, 'Sarah Williams');

// Call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'MAry Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 853, 'Mary Cooper');
console.log(swiss);

// Apply Method
const flightData = [586, 'George Cloone'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
