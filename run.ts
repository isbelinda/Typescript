// 1 1 1 1 -> 1 + One
// 1 1 2 1 -> 1 + Two
// 1 1 2 2 -> 1 - Two
// 1 1 2 3 -> 1 x Two
// 2 1 1 1 -> One + 1
import Captcha from './captcha';

let captcha = new Captcha(1, 1, 1, 1);
console.log(captcha.toText());