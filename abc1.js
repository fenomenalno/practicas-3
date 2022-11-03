let a = 13.123456789;
let b = 2.123;
let n = 5;

let odin = Math.round(a % 1* Math.pow(10,n));
let dva = Math.round(b % 1* Math.pow(10,n));

console.log(odin, dva);

console.log('исходные числа', a === b);
console.log('оба числа', odin === dva);
console.log('первое число больше', odin > dva);
console.log('первое число меньше', odin < dva);
console.log('первое число не равно второму', odin != dva);
console.log('первое число больше либо равно второму', odin >= dva);
console.log('первое число меньше или равно второму', odin <= dva);