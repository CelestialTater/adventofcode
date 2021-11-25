/**ADVENT OF CODE 2020 - DAY 2
 * 
 * epic regex for part 1, XOR operator for part 2
 * 
 */

const fs = require("fs");
const INPUT = fs.readFileSync('day2input', 'utf8');
var inp = INPUT.split('\r\n')
var validNum = 0;

//PT 1

for(var i of inp){
    i = i.split(" ");
    i[0] = i[0].split("-")
    i[1] = i[1].replace(":","")
    var re = new RegExp(i[1], 'g');
    if((i[2].match(re)||[]).length >= i[0][0] && (i[2].match(re)||[]).length <= i[0][1]){
        validNum++
    }
}
console.log(validNum)

//PT 2
for(var i of inp){
    i = i.split(" ");
    i[0] = i[0].split("-")
    i[1] = i[1].replace(":","")
    if(i[2][i[0][0]-1] == i[1] ^ i[2][i[0][1]-1] == i[1]){
        validNum++
    }
}
console.log(validNum)