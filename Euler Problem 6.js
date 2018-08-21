/*The sum of the squares of the first ten natural numbers is,

1 + 2 + ... + 10 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first 
ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the 
first one hundred natural numbers and the square of the sum.*/


let numberSquare = 0;
let numberTotal = 0
for(let i = 0; i < 101; i++){
    numberSquare = i*i;
    numberTotal = numberTotal + numberSquare;
}

let sum = 0;
let sumToSquare = 0;


for(let i = 0; i < 101; i++){
    sum = sum + i;
    sumToSquare = sum * sum;
   
}

let sumDifference = sumToSquare - numberTotal;

console.log(sumDifference);