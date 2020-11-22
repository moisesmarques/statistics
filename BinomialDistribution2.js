/*
1 - Not more than 2 occurrences
2 - At least 2 occurrences

Ex. Input: 12 10
P = 12% (Odd = 12/100)
*/

    let vars = '12 10'.split(' ').map( a=> parseFloat(a));
    let p = vars[0];
    let n = vars[1];
    let fact = (n) => n == 0 ? 1 : n*fact(n-1);

    let comb = (n, x) => fact(n) / (fact(x) * fact(n-x));

    let b = (x, n, p) => comb(n, x) * p**x * (1-p)**(n-x);
    
    let odds = p / 100;
    
	console.log(
        [...Array(2+1).keys()]
            .map( a => b(a, n, odds))
            .reduce((a,b) => a+b).toFixed(3)
        );
		
    console.log(
        [...Array(n+1).keys()].slice(2)
            .map( a => b(a, n, odds))
            .reduce((a,b) => a+b).toFixed(3)
        );