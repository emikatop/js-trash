// Function Declaration:                             // Function Expression: 

function sayHello() {                                let sayHello = function () {
    alert('Hi');                                         alert('Hi');
};                                                   }; 

// Function expression - function passed as a value

// Examples: declaration vs expression

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert("You agreed.");
}

function showCancel() {
    alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no(); 
}

ask(
    "Do you agree?",
    function () { alert("You agreed"); },
    function () { alert("You canceled the execution"); }
);

/*
Here, functions are declared right inside the ask(...) call. 
They have no name, and so are called anonymous. 
Such functions are not accessible outside of ask 
(because they are not assigned to variables), 
but that’s just what we want here.
*/