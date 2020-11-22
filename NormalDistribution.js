
/*
In a certain plant, the time taken to assemble a car is a random variable, X,
 having a normal distribution with a mean of 20 hours and a standard deviation of 2 hours.
 What is the probability that a car can be assembled at this plant in:

Less than 19.5 hours?
Between 20 and 22 hours?

    
Ex. input:
20 2
19.5
20 22	
	
*/

	let vars = input.replace(/(?:\r\n|\r|\n)/g, ' ').split(' ').map( a => parseFloat(a));
    let mean = vars[0];
    let std = vars[1];
    let prop1 = vars[2];
    let prop2_range1 = vars[3];
    let prop2_range2 = vars[4];
    
    let erf = (x) => {
        var m = 1.00;
        var s = 1.00;
        var sum = x * 1.0;
        for(var i = 1; i < 50; i++){
            m *= i;
            s *= -1;
            sum += (s * Math.pow(x, 2.0 * i + 1.0)) / (m * (2.0 * i + 1.0));
        }  
        return 2 * sum / Math.sqrt(Math.PI);
    }

    let normal =(mean, std, x) => 0.5 + 0.5 * erf((x-mean)/(std* 2**0.5));
    
    console.log(normal(mean, std, prop1).toFixed(3));
    console.log((normal(mean, std, prop2_range2) - normal(mean, std, prop2_range1)).toFixed(3));
    