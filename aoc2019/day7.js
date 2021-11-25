// var instructions =[
//     3,8,1001,8,10,8,105,1,0,0,21,46,63,76,97,118,199,280,361,442,99999,3,9,102,4,9,9,101,2,9,9,1002,9,5,9,101,4,9,9,102,2,9,9,4,9,99,3,9,101,5,9,9,102,3,9,9,101,3,9,9,4,9,99,3,9,1001,9,2,9,102,3,9,9,4,9,99,3,9,1002,9,5,9,101,4,9,9,1002,9,3,9,101,2,9,9,4,9,99,3,9,1002,9,5,9,101,3,9,9,1002,9,5,9,1001,9,5,9,4,9,99,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,99,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,99,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,99
// ]
var instructions= [
    3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0
]
var instructionsBackup= [
    3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0
]
var phaseSetting = 0;
var inputSignal = 0;
let inpNum = 0;
let ampNum = 0;
var outputValue = 0;
var cont = true;
var i = 0;
var e;
var f;
var g;
var modes;
var returnResult;
var combos;
var currentHighest = 0;
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
    if(inp.includes('99')){
        return '99'
    }else{
        return inp[inp.length - 1];
    }
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
reset = (arr) =>{
    arr = [3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0]
    return arr
}
function permutation(start, string) {

    //base case
    if ( string.length == 1 ) {
        return [ start + string ];
    } else {

        var returnResult = [];
        for (var pq=0; pq < string.length; pq++) {
            var result = permutation (string[pq], string.substr(0, pq) + string.substr(pq+1));
            for (var j=0; j<result.length; j++) {
                returnResult.push(start + result[j]);
            }
        }

        return returnResult;
    }
}
combos = permutation("",'01234')
for(var c of combos){
    for(ampNum = 0; ampNum < 5; ampNum++){
        instructions = reset(instructions)
        i = 0;
        cont = true;
        inpNum = 0;
        switch(ampNum){
            case 0:
                phaseSetting = parseInt(c[0])
                break;
            case 1:
                phaseSetting = parseInt(c[1])
                break;
            case 2:
                phaseSetting = parseInt(c[2])
                break;
            case 3:
                phaseSetting = parseInt(c[3])
                break;
            case 4: 
                phaseSetting = parseInt(c[4])
                break;
            default:
                console.log("err");
                break;
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
                    if(inpNum == 0){
                        instructions[instructions[i+1]] = phaseSetting
                        inpNum++;
                    }else{
                        instructions[instructions[i+1]] = inputSignal
                    }
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
                    log("Crash")
                    break;
            }
            
        }
        log('Output: ' + outputValue)
        inputSignal = outputValue
    }
    if(outputValue > currentHighest){
        currentHighest = outputValue
    }
}


log(currentHighest);

