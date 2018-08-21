/*The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.*/


function primeCheck(num) {
    if (num === 3 || num === 2) {
        return true;
    }
    if (num === 1) {
        return false;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    for (i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let primeTotal = 0;

for (let i = 0; i < 2000000; i++) {
    if (primeCheck(i)) {
        primeTotal = primeTotal + i;
    }
}

console.log(primeTotal);

