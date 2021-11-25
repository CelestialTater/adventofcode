/*var input =[
    1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,6,19,23,2,23,6,27,1,5,27,31,1,10,31,35,2,6,35,39,1,39,13,43,1,43,9,47,2,47,10,51,1,5,51,55,1,55,10,59,2,59,6,63,2,6,63,67,1,5,67,71,2,9,71,75,1,75,6,79,1,6,79,83,2,83,9,87,2,87,13,91,1,10,91,95,1,95,13,99,2,13,99,103,1,103,10,107,2,107,10,111,1,111,9,115,1,115,2,119,1,9,119,0,99,2,0,14,0
]*/
var cont = true;
var i = 0;
var e;
var f;
var g;

opCode = (code) => {
    if(code === 99){
        return "99"
    }else if(code === 1){
        return "add"
    }else if(code === 2){
        return "multiply"
    }
}
// while(cont){
//     let e = opCode(input[i])
//     switch(e){
//         case "99":
//             cont = false;
//             break;
//         case "multiply":
//             e = input[i+1];
//             f = input[i+2];
//             g = input[i+3];
//             input[g] = input[e] * input[f];
//             i+=4;
//             break;
//         case "add":
//             e = input[i+1];
//             f = input[i+2];
//             g = input[i+3];
//             input[g] = input[e] + input[f];
//             i+=4;
//             break;
//         default:
//             cont = false;
//             break;
//     }
// }
for(j = 0; j < 100; j++){
    for(p = 0; p < 100; p++){

        var input = [
            1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,6,19,23,2,23,6,27,1,5,27,31,1,10,31,35,2,6,35,39,1,39,13,43,1,43,9,47,2,47,10,51,1,5,51,55,1,55,10,59,2,59,6,63,2,6,63,67,1,5,67,71,2,9,71,75,1,75,6,79,1,6,79,83,2,83,9,87,2,87,13,91,1,10,91,95,1,95,13,99,2,13,99,103,1,103,10,107,2,107,10,111,1,111,9,115,1,115,2,119,1,9,119,0,99,2,0,14,0
        ]
        input[1] = j;
        input[2] = p;
        cont = true
        i = 0
        while(cont){
            let e = opCode(input[i])
            switch(e){
                case "99":
                    cont = false;
                    break;
                case "multiply":
                    e = input[i+1];
                    f = input[i+2];
                    g = input[i+3];
                    input[g] = input[e] * input[f];
                    i+=4;
                    break;
                case "add":
                    e = input[i+1];
                    f = input[i+2];
                    g = input[i+3];
                    input[g] = input[e] + input[f];
                    i+=4;
                    break;
                default:
                    console.log('default reached')
                    cont = false;
                    break;
            }
        }
        if(input[0] == 19690720){
            console.log("Num 1: "+ j + " Num 2: "+ p)
        }
    }
}
