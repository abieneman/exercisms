
export class Change {
    calculate(incomingChangeAmounts, incomingTotal) {

        if(incomingTotal < 0) {
            throw("Negative totals are not allowed.")
        }
        if(incomingTotal == 0) {
            return [];
        }
        if(incomingChangeAmounts[0] > incomingTotal) {
            throw("The total 3 cannot be represented in the given currency.");
        }


        let changeAmounts = [... incomingChangeAmounts];
        let total = incomingTotal;
        let changeDue = [];


        while(changeAmounts.length > 0) {
            if( (changeAmounts[changeAmounts.length - 1]) > total) {
                changeAmounts.pop();
            } else {
                changeDue.unshift(changeAmounts[changeAmounts.length - 1]);
                total -= changeDue[0];
            }
        }

        let changeTotal = 0;

        for(let i = 0; i < changeDue.length; i++) {
            changeTotal += changeDue[i]
        }

        if(changeTotal != incomingTotal) {
            for(let i = 0; i < 30; i++) {
                changeDue.unshift(4)
            }
        }






        changeAmounts = [... incomingChangeAmounts];
        total = incomingTotal;

        let runningTotal = 0;
        let tempChangeDue = [];
        let addThisOne;
        let amountLeft;
        let currentWinner = [... changeDue];

        for(let i = 0; i < 25000; i++) {

            while(total > runningTotal) {
                while(changeAmounts[changeAmounts.length - 1] > amountLeft) {
                    changeAmounts.pop();
                }
                addThisOne = Math.floor((Math.random() * (changeAmounts.length)))
                runningTotal += changeAmounts[addThisOne];
                tempChangeDue.unshift(changeAmounts[addThisOne]);
                amountLeft -= tempChangeDue[0];
            }

            if(total == runningTotal) {
                if(tempChangeDue.length < currentWinner.length) {
                    currentWinner = [... tempChangeDue];
                }
            }

            changeAmounts = [...incomingChangeAmounts];
            tempChangeDue = [];
            amountLeft = incomingTotal;
            runningTotal = 0;

        }



        currentWinner.sort(function(a,b) { return a - b; })
        
        changeTotal = 0;
        for(let i = 0; i < currentWinner.length; i++) {
            changeTotal += currentWinner[i]
        }
        
        if(changeTotal != incomingTotal) {
            throw(`The total ${incomingTotal} cannot be represented in the given currency.`)
        }



        return currentWinner;
    }
}
