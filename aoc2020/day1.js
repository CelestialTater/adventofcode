/** ADVENT OF CODE 2020 - DAY 1
 * 
 * trash brute force solution, but not worth spending more time on.
 * nested loops to just brute force compare every individual value with every value.
 */

const fs = require("fs");
const INPUT = fs.readFileSync('day1input', 'utf8');
var inp = INPUT.split('\r\n').map(x=>+x);
console.log(inp)

//PT 1
for (i of inp){
    for(j of inp){
        if((i + j) == 2020){
            console.log(i * j);
        }
    }
}

//PT 2
for (i of inp){
    for(j of inp){
        for(c of inp){
            if((i + j + c) == 2020){
                console.log(i * j * c);
            }
        }
    }
}