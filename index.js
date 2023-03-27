const validator = require("validator");
const email1 = validator.isEmail("test@test.com");
const email2 = validator.isEmail(`abcdE1234`);
console.log(email1);
console.log(email2);
