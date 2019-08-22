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
    let halfCurrentNumber;
    
    while(counter < n) {
      halfCurrentNumber = Math.round( (currentNumber + 2) / 2);
      for(let j = 2; j < halfCurrentNumber; j++) {
        if( (currentNumber % j) == 0) {
          isPrime = false;
          j = halfCurrentNumber;
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
