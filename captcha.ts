export default class Captcha {
    constructor(
        private pattern: number,
        private left: number,
        private right: number,
        private operand: number){
        
    }

    toText(): string{
        let numRight = filterNumber(this.right);
        let isOperand = filterOperand(this.operand);
        if(this.pattern === 1){
            return `${this.left} ${isOperand} ${numRight}`;
        } else if(this.pattern === 2){
            return `${numRight} ${isOperand} ${this.left}`;
        }
    }
}

function filterNumber (int: number){
    if(int === 1){
        return 'One'
    } else if(int === 2){
        return 'Two'
    }
}

function filterOperand (int: number) {
    if(int === 1){
        return '+';
    } else if(int === 2){
        return '-';
    } else if(int === 3){
        return 'x';
    }
}

