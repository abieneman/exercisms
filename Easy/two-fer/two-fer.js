//
// This is only a SKELETON file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (theInput) => {

    let theReturn = "One for ";

    if(theInput == undefined) {
        theReturn += "you"
    }
    else {
        theReturn += theInput;
    }

    theReturn += ", one for me."


    console.log("given name is: " + theInput);
    console.log("the answer is: " + theReturn);
    return theReturn;
  };
  