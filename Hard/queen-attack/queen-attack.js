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

        this.rows = [];

        let rowString = "_ _ _ _ _ _ _ _"
        for(let i = 0; i < 8; i++) {
            this.rows[i] = rowString;
        }

        let whiteString;
        switch(this.white[1]) {
            case 0:
                whiteString = "W _ _ _ _ _ _ _"
                break;
            
            case 1:
                whiteString = "_ W _ _ _ _ _ _"
                break;

            case 2:
                whiteString = "_ _ W _ _ _ _ _"
                break;

            case 3:
                whiteString = "_ _ _ W _ _ _ _"
                break;

            case 4:
                whiteString = "_ _ _ _ W _ _ _"
                break;
                
            case 5:
                whiteString = "_ _ _ _ _ W _ _"
                break;

            case 6:
                whiteString = "_ _ _ _ _ _ W _"
                break;

            case 7:
                whiteString = "_ _ _ _ _ _ _ W"
                break;            
        }

        let blackString;
        switch(this.black[1]) {
            case 0:
                blackString = "B _ _ _ _ _ _ _"
                break;
            
            case 1:
                blackString = "_ B _ _ _ _ _ _"
                break;

            case 2:
                blackString = "_ _ B _ _ _ _ _"
                break;

            case 3:
                blackString = "_ _ _ B _ _ _ _"
                break;

            case 4:
                blackString = "_ _ _ _ B _ _ _"
                break;
                
            case 5:
                blackString = "_ _ _ _ _ B _ _"
                break;

            case 6:
                blackString = "_ _ _ _ _ _ B _"
                break;

            case 7:
                blackString = "_ _ _ _ _ _ _ B"
                break;            
        }

        this.rows[this.white[0]] = whiteString;
        this.rows[this.black[0]] = blackString;
    }

    toString() {
        let returnString = "";
        for(let i = 0; i < 8; i++) {
            returnString += this.rows[i];
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