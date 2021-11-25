/**ADVENT OF CODE 2020 - DAY 9
 * overall really short and pretty easy day
 * thanks sort functions for not working properly on numbers.
 */
const fs = require("fs");
const INPUT = fs.readFileSync('day9input', 'utf8');
var inp = INPUT.split('\r\n')
const preamble = 25;
var valid = false;
var sum = 0;
var nums;
var impNum;
for(i in inp){
    inp[i] = parseInt(inp[i]);
}

//PT 1
for(i in inp){
    valid = false
    if(i < preamble){
        continue;
    }
    for(var c = (i - preamble); c < i; c++){
        for(var j = (i - preamble); j < i; j++){
            if((inp[c] + inp[j]) == inp[i]){
                valid = true;
            }
        }
    }
    if(!valid){
        impNum = inp[i]
        console.log(impNum)
    }
}

//pt 2
function findComponents(input){
    for(i in input){
        nums = []
        sum = 0;
        for(c = i; c < input.length; c++){
            sum += input[c];
            nums.push(input[c])
            if(sum == impNum){
                nums.sort((a, b) => a - b)
                return (nums[0] + nums[nums.length-1])
            }
        }
    }
}
console.log(findComponents(inp))
