let a = [];
let n = 2;
let m = 5;
let count = 50;

for (let i = 0; i < count; i++ ) {
    a.push(Math.round(Math.random() * (m -n) + n));
}

console.log(a);