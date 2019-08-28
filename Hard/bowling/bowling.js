export class Bowling {
    constructor() {
      this.rolls = [];
    }
  
    roll(rollValue) {
        if(rollValue < 0) {
            throw new Error('Negative roll is invalid');
        }
        if(rollValue > 10) {
            throw new Error('Pin count exceeds pins on the lane');
        }
        this.rolls.push(rollValue);
    }

    score() {
        let frame = 1;
        let halfFrame = 1;
        let bonus1 = 0;
        let bonus2 = 0;
        let bonusArray1 = [];
        let bonusArray2 = [];
        let theScore = 0;
        let lastRoll = 0;


        while(this.rolls.length > 0) {

            let currentRoll = this.rolls[0];

            if(frame < 11) {
                theScore += currentRoll;
            }

            if(bonus1 > 0) {
                bonusArray1.push(currentRoll);
                bonus1--;
                if(bonus1 == 0) {
                    while(bonusArray1.length > 0) {
                        theScore += bonusArray1.shift();
                    }
                }
            }
            if(bonus2 > 0) {
                bonusArray2.push(currentRoll);
                bonus2--;
                if(bonus2 == 0) {
                    while(bonusArray2.length > 0) {
                        theScore += bonusArray2.shift();
                        
                    }
                }
            }



            if( (halfFrame == 1) && (currentRoll == 10) && (frame < 11) ) {
                console.log("before: strike!" + "bonus1: " + bonus1 + "bonus2: " + bonus2);
                if(bonus1 == 0) {
                    bonus1 = 2;
                } else {
                    bonus2 = 2;
                }
                console.log("after: strike!" + "bonus1: " + bonus1 + "bonus2: " + bonus2);

            }
            if(currentRoll == 3) {
                console.log(`frame ${frame} halfframe: ${halfFrame} currentRoll: ${currentRoll} lastRoll: ${lastRoll}`);
            }
            if( (halfFrame == 2) && ((currentRoll + lastRoll) == 10) && (frame < 11) ) {
                console.log('spare');
                if(bonus1 != 0) {
                    bonus1 = 1;
                } else {
                    bonus2 = 1;
                }
            }

            if( ((halfFrame == 1) && (currentRoll == 10)) || (halfFrame == 2) ) {
                frame++;
            }

            if( (halfFrame == 1) && (currentRoll != 10) ) {
                halfFrame++;
            }   else {
                halfFrame = 1;
            }

            this.rolls.shift();
            lastRoll = currentRoll;
        }


        return theScore;
    }
}