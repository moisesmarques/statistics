
/*

A random variable, X, follows Poisson distribution with mean of 2.5.
 Find the probability with which the random variable X is equal 5 to .

Ex. input:

2.5
5

*/

let vars = input.replace('\n', ' ').split(' ').map( a => parseFloat(a));
let r = vars[0];
let n = vars[1];
let fact = (n) => n == 0 ? 1 : n*fact(n-1);

let poisson = (p, n) => (p**n)*Math.exp(-p)/fact(n);

console.log(poisson(r, n).toFixed(3));