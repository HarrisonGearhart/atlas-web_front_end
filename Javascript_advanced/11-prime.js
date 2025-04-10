function countPrimeNumbers() {
    const primes = [];
    
    for (let num = 2; num <= 100; num++) {
        let isPrime = true;
        
        for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
            if (num % divisor === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(num);
        }
    }

    return primes.length;
}

const startTime = performance.now();
let count = 0;


function runCalculation() {
    if (count < 100) {
        countPrimeNumbers();  
        count++;
        }
}


setTimeout(runCalculation, 0);

const endTime = performance.now();
        console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);
    