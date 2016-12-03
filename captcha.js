"use strict";
var Captcha = (function () {
    function Captcha(pattern, left, right, operand) {
        this.pattern = pattern;
        this.left = left;
        this.right = right;
        this.operand = operand;
    }
    Captcha.prototype.toText = function () {
        var numRight = this.filterNumber(this.right);
        var isOperand = this.filterOperand(this.operand);
        if (this.pattern === 1) {
            return this.left + " " + isOperand + " " + numRight;
        }
        else if (this.pattern === 2) {
            return numRight + " " + isOperand + " " + this.left;
        }
    };
    Captcha.prototype.filterNumber = function (int) {
        if (int === 1) {
            return 'One';
        }
        else if (int === 2) {
            return 'Two';
        }
    };
    Captcha.prototype.filterOperand = function (int) {
        if (int === 1) {
            return '+';
        }
        else if (int === 2) {
            return '-';
        }
        else if (int === 3) {
            return 'x';
        }
    };
    return Captcha;
}());
exports.__esModule = true;
exports["default"] = Captcha;
