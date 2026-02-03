// switch vs if

if (x === 1) {...}
else if (x === 2) {...}
else if (x === 3) {...}
// it's thinking 

switch (x) {
    case 1: 
    ...
    break;
    case 2: 
    ...
    break;
    default:
       ...
}
// it's matching

let n = 10;

if (n % 2 == 0) {
    console.log("even");
} else {
    console.log("odd");
}

switch (n % 2) {
    case 0:
        console.log("even");
        break;
    default:
        console.log("odd");
}

// if stops at the first true condition
// switch matches all cases until a break is found

// original
switch (browser) {
    case "Edge": 
        console.log("You've got the edge!");
        break;
    case "Chrome":
    case "Firefox":
    case "Safari":
    case "Opera":
        console.log("Okay we support these browsers too");
        break;
    default:
        console.log("If this page looks shit, use a normal browser");
}
// copy rewritten
let browser = prompt("Enter your browser:");

if (browser === "Edge") {
    console.log ("You've got the edge!");
} else if (browser === "Chrome"
    || browser === "Firefox"
    || browser === "Safari"
    || browser === "Opera") {
    console.log("Okay we support these browsers too");
} else {
    console.log("If this page looks shit, use a normal browser");
}

// original
let a = +prompt("a?", "");

if (a == 0) {
    console.log(0);
} 
if (a == 1) {
    console.log(1);
}
if (a == 2 || a == 3) {
    console.log("2 or 3");
}

// rewritten
switch (a) {
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
    case 3:
        console.log("2 or 3");
        break;
}