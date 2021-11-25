/**ADVENT OF CODE 2020 - DAY 5
 * I really suck at making good solutions to this stuff. 
 * At least part 2 was efficient
 */
const fs = require("fs");
const INPUT = fs.readFileSync('day5input', 'utf8');
var inp = INPUT.split('\r\n')
var ids = [];
// var inp = ["FBFBBFFRLR",
// "BFFFBBFRRR",
// "FFFBBBFRRR",
// "BBFFBBFRLL"];
var current;
var currentHighest = 0;
var currentRows = [];
var currentCols = [];

//PT 1
for(i of inp){
    current = 0;
    currentRows = [0, 127];
    currentCols = [0, 7];
    for(c of i){
        switch(c){
            case "F":
                currentRows[1] -= Math.ceil((currentRows[1] - currentRows[0]) / 2);
                break
            case "B":
                currentRows[0] += Math.ceil((currentRows[1] - currentRows[0]) / 2);
                break
            case "L":
                currentCols[1] -= Math.ceil((currentCols[1] - currentCols[0]) / 2);
                break
            case "R":
                currentCols[0] += Math.ceil((currentCols[1] - currentCols[0]) / 2);
                break
        }
    }
    current = currentRows[0] * 8 + currentCols[0]
    if(current > currentHighest){
        currentHighest = current;
    }
}
console.log(currentHighest)

//PT 2
for(i of inp){
    current = 0;
    currentRows = [0, 127];
    currentCols = [0, 7];
    for(c of i){
        switch(c){
            case "F":
                currentRows[1] -= Math.ceil((currentRows[1] - currentRows[0]) / 2);
                break
            case "B":
                currentRows[0] += Math.ceil((currentRows[1] - currentRows[0]) / 2);
                break
            case "L":
                currentCols[1] -= Math.ceil((currentCols[1] - currentCols[0]) / 2);
                break
            case "R":
                currentCols[0] += Math.ceil((currentCols[1] - currentCols[0]) / 2);
                break
        }
    }
    current = currentRows[0] * 8 + currentCols[0]
    ids.push(current);
}
ids = ids.sort();

for(var num = ids[0]; num < ids[ids.length-1]; num++){
    if(!ids.includes(num)){
        console.log(num)
    }
}