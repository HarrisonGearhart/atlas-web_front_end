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

for (let i = 0; i < 100; i++) {
    countPrimeNumbers(); 
}

const endTime = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);
