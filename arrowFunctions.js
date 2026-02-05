// Arrow functions 

let sum = (a, b) => a + b; 

// same thing as
let sum = function (a, b) {
    return (a + b);
};






let age = prompt("What's your age?", "18"); 

let welcome = (age < 18) ?
    () => alert("Hi jungster") :
    () => alert("Greetings, my Lord");

welcome();







// Hausaufgabe: Rewrite function

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no(); 
}
// passing in the arguments
ask(
    "Do you Agree?", 
    function () { alert("You agreed"); }, 
    function () { alert("You disagreed"); }
);

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?", 
    () => alert("You agreed"), 
    () => alert("You disagreed")
);