/*
Probability of an event occurring on the last occurrence

Ex. Input:

1 3
5
*/

let vars = input.replace('\n', ' ').split(' ').map( a => parseFloat(a));
let p = vars[0] / vars[1];
let n = vars[2];

let result = Math.pow(1 - p, n - 1) * p;

console.log(result.toFixed(3));


Probabilidade de um evento ocorrer na primeira ocorrência

let vars = input.replace('\n', ' ').split(' ').map( a => parseFloat(a));
let p = vars[0] / vars[1];
let n = vars[2];

let geometric = (p , n) => Math.pow(1 - p, n - 1) * p;

let result = [...Array(n+1).keys()].slice(1)
	.map(i =>  geometric(p, i))
	.reduce( (a,b) => a+b)

console.log(result.toFixed(3));