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
/* 
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

//BIND METHOD
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 25);
bookEW23('Tako Giorgobiani');
bookEW23('Martha Cooper');

// With event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * rate;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  // this is the same as above
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23)); */

// INVOKED FUNCTION EXPRESSIONS IIFE
/* 
const runOnce = function () {
  console.log('This will never run again!');
};

runOnce();

(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

(() => console.log('This will never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate);

console.log(notPrivate);
 */

////////////////////CLOSURES////////////////

/* const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

/* A closure is the closed-over variable environment of the execution context
in which a function was created, even after that execution context is gone */

/* console.dir(booker); */
/* 
//Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

//Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;

boardPassengers(180, 3);

/* setTimeout(function () {
  console.log('TIMER');
}, 1000);
 */

////CODING CHALLENGE

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
