/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?*/

function primeCheck(num){
    for(i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        } else return true;
        
    }
}

for(let i = 20; i < 1000000000; i = i + 20){
    if(!primeCheck(i)){
        let isDivisible = true;
        if(i > 999999999){
            console.log("Error message");
        }
        for(let j = 11; j < 21; j++){
            if(i % j !== 0){
                isDivisible = false;
                break;
            }
        }
        if(isDivisible){
            console.log(i);
            break;
        }
    }
   
} 