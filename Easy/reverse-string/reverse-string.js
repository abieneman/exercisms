//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (theInput) => {
  
  const LEN = theInput.length;
  let theAnswer = "";

  for (let i = 0; i < LEN; i++) { 
    theAnswer += theInput[LEN - i - 1];
  }
  return theAnswer;
};
