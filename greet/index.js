const greeting = require("./greet.json");

const greet = (key) => {
    for (key in greeting) {
        console.log(key + ": " + greeting[key]);
    }
};

module.exports = {
    greet: greet
};