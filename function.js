function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable

    alert(message);
}
/* 'message' only exists inside 
the showMessage. What is made 
inside the fuction, stays 
inside the function. */
showMessage(); 

alert(message); 
 

// global variables = variables declared outside of any function
// "it's a good practice to minimize the use of globals, and keep the variables in their functions."

function parametersExample(name, age) { 
    alert(name + 'is ' + age + 'years old');
}

//if input not recieved: 
function userName(username = 'Not registered') {
    alert(username);
}

//return
function sum(a, b) {
    return a + b;
}

let mathSum = (1, 2);
alert(sum); // 3

// if 'return' aint there a function returns undefined by default.


/* For instance, functions that start with "show" usually show something.
Function starting with…*/

showMessage();
getAge();
calcSum();
createForm();
checkPermission();

/*
"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc. */

/* FUNCTION NAMING
    - Descriptive and verbal
    - Function prefixes- exist!!!
    - Break huge functions into smaller ones
*/

//hausaufgabe

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents?');
    }
}

checkAge(age){
    age >= 18 || confirm('Do you have permission from your parents?');
}

checkAge(age){
    age >= 18 ?? confirm('Do you have permission from your parents?');
}

//hausaufgabe 2

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function min(a, b) {
    return a < b ? a : b; // return (if a < b then a else b)
}