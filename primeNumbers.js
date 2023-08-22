function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
    
    return true;
  }


  function generatePrimesInRange(min, max) {
    const primes = [];
    for (let num = min; num <= max; num++) {
      if (isPrime(num)) {
        primes.push(num);
      }
    }
    return primes;
  }

  function nthPrime(n) {
    if (n === 1) return 2;
    let count = 1;
    let num = 3;
    
    while (count < n) {
      if (isPrime(num)) {
        count++;
      }
      if (count === n) {
        return num;
      }
      num += 2;
    }
  }

  function countPrimesInRange(min, max) {
    let count = 0;
    for (let num = min; num <= max; num++) {
      if (isPrime(num)) {
        count++;
      }
    }
    return count;
  }

  function generateTwinPrimesInRange(min, max) {
    const twinPrimes = [];
    for (let num = min; num <= max - 2; num++) {
      if (isPrime(num) && isPrime(num + 2)) {
        twinPrimes.push([num, num + 2]);
      }
    }
    return twinPrimes;
  }
  
  function primeFactorization(num) {
    const factors = [];
    let divisor = 2;
    while (num > 1) {
      while (num % divisor === 0) {
        factors.push(divisor);
        num /= divisor;
      }
      divisor++;
    }
    return factors;
  }
  
  function sieveOfEratosthenes(limit) {
    const sieve = Array(limit + 1).fill(true);
    sieve[0] = sieve[1] = false;
    for (let p = 2; p * p <= limit; p++) {
      if (sieve[p]) {
        for (let i = p * p; i <= limit; i += p) {
          sieve[i] = false;
        }
      }
    }
    return sieve.reduce((primes, isPrime, num) => {
      if (isPrime) primes.push(num);
      return primes;
    }, []);
  }
  
  
module.exports = {
    isPrime:isPrime,
    generatePrimesInRange:generatePrimesInRange,
    nthPrime:nthPrime,
    countPrimesInRange:countPrimesInRange,
    generateTwinPrimesInRange:generateTwinPrimesInRange,
    primeFactorization:primeFactorization,
    sieveOfEratosthenes:sieveOfEratosthenes
}