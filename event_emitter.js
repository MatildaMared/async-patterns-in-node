const EventEmitter = require("events");

let myEventEmitter = new EventEmitter();

my EventEmitter.on("wroteCode", () => {
    console.log("Somebody wrote some code!");
});

my EventEmitter.on("wroteCode", (language) => {
    console.log(`Somebody wrote some ${language} code!`);
});

myEventEmitter.emit("wroteCode", "JavaScript");