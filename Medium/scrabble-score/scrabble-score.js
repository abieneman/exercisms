//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (theInput) => {

  let theWord = theInput.toUpperCase();
  let theScore = 0;

  for(let i = 0; i < theInput.length; i++) {
    switch(theWord[i]) {
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
      case "L":
      case "N":
      case "R":
      case "S":
      case "T":
        theScore += 1;
        break;

      case "D":
      case "G":
        theScore += 2;
        break;
        
      case "B":
      case "C":
      case "M":
      case "P":
        theScore +=3;
        break;

      case "F":
      case "H":
      case "V":
      case "W":
      case "Y":
        theScore += 4;
        break;
      case "K":
        theScore += 5;
        break;
      case "J":
      case "X":
        theScore += 8;
        break;
      case "Q":
      case "Z":
        theScore += 10;
        break;
    }
  }

  return theScore;
  //throw new Error("Remove this statement and implement this function");
};
