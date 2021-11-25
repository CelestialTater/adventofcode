/**ADVENT OF CODE 2020 - DAY 10
 * part 1 solution was pretty garbage but hey it works
 * pt2 was mostly from other people. Couldn't think of a good way to do it.
 *
 */
const fs = require("fs");
const INPUT = fs.readFileSync('day10input', 'utf8');
var inp = INPUT.split('\r\n')
var oneJC = 0;
var threeJC = 0;

for(i in inp){
    inp[i] = parseInt(inp[i])
}

//pt 1
// inp.push(0)
// inp = inp.sort((a, b) => a - b);
// inp.push(inp[inp.length-1] + 3)

// for(var i = 0; i < inp.length; i++){
//     j = parseInt(i + 1)
    
//     if(j == inp.length){
//         continue;
//     }else if((inp[j]-inp[i]) == 1){
//         oneJC++
//     }else if((inp[j]-inp[i]) == 3){
//         threeJC++
//     }
// }
// console.log(oneJC * threeJC)

//Pt 2 - how do I do this 
var options = {0: 1};
var nextOpts = 0;
var cur = 0;
var count = 1;
inp = inp.sort((a, b) => a - b);
inp.push(inp[inp.length-1] + 3)

for(i of inp){
    cur = 0;
    for(var c = 1; c <= 3; c++){
        if(options.hasOwnProperty((i-c))){
            cur += options[i-c]
        }
    }
    if(cur != nextOpts){
        nextOpts += (cur - nextOpts);
    }
    options[i] = cur
}

console.log(options)
