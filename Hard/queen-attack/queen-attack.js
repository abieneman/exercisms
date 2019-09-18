export class QueenAttack {
    constructor(input) {
        this.white = [0, 3];
        this.black = [7, 3];
    
        if(input) {
            this.white = input.white;
            this.black = input.black;
        }

        if( (this.black[0] == this.white[0]) && (this.black[1] == this.white[1]) ) {
            throw('Queens cannot share the same space');
        }
    }

    toString() {
        let rows = [];

        let rowString = "_ _ _ _ _ _ _ _"
        for(let i = 0; i < 8; i++) {
            rows[i] = rowString;
        }

        
        
        if(this.white[0] == this.black[0]) {
            let queens = [ [], [] ];
            if(this.white[1] < this.black[1]) {
                queens[0][0] = 'W';
                queens[0][1] = this.white[1];

                queens[1][0] = 'B';
                queens[1][1] = this.black[1];
            } else {
                queens[0][0] = 'B';
                queens[0][1] = this.black[1];

                queens[1][0] = 'W';
                queens[1][1] = this.white[1];
            }

            let queenRow = "";
            for(let i = 0; i < queens[0][1]; i++) {
                queenRow += "_ ";
            }
            queenRow += "" + queens[0][0] + " "

            for(let i = 0; i < (queens[1][1] - queens[0][1] - 1); i++) {
                queenRow += "_ ";
            }
            queenRow += "" + queens[1][0];


            while(queenRow.length < 14) {
                queenRow += " _";
            }

            rows[this.black[0]] = queenRow;


        } else {
            let queenRow = "";
            for(let i = 0; i < this.white[1]; i++) {
                queenRow += "_ ";
            }
            queenRow += "W"
            while(queenRow.length < 14) {
                queenRow += " _";
            }
            rows[this.white[0]] = queenRow;


            queenRow = "";
            for(let i = 0; i < this.black[1]; i++) {
                queenRow += "_ ";
            }
            queenRow += "B"
            while(queenRow.length < 14) {
                queenRow += " _";
            }
            rows[this.black[0]] = queenRow;
        }


        let returnString = "";
        for(let i = 0; i < 8; i++) {
            returnString += rows[i];
            returnString += '\n';
        }
        return returnString;
    }

    canAttack() {
        if( (this.white[0] == this.black[0]) || (this.white[1] == this.black[1]) ) {
            return true;
        }
        
        if(  (this.white[0] + this.white[1]) == (this.black[0] + this.black[1]) ) {
            return true;
        }

        if( ((-1 * this.white[0]) + this.white[1]) == ((-1 * this.black[0]) + this.black[1]) ) {
            return true;
        }

        return false;
    }
}