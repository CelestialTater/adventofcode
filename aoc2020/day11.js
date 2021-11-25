/** ADVENT OF CODE 2020 - DAY 11
 * lord forgive me for my GARBAGE solution for pt 1
 * 
 */
const cloneDeep = require('lodash/cloneDeep')
const fs = require("fs");
const INPUT = fs.readFileSync('day11input', 'utf8');
var inp = INPUT.split('\r\n')
for(i in inp){
    inp[i] = inp[i].split("")
}
var current = cloneDeep(inp)

//PT 1 (its trash)
checkAdj = (arr, y, x, char) => {
    y = parseInt(y)
    x = parseInt(x)
    var counter = 0;
    if(y + 1 <= arr.length-1){
        counter += (arr[y+1][x] == char)
        if(x + 1 <= arr[y].length-1){
            counter += (arr[y+1][x+1] == char)
        }
        if(x - 1 >= 0){
            counter += (arr[y+1][x-1] == char)
        }
    }
    if(x + 1 <= arr[y].length-1){
        counter += (arr[y][x+1] == char)
    }
    if(x - 1 >= 0){
        counter += (arr[y][x-1] == char)
    }
    if(y - 1 >= 0){
        counter += (arr[y-1][x] == char)
        if(x + 1 <= arr[y].length-1){
            counter += (arr[y-1][x+1] == char)
        }
        if(x - 1 >= 0){
            counter += (arr[y-1][x-1] == char)
        }
    }
    return counter;
}
checkLOS = (arr, y, x, char) =>{
    //Probably going to come back to this: but all that's needed for this is this function.
}

for(i in inp){
    for(c in inp[i]){
        if(inp[i][c] == "."){
            continue;
        }else if(inp[i][c] == "#"){
            if(checkAdj(inp, i, c, "#") >= 4){
                current[i][c] = "L"
            }
        }else if(inp[i][c] == "L"){
            if(checkAdj(inp, i, c, "#") == 0){
                current[i][c] = "#"

            }
        }
    }
}

//literal garbage: loop 1k times because it's bound to reach equilibrium by then.
for(var t = 0; t < 1000; t++){
    inp = current;
    current = cloneDeep(inp)
    for(i in inp){
        for(c in inp[i]){
            if(inp[i][c] == "."){
                continue;
            }else if(inp[i][c] == "#"){
                if(checkAdj(inp, i, c, "#") >= 4){
                    current[i][c] = "L"
                }
            }else if(inp[i][c] == "L"){
                if(checkAdj(inp, i, c, "#") == 0){
                    current[i][c] = "#"
    
                }
            }
        }
    }
}

var seatCount = 0;
for(i in current){
    for(c in current[i]){
        if(current[i][c] == "#"){
            seatCount++
        }
    }
}
console.log(seatCount)