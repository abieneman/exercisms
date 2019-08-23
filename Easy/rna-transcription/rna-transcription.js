//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (input) => {
  let returnString = "";
  for(let i = 0; i < input.length; i++) {
    switch(input[i]) {
      case 'G':
        returnString += 'C';
        break;

      case 'C':
        returnString += 'G';
        break;
          
      case 'T':
        returnString += 'A';
        break;

      case 'A':
        returnString += 'U';
        break;
    }
  }
  return returnString;
};

// G -> C
// C -> G
// T -> A
// A -> U