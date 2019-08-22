export const isLeap = (input) => {
  let isLeapYear = false;

  console.log("input is: " + input)
  if( (input % 4) == 0) {
    isLeapYear = true;
    if( (input % 100) == 0) {
      isLeapYear = false;
      if( (input % 400) == 0) {
        isLeapYear = true;
      }
    }
  }

  return isLeapYear;

};
