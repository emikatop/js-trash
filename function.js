// local variable

function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable

    alert(message);
}

showMessage(); // Hello, I'm JavaScript!

alert(message); // Error: message is not defined

// 'message' only exists insode the showMessage. What is made inside the fuction, stays inside the function. 

// global variables = variables declared outside of any function