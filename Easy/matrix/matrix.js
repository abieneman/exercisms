//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


class Matrix {
  constructor(input) {
    var bigArray = [];
    var smallArray = [];
    let index = 0;
    let theEnd = input.length;
    let stringNumber = "";
    let endFlag = false;

    let newLineIndex = input.indexOf("\n");

    while(!endFlag) {

      if(newLineIndex == (-1) ) {
        endFlag = true;
        newLineIndex = theEnd;
      }

      while(index < newLineIndex) {
        while( (input[index] != " ") && (index != newLineIndex) ) {
          stringNumber += input[index];
          index++;
        }
        smallArray.push(parseInt(stringNumber))
        stringNumber = "";
        index++;
      }
      newLineIndex = input.indexOf("\n", (newLineIndex + 1) )
      bigArray.push(smallArray);
      smallArray = [];
    }



    //print rows
    console.log(bigArray);



    // //print collumns
    let colArray = [];
    let smolArray = [];

    for(let i = 0; i < bigArray[0].length; i++) {
      for(let j = 0; j < bigArray.length; j++) {
        smolArray.push(bigArray[j][i]);
      }
      colArray.push(smolArray);
      smolArray = [];
    }
    console.log(colArray);



  }
  get rows() {
    

    return 0;
    //throw new Error("Remove this statement and implement this function");
  }

  get columns() {
    return 0;
    //throw new Error("Remove this statement and implement this function");
  }
}


new Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6');