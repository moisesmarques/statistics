/*
1 - At least 3 occurrences in 6

Ex. Input: 1.09 1
Odds = 1.09 / 1

*/

let vars = '1.09 1'.split(' ').map( a=> parseFloat(a));

var fact = (n) => n == 0 ? 1 : n*fact(n-1);

var comb = (n, x) => fact(n) / (fact(x) * fact(n-x));

var b = (x, n, p) => comb(n, x) * p**x * (1-p)**(n-x);

var odds = vars[0] / vars[1];

var result = [...Array(7).keys()].slice(3).map( (i) => b(i, 6, odds / (1 + odds)));

console.log(result.reduce( (a,b) => a+b).toFixed(3) );