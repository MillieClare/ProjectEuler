/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?*/


function primeCheck(num) {
    if (num === 2) {
        return true;
    }
    if(num === 1){
        return false;
    }
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }

    }
    return true;
}

let counter = 3;
let i = 5;
while (counter <= 10001) {
   
   
    if (primeCheck(i)) {
        counter++;
        biggestPrime = i;    }
    i++; 
}
console.log(biggestPrime);


