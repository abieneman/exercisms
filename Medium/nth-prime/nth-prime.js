//
// This is only a SKELETON file for the 'nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Prime {
  nth(n) {
    if(n == 0) {
      throw('Prime is not possible');
    }
    if(n == 1 ) {
      return 2;
    }

    let counter = 1;
    let currentNumber = 3;
    let isPrime = true;
    let lastPrime = 2;
    
    while(counter < n) {
      for(let j = 2; j < (Math.sqrt(currentNumber) + 1); j++) {
        if( (currentNumber % j) == 0) {
          isPrime = false;
          j = currentNumber;
        }
      }
      if(isPrime) {
        counter++;
        lastPrime = currentNumber;
      }
      currentNumber++;
      isPrime = true;
    }

    return lastPrime;
  }
}
