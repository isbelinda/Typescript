export default class Captcha {
    constructor(private pattern: number, private left: number, private right: number, private operand: number){
        
    }

    toText(): string{
        return `${this.left} + One`

    }
}

