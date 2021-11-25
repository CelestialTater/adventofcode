/** ADVENT OF CODE 2020 - DAY 13
 * part 1 was really fast, happy with it
 * 
 */
const cloneDeep = require('lodash/cloneDeep')
const fs = require("fs");
const INPUT = fs.readFileSync('day13input', 'utf8');
var inp = INPUT.split('\r\n')
inp[1] = inp[1].split(",")
var val;
var close;
var nums = [];
var ids = [];
var match;

//Pt 1
// for(i of inp[1]){
//     console.log(i)
//     if(i == "x"){
//         continue
//     }
//     val = parseInt(Math.floor(inp[0] / i))
//     close = parseInt(i) * val + parseInt(i)
//     nums.push(close)
//     ids.push(i)
// }
// match = cloneDeep(nums);
// match = match.sort((a,b)=>a-b)

// console.log((nums[nums.indexOf(match[0])] - inp[0]) * ids[nums.indexOf(match[0])])

//Pt 2
//10000000000000 
for(i in inp[1]){
    if(inp[1][i] == "x"){
        continue;
    }
    nums.push(inp[1][i])
    ids.push(i)
}
console.log(nums)
console.log(ids)

for(i = 10000000000000; i < 20000000000000; i++){
    if(i % nums[0] == 0){
        if( (i + parseInt(ids[1])) % (nums[1]) == 0){
            if((i + parseInt(ids[2])) % (nums[2]) == 0){
                if((i + parseInt(ids[3])) % (nums[3]) == 0){
                    if((i + parseInt(ids[4])) % (nums[4]) == 0){
                        if((i + parseInt(ids[5])) % (nums[5]) == 0){
                            if( (i + parseInt(ids[6])) % (nums[6]) == 0){
                                if((i + parseInt(ids[7])) % (nums[7]) == 0){
                                    if((i + parseInt(ids[8])) % (nums[8]) == 0 ){
                                        console.log(i)
                                        break;
                                    }else{
                                        continue
                                    }
                                }else{
                                    continue;
                                }
                            }else{
                                continue;
                            }
                        }else{
                            continue;
                        }
                    }else{
                        continue;
                    }
                }else{
                    continue;
                }
            }else{
                continue;
            }
        }else{
            continue;
        }
    }else{
        continue;
    }
}