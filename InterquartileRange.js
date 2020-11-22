
let arr0 = [6, 12, 8, 10, 20, 16];
let freq = [5, 4, 3, 2, 1, 5];

let arr = arr0.map( (v, i) => Array(freq[i]).fill(v));

arr = [].concat.apply([], arr);

arr = arr.sort((a,b) => a > b ? 1 : -1);

let half = Math.floor(arr.length/2);

let lh = arr.slice(0, half);
let uh = arr.slice(half *-1);

let q1 = lh.length%2==0 ?
	(lh.slice(half/2-1)[0] + lh.slice(half/2-1)[1]) / 2 :
	lh.slice(half/2)[0];

let q2 = arr.length%2==0 ?
	(arr.slice(half-1)[0] + arr.slice(half-1)[1]) / 2 :       
	arr.slice(half)[0];

let q3 = uh.length%2==0 ?
	(uh.slice(half/2-1)[0] + uh.slice(half/2-1)[1]) / 2 :
	uh.slice(half/2)[0];