"use strict";
var Captcha = (function () {
    function Captcha(pattern, left, right, operand) {
        this.pattern = pattern;
        this.left = left;
        this.right = right;
        this.operand = operand;
    }
    Captcha.prototype.toText = function () {
        var numRight = filterNumber(this.right);
        var isOperand = filterOperand(this.operand);
        if (this.pattern === 1) {
            return this.left + " " + isOperand + " " + numRight;
        }
        else {
            return numRight + " " + isOperand + " " + this.left;
        }
        // switch (this.pattern){
        //     case 1:
        //         return `${this.left} ${isOperand} ${numRight}`;
        //         break;
        //
        //     case 2:
        //         return `${numRight} ${isOperand} ${this.left}`;
        //         break;
        // }
    };
    return Captcha;
}());
exports.__esModule = true;
exports["default"] = Captcha;
function filterNumber(int) {
    if (int === 1) {
        return 'One';
    }
    else if (int === 2) {
        return 'Two';
    }
}
function filterOperand(int) {
    if (int === 1) {
        return '+';
    }
    else if (int === 2) {
        return '-';
    }
    else if (int === 3) {
        return 'x';
    }
}
