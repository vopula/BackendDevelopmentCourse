// let length;
// let width;

// function calculateArea() {
//     length = parseFloat(document.getElementById('length').value);
//     width = parseFloat(document.getElementById('width').value);

//     let area = length * width;

//     document.getElementById('result').innerText = `The area of the rectangel is: ${area}`;
// }



/// TASK BASED ///
// In this task you need to create a function called groceryTracker to calculate the total amount of the purchased grocery item. For this:
// Include the following in the HTML File:
// You need to create at least three input boxes with ID named as "grocery1" and so on.
// Also Label them using <label> as "Enter first grocery amount" and so on.
// Create a button that calculates the total expenditure on the grocery purchases.
// Include the following in the JavaScript file:
// Create a function which will accept these amount entered by users as a parameter.
// Then write the logic to calculate the total amount spent on the grocery purchase.
// Call this function in such a way so that after clicking on the button, it shows the total amount for the grocery purchase.

let price1;
let price2;
let price3;
let totalPrice;

function calculateThis() {
    price1 = parseFloat(document.getElementById('grocery1').value);
    price2 = parseFloat(document.getElementById('grocery2').value);
    price3 = parseFloat(document.getElementById('grocery3').value);

    totalPrice = price1 + price2 + price3;

    document.getElementById('result').innerText = `The total for 3 items are ${totalPrice}`;
}

// Learning log: need to ensure all flow interaction and the component to make it happen, id is the one that is being processed by js in this example