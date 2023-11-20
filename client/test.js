const number = 5; // number declared outside (global scope)

function main() {
    let decision = true; // decision declared inside function(local scope)
    console.log("Original Value of number: ", number);
    number = 10; // reassigning the number
    console.log("New Value of number: ", number);
    console.log("Value of decision: ", decision);

    newFunction();
}

function newFunction() {
    console.log("New Value of number from newFunction: ", number);
}

main(); // Call the main function to execute the code
