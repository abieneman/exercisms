//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = (theInput) => {
  let theAnswer = 0;
  
  let multiplier = -1;

  for(let i = 0; i < 2; i++) {
    switch(theInput[i]) {
      case "black":
        multiplier = 0;
        break;
      case "brown":
        multiplier = 1;
        break;
      case "red":
        multiplier = 2;
        break;
      case "orange":
        multiplier = 3;
        break;
      case "yellow":
        multiplier = 4;
        break;
      case "green":
        multiplier = 5;
        break;
      case "blue":
        multiplier = 6;
        break;
      case "violet":
        multiplier = 7;
        break;
      case "grey":
        multiplier = 8;
        break;
      case "white":
        multiplier = 9;
        break;
    }
    if(i == 0) {
      multiplier *= 10;
    }
    theAnswer += multiplier;
  }
  return theAnswer;
  //throw new Error("Remove this statement and implement this function");
};
