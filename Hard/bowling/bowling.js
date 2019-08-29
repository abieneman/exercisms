export class Bowling {
    constructor() {
      this.rolls = [];
      this.endOfGame = false;
    }
  
    roll(rollValue) {
        if(this.endOfGame) {
            throw new Error("Cannot roll after game is over");
        }

        this.rolls.push(rollValue);
        return this.score(true);
    }

    score(calledFromLocal) {
        if( (this.rolls.length < 10) && (!calledFromLocal) ) {
            throw new Error("Score cannot be taken until the end of the game");
        }
        let frame = 1;
        let halfFrame = 1;
        let bonus1 = 0;
        let bonus2 = 0;
        let bonusArray1 = [];
        let bonusArray2 = [];
        let theScore = 0;
        let lastRoll = 0;

        let tempRoll = [... this.rolls];

        while(this.rolls.length > 0) {
            

            let currentRoll = this.rolls[0];

            if(currentRoll < 0) {
                throw new Error('Negative roll is invalid');
            }
            if(currentRoll > 10) {
                throw new Error('Pin count exceeds pins on the lane');
            }
            if( (halfFrame == 2) && ((currentRoll + lastRoll) > 10) ) {
                throw new Error("Pin count exceeds pins on the lane");
            }

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
                if(bonus1 == 0) {
                    bonus1 = 2;
                } else {
                    bonus2 = 2;
                }
            }

            if( (halfFrame == 2) && ((currentRoll + lastRoll) == 10) && (frame < 11) ) {
                if(bonus1 == 0) {
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

        if( ((bonus1 > 0) || (bonus2 > 0)) && (!calledFromLocal) ) {
            throw new Error("Score cannot be taken until the end of the game");
        }

        this.rolls = tempRoll;
        if( (frame > 10) && ((bonus1 == 0) && (bonus2 == 0)) ) {
            this.endOfGame = true;
        }
        return theScore;
    }
}