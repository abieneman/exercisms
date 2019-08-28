//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(input1, input2, input3) {
    this.a = input1;
    this.b = input2;
    this.c = input3;
  }

  kind() {

    if( (this.a <= 0) || (this.b <= 0) || (this.c <= 0) ) {
      throw new Error("sides cannot be equal to or less than 0");
    }

    let sides = [];
    sides.push(this.a);
    sides.push(this.b);
    sides.push(this.c);

    sides.sort(function(a,b) { return a - b; });

    if(sides[0] + sides[1] < sides[2]) {
      throw new Error("illegal triangle");
    }

    if(sides[0] == sides[2]) {
      return "equilateral";
    }

    if( (sides[0] == sides[1]) || (sides[1] == sides[2]) ) {
      return "isosceles";
    }

    return "scalene";

  }
}
