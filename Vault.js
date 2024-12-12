/* Pseudocode: 
    1. Declare greeting string letting users know they recieved a message 
    2. Declare 3 const variable as num1(5+5),num2(80/2), num3(40-1)
    3. Create an alert with all 4 variables
    */

const greeting =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

//expected output is 10
const num1 = 5 + 5;

//expected output is 40
const num2 = 80 / 2;

//expected output is 39
const num3 = 40 - 1;

//alert message should read: You have received this message because you have been chosen to open an important vault. Here is the secret combination: 10 40 39
alert(`${greeting} ${num1} ${num2} ${num3}`);
