//
// This is only a SKELETON file for the 'Beer Song' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BeerSong {
  static verse(input) {
    let numBeers = input;
    let theReturn = "";

    if(input == 2) {
      return "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n"
    }
    if(input == 1) {
      return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n"
    }
    if(input == 0) {
      return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n"
    }

    theReturn += `${numBeers} bottles of beer on the wall, ${numBeers} bottles of beer.\n`
    numBeers--;
    theReturn += `Take one down and pass it around, ${numBeers} bottles of beer on the wall.\n`;

    return theReturn;
  }

  static sing(input1, input2) {
    let endVerse = 0;
    let startVerse = 99;
    let theReturn = "";

    if(input2) {
      endVerse = input2;
    }

    if(input1) {
      startVerse = input1;
    }

    for(let i = startVerse; i >= endVerse; i--) {
      theReturn += this.verse(i);
      if(i != endVerse) {
        theReturn += "\n";
      }
    }
    return theReturn;
  }
}
