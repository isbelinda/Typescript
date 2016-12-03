"use strict";
// 1 1 1 1 -> 1 + One
// 1 1 2 1 -> 1 + Two
// 1 1 2 2 -> 1 - Two
// 1 1 2 3 -> 1 x Two
// 2 1 1 1 -> One + 1
var captcha_1 = require('./captcha');
var captcha = new captcha_1["default"](1, 1, 1, 1);
var captcha2 = new captcha_1["default"](1, 1, 2, 1);
var captcha3 = new captcha_1["default"](1, 2, 2, 1);
var captcha4 = new captcha_1["default"](2, 2, 2, 1);
console.log(captcha.toText());
console.log(captcha2.toText());
console.log(captcha3.toText());
console.log(captcha4.toText());
