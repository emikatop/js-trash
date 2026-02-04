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
function userName(username = 'Not registered');