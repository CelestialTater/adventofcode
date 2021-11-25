/**ADVENT OF CODE - DAY 8
 * Happy with today: learned something new (clonedeep), was able to do both puzzles in 1hr.
 * 
 */
const cloneDeep = require('lodash/cloneDeep')
const fs = require("fs");
const INPUT = fs.readFileSync('day8input', 'utf8');
var inp = INPUT.split('\r\n')
var inp2;
var cont = true;
var ix = 0;
var count = 0;
var alrDone = [];
for(i in inp){
    inp[i] = inp[i].split(" ")
    inp[i][1] = parseInt(inp[i][1].replace("+", ""))
}

//Pt 1
while(cont){
    if(!alrDone.includes(ix)){
        switch(inp[ix][0]){
            case "nop":
                alrDone.push(ix)
                ix++
                break;
            case "acc":
                alrDone.push(ix)
                count += inp[ix][1]
                ix++
                break;
            case "jmp":
                alrDone.push(ix)
                ix += inp[ix][1]
                break;
        }
    }else{
        cont = false;
        console.log(count)
    }

}

//PT 2
for(i in inp){
    ix = 0;
    count = 0;
    alrDone = []
    cont = true;
    inp2 = cloneDeep(inp)
    if(inp[i][0] == "nop"){
        inp2[i][0] = "jmp"
    }else if(inp[i][0] == "jmp"){
        inp2[i][0] = "nop"
    }else{
        continue;
    }

    while(cont){
        if(ix == inp.length-1){
            if(inp2[ix][0] == "acc"){
                    count += inp[ix][1]
            }
            cont = false;
            console.log(count);
        }else if(!alrDone.includes(ix)){
            switch(inp2[ix][0]){
                case "nop":
                    alrDone.push(ix)
                    ix++
                    break;
                case "acc":
                    alrDone.push(ix)
                    count += inp[ix][1]
                    ix++
                    break;
                case "jmp":
                    alrDone.push(ix)
                    ix += inp[ix][1]
                    break;
            }
        }else{
            cont = false;
            continue;
        }
    }
}
