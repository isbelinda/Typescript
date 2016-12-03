export default class Captcha {
    constructor(
        private pattern: number,
        private left: number,
        private right: number,
        private operand: number){
        
    }

    toText(): string{
        let numRight = this.filterNumber(this.right);
        let isOperand = this.filterOperand(this.operand);
        if(this.pattern === 1){
            return `${this.left} ${isOperand} ${numRight}`;
        } else if(this.pattern === 2){
            return `${numRight} ${isOperand} ${this.left}`;
        }
    }
    
    private filterNumber(int: number) {
        if(int === 1){
            return 'One'
        } else if(int === 2){
            return 'Two'
        }
    }

    private filterOperand(int: number) {
        if(int === 1){
            return '+';
        } else if(int === 2){
            return '-';
        } else if(int === 3){
            return 'x';
        }
    }
}


