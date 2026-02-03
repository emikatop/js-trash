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