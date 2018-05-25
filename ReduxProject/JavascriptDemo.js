function a() {
    console.log("Function A is called");

    function b() {
        console.log("Function B is called");
    }

    return b;
}

function a1() {
    console.log("Function A1 is called");

    function b1(msg) {
        console.log("Function B1 is called", msg);
    }

    return b1;
}


function a2(x) {
    console.log("Function A2 is called", x);

    function b2(msg) {
        console.log("Function B2 is called", msg);
    }

    return b2;
}

// Extreme function in function in function.. using let 
let a3 = (msg1) => {
    console.log("Function A3 is called", msg1);

    let b3 = (msg2) => {
        console.log("Function B3 is called", msg2);

        let c3 = (msg3) => {
            console.log("Function C3 is called", msg3);
        }
        return c3;
    }
    return b3;
}

/*
// First way doing
let x = a();
console.log(x);

x();
*/

// Another way of calling
a()();
a1()("Message is sent");
a2("Wells")("Message is sent");
a3("First")("Second")("Third");


// Spread Operator
myarray = [10, 20];
newarray = [300, 400, ...myarray, 800];
console.log(newarray);

newarray = [...newarray, 50, 80];
console.log(newarray);

arr3 = [...newarray.slice(0,1)];
console.log(arr3);

arr3 = [...newarray.slice(0,1), ...newarray.slice(2)];
console.log(arr3);

// Sliced only first number, Added 79, Removed second number
arr3 = [...newarray.slice(0,1), 79, ...newarray.slice(2)];
console.log(arr3);