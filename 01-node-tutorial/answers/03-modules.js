//Lawrence

//CommonJS, every file is a module (by default)
//Modules - Encapsulated Code (only share the minimum)
const names = require('./04-names');
const sayHi = require('./05-utils');

// load everything in 06-alternative-flavor
const mod6Data = require('./06-alternative-flavor');

require('./07-mind-grenade');

// load piece-wise in 06-alternative-flavor
const { singlePerson, items } = require('./06-alternative-flavor');

sayHi("Lawrence");
sayHi(names.johnvariable);
sayHi(names.petervariable);

console.log(mod6Data);
console.log(singlePerson.name);
console.log(items[0]);
