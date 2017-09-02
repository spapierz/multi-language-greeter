const greeting = require("./greet.json");

const greet = () => {
    for (var key in greeting) {
        console.log(key + ": " + greeting[key]);
    }
};

module.exports = {
    greet: greet
};