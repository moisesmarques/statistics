/*
Ex. input:
9800 //elevator max weight
49 //number of boxes
205 //box mean weight
15 //standard deviation

1 - What is the probability that all boxes will be carried by the elevator?

*/

    let vars = input.replace(/(?:\r\n|\r|\n)/g, ' ').split(' ').map( a => parseFloat(a));
    let x = vars[0];
    let n = vars[1];
    let mu = vars[2];
    let sigma = vars[3];
    
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

    let cdf = (x, mu, sigma) => {
        let Z = (x - mu)/sigma;
        return 0.5*(1 + erf(Z/(Math.sqrt(2))));
    }
    
    let summu = n * mu; 
    let sumsigma = Math.sqrt(n) * sigma;
    
    console.log(cdf(x, summu, sumsigma).toFixed(4));