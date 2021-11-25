/** ADVENT OF CODE 2020 - DAY 12
 * 
 * 
 */
const fs = require("fs");
const INPUT = fs.readFileSync('day12input', 'utf8');
var inp = INPUT.split('\r\n')
var dir = 'E' //east
var x = 0;
var y = 0;
var wy = 1;
var wx = 10;

//pt 1
// function changeDir(prev,degrees){
//     let orientations = ['N','E','S','W']
//     let spin = degrees/90;
//     let posAct = orientations.indexOf(prev) + spin;
//     let pos = ((posAct % 4 ) + 4 ) % 4 ;
//     return orientations[pos];
// }
// for(i of inp){
//     var val = parseInt(i.substr(1))
//     switch(i[0]){
//         case "N":
//             y += val
//             break;
//         case "S":
//             y -= val
//             break;
//         case "E":
//             x += val
//             break;
//         case "W":
//             x -= val
//             break;
//         case "R":
//             dir = changeDir(dir, val)
//             break;
//         case "L":
//             dir = changeDir(dir,-1*val)
//             break;
//         case "F":
//             switch(dir){
//                 case "N":
//                     y += val
//                     break;
//                 case "E":
//                     x += val
//                     break;
//                 case "S":
//                     y -= val
//                     break;
//                 case "W":
//                     x -= val
//                     break;
//             }
//             break;
//     }
// }
// console.log(Math.abs(x) + Math.abs(y));

//pt 2 (WIP)
function rotateWP(val){
    switch(val){
        case 90:

            break;
        case 180:
            break;
        case 270:
            break;
        case -90:
            break;
        case -180:
            break;
        case -270:
            break;
    }
}
for(i of inp){
    var val = parseInt(i.substr(1))
    switch(i[0]){
        case "N":
            wy += val
            break;
        case "S":
            wy -= val
            break;
        case "E":
            wx += val
            break;
        case "W":
            wx -= val
            break;
        case "R":
            dir = rotateWP(val)
            break;
        case "L":
            dir = rotateWP(-val)
            break;
        case "F":
            switch(dir){
                case "N":
                    y += wy*val
                    break;
                case "E":
                    x += wx*val
                    break;
                case "S":
                    y -= wy*val
                    break;
                case "W":
                    x -= wx*val
                    break;
            }
            break;
    }
}
console.log(Math.abs(x) + Math.abs(y));