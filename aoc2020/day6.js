/** ADVENT OF CODE 2020 - DAY 6
 * part 1 was pretty easy tbh
 * part 2 would have been WAY faster if I didn't try using the every() function, it sucks.
 */
const fs = require("fs");
const INPUT = fs.readFileSync('day6input', 'utf8');
var inp = INPUT.split(/\n\s*\n/)
var count = 0;
var current = [];


//PT 1
for(i in inp){
    inp[i] = inp[i].replace(/\r/g, "")
    inp[i] = inp[i].replace(/\n/g, "")
}
for(c of inp){
    current = []
    for(j of c){
        if(!current.includes(j)){
            current.push(j)
        }
    }
    count+= current.length
}
console.log(count)

//Pt 2
for(i in inp){
    inp[i] = inp[i].replace(/\r/g, "")
    inp[i] = inp[i].split('\n')
}
for(c of inp){
    current = []
    console.log(c)
    console.log(hasChar(c, "a"))
    for(j of c){
        for(b of j){
            if(hasChar(c, b)){
                if(!current.includes(b)){
                    current.push(b)
                }
            }
        }
    }
    count += current.length
}
console.log(count)

function hasChar(array, value){
    for(i of array){
        if(!i.includes(value)){
            return false;
        }
    }
    return true;
}