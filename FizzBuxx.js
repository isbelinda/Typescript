/// VERSION JAVASCRIPT
// function FizzBuzz (){
//    
// }
//
// FizzBuzz.prototype.say = function(){
//     return 'Hello';
// };
var FizzBuzz = (function () {
    function FizzBuzz() {
    } //
    FizzBuzz.prototype.say = function () {
        return 'Hello';
    };
    return FizzBuzz;
}());
var fizzBuz = new FizzBuzz();
console.log(fizzBuz.say());
