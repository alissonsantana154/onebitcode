const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("Padre Anisio", 89, "centro", "Nazaré da Mata", "PE");
const john = new Person("John Doe", addr);

console.log(john);
console.log(john.address.fullAddress());
