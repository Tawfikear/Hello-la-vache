const userInformation = require ('./information');
console.log (`je suis ${userInformation.name} du campus ${userInformation.campus}`);
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));
