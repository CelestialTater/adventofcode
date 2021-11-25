var instructions =[
    3,225,1,225,6,6,1100,1,238,225,104,0,1101,69,55,225,1001,144,76,224,101,-139,224,224,4,224,1002,223,8,223,1001,224,3,224,1,223,224,223,1102,60,49,225,1102,51,78,225,1101,82,33,224,1001,224,-115,224,4,224,1002,223,8,223,1001,224,3,224,1,224,223,223,1102,69,5,225,2,39,13,224,1001,224,-4140,224,4,224,102,8,223,223,101,2,224,224,1,224,223,223,101,42,44,224,101,-120,224,224,4,224,102,8,223,223,101,3,224,224,1,223,224,223,1102,68,49,224,101,-3332,224,224,4,224,1002,223,8,223,1001,224,4,224,1,224,223,223,1101,50,27,225,1102,5,63,225,1002,139,75,224,1001,224,-3750,224,4,224,1002,223,8,223,1001,224,3,224,1,223,224,223,102,79,213,224,1001,224,-2844,224,4,224,102,8,223,223,1001,224,4,224,1,223,224,223,1,217,69,224,1001,224,-95,224,4,224,102,8,223,223,1001,224,5,224,1,223,224,223,1102,36,37,225,1101,26,16,225,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,1107,677,677,224,102,2,223,223,1006,224,329,1001,223,1,223,1108,677,677,224,1002,223,2,223,1006,224,344,1001,223,1,223,107,226,226,224,1002,223,2,223,1006,224,359,101,1,223,223,1008,226,226,224,102,2,223,223,1005,224,374,1001,223,1,223,1107,226,677,224,1002,223,2,223,1006,224,389,1001,223,1,223,1008,677,226,224,1002,223,2,223,1005,224,404,1001,223,1,223,7,677,226,224,102,2,223,223,1005,224,419,1001,223,1,223,1008,677,677,224,1002,223,2,223,1006,224,434,1001,223,1,223,108,226,226,224,102,2,223,223,1006,224,449,1001,223,1,223,108,677,677,224,102,2,223,223,1006,224,464,1001,223,1,223,107,226,677,224,1002,223,2,223,1005,224,479,101,1,223,223,1108,226,677,224,1002,223,2,223,1006,224,494,1001,223,1,223,107,677,677,224,1002,223,2,223,1006,224,509,101,1,223,223,7,677,677,224,102,2,223,223,1006,224,524,1001,223,1,223,1007,226,677,224,1002,223,2,223,1005,224,539,1001,223,1,223,8,226,677,224,1002,223,2,223,1005,224,554,101,1,223,223,8,677,677,224,102,2,223,223,1005,224,569,101,1,223,223,7,226,677,224,102,2,223,223,1006,224,584,1001,223,1,223,1007,226,226,224,102,2,223,223,1006,224,599,1001,223,1,223,1107,677,226,224,1002,223,2,223,1006,224,614,1001,223,1,223,1108,677,226,224,1002,223,2,223,1005,224,629,1001,223,1,223,1007,677,677,224,102,2,223,223,1006,224,644,1001,223,1,223,108,226,677,224,102,2,223,223,1005,224,659,101,1,223,223,8,677,226,224,1002,223,2,223,1006,224,674,1001,223,1,223,4,223,99,226
]
// var instructions= [
//     3,3,1105,-1,9,1101,0,0,12,4,12,99,1
// ]
var inputValue = 5;
var outputValue;
var cont = true;
var i = 0;
var e;
var f;
var g;
var modes;
log = (k)=>{ console.log(k) }

opCode = (code) => {
    if(code == 99){
        return "99"
    }else if(code == 1){
        return "add"
    }else if(code == 2){
        return "multiply"
    }else if(code == 3){
        return "input"
    }else if(code == 4){
        return "output"
    }else if(code == 5){
        return "jit"
    }else if(code == 6){
        return "jif"
    }else if(code == 7){
        return "lessthan"
    }else if(code == 8){
        return "equals"
    }
}
getCode = (inp) =>{
    inp = inp.toString();
    return inp[inp.length - 1];
}
getMode = (inp) =>{
    var q = []
    var l = 0;
    inp = inp.toString();
    if(inp.length < 5){
        for(var n = inp.length; inp.length < 5; n++){
            inp = "0" + inp
        }
    }
    for(var t of inp){
        if(l < 3){
            if(t == 1){
                q.push("value")
            }else{
                q.push("position")
            }
        }else{
            break;
        }
        l++;
    }
    return q
}
while(cont){
    let e = opCode(getCode(instructions[i]))
    switch(e){
        case "99":
            cont = false;
            break;
        case "multiply":
            modes = getMode(instructions[i])
            if(modes[2] === "value"){
                e = i+1
            }else{
                e = instructions[i+1]
            }
            if(modes[1] === "value"){
                f = i+2
            }else{
                f = instructions[i+2]
            }
            g = instructions[i+3];
            instructions[g] = instructions[e] * instructions[f];
            i+=4;
            break;
        case "add":
                modes = getMode(instructions[i])
                if(modes[2] === "value"){
                    e = i+1
                }else{
                    e = instructions[i+1]
                }
                if(modes[1] === "value"){
                    f = i+2
                }else{
                    f = instructions[i+2]
                }
            g = instructions[i+3];
            instructions[g] = instructions[e] + instructions[f];
            i+=4;
            break;
        case "input":
            instructions[instructions[i+1]] = inputValue
            i+=2
            break;
        case "output":
            outputValue = instructions[instructions[i+1]] 
            i+=2
            break;
        case "jit":
            modes = getMode(instructions[i])
            if(modes[2] === "value"){
                e = i+1
            }else{
                e = instructions[i+1]
            }
            if(modes[1] === "value"){
                f = i+2
            }else{
                f = instructions[i+2]
            }
            if(instructions[e] != 0){
                i = instructions[f];
            }else{
                i += 3
            }
            break;
        case "jif":
            modes = getMode(instructions[i])
            if(modes[2] === "value"){
                e = i+1
            }else{
                e = instructions[i+1]
            }
            if(modes[1] === "value"){
                f = i+2
            }else{
                f = instructions[i+2]
            }
            if(instructions[e] == 0){
                i = instructions[f]
            }else{
                i+=3
            }
            break;
        case "lessthan":
            modes = getMode(instructions[i])
            if(modes[2] === "value"){
                e = i+1
            }else{
                e = instructions[i+1]
            }
            if(modes[1] === "value"){
                f = i+2
            }else{
                f = instructions[i+2]
            }
            g = instructions[i+3];
            if(instructions[e] < instructions[f]){
                instructions[g] = 1
            }else{
                instructions[g] = 0
            }
            i+=4
            break;
        case "equals":
            modes = getMode(instructions[i])
            if(modes[2] == "value"){
                e = i+1
            }else{
                e = instructions[i+1]
            }
            if(modes[1] == "value"){
                f = i+2
            }else{
                f = instructions[i+2]
            }
            g = instructions[i+3];
            if(instructions[e]== instructions[f]){
                instructions[g] = 1
            }else{
                instructions[g] = 0
            }
            i+=4
            break;
        default:
            cont = false;
            break;
    }
}
log(outputValue)