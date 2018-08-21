/*A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.*/

let currentBiggest = 0;

for (let i = 100; i < 999; i++){
    for(let j = 100; j < 999; j++){
        let numberMultiply = i*j;
        let multiplyToString = numberMultiply.toString(); 
        let numberReverse = multiplyToString.split("").reverse().join("");
        if(numberReverse === multiplyToString && Number.parseInt(numberReverse) > currentBiggest){
            //console.log(i, j, numberReverse);
            currentBiggest = multiplyToString;
        }
    }
}

console.log(currentBiggest);