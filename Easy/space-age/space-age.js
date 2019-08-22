import { breakStatement } from "@babel/types";

//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, secondsAlive) => {

  console.log(planet, secondsAlive);

  let period = 31557600;

  switch(planet) {
    case "mercury":
      period *= 0.2408467;
      break;
    case "venus":
      period *= 0.61519726;
      break;
    case "mars":
      period *= 1.8808158;
      break;
    case "jupiter":
      period *= 11.862615;
      break;
    case "saturn":
      period *= 29.447498;
      break;
    case "uranus":
      period *= 84.016846;
      break;
    case "neptune":
      period *= 164.79132;
  }



  return parseFloat( (secondsAlive / period).toFixed(2) );

  //throw new Error("Remove this statement and implement this function");
};
