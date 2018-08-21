/*A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.*/

for (let a = 1; a < 997; a++) {
    for (let b = (a + 1); b < 997; b++) {
        let c = 1000 - a - b;
        if (a < b && b < c) {
            let aSquared = a * a;
            let bSquared = b * b;
            let cSquared = c * c;
            if ((aSquared + bSquared) === cSquared) {
                console.log(a * b * c);
            }
        }
    }
}

