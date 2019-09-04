//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.myRoster = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: []
    };
  }
  roster() {
    let tempRoster = {};
    for(let i = 1; i < 8; i++) {
      if(this.myRoster[i].length > 0) {
        tempRoster[i] = [... this.myRoster[i]];
        tempRoster[i].sort();
      }
    }

    return tempRoster;
  }

  add(name, grade) {
    this.myRoster[grade].push(name);
  }

  grade(grade) {
    let tempRoster = [];
    this.myRoster[grade].sort();
    tempRoster[grade] = [... this.myRoster[grade]];
    return tempRoster[grade];
  }
}
