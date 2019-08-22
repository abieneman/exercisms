//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (theInput) => {

  if(theInput.length < 26) {
    return false;
  }

  let theString = theInput.toUpperCase();

  let alphabet = [0];
  for(let i = 0; i < 25; i++) {
   alphabet.push(0);
  }
  
  const INDEXOFA = 65;
  const INDEXOFZ = 90;
  
  let indexShift = 0;
  for(let i = 0; i < theString.length; i++) {
    if(INDEXOFA <= theString.charCodeAt(i) <= INDEXOFZ) {
      indexShift = theString.charCodeAt(i) - INDEXOFA;
      alphabet[indexShift]++;
    }
  }

  for(let i = 0; i < alphabet.length; i++) {
    if(alphabet[i] == 0) {
      return false;
    }
  }
  return true;
};
