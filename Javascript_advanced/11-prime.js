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

// Using setTimeout to defer the execution of the loop
function runCalculation() {
    if (count < 100) {
        countPrimeNumbers();  // Perform the prime number calculation
        count++;
        setTimeout(runCalculation, 0);  // Schedule next iteration in the event loop
    } else {
        const endTime = performance.now();
        console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);
    }
}

// Start the execution
runCalculation();
