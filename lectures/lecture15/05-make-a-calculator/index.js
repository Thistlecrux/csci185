function addNumbers() {
    // Your job: 
    // 1. Access the first number that the user typed in and store it
    //    as a variable.
    // 2. Access the second number that the user typed in and store it
    //    as a variable.
    let num1 = document.querySelector("#num1").value;
    num1 = Number(num1);


    let num2 = document.querySelector("#num2").value;
    num2 = Number(num2);

    let sum = num1 + num2;
    document.querySelector("#answer").innerHTML = sum;
    // 3. Convert the values stored inside of the two variables to a 
    //    number (so that you can do math)!
    // 4. Add the two numbers together.
    // 5. Write the result to the #answer section
}

function subtractNumbers() {
    // Same as above but subtract!
    let num1 = document.querySelector("#num1").value;
    num1 = Number(num1);


    let num2 = document.querySelector("#num2").value;
    num2 = Number(num2);

    let minus = num1 - num2;
    document.querySelector("#answer").innerHTML = minus;
}

function multiplyNumbers() {
    // Same as above but multiply!
    let num1 = document.querySelector("#num1").value;
    num1 = Number(num1);


    let num2 = document.querySelector("#num2").value;
    num2 = Number(num2);

    let multiply = num1 * num2;
    document.querySelector("#answer").innerHTML = multiply;
}

function divideNumbers() {
    // Same as above but divide!
}

